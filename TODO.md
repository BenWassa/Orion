# Orion Build TODO

This backlog turns the commission docs into an implementation plan. Keep `docs/commission-pack/` as the product source of truth and update this file as work lands.

## Phase 0 — Repo And Product Lock

- [x] Move active app code into `src/`.
- [x] Archive legacy static and scaffold files.
- [x] Move commission docs into `docs/commission-pack/`.
- [x] Choose the primary stack: React, Vite, TypeScript.
- [x] Add TypeScript and build configuration.
- [x] Add project status labels to the registry model.
- [x] Decide deployment target and document it.
- [ ] Create initial GitHub issues from this backlog.

## Phase 1 — Registry And Cards

- [x] Create `src/data/projects.ts`.
- [x] Define the `OrionProject` TypeScript interface.
- [x] Seed the registry with known projects from the commission docs.
- [x] Add status, maturity, type, domain, medium, audience, and link fields.
- [ ] Build reusable `ProjectCard`.
- [ ] Build `ProjectTag` and status chip components.
- [ ] Add type, status, and domain filters.
- [ ] Add empty states for filtered results.

Acceptance check: every project card renders from registry data, with no hardcoded project cards outside the registry.

## Phase 2 — Home Positioning

- [ ] Replace the current prototype map-first screen with a real home page.
- [ ] Add hero copy: "You are not lost. Only unmapped."
- [ ] Add concise explanation of Orion as the map into the project universe.
- [ ] Add primary CTA: Start the Guide.
- [ ] Add secondary CTA: View the Map.
- [ ] Add the three doors: Understand the World, Understand Yourself, Practice Formation.
- [ ] Add featured route cards.
- [ ] Add project universe summary counts from registry data.

Acceptance check: a new visitor can understand what Orion is and where to go within 10 seconds.

## Phase 3 — Library And Lab

- [ ] Add app routing.
- [ ] Build `/library` for essays, worlds, studies, and narrative works.
- [ ] Build `/lab` for instruments, tools, and interactive systems.
- [ ] Share filtering and sorting across Library and Lab.
- [ ] Support dual placement for projects that belong in both views.
- [ ] Add maturity, status, and estimated depth sorting.
- [ ] Link cards to detail pages or external destinations.

Acceptance check: Library and Lab feel meaningfully distinct and all project cards have a useful next action.

## Phase 4 — Guide / Where Are You Router

- [ ] Build `/guide`.
- [ ] Define 5 to 7 non-clinical routing questions.
- [ ] Map answers to domains, tone, intensity, medium, and user needs.
- [ ] Implement scoring logic.
- [ ] Return one primary recommendation and two adjacent recommendations.
- [ ] Explain why the recommendation was chosen.
- [ ] Add suggested order, reset, and copy/share result actions.
- [ ] Add test scenarios for at least 10 manual profiles.

Acceptance check: recommendations feel plausible and never imply diagnosis or therapy.

## Phase 5 — Map View

- [ ] Build `/map`.
- [ ] Choose MVP layout: constellation grid before complex radial animation.
- [ ] Place Orion as the center frame.
- [ ] Group projects by essays/worlds, instruments/tools, standalone works, and archives.
- [ ] Add project maturity and status indicators.
- [ ] Add hover and tap previews.
- [ ] Add keyboard-accessible list fallback.
- [ ] Respect `prefers-reduced-motion`.

Acceptance check: the map is understandable without animation and usable on mobile.

## Phase 6 — Project Detail

- [ ] Build `/projects/:id` or a detail modal.
- [ ] Show repo name, display title, subtitle, type, status, maturity, medium, and audience.
- [ ] Add "What it gives you."
- [ ] Add "How to use it."
- [ ] Add related projects from registry data.
- [ ] Add cautions or disclaimers where needed.
- [ ] Handle missing repo/live links gracefully.

Acceptance check: every registry project has a detail view and related projects are useful.

## Phase 7 — Design System And Polish

- [ ] Define design tokens for color, spacing, type, radius, borders, and shadows.
- [ ] Build shared button styles.
- [ ] Build shared card styles.
- [ ] Build status and domain chip styles.
- [ ] Add focus states.
- [ ] Add reduced-motion CSS.
- [ ] Add subtle constellation background treatment.
- [ ] Verify responsive layout across mobile, tablet, and desktop.

Acceptance check: Orion feels like a calm, precise observatory, not a fantasy menu or generic dashboard.

## Phase 8 — QA And Deployment

- [ ] Test keyboard navigation.
- [ ] Test screen-reader labels.
- [ ] Test color contrast.
- [ ] Test reduced-motion mode.
- [ ] Verify every project link.
- [ ] Add deployment instructions.
- [ ] Add registry update instructions to README.
- [ ] Deploy to GitHub Pages or the selected target.

Acceptance check: primary navigation works, project cards are accessible, and the site is stable on mobile, tablet, and desktop.

## Phase 9 — Optional Enhancements

- [ ] Save the last guide result to localStorage.
- [ ] Add route pages such as `/routes/attention`, `/routes/meaning`, and `/routes/self-knowledge`.
- [ ] Add project timeline/history.
- [ ] Add search.
- [ ] Add keyboard command palette.
- [ ] Add archive mode.
- [ ] Add exportable project inventory JSON.

Do not start Phase 9 until the MVP is deployed and usable.
