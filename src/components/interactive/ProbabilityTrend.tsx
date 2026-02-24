/**
 * ProbabilityTrend Component
 * Displays live prediction data with sparklines, trends, and metadata
 */

'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, AlertCircle, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProbabilityTrendProps {
  probability: number;
  change: number;
  changePercent: number;
  direction: 'up' | 'down' | 'flat';
  sparkline?: number[];
  isLoading?: boolean;
  lastUpdated?: string;
  community?: number;
  expertAverage?: number;
  description?: string;
}

export function ProbabilityTrend({
  probability,
  change,
  changePercent,
  direction,
  sparkline = [],
  isLoading = false,
  lastUpdated,
  community,
  expertAverage,
  description,
}: ProbabilityTrendProps) {
  const trendColor =
    direction === 'up'
      ? 'text-emerald-400'
      : direction === 'down'
        ? 'text-red-400'
        : 'text-zinc-400';

  const trendBg =
    direction === 'up'
      ? 'bg-emerald-500/10 border-emerald-500/20'
      : direction === 'down'
        ? 'bg-red-500/10 border-red-500/20'
        : 'bg-zinc-500/10 border-zinc-500/20';

  const TrendIcon =
    direction === 'up' ? TrendingUp : direction === 'down' ? TrendingDown : Minus;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-6 space-y-4"
    >
      {/* Header: Probability + Status */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold text-white">
              {Math.round(probability * 100)}%
            </span>
            <span className="text-sm text-zinc-400">Community forecast</span>
          </div>

          <div className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border', trendBg)}>
            <TrendIcon className={cn('w-4 h-4', trendColor)} />
            <span className={cn('text-sm font-medium', trendColor)}>
              {direction === 'up' ? '+' : ''}{change > 0 ? '+' : ''}{Math.round(change * 100) / 100}{' '}
              ({changePercent > 0 ? '+' : ''}{changePercent}%)
            </span>
          </div>

          {description && (
            <p className="text-sm text-zinc-400 mt-2">{description}</p>
          )}
        </div>

        {isLoading && (
          <div className="text-right">
            <Zap className="w-5 h-5 text-amber-400 animate-pulse" />
            <p className="text-xs text-zinc-500 mt-1">Updating...</p>
          </div>
        )}
      </div>

      {/* Sparkline Chart */}
      {sparkline.length > 1 && (
        <div className="space-y-2">
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
            90-Day Trend
          </p>
          <div className="relative h-12 bg-zinc-900/50 rounded-lg p-2 overflow-hidden">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-20 pointer-events-none">
              <div className="h-px bg-zinc-700" />
              <div className="h-px bg-zinc-700" />
              <div className="h-px bg-zinc-700" />
            </div>

            {/* Sparkline SVG */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox={`0 0 ${sparkline.length} 100`}
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="sparklineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor={
                      direction === 'up'
                        ? 'rgba(16, 185, 129, 0.3)'
                        : direction === 'down'
                          ? 'rgba(239, 68, 68, 0.3)'
                          : 'rgba(107, 114, 128, 0.3)'
                    }
                  />
                  <stop
                    offset="100%"
                    stopColor={
                      direction === 'up'
                        ? 'rgba(16, 185, 129, 0)'
                        : direction === 'down'
                          ? 'rgba(239, 68, 68, 0)'
                          : 'rgba(107, 114, 128, 0)'
                    }
                  />
                </linearGradient>
              </defs>

              {/* Area fill */}
              <path
                d={`M 0 100 L ${sparkline.map((v, i) => `${i},${100 - v}`).join(' L ')} L ${sparkline.length} 100`}
                fill="url(#sparklineGradient)"
              />

              {/* Line */}
              <polyline
                points={sparkline.map((v, i) => `${i},${100 - v}`).join(' ')}
                fill="none"
                stroke={
                  direction === 'up'
                    ? '#10b981'
                    : direction === 'down'
                      ? '#ef4444'
                      : '#6b7280'
                }
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <div className="flex justify-between text-xs text-zinc-500">
            <span>90 days ago</span>
            <span>Today</span>
          </div>
        </div>
      )}

      {/* Comparison: Expert vs Community */}
      {(community !== undefined || expertAverage !== undefined) && (
        <div className="grid grid-cols-2 gap-4 pt-2">
          {community !== undefined && (
            <div className="p-3 rounded-lg bg-zinc-800/50">
              <p className="text-xs text-zinc-500 mb-1">Community Consensus</p>
              <p className="text-xl font-bold text-white">
                {Math.round(community * 100)}%
              </p>
            </div>
          )}

          {expertAverage !== undefined && (
            <div className="p-3 rounded-lg bg-zinc-800/50">
              <p className="text-xs text-zinc-500 mb-1">Expert Average</p>
              <p className="text-xl font-bold text-white">
                {Math.round(expertAverage * 100)}%
              </p>

              {community !== undefined && (
                <p
                  className={cn(
                    'text-xs mt-1 font-medium',
                    expertAverage > community ? 'text-emerald-400' : 'text-red-400'
                  )}
                >
                  {expertAverage > community ? '+' : ''}{Math.round((expertAverage - community) * 100)}%
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Footer: Last Updated */}
      {lastUpdated && (
        <div className="pt-2 border-t border-zinc-800/50 flex items-center justify-between">
          <p className="text-xs text-zinc-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            Last updated {new Date(lastUpdated).toLocaleDateString()} at{' '}
            {new Date(lastUpdated).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
          <a
            href="https://metaculus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
          >
            via Metaculus
          </a>
        </div>
      )}
    </motion.div>
  );
}
