'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpStatProps {
  /** e.g. "55%", "73+", "60+" or plain "9" */
  value: string;
  className?: string;
  duration?: number; // ms
}

function parseValue(raw: string): { num: number; prefix: string; suffix: string } {
  const match = raw.match(/^([^\d]*)(\d+)([^\d]*)$/);
  if (!match) return { num: 0, prefix: '', suffix: raw };
  return { num: parseInt(match[2], 10), prefix: match[1], suffix: match[3] };
}

export function CountUpStat({ value, className, duration = 1600 }: CountUpStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const { num, prefix, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    let raf: number;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * num));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, num, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
