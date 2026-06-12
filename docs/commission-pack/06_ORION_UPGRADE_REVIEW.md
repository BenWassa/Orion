# Orion Upgrade Review

Date: 2026-06-12

## Current State

Orion is set up as a React/Vite/TypeScript static app. The active product direction is a lightweight portal and router for the project ecosystem, not a backend application or journaling product.

The repo now has a central machine-readable registry at `src/data/projects.ts` and shared project types in `src/types.ts`. The existing UI still renders the older Core Map prototype, so the next upgrade should connect the registry to reusable components before broad page work begins.

## Completed Work Notes

- Commission docs live in `docs/commission-pack/`.
- Legacy static and original scaffold files live in `archive/`.
- Backend/server scripts and configs are out of the active build path.
- `npm run typecheck` and `npm run build` pass after the static setup.
- The project registry includes type, status, maturity, domain, user need, medium, audience, description, route pitch, and optional caution fields.
- Graphify has been updated after the code setup commit, but its report still mostly reflects legacy/static utility structure.

## Recommended Upgrade Sequence

1. Complete Sprint 1 primitives.
   Build `ProjectCard`, `ProjectTag` or chip components, `StatusChip`, `DomainChip`, `ProjectGrid`, filters, and empty states from `src/data/projects.ts`.

2. Replace the prototype landing surface.
   Build the Sprint 2 Home page with the commission hero copy, the three doors, featured routes, and project counts derived from registry data.

3. Add routing and page shells.
   Introduce the shared `Layout`, `Nav`, and `Footer`, then add `/library`, `/lab`, `/guide`, `/map`, `/about`, and `/projects/:id`.

4. Build Library and Lab from the same registry.
   Library should start with essays, worlds, studies, and narrative works. Lab should start with instruments and tools. Treat `Psi`, `static`, and `pantheon` as explicit classification decisions instead of hiding ambiguity in the UI.

5. Implement the Guide after cards exist.
   The recommendation result should reuse project cards and score by overlap between answers, `domain`, and `userNeed`. Keep all language non-clinical.

6. Rebuild the Map last among core pages.
   Use a constellation grid/list hybrid before attempting radial animation. The current hardcoded Core Map can be retired or adapted once the registry-backed map exists.

7. Run design-system and QA passes.
   Add tokens, focus styles, reduced-motion support, responsive checks, link QA, and deployment docs before publishing.

## Immediate Implementation Checklist

- [ ] Add `src/components/ProjectCard/ProjectCard.tsx`.
- [ ] Add `src/components/ProjectCard/ProjectCard.css`.
- [ ] Add shared chip components for type, status, and domain.
- [ ] Add `src/components/ProjectGrid/ProjectGrid.tsx`.
- [ ] Add `src/components/ProjectFilters/ProjectFilters.tsx`.
- [ ] Derive filter options from `ORION_PROJECTS` rather than hardcoding them.
- [ ] Add empty-state copy for no filter matches.
- [ ] Add graceful disabled/missing-link behavior for projects without URLs.
- [ ] Replace hardcoded Gate/project copy only after registry-backed components are available.

## Risks To Track

- Registry content is seeded from the commission draft and still needs repo/live URL audit.
- Some project classifications remain product decisions, especially `Psi`, `static`, and `pantheon`.
- The current visible UI is not yet representative of the final IA.
- Npm audit reported two dependency findings during setup; resolve separately so dependency churn does not distract from MVP architecture.
- Graphify currently provides limited active-app architecture value because the React app is still small.

## Definition Of Done For The Next Upgrade

The next repo upgrade is complete when all visible project lists render from `src/data/projects.ts`, cards and filters are reusable across pages, no project card content is hardcoded in UI components, and `npm run typecheck` plus `npm run build` pass.
