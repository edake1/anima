'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, ExternalLink, RefreshCw } from 'lucide-react';
import type { MetaculusQuestion } from '@/app/api/metaculus/route';
import { cn } from '@/lib/utils';

interface LiveMetaculusWidgetProps {
  questionId?: number;
  className?: string;
  compact?: boolean;
}

export function LiveMetaculusWidget({
  questionId = 5121,
  className,
  compact = false,
}: LiveMetaculusWidgetProps) {
  const [data, setData] = useState<MetaculusQuestion | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastFetch, setLastFetch] = useState<Date | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(`/api/metaculus?id=${questionId}`);
      if (!res.ok) throw new Error('Failed to fetch');
      const json: MetaculusQuestion = await res.json();
      setData(json);
      setLastFetch(new Date());
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionId]);

  if (loading) {
    return (
      <div className={cn('glass-light rounded-2xl p-4 animate-pulse', className)}>
        <div className="h-4 bg-zinc-700/50 rounded w-3/4 mb-3" />
        <div className="h-8 bg-zinc-700/50 rounded w-1/2 mb-2" />
        <div className="h-3 bg-zinc-700/50 rounded w-1/3" />
      </div>
    );
  }

  if (error || !data) {
    return null; // Silently hide if API is unavailable
  }

  const prob = data.communityPrediction;

  if (compact) {
    return (
      <motion.a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        className={cn(
          'flex items-center gap-3 glass-light rounded-xl px-4 py-3 border border-violet-500/20 hover:border-violet-500/40 transition-all cursor-pointer',
          className
        )}
      >
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs text-zinc-400">Metaculus</span>
        </div>
        <span className="text-sm text-zinc-300 flex-1 truncate">{data.title}</span>
        {prob !== null && (
          <span className="text-sm font-bold text-violet-400 tabular-nums">{prob}%</span>
        )}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn('glass-light rounded-2xl p-5 border border-violet-500/20', className)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs text-emerald-400 font-medium">Live · Metaculus</span>
        </div>
        <button
          onClick={fetchData}
          className="text-zinc-500 hover:text-zinc-300 transition-colors"
          title="Refresh"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-sm text-zinc-300 leading-snug mb-4 line-clamp-2">{data.title}</p>

      {prob !== null && (
        <div className="mb-4">
          <div className="flex items-end gap-1 mb-1">
            <span className="text-3xl font-bold text-violet-400 tabular-nums">{prob}%</span>
            <span className="text-sm text-zinc-500 mb-1">community forecast</span>
          </div>
          {/* Progress bar */}
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${prob}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-violet-600 to-pink-500 rounded-full"
            />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
          <Users className="w-3 h-3" />
          <span>{data.numForecasters.toLocaleString()} forecasters</span>
        </div>
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors"
        >
          <TrendingUp className="w-3 h-3" />
          Forecast <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>

      {lastFetch && (
        <p className="text-[10px] text-zinc-600 mt-3">
          Updated {lastFetch.toLocaleTimeString()}
        </p>
      )}
    </motion.div>
  );
}
