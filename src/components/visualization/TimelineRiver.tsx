'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { timelinePhases, milestones } from '@/lib/data';

export function TimelineRiver() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setVisibleMilestones] = useState<string[]>([]);

  const years = Array.from({ length: 2035 - 2017 + 1 }, (_, i) => 2017 + i);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleMilestones((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const milestoneElements = containerRef.current?.querySelectorAll('.milestone');
    milestoneElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative py-8 overflow-x-auto no-scrollbar">
      <div className="min-w-[1200px] px-8">
        {/* Main River */}
        <div className="relative">
          {/* Gradient Line */}
          <div className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-500 via-purple-500 via-pink-500 to-rose-500 opacity-60" />
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
          </div>
          
          {/* Year Markers */}
          <div className="relative flex justify-between items-center py-16">
            {years.map((year, index) => {
              const yearMilestones = milestones.filter(
                (m) => new Date(m.date).getFullYear() === year
              );
              
              return (
                <div key={year} className="flex flex-col items-center">
                  {/* Year Label */}
                  <span className="text-xs text-zinc-500 mb-4">{year}</span>
                  
                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`relative w-4 h-4 rounded-full ${
                      yearMilestones.length > 0
                        ? 'bg-violet-500 shadow-lg shadow-violet-500/50'
                        : 'bg-zinc-700'
                    }`}
                  >
                    {yearMilestones.length > 0 && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full text-[8px] flex items-center justify-center text-white font-bold">
                        {yearMilestones.length}
                      </span>
                    )}
                  </motion.div>
                  
                  {/* Milestone Labels */}
                  {yearMilestones.length > 0 && (
                    <div className="absolute top-full mt-6 flex flex-col gap-2">
                      {yearMilestones.slice(0, 2).map((m) => (
                        <div
                          key={m.id}
                          className="w-32 text-center"
                        >
                          <span className="text-[10px] text-zinc-400 line-clamp-2">
                            {m.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Phase Indicators */}
          <div className="relative flex justify-between mt-4">
            {timelinePhases.map((phase, index) => {
              const startOffset = ((phase.startYear - 2017) / (2035 - 2017)) * 100;
              const width = phase.endYear 
                ? ((phase.endYear - phase.startYear) / (2035 - 2017)) * 100
                : ((2035 - phase.startYear) / (2035 - 2017)) * 100;
              
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="absolute text-center"
                  style={{ 
                    left: `${startOffset}%`, 
                    width: `${Math.max(width, 10)}%` 
                  }}
                >
                  <div 
                    className="h-1 rounded-full mb-2"
                    style={{ backgroundColor: phase.color }}
                  />
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
                    {phase.shortName}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
