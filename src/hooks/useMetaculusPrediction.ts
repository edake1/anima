/**
 * useMetaculusPrediction Hook
 * Manages fetching, caching, and updating live Metaculus prediction data
 */

'use client';

import { useEffect, useState, useCallback } from 'react';
import {
  fetchMetaculusQuestion,
  loadHistoricalSnapshots,
  saveSnapshot,
  calculateTrend,
  generateSparklineData,
  type MetaculusQuestion,
  type ProbabilitySnapshot,
} from '@/lib/services/metaculus';

interface UsePredictionData {
  question: MetaculusQuestion | null;
  probability: number | null;
  snapshots: ProbabilitySnapshot[];
  trend: {
    direction: 'up' | 'down' | 'flat';
    change: number;
    changePercent: number;
  };
  sparkline: number[];
  isLoading: boolean;
  isStale: boolean;
  lastFetched: Date | null;
  refetch: () => Promise<void>;
}

const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

export function useMetaculusPrediction(
  metaculusId: number | null | undefined
): UsePredictionData {
  const [question, setQuestion] = useState<MetaculusQuestion | null>(null);
  const [snapshots, setSnapshots] = useState<ProbabilitySnapshot[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastFetched, setLastFetched] = useState<Date | null>(null);

  // Check if data is stale (older than cache duration)
  const isStale =
    !lastFetched ||
    new Date().getTime() - lastFetched.getTime() > CACHE_DURATION;

  // Fetch data from Metaculus
  const refetch = useCallback(async () => {
    if (!metaculusId) return;

    setIsLoading(true);
    try {
      const data = await fetchMetaculusQuestion(metaculusId);
      if (data) {
        setQuestion(data);

        // Save new snapshot
        const updated = saveSnapshot(metaculusId, data.community_prediction);
        setSnapshots(updated);

        setLastFetched(new Date());
      }
    } catch (error) {
      console.error('Failed to fetch Metaculus data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [metaculusId]);

  // Load initial data on mount
  useEffect(() => {
    if (!metaculusId) return;

    // Load snapshots from cache
    const cached = loadHistoricalSnapshots(metaculusId);
    setSnapshots(cached);

    // Fetch fresh data if stale
    if (isStale) {
      refetch();
    }
  }, [metaculusId, isStale, refetch]);

  // Calculate trend from snapshots
  const trend = calculateTrend(snapshots);

  // Generate sparkline data
  const sparkline = generateSparklineData(snapshots);

  // Current probability (from live data or last snapshot)
  const probability =
    question?.community_prediction || snapshots[snapshots.length - 1]?.probability || null;

  return {
    question,
    probability,
    snapshots,
    trend,
    sparkline,
    isLoading,
    isStale,
    lastFetched,
    refetch,
  };
}
