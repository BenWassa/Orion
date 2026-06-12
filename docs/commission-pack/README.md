# Orion Commission Pack

This folder contains a repo-ready product commission and sprint plan for rebuilding Orion as the portal / map for Ben Haddon’s psychology and formation project ecosystem.

## Files

- `00_ORION_PRODUCT_COMMISSION.md` — full product definition, goals, non-goals, audience, and MVP criteria.
- `01_ORION_INFORMATION_ARCHITECTURE.md` — page structure, navigation, taxonomy, and user flow.
- `02_ORION_PROJECT_REGISTRY_DRAFT.md` — draft TypeScript-style project registry.
- `03_ORION_SPRINT_PLAN.md` — sprint-by-sprint build plan.
- `04_ORION_DESIGN_SYSTEM_BRIEF.md` — visual, copy, component, motion, and accessibility direction.
- `05_ORION_BUILD_PROMPT.md` — condensed implementation prompt for an AI coding agent.
- `06_ORION_UPGRADE_REVIEW.md` — current completion notes, risks, and recommended next implementation sequence.

## Recommended Repo Location

Place these in one of:

- `Orion/04-docs/product/`
- `Orion/docs/product/`
- `Orion/planning/`

Then begin with Sprint 0.

## Current Implementation Note

Sprint 0 is complete enough for implementation to proceed: the repo is a React/Vite/TypeScript static app, the legacy static implementation is archived, and the project registry exists at `src/data/projects.ts`.

The next durable upgrade is Sprint 1: connect reusable project cards, status/domain chips, and filters to the registry before building the full Home, Library, Lab, Guide, and Map surfaces.
