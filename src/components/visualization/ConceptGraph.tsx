'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { getConceptGraph } from '@/lib/data/concepts';
import { concepts } from '@/lib/data/concepts';

// ─── Visual config ────────────────────────────────────────────────────────────

const CAT_COLOR: Record<string, string> = {
  architecture: '#8b5cf6',
  capability:   '#3b82f6',
  safety:       '#10b981',
  philosophy:   '#f59e0b',
  economics:    '#ec4899',
  society:      '#06b6d4',
  future:       '#f43f5e',
};

const CAT_LABEL: Record<string, string> = {
  architecture: 'Architecture',
  capability:   'Capabilities',
  safety:       'Safety',
  philosophy:   'Philosophy',
  economics:    'Economics',
  society:      'Society',
  future:       'Future',
};

const CAT_ORDER = ['architecture', 'capability', 'safety', 'philosophy', 'economics', 'society', 'future'];

// ─── Layout math ──────────────────────────────────────────────────────────────

const W = 860, H = 660, CX = 430, CY = 330, R_CLUSTER = 240, R_NODE = 66;

interface Point { x: number; y: number }

function buildLayout(): { positions: Record<string, Point>; centroids: Record<string, Point> } {
  const centroids: Record<string, Point> = {};
  CAT_ORDER.forEach((cat, i) => {
    const angle = -Math.PI / 2 + (i / CAT_ORDER.length) * 2 * Math.PI;
    centroids[cat] = {
      x: CX + R_CLUSTER * Math.cos(angle),
      y: CY + R_CLUSTER * Math.sin(angle),
    };
  });

  const byCategory: Record<string, string[]> = {};
  CAT_ORDER.forEach(cat => { byCategory[cat] = []; });
  concepts.forEach(c => { byCategory[c.category]?.push(c.id); });

  const positions: Record<string, Point> = {};
  Object.entries(byCategory).forEach(([cat, ids]) => {
    const c = centroids[cat];
    ids.forEach((id, i) => {
      const angle = -Math.PI / 2 + (i / Math.max(ids.length, 1)) * 2 * Math.PI;
      const r = ids.length <= 1 ? 0 : R_NODE;
      positions[id] = { x: c.x + r * Math.cos(angle), y: c.y + r * Math.sin(angle) };
    });
  });

  return { positions, centroids };
}

// Deduplicate bidirectional links — keep one line per pair, highest strength wins
function dedupeLinks(raw: ReturnType<typeof getConceptGraph>['links']) {
  const seen = new Map<string, typeof raw[0]>();
  for (const link of raw) {
    const key = [link.source, link.target].sort().join('--');
    const existing = seen.get(key);
    if (!existing || link.strength > existing.strength) seen.set(key, link);
  }
  return [...seen.values()];
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ConceptGraph() {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);

  const { positions, centroids } = useMemo(() => buildLayout(), []);
  const { links: rawLinks } = useMemo(() => getConceptGraph(), []);
  const links = useMemo(() => dedupeLinks(rawLinks), [rawLinks]);

  // Build the set of IDs connected to the hovered node (including itself)
  const connectedSet = useMemo(() => {
    if (!hovered) return new Set<string>();
    const concept = concepts.find(c => c.id === hovered);
    if (!concept) return new Set([hovered]);
    return new Set([hovered, ...concept.connections.map(c => c.conceptId)]);
  }, [hovered]);

  const hoveredConcept = hovered ? concepts.find(c => c.id === hovered) : null;

  return (
    <div className="w-full space-y-4">
      {/* SVG canvas */}
      <div className="w-full overflow-x-auto rounded-2xl glass border border-violet-500/10">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full"
          style={{ minWidth: 560, display: 'block' }}
        >
          {/* Radial guide lines from center to category centroids */}
          {CAT_ORDER.map(cat => {
            const c = centroids[cat];
            if (!c) return null;
            return (
              <line
                key={`guide-${cat}`}
                x1={CX} y1={CY}
                x2={c.x} y2={c.y}
                stroke={CAT_COLOR[cat]}
                strokeOpacity={0.06}
                strokeWidth={1}
              />
            );
          })}

          {/* Connection lines */}
          {links.map(link => {
            const from = positions[link.source];
            const to = positions[link.target];
            if (!from || !to) return null;
            const active = !hovered || (connectedSet.has(link.source) && connectedSet.has(link.target));
            const color = active && hovered ? CAT_COLOR[concepts.find(c => c.id === link.source)?.category ?? ''] ?? '#8b5cf6' : '#3f3f46';
            return (
              <line
                key={`${link.source}--${link.target}`}
                x1={from.x} y1={from.y}
                x2={to.x} y2={to.y}
                stroke={color}
                strokeWidth={link.strength * 2}
                strokeOpacity={active ? (hovered ? 0.65 : 0.22) : 0.05}
                style={{ transition: 'stroke-opacity 0.2s, stroke 0.2s' }}
              />
            );
          })}

          {/* Category centroid labels */}
          {CAT_ORDER.map(cat => {
            const c = centroids[cat];
            if (!c) return null;
            return (
              <text
                key={`label-${cat}`}
                x={c.x}
                y={c.y}
                textAnchor="middle"
                fill={CAT_COLOR[cat]}
                fillOpacity={hovered ? 0.25 : 0.45}
                fontSize={9}
                fontWeight={700}
                fontFamily="Inter, system-ui, sans-serif"
                style={{ textTransform: 'uppercase', letterSpacing: '0.08em', pointerEvents: 'none', transition: 'fill-opacity 0.2s' }}
              >
                {CAT_LABEL[cat]}
              </text>
            );
          })}

          {/* Concept nodes */}
          {concepts.map(concept => {
            const pos = positions[concept.id];
            if (!pos) return null;

            const color = CAT_COLOR[concept.category] ?? '#8b5cf6';
            const isHovered = hovered === concept.id;
            const isConnected = connectedSet.has(concept.id);
            const dim = hovered !== null && !isHovered && !isConnected;

            // Node radius scales with connection count
            const r = Math.min(5 + concept.connections.length * 0.9, 9);
            const displayR = isHovered ? r + 4 : r;

            return (
              <g
                key={concept.id}
                transform={`translate(${pos.x}, ${pos.y})`}
                onMouseEnter={() => setHovered(concept.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => router.push(`/concepts/${concept.id}`)}
                style={{ cursor: 'pointer' }}
              >
                {/* Glow ring on hover */}
                {isHovered && (
                  <circle
                    r={displayR + 6}
                    fill={color}
                    fillOpacity={0.18}
                  />
                )}

                {/* Connected ring on hover (secondary nodes) */}
                {isConnected && !isHovered && hovered && (
                  <circle
                    r={r + 3}
                    fill="none"
                    stroke={color}
                    strokeWidth={1}
                    strokeOpacity={0.5}
                  />
                )}

                {/* Main dot */}
                <circle
                  r={displayR}
                  fill={color}
                  fillOpacity={dim ? 0.12 : isHovered ? 1 : isConnected && hovered ? 0.95 : 0.75}
                  stroke={isHovered ? 'white' : 'none'}
                  strokeWidth={isHovered ? 1.5 : 0}
                  style={{ transition: 'all 0.18s ease' }}
                />

                {/* Name label — always show for hovered, show for high-connection nodes */}
                {(isHovered || (!dim && concept.connections.length >= 4)) && (
                  <>
                    <rect
                      x={-concept.name.length * 3.1}
                      y={-displayR - 18}
                      width={concept.name.length * 6.2}
                      height={13}
                      rx={3}
                      fill="rgba(3,0,20,0.85)"
                      style={{ pointerEvents: 'none' }}
                    />
                    <text
                      y={-displayR - 8}
                      textAnchor="middle"
                      fill={isHovered ? 'white' : color}
                      fillOpacity={isHovered ? 1 : 0.7}
                      fontSize={isHovered ? 10.5 : 9}
                      fontWeight={isHovered ? 700 : 600}
                      fontFamily="Inter, system-ui, sans-serif"
                      style={{ pointerEvents: 'none' }}
                    >
                      {concept.name}
                    </text>
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Info panel */}
      <div className="h-24 glass rounded-2xl border border-violet-500/10 flex items-center px-6 gap-5 transition-all">
        {hoveredConcept ? (
          <>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `${CAT_COLOR[hoveredConcept.category]}22`, border: `1px solid ${CAT_COLOR[hoveredConcept.category]}44` }}
            >
              <div className="w-3 h-3 rounded-full" style={{ background: CAT_COLOR[hoveredConcept.category] }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-semibold text-white">{hoveredConcept.name}</p>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: `${CAT_COLOR[hoveredConcept.category]}22`, color: CAT_COLOR[hoveredConcept.category] }}>
                  {CAT_LABEL[hoveredConcept.category]}
                </span>
              </div>
              <p className="text-xs text-zinc-400 line-clamp-2">{hoveredConcept.shortDescription}</p>
            </div>
            <button
              onClick={() => router.push(`/concepts/${hoveredConcept.id}`)}
              className="shrink-0 text-xs font-medium px-4 py-2 rounded-xl transition-all hover:opacity-90"
              style={{ background: `${CAT_COLOR[hoveredConcept.category]}22`, color: CAT_COLOR[hoveredConcept.category], border: `1px solid ${CAT_COLOR[hoveredConcept.category]}44` }}
            >
              Open →
            </button>
          </>
        ) : (
          <p className="text-sm text-zinc-600 mx-auto">Hover a node to preview · Click to open the full concept page</p>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-1">
        {CAT_ORDER.map(cat => (
          <div key={cat} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: CAT_COLOR[cat] }} />
            <span className="text-xs text-zinc-500">{CAT_LABEL[cat]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
