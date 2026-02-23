'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PredictionGaugeProps {
  label: string;
  probability: number;
  color: 'violet' | 'pink' | 'cyan' | 'emerald' | 'amber';
}

const colorMap = {
  violet: {
    primary: '#8b5cf6',
    secondary: '#7c3aed',
    bg: 'from-violet-500/20 to-violet-900/20',
    text: 'text-violet-400',
    glow: 'shadow-violet-500/30',
  },
  pink: {
    primary: '#ec4899',
    secondary: '#db2777',
    bg: 'from-pink-500/20 to-pink-900/20',
    text: 'text-pink-400',
    glow: 'shadow-pink-500/30',
  },
  cyan: {
    primary: '#22d3ee',
    secondary: '#06b6d4',
    bg: 'from-cyan-500/20 to-cyan-900/20',
    text: 'text-cyan-400',
    glow: 'shadow-cyan-500/30',
  },
  emerald: {
    primary: '#10b981',
    secondary: '#059669',
    bg: 'from-emerald-500/20 to-emerald-900/20',
    text: 'text-emerald-400',
    glow: 'shadow-emerald-500/30',
  },
  amber: {
    primary: '#f59e0b',
    secondary: '#d97706',
    bg: 'from-amber-500/20 to-amber-900/20',
    text: 'text-amber-400',
    glow: 'shadow-amber-500/30',
  },
};

export function PredictionGauge({ label, probability, color }: PredictionGaugeProps) {
  const colors = colorMap[color];
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (probability * circumference);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        'relative p-6 rounded-2xl glass-light border border-transparent hover:border-white/10 transition-all',
        'bg-gradient-to-br',
        colors.bg
      )}
    >
      {/* SVG Gauge */}
      <div className="relative w-32 h-32 mx-auto mb-4">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
          />
          
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={colors.primary}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ filter: `drop-shadow(0 0 8px ${colors.primary})` }}
          />
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={cn('text-3xl font-bold', colors.text)}
          >
            {Math.round(probability * 100)}%
          </motion.span>
        </div>
      </div>
      
      {/* Label */}
      <p className="text-center text-sm text-zinc-400 font-medium">
        {label}
      </p>
    </motion.div>
  );
}
