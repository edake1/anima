'use client';

import { useAchievements } from '@/lib/hooks/useAchievements';

/** Mount anywhere inside the tree to auto-fire achievement toasts. */
export function AchievementsProvider() {
  useAchievements();
  return null;
}
