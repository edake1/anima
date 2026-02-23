'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Search, X, Clock, Users, Target, Lightbulb } from 'lucide-react';
import { experts } from '@/lib/data/experts';
import { milestones } from '@/lib/data/timeline';
import { predictions } from '@/lib/data/predictions';
import { concepts } from '@/lib/data/concepts';

type ResultType = 'expert' | 'milestone' | 'prediction' | 'concept';

interface ResultItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  type: ResultType;
}

const typeConfig: Record<ResultType, { icon: React.ElementType; colorClass: string; label: string }> = {
  expert:     { icon: Users,    colorClass: 'text-blue-400 bg-blue-500/10 border-blue-500/20',     label: 'Expert' },
  milestone:  { icon: Clock,    colorClass: 'text-violet-400 bg-violet-500/10 border-violet-500/20', label: 'Milestone' },
  prediction: { icon: Target,   colorClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20', label: 'Prediction' },
  concept:    { icon: Lightbulb,colorClass: 'text-amber-400 bg-amber-500/10 border-amber-500/20', label: 'Concept' },
};

const quickLinks = [
  { label: 'Timeline', href: '/timeline' },
  { label: 'Experts', href: '/experts' },
  { label: 'Predictions', href: '/predictions' },
  { label: 'Concepts', href: '/concepts' },
  { label: 'Scenarios', href: '/scenarios' },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset query when palette closes; auto-focus when it opens
  useEffect(() => {
    if (isOpen) {
      const id = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(id);
    } else {
      // Defer the reset so exit animation has time to play
      const id = setTimeout(() => setQuery(''), 200);
      return () => clearTimeout(id);
    }
  }, [isOpen]);

  const results = useMemo((): ResultItem[] => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const items: ResultItem[] = [];

    experts
      .filter(e =>
        e.name.toLowerCase().includes(q) ||
        e.title?.toLowerCase().includes(q) ||
        (e.organization ?? '').toLowerCase().includes(q)
      )
      .slice(0, 3)
      .forEach(e =>
        items.push({
          id: e.id,
          title: e.name,
          subtitle: [e.title, e.organization].filter(Boolean).join(' · '),
          href: `/experts/${e.id}`,
          type: 'expert',
        })
      );

    milestones
      .filter(m =>
        m.title.toLowerCase().includes(q) ||
        m.description?.toLowerCase().includes(q) ||
        m.category?.toLowerCase().includes(q)
      )
      .slice(0, 4)
      .forEach(m =>
        items.push({
          id: m.id,
          title: m.title,
          subtitle: `${new Date(m.date).getFullYear()} · ${m.category}`,
          href: `/timeline/${m.id}`,
          type: 'milestone',
        })
      );

    predictions
      .filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q)
      )
      .slice(0, 3)
      .forEach(p =>
        items.push({
          id: p.id,
          title: p.title,
          subtitle:
            typeof p.probability === 'number'
              ? `${Math.round(p.probability * 100)}% probability`
              : p.category ?? '',
          href: `/predictions/${p.id}`,
          type: 'prediction',
        })
      );

    concepts
      .filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.shortDescription?.toLowerCase().includes(q)
      )
      .slice(0, 3)
      .forEach(c =>
        items.push({
          id: c.id,
          title: c.name,
          subtitle: c.shortDescription ?? '',
          href: `/concepts/${c.id}`,
          type: 'concept',
        })
      );

    return items;
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="cmd-palette-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-start justify-center pt-[12vh] px-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            key="cmd-palette-panel"
            initial={{ opacity: 0, scale: 0.97, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -12 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl rounded-2xl border border-violet-500/20 overflow-hidden shadow-2xl"
            style={{ background: 'rgba(5, 2, 20, 0.95)', backdropFilter: 'blur(20px)' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Search bar */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-800/60">
              <Search className="w-5 h-5 text-zinc-500 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search experts, milestones, predictions, concepts…"
                className="flex-1 bg-transparent text-zinc-200 placeholder-zinc-600 text-sm outline-none"
                onKeyDown={e => {
                  if (e.key === 'Escape') onClose();
                }}
              />
              <kbd className="hidden sm:flex items-center gap-1 text-[10px] text-zinc-600 font-mono bg-zinc-800 px-2 py-0.5 rounded shrink-0">
                ESC
              </kbd>
              <button onClick={onClose} className="text-zinc-600 hover:text-zinc-300 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results */}
            {results.length > 0 ? (
              <ul className="max-h-[420px] overflow-y-auto py-2">
                {results.map(r => {
                  const cfg = typeConfig[r.type];
                  const Icon = cfg.icon;
                  return (
                    <li key={`${r.type}-${r.id}`}>
                      <Link href={r.href} onClick={onClose}>
                        <div className="flex items-center gap-4 px-5 py-3 hover:bg-white/5 transition-colors cursor-pointer group">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${cfg.colorClass} shrink-0`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-zinc-200 font-medium truncate group-hover:text-white transition-colors">
                              {r.title}
                            </p>
                            <p className="text-xs text-zinc-500 truncate mt-0.5">{r.subtitle}</p>
                          </div>
                          <span className={`hidden sm:inline text-[10px] font-medium px-2 py-0.5 rounded-full border capitalize shrink-0 ${cfg.colorClass}`}>
                            {cfg.label}
                          </span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : query.trim() ? (
              <div className="py-14 text-center text-zinc-500 text-sm">
                No results for &ldquo;{query}&rdquo;
              </div>
            ) : (
              /* Empty state — quick nav */
              <div className="px-5 py-6">
                <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest mb-3">
                  Quick jump
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickLinks.map(ql => (
                    <Link key={ql.href} href={ql.href} onClick={onClose}>
                      <span className="px-3 py-1.5 rounded-full bg-zinc-800/80 text-zinc-400 text-xs hover:bg-zinc-700 hover:text-zinc-200 transition-colors border border-zinc-700/50 hover:border-zinc-600">
                        {ql.label}
                      </span>
                    </Link>
                  ))}
                </div>
                <p className="text-[10px] text-zinc-600 mt-5">
                  Tip: type a name, year, or concept to search across the entire database
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
