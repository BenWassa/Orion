# Orion Sprint Plan

## Sprint Philosophy

Build Orion as a lightweight, durable portal. The risk is overbuilding. Every sprint should increase clarity, not complexity.

The product should be useful after Sprint 2, impressive after Sprint 4, and polished after Sprint 6.

## Sprint 0 — Product Lock and Repo Preparation

Status: complete enough to proceed. The active repo is now React/Vite/TypeScript, static-deployable, and registry-backed.

### Goal

Freeze the product definition and prepare the repo for focused implementation.

### Deliverables

- Add commission docs to repo.
- Confirm project taxonomy.
- Decide stack: React/Vite/TypeScript or static HTML/CSS/JS.
- Create `/docs` or `/src` architecture depending on stack.
- Archive obsolete template-generated status files if they create confusion.
- Decide whether Orion is deployed from `/docs` or build output.

### Tasks

- [x] Add `00_ORION_PRODUCT_COMMISSION.md`.
- [x] Add `01_ORION_INFORMATION_ARCHITECTURE.md`.
- [x] Add `02_ORION_PROJECT_REGISTRY_DRAFT.md`.
- [x] Add `03_ORION_SPRINT_PLAN.md`.
- [x] Add project status labels.
- [x] Create `src/data/projects.ts` or `data/projects.json`.
- [ ] Create initial issue list from this sprint plan.

### Acceptance Criteria

- Repo has one clear source of truth for what Orion is.
- Project list is present in machine-readable form.
- No one can confuse Orion with a journaling app or separate product universe.

### Completion Notes

- Product source of truth: `docs/commission-pack/`.
- Implementation source of truth for project inventory: `src/data/projects.ts`.
- Current deployment direction: static build output from Vite.
- Backend/server work has been intentionally removed from the active path.
- Remaining Sprint 0 administrative task: create GitHub issues from `TODO.md` or this sprint plan.

## Sprint 1 — Data Registry and Card System

Status: partially complete. Registry data and types exist; UI consumption is still pending.

### Goal

Create the project registry and reusable project cards.

### Deliverables

- Machine-readable project registry.
- Project card component.
- Basic list view.
- Type/status/domain filters.

### Tasks

- [x] Implement `projects.ts` or `projects.json`.
- [x] Define TypeScript interface or schema.
- [ ] Build `ProjectCard`.
- [ ] Build `ProjectTag` / chip components.
- [ ] Add filters for type, status, domain.
- [ ] Add placeholder links for repo/live URLs.

### Implementation Notes

- Build shared card/chip/filter components before adding pages so Home, Library, Lab, Map, Guide results, and Project Detail can reuse the same presentation model.
- The current visible Core Map still uses hardcoded Gate data. Replace or bridge it after registry-backed card and filter primitives exist.
- Add graceful handling for missing `repoUrl` and `liveUrl` rather than blocking card rendering.

### Acceptance Criteria

- All known projects render from registry data.
- No project card is hardcoded outside the registry.
- Filters work without breaking mobile layout.
- Project status is visible.

## Sprint 2 — Home Page and Core Positioning

### Goal

Make Orion understandable within 10 seconds.

### Deliverables

- Landing page.
- Hero section.
- Three primary paths.
- Featured route cards.
- Project universe snapshot.

### Tasks

- [ ] Build hero: Orion + “You are not lost. Only unmapped.”
- [ ] Add one-sentence product explanation.
- [ ] Add CTAs: Start the Guide / View the Map.
- [ ] Add three route cards:
  - Understand the World
  - Understand Yourself
  - Practice Formation
- [ ] Add featured routes.
- [ ] Add project count summary.

### Acceptance Criteria

- A new visitor can explain Orion after reading the hero and first section.
- Main CTA routes correctly.
- No mystical copy without practical navigation.

## Sprint 3 — Library and Lab Views

### Goal

Separate essays/worlds from instruments/tools.

### Deliverables

- Library page.
- Lab page.
- Shared filtering system.
- Short intro copy for each.

### Tasks

- [ ] Build `/library`.
- [ ] Build `/lab`.
- [ ] Assign projects to Library/Lab based on registry type.
- [ ] Allow dual placement if needed.
- [ ] Add empty-state handling.
- [ ] Add sorting: maturity, status, title.

### Acceptance Criteria

- Library and Lab feel meaningfully distinct.
- `Psi`, `static`, and `pantheon` can be placed without awkwardness.
- All project cards link to details or external destinations.

## Sprint 4 — Guide / “Where Are You?” Router

### Goal

Create the guided recommendation experience.

### Deliverables

- Quiz page.
- Scoring logic.
- Recommendation result page.
- Primary + adjacent recommendations.

### Tasks

- [ ] Define 5–7 questions.
- [ ] Map answers to domains and user needs.
- [ ] Create scoring function.
- [ ] Return top project + two adjacent projects.
- [ ] Explain recommendation in human-readable language.
- [ ] Add reset and share/copy result.

### Acceptance Criteria

- Results feel plausible for at least 10 manual test scenarios.
- Every result includes a concrete next click.
- Quiz works without storing private data.
- No answer claims diagnosis or therapy.

## Sprint 5 — Map View / Constellation Interface

### Goal

Build the visual map without sacrificing usability.

### Deliverables

- Map page.
- Visual grouping by type/domain.
- Hover/click previews.
- Reduced-motion fallback.

### Tasks

- [ ] Choose MVP map layout: radial, constellation grid, or clustered cards.
- [ ] Show Orion at center.
- [ ] Place project clusters around it.
- [ ] Add project maturity/status visual indicators.
- [ ] Add hover/tap preview.
- [ ] Add list fallback for accessibility and mobile.

### Acceptance Criteria

- Map is understandable even without animation.
- Keyboard users can access all projects.
- Mobile map does not become unusable.
- Reduced-motion mode disables nonessential animation.

## Sprint 6 — Project Detail Pages

### Goal

Make every project legible and connected.

### Deliverables

- `/projects/:id` route or modal detail view.
- Related projects section.
- Status/maturity display.
- Link handling.

### Tasks

- [ ] Build project detail template.
- [ ] Add “What it gives you.”
- [ ] Add “How to use it.”
- [ ] Add related projects from registry.
- [ ] Add cautions/disclaimers where needed.
- [ ] Add repo and live links.

### Acceptance Criteria

- Every registry project has a detail view.
- Missing links do not break UI.
- Related projects are useful, not arbitrary.

## Sprint 7 — Visual Polish and Design System

### Goal

Make Orion feel like an observatory: calm, mythic, precise.

### Deliverables

- Design tokens.
- Typography scale.
- Color system.
- Motion rules.
- Responsive polish.

### Tasks

- [ ] Define palette.
- [ ] Define spacing scale.
- [ ] Define card styles.
- [ ] Define button styles.
- [ ] Define status chips.
- [ ] Add subtle constellation background.
- [ ] Add focus styles.
- [ ] Add reduced-motion CSS.

### Acceptance Criteria

- The site feels cohesive.
- Text remains highly readable.
- Motion is tasteful and optional.
- UI does not feel like generic SaaS or fantasy game clutter.

## Sprint 8 — Accessibility, QA, and Deployment

### Goal

Make Orion publicly safe and stable.

### Deliverables

- Accessibility pass.
- Link QA.
- Mobile QA.
- Deployment.
- README update.

### Tasks

- [ ] Test keyboard navigation.
- [ ] Test screen-reader labels.
- [ ] Test color contrast.
- [ ] Test reduced-motion mode.
- [ ] Verify every project link.
- [ ] Add deployment instructions.
- [ ] Update README.
- [ ] Deploy to GitHub Pages.

### Acceptance Criteria

- No broken primary nav links.
- No inaccessible project cards.
- Site works on mobile, tablet, desktop.
- README explains how to update the project registry.

## Sprint 9 — Optional Enhancements

Only after MVP is complete.

### Possible Enhancements

- Save last guide result to localStorage.
- Add route pages such as `/routes/attention`, `/routes/meaning`, `/routes/self-knowledge`.
- Add timeline/history of projects.
- Add search.
- Add keyboard command palette.
- Add “archive mode” for completed/parked projects.
- Add exportable project inventory JSON.

### Rule

Do not begin Sprint 9 until the MVP is deployed and usable.

## Suggested Sprint Order Summary

1. Sprint 0 — Product Lock
2. Sprint 1 — Registry + Cards
3. Sprint 2 — Home
4. Sprint 3 — Library + Lab
5. Sprint 4 — Guide
6. Sprint 5 — Map
7. Sprint 6 — Detail Pages
8. Sprint 7 — Visual Polish
9. Sprint 8 — QA + Deployment
10. Sprint 9 — Optional Enhancements
