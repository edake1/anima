/**
 * Metaculus API Integration Service
 * Fetches live prediction data from Metaculus forecasting platform
 */

export interface MetaculusQuestion {
  id: number;
  title: string;
  description: string;
  created_at: string;
  resolve_time: string;
  community_prediction: number;
  my_predictions?: {
    predictions: Array<{
      date: string;
      community_prediction: number;
    }>;
  };
}

export interface MetaculusResponse {
  results: MetaculusQuestion[];
  count: number;
  next: string | null;
}

export interface ProbabilitySnapshot {
  timestamp: string;
  probability: number;
  source: 'metaculus';
}

export interface HistoricalData {
  questionId: number;
  questionTitle: string;
  currentProbability: number;
  snapshots: ProbabilitySnapshot[];
  lastUpdated: string;
}

// Metaculus question IDs we track
const TRACKED_QUESTIONS = {
  'agi-by-2030': 5121,
  'agi-by-2027': 5122,
  'asi-timeline': 3479,
  'alignment-success': 5123,
  'capability-breakthrough': 5124,
  'economic-impact': 5125,
  'regulation': 5126,
};

/**
 * Fetch a single Metaculus question
 */
export async function fetchMetaculusQuestion(
  questionId: number
): Promise<MetaculusQuestion | null> {
  try {
    const response = await fetch(
      `https://www.metaculus.com/api2/questions/${questionId}/`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      console.error(`Metaculus API error: ${response.status}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching Metaculus question:', error);
    return null;
  }
}

/**
 * Fetch multiple Metaculus questions in parallel
 */
export async function fetchMetaculusQuestions(
  questionIds: number[]
): Promise<(MetaculusQuestion | null)[]> {
  return Promise.all(
    questionIds.map(id => fetchMetaculusQuestion(id))
  );
}

/**
 * Get all tracked predictions from Metaculus
 */
export async function fetchAllTrackedPredictions(): Promise<
  Record<string, MetaculusQuestion | null>
> {
  const questions = await fetchMetaculusQuestions(
    Object.values(TRACKED_QUESTIONS)
  );

  const result: Record<string, MetaculusQuestion | null> = {};
  Object.entries(TRACKED_QUESTIONS).forEach(([key, id], index) => {
    result[key] = questions[index];
  });

  return result;
}

/**
 * Transform Metaculus data into our prediction format
 */
export function transformMetaculusToPrediction(
  question: MetaculusQuestion,
  predictionId: string
) {
  return {
    id: predictionId,
    metaculusId: question.id,
    metaculusTitle: question.title,
    communityProbability: question.community_prediction,
    lastUpdated: new Date(question.created_at).toISOString(),
    source: 'metaculus' as const,
  };
}

/**
 * Load historical snapshots from localStorage
 */
export function loadHistoricalSnapshots(
  questionId: number
): ProbabilitySnapshot[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(`metaculus-snapshots-${questionId}`);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

/**
 * Save a new snapshot and keep last 90 days
 */
export function saveSnapshot(
  questionId: number,
  probability: number
): ProbabilitySnapshot[] {
  if (typeof window === 'undefined') return [];

  const snapshots = loadHistoricalSnapshots(questionId);
  const newSnapshot: ProbabilitySnapshot = {
    timestamp: new Date().toISOString(),
    probability,
    source: 'metaculus',
  };

  // Add new snapshot
  snapshots.push(newSnapshot);

  // Keep only last 90 days
  const ninetyDaysAgo = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000);
  const filtered = snapshots.filter(
    s => new Date(s.timestamp) > ninetyDaysAgo
  );

  // Save to localStorage
  try {
    localStorage.setItem(
      `metaculus-snapshots-${questionId}`,
      JSON.stringify(filtered)
    );
  } catch {
    console.warn('Failed to save snapshots to localStorage');
  }

  return filtered;
}

/**
 * Calculate probability trend (up/down/flat)
 */
export function calculateTrend(
  snapshots: ProbabilitySnapshot[]
): {
  direction: 'up' | 'down' | 'flat';
  change: number;
  changePercent: number;
} {
  if (snapshots.length < 2) {
    return { direction: 'flat', change: 0, changePercent: 0 };
  }

  const oldest = snapshots[0].probability;
  const newest = snapshots[snapshots.length - 1].probability;
  const change = newest - oldest;
  const changePercent = oldest > 0 ? (change / oldest) * 100 : 0;

  return {
    direction: change > 0.01 ? 'up' : change < -0.01 ? 'down' : 'flat',
    change: Math.round(change * 100) / 100,
    changePercent: Math.round(changePercent * 10) / 10,
  };
}

/**
 * Get simplified sparkline data for charts
 */
export function generateSparklineData(
  snapshots: ProbabilitySnapshot[]
): number[] {
  if (snapshots.length === 0) return [];

  // Return every nth point to keep data manageable (max 30 points)
  const step = Math.max(1, Math.ceil(snapshots.length / 30));
  return snapshots
    .filter((_, i) => i % step === 0)
    .map(s => Math.round(s.probability * 100));
}
