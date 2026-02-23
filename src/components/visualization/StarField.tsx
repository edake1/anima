'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export function StarField() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Generate stars
    const starCount = 150;
    const stars: Star[] = [];
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
      });
    }
    
    // Create star elements
    stars.forEach((star) => {
      const el = document.createElement('div');
      el.className = 'star';
      el.style.left = `${star.x}%`;
      el.style.top = `${star.y}%`;
      el.style.width = `${star.size}px`;
      el.style.height = `${star.size}px`;
      el.style.setProperty('--duration', `${star.duration}s`);
      el.style.setProperty('--min-opacity', `${star.opacity}`);
      el.style.animationDelay = `${star.delay}s`;
      container.appendChild(el);
    });
    
    return () => {
      container.innerHTML = '';
    };
  }, []);
  
  return <div ref={containerRef} className="star-field" />;
}
