'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getExpertsByStance } from '@/lib/data';
import { cn } from '@/lib/utils';

const stanceConfig = {
  optimist: { gradient: 'from-emerald-500 to-teal-600', ring: 118, label: 'Optimist', dot: 'bg-emerald-400' },
  cautious:  { gradient: 'from-amber-500 to-orange-600',  ring: 152, label: 'Cautious',  dot: 'bg-amber-400' },
  skeptic:   { gradient: 'from-blue-500 to-indigo-600',   ring: 184, label: 'Skeptic',   dot: 'bg-blue-400' },
  neutral:   { gradient: 'from-violet-500 to-purple-600', ring: 138, label: 'Neutral',   dot: 'bg-violet-400' },
};

function buildNodes() {
  const byStance = Object.entries(stanceConfig).map(([stance, cfg]) => {
    const stanceKey = stance as keyof typeof stanceConfig;
    const stanceExperts = getExpertsByStance(stanceKey);
    const angleOffset = stanceKey === 'optimist' ? 0 : stanceKey === 'cautious' ? 0.4 : stanceKey === 'skeptic' ? 0.8 : 1.2;
    return stanceExperts.map((expert, i) => {
      const angle = angleOffset * Math.PI * 2 + (i / Math.max(stanceExperts.length, 1)) * 2 * Math.PI - Math.PI / 2;
      return { expert, cfg, x: Math.cos(angle) * cfg.ring, y: Math.sin(angle) * cfg.ring };
    });
  });
  return byStance.flat();
}

export function ExpertOrbit() {
  const nodes = buildNodes();

  return (
    <div className="relative w-full h-[420px] flex items-center justify-center overflow-hidden">
      {/* Orbit ring guides */}
      {[118, 138, 152, 184].map((r, i) => (
        <motion.div
          key={r}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.18 }}
          transition={{ delay: 0.15 * i, duration: 0.6 }}
          className="absolute rounded-full border border-zinc-700 pointer-events-none"
          style={{ width: r * 2, height: r * 2 }}
        />
      ))}

      {/* Center — AGI */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 180 }}
        className="absolute z-10 w-24 h-24 rounded-full bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-violet-500/50 cursor-default"
        style={{ marginLeft: -48, marginTop: -48, left: '50%', top: '50%' }}
      >
        <div className="text-center">
          <p className="text-white font-bold text-lg leading-none">AGI</p>
          <p className="text-white/50 text-[9px] tracking-widest mt-0.5">TARGET</p>
        </div>
        <motion.div
          animate={{ scale: [1, 1.6, 1], opacity: [0.35, 0, 0.35] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full bg-violet-500/20"
        />
      </motion.div>

      {/* Expert nodes — KEY FIX: margin offsets center the dot without touching FM's transform */}
      {nodes.map(({ expert, cfg, x, y }, index) => (
        <motion.div
          key={expert.id}
          initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
          animate={{ x, y, scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 + index * 0.08, duration: 0.6, type: 'spring', stiffness: 120, damping: 14 }}
          className="absolute z-20 group"
          style={{ left: '50%', top: '50%', marginLeft: -24, marginTop: -24 }}
        >
          <Link href={`/experts/${expert.id}`}>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                className={cn(
                  'w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center shadow-lg cursor-pointer',
                  cfg.gradient,
                )}
              >
                <span className="text-white font-bold text-xs">
                  {expert.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
              </motion.div>

              {/* Hover tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <div className="glass rounded-xl px-3 py-2 shadow-xl border border-violet-500/20 whitespace-nowrap">
                  <p className="text-xs font-semibold text-white leading-tight">{expert.name}</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5">{expert.title} · {expert.organization}</p>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-x-4 gap-y-1 pb-1">
        {Object.entries(stanceConfig).map(([stance, cfg]) => (
          <div key={stance} className="flex items-center gap-1.5">
            <div className={cn('w-2.5 h-2.5 rounded-full', cfg.dot)} />
            <span className="text-xs text-zinc-500">{cfg.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
