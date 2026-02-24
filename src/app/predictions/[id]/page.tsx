'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Users,
  TrendingUp,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  ThumbsUp,
  ThumbsDown,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { getPredictionById } from '@/lib/data/predictions';
import { experts } from '@/lib/data/experts';
import { Badge } from '@/components/ui/badge';
import { ProbabilityChart } from '@/components/interactive/ProbabilityChart';
import { ProbabilityTrend } from '@/components/interactive/ProbabilityTrend';
import { LiveMetaculusWidget } from '@/components/interactive/LiveMetaculusWidget';
import { useMetaculusPrediction } from '@/hooks/useMetaculusPrediction';
import { cn } from '@/lib/utils';
import { use } from 'react';
import { useStore } from '@/lib/stores/useStore';

const categoryConfig: Record<string, { label: string; color: string; gradient: string }> = {
  'agi-timeline': { label: 'AGI Timeline', color: 'text-violet-400', gradient: 'from-violet-600 to-purple-600' },
  'asi-timeline': { label: 'ASI Timeline', color: 'text-pink-400', gradient: 'from-pink-600 to-rose-600' },
  'alignment-success': { label: 'Alignment', color: 'text-emerald-400', gradient: 'from-emerald-600 to-teal-600' },
  'economic-impact': { label: 'Economic Impact', color: 'text-amber-400', gradient: 'from-amber-600 to-orange-600' },
  'capability-breakthrough': { label: 'Capability', color: 'text-cyan-400', gradient: 'from-cyan-600 to-blue-600' },
  regulation: { label: 'Regulation', color: 'text-blue-400', gradient: 'from-blue-600 to-indigo-600' },
  'societal-change': { label: 'Societal Change', color: 'text-orange-400', gradient: 'from-orange-600 to-red-600' },
};

const metaculusMap: Record<string, number> = {
  'agi-by-2030': 5121,
  'agi-by-2027': 5121,
  'asi-timeline': 3479,
};

export default function PredictionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const prediction = getPredictionById(id);
  if (!prediction) notFound();

  // Use live Metaculus data if available
  const { probability, trend, sparkline, isLoading, lastFetched } =
    useMetaculusPrediction(prediction.metaculusId);

  const cat = categoryConfig[prediction.category] ?? categoryConfig['agi-timeline'];
  const displayProbability = probability ?? prediction.probability;
  const pct = Math.round(displayProbability * 100);

  // Find experts who have predictions on this topic
  const relatedExperts = experts.filter((e) =>
    e.predictions.some((p) => {
      const topic = p.topic;
      const catTopics: Record<string, string[]> = {
        'agi-timeline': ['agi'],
        'asi-timeline': ['asi'],
        'alignment-success': ['alignment'],
        'capability-breakthrough': ['agi', 'agents'],
        'economic-impact': ['economy'],
      };
      return (catTopics[prediction.category] ?? []).includes(topic);
    })
  );

  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (displayProbability * circumference);
  const { mode } = useStore();

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero */}
      <div className={`relative bg-gradient-to-br ${cat.gradient}`}>
        <div className="absolute inset-0 bg-zinc-950/70" />
        <div className="relative max-w-4xl mx-auto px-4 py-16">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/predictions"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All Predictions
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-8"
          >
            {/* Gauge */}
            <div className="relative w-36 h-36 flex-shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                <motion.circle
                  cx="60" cy="60" r="54"
                  fill="none"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  style={{ filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.3))' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl font-bold text-white"
                >
                  {pct}%
                </motion.span>
                <span className="text-xs text-zinc-300">probability</span>
              </div>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <Badge className={cn('border mb-3', `bg-white/10 ${cat.color} border-white/20`)}>
                {cat.label}
              </Badge>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">{prediction.title}</h1>
              <p className="text-zinc-300 leading-relaxed">{prediction.description}</p>

              <div className="flex flex-wrap gap-4 mt-4 text-sm text-zinc-400">
                <span>Expected: <strong className="text-white">{prediction.timeframe.expected}</strong></span>
                <span>Range: <strong className="text-white">{prediction.timeframe.earliest}–{prediction.timeframe.latest}</strong></span>
                <span>Updated: <strong className="text-white">{new Date(prediction.lastUpdated).toLocaleDateString()}</strong></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        {/* Mode-aware callout */}
        {mode === 'explorer' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-light rounded-xl p-4 border-l-2 border-emerald-500/50 flex items-start gap-3"
          >
            <span className="text-lg">🧭</span>
            <div>
              <p className="text-sm font-semibold text-emerald-300 mb-0.5">Explorer Mode</p>
              <p className="text-sm text-zinc-400">{pct}% probability means roughly {pct} out of 100 forecasters think this event will occur. Scroll down to see how community opinion has shifted over time.</p>
            </div>
          </motion.div>
        )}
        {mode === 'analyst' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-light rounded-xl p-4 border-l-2 border-blue-500/50 flex items-start gap-3"
          >
            <span className="text-lg">📊</span>
            <div>
              <p className="text-sm font-semibold text-blue-300 mb-0.5">Analyst Mode</p>
              <p className="text-sm text-zinc-400">Current probability: <span className="font-bold text-white">{pct}%</span> · Expected: <span className="font-bold text-white">{prediction.timeframe.expected}</span> · Uncertainty window: <span className="font-bold text-white">{prediction.timeframe.earliest}–{prediction.timeframe.latest}</span> ({prediction.timeframe.latest - prediction.timeframe.earliest} years). Full distribution chart and live Metaculus data below.</p>
            </div>
          </motion.div>
        )}
        {mode === 'skeptic' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-light rounded-xl p-4 border-l-2 border-amber-500/50 flex items-start gap-3"
          >
            <span className="text-lg">⚠️</span>
            <div>
              <p className="text-sm font-semibold text-amber-300 mb-0.5">Skeptic Mode — Uncertainty Range</p>
              <p className="text-sm text-zinc-400">Forecasters disagree by a <span className="font-bold text-amber-300">{prediction.timeframe.latest - prediction.timeframe.earliest}-year spread</span> ({prediction.timeframe.earliest}–{prediction.timeframe.latest}). A {pct}% current probability leaves significant room for being wrong in both directions.</p>
            </div>
          </motion.div>
        )}
        {mode === 'visionary' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-light rounded-xl p-4 border-l-2 border-violet-500/50 flex items-start gap-3"
          >
            <span className="text-lg">✨</span>
            <div>
              <p className="text-sm font-semibold text-violet-300 mb-0.5">Visionary Mode</p>
              <p className="text-sm text-zinc-400">Every percentage point shift here represents a civilizational signal. Track the trend — the direction matters as much as the number.</p>
            </div>
          </motion.div>
        )}

        {/* Live Metaculus Data */}
        {probability !== null && probability !== undefined && sparkline.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">Live Forecast Trend</h2>
            <ProbabilityTrend
              probability={displayProbability}
              change={trend.change}
              changePercent={trend.changePercent}
              direction={trend.direction}
              sparkline={sparkline}
              isLoading={isLoading}
              lastUpdated={lastFetched?.toISOString()}
              community={displayProbability}
              description="Based on real-time data from Metaculus, the world's largest prediction aggregation platform."
            />
          </motion.section>
        )}

        {/* Probability Chart */}
        {prediction.probabilityDistribution && prediction.probabilityDistribution.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">Probability Over Time</h2>
            <div className="glass rounded-2xl p-6">
              <ProbabilityChart
                data={prediction.probabilityDistribution.map((d) => ({
                  year: d.year,
                  probability: d.probability,
                }))}
                color="#8b5cf6"
                height={220}
                title="Community probability distribution"
              />
            </div>
          </motion.section>
        )}

        {/* Community Votes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-white mb-4">Community Opinion</h2>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <ThumbsUp className="w-5 h-5" />
                <span className="text-2xl font-bold">{prediction.communityVotes.agree.toLocaleString()}</span>
              </div>
              <div className="flex-1 h-3 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.round((prediction.communityVotes.agree / prediction.communityVotes.total) * 100)}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                />
              </div>
              <div className="flex items-center gap-2 text-red-400">
                <span className="text-2xl font-bold">{prediction.communityVotes.disagree.toLocaleString()}</span>
                <ThumbsDown className="w-5 h-5" />
              </div>
            </div>
            <p className="text-center text-sm text-zinc-500">
              {prediction.communityVotes.total.toLocaleString()} total votes ·{' '}
              {Math.round((prediction.communityVotes.agree / prediction.communityVotes.total) * 100)}% agree
            </p>
          </div>
        </motion.section>

        {/* Live Metaculus Widget */}
        {prediction.metaculusId && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">Community on Metaculus</h2>
            <LiveMetaculusWidget questionId={prediction.metaculusId} />
          </motion.section>
        )}

        {/* Expert Positions */}
        {relatedExperts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">Expert Positions</h2>
            <div className="space-y-3">
              {relatedExperts.map((expert, i) => {
                const stanceColors: Record<string, string> = {
                  optimist: 'from-emerald-500 to-teal-600',
                  cautious: 'from-amber-500 to-orange-600',
                  skeptic: 'from-blue-500 to-indigo-600',
                  neutral: 'from-violet-500 to-purple-600',
                };
                const relevantPred = expert.predictions[0];
                return (
                  <motion.div
                    key={expert.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + i * 0.05 }}
                  >
                    <Link href={`/experts/${expert.id}`}>
                      <div className="glass-light rounded-xl p-4 border border-transparent hover:border-violet-500/30 transition-all cursor-pointer">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stanceColors[expert.stance]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                            {expert.name.split(' ').map((n) => n[0]).join('')}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-sm font-medium text-white">{expert.name}</span>
                              <TrendingUp className="w-3 h-3 text-zinc-500" />
                              <span className="text-xs text-zinc-500">{expert.organization}</span>
                            </div>
                            {relevantPred && (
                              <p className="text-xs text-zinc-400 truncate">{relevantPred.prediction}</p>
                            )}
                          </div>
                          <div className="flex-shrink-0">
                            {expert.stance === 'optimist' && <CheckCircle className="w-4 h-4 text-emerald-400" />}
                            {expert.stance === 'skeptic' && <AlertTriangle className="w-4 h-4 text-amber-400" />}
                            {expert.stance === 'cautious' && <AlertTriangle className="w-4 h-4 text-amber-400" />}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* Sources */}
        {prediction.sources.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">Sources</h2>
            <div className="space-y-3">
              {prediction.sources.map((source) => (
                <div key={source.id} className="glass-light rounded-xl p-4 border border-zinc-800">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-white">{source.title}</p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-zinc-500">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-500 text-[10px]">
                          {source.type}
                        </Badge>
                        <span>Credibility: {source.credibility}/100</span>
                      </div>
                    </div>
                    {source.url && (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 flex-shrink-0"
                      >
                        <Users className="w-3 h-3" />
                        View <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Related Predictions */}
        {prediction.relatedPredictions.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">Related Predictions</h2>
            <div className="flex flex-wrap gap-3">
              {prediction.relatedPredictions.map((relId) => (
                <Link key={relId} href={`/predictions/${relId}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="glass-light rounded-xl px-4 py-2.5 border border-zinc-800 hover:border-violet-500/40 transition-all cursor-pointer text-sm text-zinc-300 hover:text-white"
                  >
                    {relId.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
