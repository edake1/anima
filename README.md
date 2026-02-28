# PROMETHEUS

Interactive AI futures explorer built with Next.js App Router. PROMETHEUS combines curated expert/scenario content with live prediction-market signals from Metaculus.

## What it includes

- Timeline of major AI milestones and projected events
- Expert profiles with stance analysis (optimist / cautious / skeptic / neutral)
- Prediction pages with live probability fetches and trend sparklines
- Concept library and scenario exploration pages
- Global dark-theme visual system with animated background components

## Live data architecture

Metaculus data is integrated with graceful fallback:

- Client hook: `src/hooks/useMetaculusPrediction.ts`
- Service layer: `src/lib/services/metaculus.ts`
- API proxy route: `src/app/api/metaculus/route.ts`

Behavior:

- Tries `/api/metaculus?id=<id>` first (same-origin, cache-friendly)
- Falls back to direct Metaculus endpoint if needed
- Stores local snapshot history in `localStorage` (up to 90 days)
- Renders static prediction data when live fetch is unavailable

## Tech stack

- Next.js 16 (App Router)
- React 19 + TypeScript 5
- Tailwind CSS 4
- Framer Motion
- Zustand
- shadcn/ui + Radix UI
- Bun runtime/scripts

## Getting started

```bash
bun install
bun run dev
```

App runs on [http://localhost:3000](http://localhost:3000).

## Scripts

- `bun run dev` — Start local development server and write logs to `dev.log`
- `bun run build` — Production build (includes standalone static/public copy step)
- `bun run start` — Start standalone production server and write logs to `server.log`
- `bun run lint` — Run ESLint

## Key routes

- `/` — Landing page
- `/timeline` — AI evolution timeline
- `/experts` — Expert overview
- `/predictions` — Predictions dashboard (live + fallback)
- `/concepts` — Concept index
- `/scenarios` — Scenario explorer
- `/sources` — Source index

## Project structure

```text
src/
	app/                    # App Router pages + API routes
	components/             # Shared UI and domain components
		interactive/          # Prediction widgets, trend displays
		visualization/        # Starfield, timeline visuals, gauges
		layout/               # Navigation, providers, modal shell
	hooks/                  # Client hooks (including Metaculus hook)
	lib/
		data/                 # Curated static seed datasets
		services/             # External API integrations
		stores/               # Zustand stores
```

## Notes for local development

- If you see hydration warnings mentioning `data-gr-*` attributes on `<body>`, those are often caused by browser extensions mutating DOM before React hydrates.
- Root layout is configured with hydration warning suppression for document-level attributes to avoid false-positive noise.

## Deployment

The app is configured for Vercel-style workflows and also supports standalone Next.js output for Bun-based runtime startup.
