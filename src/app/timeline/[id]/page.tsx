'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Zap,
  ExternalLink,
  User,
  BookOpen,
  Clock,
} from 'lucide-react';
import Link from 'next/link';
import { getMilestoneById } from '@/lib/data/timeline';
import { getExpertById } from '@/lib/data/experts';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { use } from 'react';

const impactConfig = {
  low: { label: 'Minor', gradient: 'from-zinc-600 to-zinc-700', badge: 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30' },
  medium: { label: 'Moderate', gradient: 'from-blue-600 to-indigo-700', badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  high: { label: 'High Impact', gradient: 'from-violet-600 to-purple-700', badge: 'bg-violet-500/20 text-violet-400 border-violet-500/30' },
  critical: { label: 'Critical', gradient: 'from-amber-500 via-orange-600 to-red-600', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
  paradigm: { label: 'Paradigm Shift', gradient: 'from-pink-600 via-fuchsia-600 to-violet-600', badge: 'bg-pink-500/20 text-pink-300 border-pink-500/30' },
};

const phaseColors: Record<string, string> = {
  foundation: 'text-zinc-400',
  'deep-learning': 'text-blue-400',
  llm: 'text-violet-400',
  agents: 'text-cyan-400',
  'multi-agent': 'text-emerald-400',
  agi: 'text-amber-400',
  asi: 'text-pink-400',
};

export default function MilestoneDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const milestone = getMilestoneById(id);
  if (!milestone) notFound();

  const impact = impactConfig[milestone.impact] ?? impactConfig.medium;
  const relatedExpertObjects = milestone.relatedExperts
    .map((eid) => getExpertById(eid))
    .filter(Boolean);

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero */}
      <div className={`relative bg-gradient-to-br ${impact.gradient}`}>
        <div className="absolute inset-0 bg-zinc-950/70" />
        <div className="relative max-w-4xl mx-auto px-4 py-16">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/timeline"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Full Timeline
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className={cn('border', impact.badge)}>
                <Zap className="w-3 h-3 mr-1" />
                {impact.label}
              </Badge>
              <Badge variant="outline" className="border-zinc-600 text-zinc-400">
                {milestone.category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              </Badge>
              {milestone.phase && (
                <Badge variant="outline" className={cn('border-zinc-700', phaseColors[milestone.phase])}>
                  {milestone.phase} era
                </Badge>
              )}
              {milestone.verified && (
                <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Verified
                </Badge>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{milestone.title}</h1>

            <div className="flex items-center gap-4 text-sm text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(milestone.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="text-zinc-700">·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {milestone.category}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        {/* Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <h2 className="text-xl font-bold text-white mb-4">Overview</h2>
          <div className="glass rounded-2xl p-6">
            <p className="text-zinc-300 leading-relaxed text-lg">{milestone.description}</p>
            {milestone.technicalDetails && (
              <p className="text-zinc-400 leading-relaxed mt-4 text-sm border-t border-zinc-800 pt-4">
                {milestone.technicalDetails}
              </p>
            )}
          </div>
        </motion.section>

        {/* Significance */}
        {milestone.significance && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">Why It Matters</h2>
            <div className="glass rounded-2xl p-6 border-l-2 border-amber-500/50">
              <p className="text-zinc-300 leading-relaxed">{milestone.significance}</p>
            </div>
          </motion.section>
        )}

        {/* Tags */}
        {milestone.tags && milestone.tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22 }}
            className="flex flex-wrap gap-2"
          >
            {milestone.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-zinc-700 text-zinc-400 text-xs">
                #{tag}
              </Badge>
            ))}
          </motion.div>
        )}

        {/* Related Experts */}
        {relatedExpertObjects.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">Associated Researchers</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedExpertObjects.map((expert, i) => {
                if (!expert) return null;
                const stanceGradients: Record<string, string> = {
                  optimist: 'from-emerald-500 to-teal-600',
                  cautious: 'from-amber-500 to-orange-600',
                  skeptic: 'from-blue-500 to-indigo-600',
                  neutral: 'from-violet-500 to-purple-600',
                };
                return (
                  <motion.div
                    key={expert.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <Link href={`/experts/${expert.id}`}>
                      <div className="glass-light rounded-xl p-4 border border-transparent hover:border-violet-500/30 transition-all cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stanceGradients[expert.stance] ?? 'from-violet-500 to-purple-600'} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                            {expert.name.split(' ').map((n) => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{expert.name}</p>
                            <p className="text-xs text-zinc-500">{expert.organization}</p>
                          </div>
                          <User className="w-3.5 h-3.5 text-zinc-600 ml-auto" />
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
        {milestone.sources && milestone.sources.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">Sources</h2>
            <div className="space-y-3">
              {milestone.sources.map((source, i) => (
                <div key={i} className="glass-light rounded-xl p-4 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-white">{source.title ?? source.url}</p>
                      {source.authors && source.authors.length > 0 && (
                        <p className="text-xs text-zinc-500 mt-0.5">{source.authors.join(', ')}</p>
                      )}
                    </div>
                  </div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 flex-shrink-0"
                  >
                    View <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
