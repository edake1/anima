/**
 * LivePredictionCard Component
 * Displays a prediction with live Metaculus data if available
 */

'use client';

import { motion } from 'framer-motion';
import { Clock, Badge as BadgeIcon, Check, AlertCircle, Zap } from 'lucide-react';
import Link from 'next/link';
import { Prediction, PredictionCategory } from '@/types';
import { Badge } from '@/components/ui/badge';
import { useMetaculusPrediction } from '@/hooks/useMetaculusPrediction';
import { ProbabilityTrend } from '@/components/interactive/ProbabilityTrend';
import { cn } from '@/lib/utils';

interface LivePredictionCardProps {
  prediction: Prediction;
  categoryConfig: {
    label: string;
    icon: React.ElementType;
    color: string;
  };
  index?: number;
}

export function LivePredictionCard({
  prediction,
  categoryConfig,
  index = 0,
}: LivePredictionCardProps) {
  const { probability, trend, sparkline, isLoading, lastFetched } =
    useMetaculusPrediction(prediction.metaculusId);

  // Use live data if available, fallback to static data
  const displayProbability = probability ?? prediction.probability;
  const isControversial = Math.abs(displayProbability - 0.5) < 0.15;
  const hasLiveData = probability !== null && probability !== undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="space-y-4"
    >
      {/* Live data callout if available */}
      {hasLiveData && sparkline.length > 0 && (
        <ProbabilityTrend
          probability={displayProbability}
          change={trend.change}
          changePercent={trend.changePercent}
          direction={trend.direction}
          sparkline={sparkline}
          isLoading={isLoading}
          lastUpdated={lastFetched?.toISOString()}
          community={displayProbability}
          description={prediction.description}
        />
      )}

      {/* Static fallback card (if no Metaculus data) */}
      {!hasLiveData && (
        <div className="glass-light rounded-2xl p-6 border border-transparent hover:border-violet-500/20 transition-all">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Probability Display */}
            <div className="flex-shrink-0 flex items-center gap-4">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="12"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={displayProbability > 0.5 ? '#8b5cf6' : '#f59e0b'}
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 40}
                    initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                    animate={{
                      strokeDashoffset:
                        2 * Math.PI * 40 * (1 - displayProbability),
                    }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={cn(
                      'text-2xl font-bold',
                      displayProbability > 0.5
                        ? 'text-violet-400'
                        : 'text-amber-400'
                    )}
                  >
                    {Math.round(displayProbability * 100)}%
                  </span>
                </div>
              </div>

              <div className="lg:hidden">
                <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                  {categoryConfig.label}
                </Badge>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {prediction.title}
                  </h3>
                  <p className="text-zinc-400">{prediction.description}</p>
                </div>

                <div className="hidden lg:block">
                  <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                    {categoryConfig.label}
                  </Badge>
                </div>
              </div>

              {/* Timeframe */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>
                    {prediction.timeframe.earliest} -{' '}
                    {prediction.timeframe.latest}
                    <span className="text-zinc-600 ml-1">
                      (expected: {prediction.timeframe.expected})
                    </span>
                  </span>
                </div>

                {isControversial && (
                  <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">
                    Controversial
                  </Badge>
                )}
              </div>

              {/* Community Votes + Source */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-medium">
                    {prediction.communityVotes.agree.toLocaleString()}
                  </span>
                  <span className="text-zinc-600">agree</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-400 font-medium">
                    {prediction.communityVotes.disagree.toLocaleString()}
                  </span>
                  <span className="text-zinc-600">disagree</span>
                </div>

                <Link href={`/predictions/${prediction.id}`}>
                  <button className="ml-auto text-violet-400 hover:text-violet-300 transition-colors text-sm font-medium flex items-center gap-1">
                    View details
                    <Zap className="w-3 h-3" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live data indicator badge */}
      {hasLiveData && (
        <div className="flex items-center justify-between px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <div className="flex items-center gap-2 text-sm text-emerald-400">
            <Check className="w-4 h-4" />
            <span>Live data from Metaculus</span>
          </div>
          <Link href={`/predictions/${prediction.id}`}>
            <button className="text-emerald-400 hover:text-emerald-300 transition-colors text-xs font-medium">
              View details →
            </button>
          </Link>
        </div>
      )}
    </motion.div>
  );
}
