'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  XCircle,
  Clock,
  Quote,
  TrendingUp,
  Minus,
  Twitter,
  Globe,
} from 'lucide-react';
import Link from 'next/link';
import { getExpertById } from '@/lib/data/experts';
import { milestones } from '@/lib/data/timeline';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { use } from 'react';

const stanceConfig = {
  optimist: {
    label: 'Optimist',
    gradient: 'from-emerald-600 via-teal-500 to-cyan-600',
    border: 'border-emerald-500/30',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  },
  cautious: {
    label: 'Cautious',
    gradient: 'from-amber-600 via-orange-500 to-yellow-600',
    border: 'border-amber-500/30',
    badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  },
  skeptic: {
    label: 'Skeptic',
    gradient: 'from-blue-600 via-indigo-500 to-violet-600',
    border: 'border-blue-500/30',
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  },
  neutral: {
    label: 'Balanced',
    gradient: 'from-violet-600 via-purple-500 to-pink-600',
    border: 'border-violet-500/30',
    badge: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  },
} as const;

const statusConfig = {
  pending: { icon: Clock, label: 'Pending', color: 'text-zinc-400', bg: 'bg-zinc-800' },
  correct: { icon: CheckCircle, label: 'Correct', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  incorrect: { icon: XCircle, label: 'Incorrect', color: 'text-red-400', bg: 'bg-red-500/10' },
  partial: { icon: Minus, label: 'Partial', color: 'text-amber-400', bg: 'bg-amber-500/10' },
};

const topicLabels: Record<string, string> = {
  agi: 'AGI Timeline',
  asi: 'ASI Timeline',
  alignment: 'Alignment',
  agents: 'AI Agents',
  economy: 'Economic Impact',
  society: 'Society',
};

export default function ExpertDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const expert = getExpertById(id);
  if (!expert) notFound();

  const stance = stanceConfig[expert.stance];
  const relatedMilestones = milestones.filter((m) =>
    m.relatedExperts.includes(expert.id)
  );

  const correctCount = expert.predictions.filter((p) => p.status === 'correct').length;
  const incorrectCount = expert.predictions.filter((p) => p.status === 'incorrect').length;
  const pendingCount = expert.predictions.filter((p) => p.status === 'pending').length;
  const resolvedCount = correctCount + incorrectCount;
  const accuracy = resolvedCount > 0 ? Math.round((correctCount / resolvedCount) * 100) : null;

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero */}
      <div className={`relative bg-gradient-to-br ${stance.gradient} opacity-90`}>
        <div className="absolute inset-0 bg-zinc-950/70" />
        <div className="relative max-w-4xl mx-auto px-4 py-16">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/experts"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All Experts
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-start gap-6"
          >
            {/* Avatar */}
            <div
              className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stance.gradient} flex items-center justify-center text-white font-bold text-2xl shadow-2xl flex-shrink-0`}
            >
              {expert.name.split(' ').map((n) => n[0]).join('')}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <Badge className={cn('border', stance.badge)}>{stance.label}</Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-400">
                  Credibility: {expert.credibility}/100
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">{expert.name}</h1>
              <p className="text-lg text-zinc-300">
                {expert.title} · {expert.organization}
              </p>

              {expert.socialLinks && (
                <div className="flex gap-3 mt-3">
                  {expert.socialLinks.twitter && (
                    <a
                      href={expert.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                    >
                      <Twitter className="w-3.5 h-3.5" />
                      Twitter/X
                    </a>
                  )}
                  {expert.socialLinks.website && (
                    <a
                      href={expert.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      Website
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: 'Predictions', value: expert.predictions.length },
            { label: 'Correct', value: correctCount, color: 'text-emerald-400' },
            { label: 'Incorrect', value: incorrectCount, color: 'text-red-400' },
            {
              label: 'Accuracy',
              value: accuracy !== null ? `${accuracy}%` : 'N/A',
              color: accuracy !== null ? (accuracy >= 60 ? 'text-emerald-400' : 'text-amber-400') : 'text-zinc-500',
            },
          ].map((stat) => (
            <div key={stat.label} className="glass-light rounded-xl p-4 text-center">
              <div className={cn('text-2xl font-bold mb-1', stat.color ?? 'text-white')}>
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Biography */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-white mb-4">Biography</h2>
          <div className="glass rounded-2xl p-6">
            <p className="text-zinc-300 leading-relaxed">{expert.biography}</p>
          </div>
        </motion.section>

        {/* Predictions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Predictions</h2>
            <div className="flex gap-2 text-xs">
              <span className="text-zinc-500">{pendingCount} pending</span>
              {resolvedCount > 0 && (
                <>
                  <span className="text-zinc-700">·</span>
                  <span className="text-emerald-400">{correctCount} correct</span>
                  <span className="text-zinc-700">·</span>
                  <span className="text-red-400">{incorrectCount} incorrect</span>
                </>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {expert.predictions.map((pred, i) => {
              const status = statusConfig[pred.status];
              const StatusIcon = status.icon;
              return (
                <motion.div
                  key={pred.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="glass-light rounded-xl p-5 border border-transparent hover:border-violet-500/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={cn('p-2 rounded-lg mt-0.5 flex-shrink-0', status.bg)}>
                      <StatusIcon className={cn('w-4 h-4', status.color)} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs border-zinc-700 text-zinc-400">
                          {topicLabels[pred.topic] ?? pred.topic}
                        </Badge>
                        <Badge variant="outline" className={cn('text-xs border', status.color, status.bg)}>
                          {status.label}
                        </Badge>
                        <span className="text-xs text-zinc-500">
                          {pred.timeframe.start}–{pred.timeframe.end ?? '?'}
                        </span>
                      </div>
                      <p className="text-zinc-200 text-sm leading-relaxed mb-2">{pred.prediction}</p>
                      <div className="flex items-center gap-3 text-xs text-zinc-500">
                        <span>Made {new Date(pred.madeAt).getFullYear()}</span>
                        <span>·</span>
                        <span className="capitalize">{pred.confidence} confidence</span>
                        {pred.source.url && (
                          <>
                            <span>·</span>
                            <a
                              href={pred.source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-violet-400 hover:text-violet-300 transition-colors"
                            >
                              {pred.source.title} <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Quotes */}
        {expert.quotes.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">Notable Quotes</h2>
            <div className="space-y-4">
              {expert.quotes.map((quote, i) => (
                <motion.div
                  key={quote.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="glass-light rounded-xl p-5 border-l-2 border-violet-500/50"
                >
                  <Quote className="w-4 h-4 text-violet-500/50 mb-2" />
                  <p className="text-zinc-200 italic leading-relaxed mb-3">&ldquo;{quote.text}&rdquo;</p>
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    {quote.context && <span>{quote.context}</span>}
                    <span>·</span>
                    <span>{new Date(quote.date).getFullYear()}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Related Milestones */}
        {relatedMilestones.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">Key Moments</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedMilestones.slice(0, 6).map((m) => (
                <Link key={m.id} href={`/timeline/${m.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-light rounded-xl p-4 cursor-pointer border border-transparent hover:border-violet-500/30 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-white">{m.title}</p>
                        <p className="text-xs text-zinc-500 mt-0.5">
                          {new Date(m.date).getFullYear()} · {m.impact} impact
                        </p>
                      </div>
                    </div>
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
