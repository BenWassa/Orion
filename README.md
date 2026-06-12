# Orion

Orion is a mythically structured, psychologically adaptive navigation hub that maps users to archetypal growth Gates.

## Status

Active React/TypeScript scaffold for a static-deployable portal. The previous static HTML implementation is preserved under `archive/`.

## Project Structure

| Path | Purpose |
|---|---|
| `TODO.md` | Implementation backlog derived from the commission docs |
| `src/main.tsx` | React browser entrypoint |
| `src/App.tsx` | Top-level app shell |
| `src/components/` | Feature and UI components |
| `src/data/projects.ts` | Central machine-readable project registry |
| `src/types.ts` | Shared TypeScript domain types |
| `docs/commission-pack/` | Product, architecture, sprint, and design planning docs |
| `archive/legacy-static/` | Earlier static HTML/CSS/JS implementation |
| `archive/original-scaffold/` | Previous scaffold and utility scripts |

## Commands

```bash
npm install
npm run dev
```

Runs the frontend locally with Vite.

```bash
npm run typecheck
npm run build
```

Type-checks the app and builds the static frontend.

## Current Experience

The app renders the Core Map with five Gates: Skywalker, Sankofa, Agoge, Ares, and Orpheus. Selecting a Gate opens its information panel. Project inventory now lives in `src/data/projects.ts` and should be the source of truth for cards, filters, guide results, and future detail pages.

## Upgrade Path

The next implementation pass should complete Sprint 1 from `docs/commission-pack/03_ORION_SPRINT_PLAN.md`: reusable project cards, chips, filters, and empty states driven by `src/data/projects.ts`.

After Sprint 1, build the real Home page, then Library/Lab, Guide, Map, project details, design-system polish, and QA/deployment in that order. Current completion and risk notes live in `docs/commission-pack/06_ORION_UPGRADE_REVIEW.md`.
