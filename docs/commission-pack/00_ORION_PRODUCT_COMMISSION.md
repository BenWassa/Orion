# Orion Product Commission

## Working Title

**Orion — The Map of Formation**

## One-Sentence Product Definition

Orion is the public-facing navigation layer for Ben Haddon’s psychology, formation, meaning, and self-knowledge projects: a beautiful, lightweight portal that helps a visitor understand where they are, what they need, and which essay, instrument, or world to enter next.

## Core Thesis

The existing project universe is not a pile of unrelated experiments. It is a structured body of work around a central question:

> How do people understand themselves, resist deformation, and become more capable?

Orion is not the answer to that question. Orion is the map into the answer.

## Product Role

Orion should function as:

1. **Portal** — the entrypoint into the project world.
2. **Map** — a clear taxonomy of essays, instruments, and mythic worlds.
3. **Router** — a lightweight quiz or guided path that sends visitors to the right destination.
4. **Portfolio Frame** — a professional, coherent presentation of Ben’s intellectual and technical work.
5. **Living Index** — a maintainable project registry that can grow without becoming chaotic.

Orion should not become:

- a massive journaling app;
- a replacement for the individual projects;
- a second Mirror Laws;
- a knowledge graph science project;
- a vague mystical experience with no usable navigation;
- a clinical or therapeutic product.

## Strategic Context

Mirror Laws is standalone. Orion exists for the broader psychology / formation ecosystem.

The core distinction:

- **Mirror Laws** = the book.
- **Orion** = the map.
- **Essays / Worlds** = the library.
- **Instruments** = the lab.
- **User paths** = the guided route through the library and lab.

## Primary Audiences

### 1. The Curious Visitor

Someone who encounters one project and wants to understand the wider world.

Needs:
- quick orientation;
- clear entrypoints;
- minimal jargon;
- an immediate recommendation.

### 2. The Self-Explorer

Someone looking for reflective tools, personal insight, or conceptual language for their own development.

Needs:
- guided routing;
- emotionally resonant but non-clinical framing;
- clear boundaries around diagnostics;
- tools that feel safe, reflective, and useful.

### 3. The Professional Reviewer

A recruiter, collaborator, consultant, advisor, or peer trying to assess Ben’s work.

Needs:
- coherent portfolio presentation;
- proof of execution;
- technical credibility;
- concise project summaries;
- visible maturity and restraint.

### 4. Ben

The builder maintaining the ecosystem.

Needs:
- a registry that prevents sprawl;
- a forcing function for project status;
- a homepage that says what the work is;
- a clean place to add, archive, or reclassify projects.

## Brand Promise

> You are not lost. Only unmapped.

Orion should feel like entering a quiet observatory: mythic, intelligent, spacious, and precise. It should avoid both sterile dashboard aesthetics and overblown fantasy UI.

## Core User Jobs

1. **“I want to understand this project universe.”**
   - Show the map, the categories, and the thesis.

2. **“I want to know where to start.”**
   - Offer a short guided routing experience.

3. **“I want to explore the essays.”**
   - Provide an elegant library view.

4. **“I want to try the tools.”**
   - Provide a lab / instruments view.

5. **“I want to see what Ben has built.”**
   - Provide project cards with status, type, maturity, links, and one-sentence value.

## Top-Level Product Structure

### Home

A strong thesis page:

- Hero: “You are not lost. Only unmapped.”
- Short explanation of Orion.
- Three primary paths:
  1. Understand the World
  2. Understand Yourself
  3. Practice Formation
- Secondary link: View All Projects.

### Map

A visual constellation / wheel view of the project universe.

Must show:
- essays / worlds;
- instruments / tools;
- standalone works;
- project status;
- relationship between projects.

Should not require complicated animation to be useful.

### Guide / Quiz

A short “Where are you?” router.

The router should ask 5–7 questions and recommend:
- one primary project;
- two adjacent projects;
- a reason for the recommendation;
- next action.

### Library

Essay / world index.

Likely includes:
- sankofa
- dukkha
- faust
- agoge
- Ares
- great-decoupling
- Skywalker
- nemo
- pinocchio
- pantheon
- Psi, if treated as a narrative history work rather than a tool

### Lab

Instrument / tool index.

Likely includes:
- Janus
- Iris
- orpheus
- morpheus-dream-archive
- ecological-constellation
- Project-Loki
- psyche
- static
- Psi, if treated as an interactive psychology companion

### Project Detail

Each project should have a detail page or modal with:

- repo name;
- display title;
- one-line purpose;
- type;
- status;
- maturity;
- medium;
- audience;
- what it gives the user;
- source link;
- live link, if available;
- relation to Orion;
- next recommended project.

## Content Model

All project data should live in a registry, preferably JSON or TypeScript.

Minimum fields:

```ts
interface OrionProject {
  id: string
  repoName: string
  title: string
  subtitle: string
  type: 'essay' | 'instrument' | 'world' | 'book' | 'archive' | 'portal'
  domain: string[]
  userNeed: string[]
  status: 'concept' | 'research' | 'prototype' | 'functional' | 'published' | 'archived'
  maturity: 1 | 2 | 3 | 4 | 5
  medium: string[]
  audience: string[]
  description: string
  routePitch: string
  repoUrl?: string
  liveUrl?: string
  nextProjects?: string[]
  cautions?: string[]
}
```

## Primary Navigation

Keep top navigation minimal:

- Home
- Map
- Guide
- Library
- Lab
- About

Do not expose every project in the global nav.

## Tone and Voice

The voice should be:

- lucid;
- mythic but not vague;
- psychologically serious but not clinical;
- elegant;
- restrained;
- non-hype;
- non-therapy-coded.

Avoid:

- “unlock your destiny” language;
- overuse of “soul”;
- grandiose claims;
- diagnostic promises;
- startup SaaS copy;
- gamified self-improvement clichés.

## UX Principles

1. **Orientation before immersion.**
   Visitors must understand what Orion is within 10 seconds.

2. **Map first, spectacle second.**
   Visual design must serve navigation.

3. **Every route must terminate in a concrete project.**
   The guide should never produce a vague archetype without a next step.

4. **No clinical ambiguity.**
   Reflective tools must clearly avoid diagnostic or therapeutic claims.

5. **Project cards are the core reusable unit.**
   Build the whole product around clean project metadata.

6. **Archive is honorable.**
   Older or IP-dependent projects can be displayed as studies, not hidden as failures.

## Visual Direction

Aesthetic:

- observatory;
- constellation map;
- dark academic interface;
- mythic but modern;
- quiet gold / blue accents;
- high readability;
- subtle motion.

Reference mood:

- celestial map;
- museum interface;
- personal research archive;
- calm intellectual product;
- not fantasy game UI.

## Technical Direction

Recommended stack:

- React + Vite + TypeScript
- Tailwind or CSS modules
- Static deployment via GitHub Pages
- JSON/TS registry as single source of truth
- No backend for MVP
- Optional localStorage only for quiz result persistence

## Non-Negotiables

- Mobile responsive.
- Keyboard navigable.
- Reduced-motion support.
- Project registry separated from UI.
- No private data embedded.
- No clinical claims.
- No dependency on APIs for basic use.
- All live links must degrade gracefully if missing.

## MVP Definition

The MVP is complete when Orion can:

1. explain the project universe clearly;
2. display all projects from a registry;
3. route users via a short guide;
4. show Library and Lab views;
5. link to live repos/sites;
6. distinguish published, functional, prototype, research, and archived projects;
7. work well on mobile and desktop.

## Success Criteria

A successful Orion visitor can answer:

- What is this body of work about?
- What should I click first?
- Which projects are essays vs tools?
- Which projects are mature vs experimental?
- What does this say about Ben as a thinker and builder?

A successful Ben can answer:

- Which projects are active?
- Which projects deserve public attention?
- Which projects are archive/study pieces?
- What should be added next, if anything?

