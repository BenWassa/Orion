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
