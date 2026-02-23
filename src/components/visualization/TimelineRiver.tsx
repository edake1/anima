'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { timelinePhases, milestones } from '@/lib/data';
import { Milestone } from '@/types';

const YEAR_START = 2017;
const YEAR_END = 2026;
const TOTAL_YEARS = YEAR_END - YEAR_START;

const impactSize: Record<string, number> = {
  transformative: 14,
  high: 10,
  medium: 7,
  low: 5,
};

const impactColor: Record<string, string> = {
  transformative: '#ec4899',
  high: '#8b5cf6',
  medium: '#6366f1',
  low: '#4b5563',
};

export function TimelineRiver() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<Milestone | null>(null);
  const [tooltipX, setTooltipX] = useState(0);

  const historicalMilestones = milestones.filter(m => {
    const y = new Date(m.date).getFullYear();
    return y >= YEAR_START && y <= YEAR_END && m.category !== 'prediction';
  });

  return (
    <div ref={containerRef} className="relative py-6 overflow-x-auto no-scrollbar select-none">
      <div className="min-w-[700px] px-6">

        {/* Phase color band */}
        <div className="relative h-1.5 rounded-full overflow-hidden mb-1">
          {timelinePhases.filter(p => p.startYear <= YEAR_END).map((phase) => {
            const left = Math.max(0, ((phase.startYear - YEAR_START) / TOTAL_YEARS)) * 100;
            const right = phase.endYear
              ? Math.min(100, ((phase.endYear - YEAR_START) / TOTAL_YEARS) * 100)
              : 100;
            return (
              <div
                key={phase.id}
                className="absolute top-0 bottom-0 rounded-full"
                style={{
                  left: `${left}%`,
                  width: `${right - left}%`,
                  backgroundColor: phase.color,
                  opacity: 0.7,
                }}
              />
            );
          })}
          {/* shimmer */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/3"
          />
        </div>

        {/* River track & nodes */}
        <div className="relative h-28">
          {/* Center line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-800 -translate-y-1/2" />

          {historicalMilestones.map((m, i) => {
            const year = new Date(m.date).getFullYear();
            const month = new Date(m.date).getMonth();
            const pct = ((year - YEAR_START + month / 12) / TOTAL_YEARS) * 100;
            const size = impactSize[m.impact] ?? 7;
            const color = impactColor[m.impact] ?? '#6366f1';
            const isHovered = hovered?.id === m.id;
            // Stagger above/below centre to keep crowded clusters readable
            const isAbove = i % 2 === 0;
            const dotTopPct = isAbove ? 27 : 73;

            return (
              <div key={m.id} className="absolute inset-0 pointer-events-none" style={{ left: `${pct}%` }}>
                {/* Tick from dot to centre line */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    left: 0,
                    top: isAbove ? `${dotTopPct}%` : '50%',
                    height: `${73 - 27}%`,
                    width: 1,
                    background: `${color}30`,
                    transform: 'translateX(-50%)',
                  }}
                />

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.02, type: 'spring', stiffness: 300, damping: 20 }}
                  onMouseEnter={(e) => {
                    setHovered(m);
                    const rect = containerRef.current?.getBoundingClientRect();
                    const el = e.currentTarget.getBoundingClientRect();
                    setTooltipX(el.left - (rect?.left ?? 0) + el.width / 2);
                  }}
                  onMouseLeave={() => setHovered(null)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 pointer-events-auto"
                  style={{ top: `${dotTopPct}%` }}
                >
                  <motion.div
                    animate={isHovered ? { scale: 1.6 } : { scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="rounded-full"
                    style={{
                      width: size,
                      height: size,
                      backgroundColor: color,
                      boxShadow: isHovered ? `0 0 12px ${color}cc` : `0 0 4px ${color}66`,
                    }}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Year labels */}
        <div className="relative flex justify-between px-0 mt-1">
          {Array.from({ length: TOTAL_YEARS + 1 }, (_, i) => YEAR_START + i).map((yr) => (
            <span key={yr} className="text-[10px] text-zinc-600 font-mono">
              {yr}
            </span>
          ))}
        </div>

        {/* Phase legend row */}
        <div className="flex flex-wrap gap-x-5 gap-y-1 mt-4">
          {timelinePhases.filter(p => p.startYear <= YEAR_END).map((phase) => (
            <div key={phase.id} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: phase.color }} />
              <span className="text-[10px] text-zinc-500">{phase.shortName}</span>
            </div>
          ))}
          <div className="ml-auto flex items-center gap-3">
            {['transformative', 'high', 'medium'].map((imp) => (
              <div key={imp} className="flex items-center gap-1">
                <div
                  className="rounded-full"
                  style={{
                    width: impactSize[imp],
                    height: impactSize[imp],
                    backgroundColor: impactColor[imp],
                  }}
                />
                <span className="text-[10px] text-zinc-600 capitalize">{imp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key={hovered.id}
              initial={{ opacity: 0, y: 6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="absolute z-50 pointer-events-none"
              style={{
                bottom: '100%',
                left: Math.min(Math.max(tooltipX, 80), 600),
                transform: 'translateX(-50%)',
                marginBottom: 8,
              }}
            >
              <Link href={`/timeline/${hovered.id}`} className="pointer-events-auto block">
                <div className="glass rounded-xl px-4 py-3 max-w-[220px] shadow-xl border border-violet-500/20">
                  <p className="text-xs font-semibold text-white mb-0.5 line-clamp-2">{hovered.title}</p>
                  <p className="text-[10px] text-zinc-400">{new Date(hovered.date).getFullYear()} · {hovered.impact} impact</p>
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
