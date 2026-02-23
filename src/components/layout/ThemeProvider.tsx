'use client';

import { useEffect } from 'react';
import { useStore } from '@/lib/stores/useStore';

/**
 * Reads the active theme from the Zustand store and applies it as a
 * `data-theme` attribute on <html>.  CSS variables defined in globals.css
 * under each selector then take over automatically.
 */
export function ThemeProvider() {
  const theme = useStore(s => s.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme ?? 'cosmic');
  }, [theme]);

  return null; 
}
