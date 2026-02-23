'use client';

import { useStore } from '@/lib/stores/useStore';
import { UserMode } from '@/types';

interface ModeAwareContentProps {
  explorer?: React.ReactNode;
  analyst?: React.ReactNode;
  visionary?: React.ReactNode;
  skeptic?: React.ReactNode;
  wonder?: React.ReactNode;
  fallback: React.ReactNode;
}

export function ModeAwareContent({
  explorer,
  analyst,
  visionary,
  skeptic,
  wonder,
  fallback,
}: ModeAwareContentProps) {
  const { mode } = useStore();

  const modeContent: Partial<Record<UserMode, React.ReactNode>> = {
    explorer,
    analyst,
    visionary,
    skeptic,
    wonder,
  };

  return <>{modeContent[mode] ?? fallback}</>;
}

// Inline text variant – renders a different string per mode
interface ModeTextProps {
  explorer?: string;
  analyst?: string;
  visionary?: string;
  skeptic?: string;
  fallback: string;
  className?: string;
}

export function ModeText({ explorer, analyst, visionary, skeptic, fallback, className }: ModeTextProps) {
  const { mode } = useStore();
  const texts: Partial<Record<UserMode, string>> = { explorer, analyst, visionary, skeptic };
  return <span className={className}>{texts[mode] ?? fallback}</span>;
}

// Badge that styles itself based on current mode
export function ModeBadge() {
  const { mode } = useStore();

  const config: Record<UserMode, { label: string; color: string; bg: string }> = {
    explorer: { label: 'Explorer', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' },
    analyst: { label: 'Analyst', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30' },
    visionary: { label: 'Visionary', color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/30' },
    skeptic: { label: 'Skeptic', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' },
    wonder: { label: 'Wonder', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/30' },
  };

  const c = config[mode];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${c.bg} ${c.color}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {c.label} Mode
    </span>
  );
}
