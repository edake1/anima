'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { use } from 'react';
import { ArrowLeft, BookOpen, Layers, Zap, Link2, ExternalLink } from 'lucide-react';
import { getConceptById, getConnectedConcepts } from '@/lib/data/concepts';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const categoryConfig: Record<string, { label: string; color: string; bg: string }> = {
  architecture: { label: 'Architecture', color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/30' },
  capability:   { label: 'Capabilities', color: 'text-blue-400',   bg: 'bg-blue-500/10 border-blue-500/30' },
  safety:       { label: 'Safety',        color: 'text-emerald-400',bg: 'bg-emerald-500/10 border-emerald-500/30' },
  philosophy:   { label: 'Philosophy',    color: 'text-amber-400',  bg: 'bg-amber-500/10 border-amber-500/30' },
  economics:    { label: 'Economics',     color: 'text-pink-400',   bg: 'bg-pink-500/10 border-pink-500/30' },
  society:      { label: 'Society',       color: 'text-cyan-400',   bg: 'bg-cyan-500/10 border-cyan-500/30' },
  future:       { label: 'Future',        color: 'text-rose-400',   bg: 'bg-rose-500/10 border-rose-500/30' },
};

const difficultyConfig: Record<string, { label: string; color: string }> = {
  beginner:     { label: 'Beginner',     color: 'text-emerald-400' },
  intermediate: { label: 'Intermediate', color: 'text-amber-400' },
  advanced:     { label: 'Advanced',     color: 'text-orange-400' },
  expert:       { label: 'Expert',       color: 'text-red-400' },
};

const relationshipConfig: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  enables:   { label: 'Enables',   color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5', icon: Zap },
  requires:  { label: 'Requires',  color: 'text-blue-400 border-blue-500/30 bg-blue-500/5',         icon: Layers },
  related:   { label: 'Related',   color: 'text-violet-400 border-violet-500/30 bg-violet-500/5',   icon: Link2 },
  conflicts: { label: 'Conflicts', color: 'text-red-400 border-red-500/30 bg-red-500/5',            icon: Zap },
};

interface Props {
  params: Promise<{ id: string }>;
}

export default function ConceptDetailPage({ params }: Props) {
  const { id } = use(params);
  const concept = getConceptById(id);
  if (!concept) notFound();

  const connected = getConnectedConcepts(id);
  const cat = categoryConfig[concept.category] ?? categoryConfig.architecture;
  const diff = difficultyConfig[concept.difficulty] ?? difficultyConfig.beginner;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link href="/concepts" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            All Concepts
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className={cn('border text-xs font-medium', cat.bg, cat.color)}>
              {cat.label}
            </Badge>
            <span className={cn('text-xs font-medium', diff.color)}>
              {diff.label}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            {concept.name}
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">{concept.shortDescription}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-violet-400" />
                <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">Explanation</h2>
              </div>
              <p className="text-zinc-300 leading-relaxed text-base">{concept.fullDescription}</p>
            </motion.div>

            {/* Sources */}
            {concept.sources.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="glass rounded-2xl p-6"
              >
                <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide mb-4">Sources</h2>
                <ul className="space-y-3">
                  {concept.sources.map(src => (
                    <li key={src.id} className="flex items-start gap-3 group">
                      <ExternalLink className="w-4 h-4 text-zinc-600 mt-0.5 group-hover:text-violet-400 transition-colors shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm text-zinc-300 font-medium">{src.title}</p>
                        {src.authors && src.authors.length > 0 && (
                          <p className="text-xs text-zinc-500 mt-0.5">{src.authors.join(', ')}</p>
                        )}
                        <p className="text-xs text-zinc-600 mt-0.5 capitalize">{src.type} · Credibility {src.credibility}/100</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Sidebar — connections */}
          <div className="space-y-6">
            {concept.connections.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="glass rounded-2xl p-6"
              >
                <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide mb-4">Connected Concepts</h2>
                <ul className="space-y-2">
                  {concept.connections.map(conn => {
                    const related = connected.find(c => c.id === conn.conceptId);
                    const rel = relationshipConfig[conn.relationship] ?? relationshipConfig.related;
                    const RelIcon = rel.icon;
                    return (
                      <li key={conn.conceptId}>
                        <Link href={`/concepts/${conn.conceptId}`}>
                          <div className={cn('flex items-center gap-3 p-3 rounded-xl border transition-all hover:border-violet-500/40 hover:bg-violet-500/5 group', rel.color)}>
                            <RelIcon className="w-3.5 h-3.5 shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors truncate">
                                {related?.name ?? conn.conceptId}
                              </p>
                              <p className={cn('text-[10px] mt-0.5', rel.color)}>{rel.label}</p>
                            </div>
                            <div className="w-8 h-1 rounded-full bg-zinc-700 shrink-0">
                              <div className="h-full rounded-full bg-violet-500" style={{ width: `${conn.strength * 100}%` }} />
                            </div>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glass rounded-2xl p-6 space-y-3"
            >
              <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide mb-2">At a Glance</h2>
              <div className="flex justify-between items-center">
                <span className="text-xs text-zinc-500">Category</span>
                <span className={cn('text-xs font-medium', cat.color)}>{cat.label}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-zinc-500">Difficulty</span>
                <span className={cn('text-xs font-medium', diff.color)}>{diff.label}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-zinc-500">Connections</span>
                <span className="text-xs font-medium text-zinc-300">{concept.connections.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-zinc-500">Sources</span>
                <span className="text-xs font-medium text-zinc-300">{concept.sources.length}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <Link href="/concepts">
                <div className="glass rounded-2xl p-4 flex items-center justify-between group hover:border-violet-500/30 transition-all border border-transparent cursor-pointer">
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">Browse all concepts</span>
                  <ArrowLeft className="w-4 h-4 text-zinc-600 group-hover:text-violet-400 rotate-180 transition-all" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
