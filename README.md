# Orion

Orion is a mythically structured, psychologically adaptive navigation hub that maps users to archetypal growth Gates.

## Status

Active React/TypeScript scaffold with an Express API health check. The previous static HTML implementation is preserved under `archive/`.

## Project Structure

| Path | Purpose |
|---|---|
| `TODO.md` | Implementation backlog derived from the commission docs |
| `src/main.tsx` | React browser entrypoint |
| `src/App.tsx` | Top-level app shell |
| `src/components/` | Feature and UI components |
| `src/types.ts` | Shared TypeScript domain types |
| `src/server/server.ts` | Express API server |
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
npm run dev:server
```

Runs the Express API server on port `5000` by default.

```bash
npm run typecheck
npm run build
```

Type-checks the app and builds both the frontend and backend.

## Current Experience

The app renders the Core Map with five Gates: Skywalker, Sankofa, Agoge, Ares, and Orpheus. Selecting a Gate opens its information panel. The backend currently exposes `GET /api/health`.
