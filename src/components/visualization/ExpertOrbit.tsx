'use client';

import { motion } from 'framer-motion';
import { getExpertsByStance } from '@/lib/data';
import { cn } from '@/lib/utils';

const stanceColors = {
  optimist: 'from-emerald-500 to-teal-600',
  cautious: 'from-amber-500 to-orange-600',
  skeptic: 'from-blue-500 to-indigo-600',
  neutral: 'from-violet-500 to-purple-600',
};

export function ExpertOrbit() {
  const optimists = getExpertsByStance('optimist');
  const cautious = getExpertsByStance('cautious');
  const skeptics = getExpertsByStance('skeptic');
  const neutral = getExpertsByStance('neutral');
  
  const allExperts = [...optimists, ...cautious, ...skeptics, ...neutral];
  
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Center - AGI */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute z-10 w-24 h-24 rounded-full bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-violet-500/40"
      >
        <span className="text-white font-bold text-lg">AGI</span>
      </motion.div>
      
      {/* Orbit Rings */}
      {[1, 2, 3, 4].map((ring) => (
        <motion.div
          key={ring}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ delay: 0.2 * ring, duration: 0.5 }}
          className="absolute rounded-full border border-zinc-700"
          style={{
            width: `${ring * 80 + 100}px`,
            height: `${ring * 80 + 100}px`,
          }}
        />
      ))}
      
      {/* Expert Nodes */}
      {allExperts.map((expert, index) => {
        const angle = (index / allExperts.length) * 2 * Math.PI - Math.PI / 2;
        const radius = 140 + (index % 3) * 30;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={expert.id}
            initial={{ scale: 0, x: 0, y: 0 }}
            animate={{ 
              scale: 1, 
              x, 
              y,
            }}
            transition={{ 
              delay: 0.5 + index * 0.1, 
              duration: 0.5,
              type: 'spring',
              stiffness: 100
            }}
            className={cn(
              'absolute z-20 flex flex-col items-center cursor-pointer group',
              'transition-transform hover:scale-110'
            )}
            style={{
              transform: 'translate(-50%, -50%)',
              left: '50%',
              top: '50%',
            }}
          >
            {/* Avatar */}
            <div 
              className={cn(
                'w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center shadow-lg',
                stanceColors[expert.stance]
              )}
            >
              <span className="text-white font-bold text-sm">
                {expert.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            
            {/* Name Tooltip */}
            <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="px-2 py-1 rounded bg-zinc-800 text-xs text-zinc-300 whitespace-nowrap">
                {expert.name}
              </div>
            </div>
          </motion.div>
        );
      })}
      
      {/* Legend */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
        {Object.entries(stanceColors).map(([stance, gradient]) => (
          <div key={stance} className="flex items-center gap-2">
            <div className={cn('w-3 h-3 rounded-full bg-gradient-to-br', gradient)} />
            <span className="text-xs text-zinc-500 capitalize">{stance}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
