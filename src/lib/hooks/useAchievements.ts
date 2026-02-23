'use client';

import { useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { useStore } from '@/lib/stores/useStore';

// Definition of every possible achievement with trigger condition
const ACHIEVEMENT_DEFS = [
  {
    id: 'first-visit',
    name: 'First Steps',
    description: 'You opened SYNTHESIS for the first time.',
    emoji: '🚀',
    check: (visitedNodes: string[]) => visitedNodes.length >= 0,
    triggerOnce: true,
  },
  {
    id: 'explorer-5',
    name: 'Curious Mind',
    description: 'You visited 5 timeline milestones.',
    emoji: '🔭',
    check: (visitedNodes: string[]) => visitedNodes.length >= 5,
    triggerOnce: true,
  },
  {
    id: 'explorer-20',
    name: 'Deep Dive',
    description: 'You visited 20 milestones.',
    emoji: '🌊',
    check: (visitedNodes: string[]) => visitedNodes.length >= 20,
    triggerOnce: true,
  },
  {
    id: 'predictor',
    name: 'Oracle',
    description: 'You submitted your first AGI prediction.',
    emoji: '🔮',
    check: (_: string[], userPredictions: unknown[]) => userPredictions.length >= 1,
    triggerOnce: true,
  },
] as const;

/**
 * Drop this into any layout to fire achievement toasts automatically
 * whenever their trigger conditions become true.
 */
export function useAchievements() {
  const { visitedNodes, userPredictions, achievements, unlockAchievement } = useStore();
  const fired = useRef(new Set<string>());

  useEffect(() => {
    // Mark already-earned achievements so we don't re-fire on mount
    achievements.forEach(a => fired.current.add(a.id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    for (const def of ACHIEVEMENT_DEFS) {
      if (fired.current.has(def.id)) continue;
      if (def.check(visitedNodes, userPredictions)) {
        fired.current.add(def.id);
        unlockAchievement({
          id: def.id,
          name: def.name,
          description: def.description,
          icon: def.emoji,
          unlockedAt: new Date().toISOString(),
        });
        toast(def.name, {
          description: def.description,
          icon: def.emoji,
          duration: 4500,
          style: {
            background: 'rgba(15,12,41,0.95)',
            border: '1px solid rgba(139,92,246,0.35)',
            color: '#e2e8f0',
          },
        });
      }
    }
  }, [visitedNodes, userPredictions, unlockAchievement]);
}
