# Orion Build Prompt for AI Coding Agent

Use this prompt to commission implementation work from a coding agent.

---

You are building **Orion**, a public-facing portal and navigation layer for a psychology / formation project ecosystem.

## Product Definition

Orion is not a journaling app, not a therapy app, and not a replacement for the individual projects. It is the map and router for the ecosystem.

Core structure:

- Home
- Map
- Guide
- Library
- Lab
- About
- Project Detail pages or modals

## Build Objective

Create an MVP that:

1. explains Orion clearly;
2. renders all projects from a central registry;
3. separates essays/worlds from instruments/tools;
4. includes a short guided router quiz;
5. includes a visual map or constellation-style overview;
6. links to project repos/live sites;
7. is responsive, accessible, and static-deployable.

## Technical Constraints

- Prefer React + Vite + TypeScript.
- Static deployment only.
- No backend.
- No analytics.
- No private user data.
- Optional localStorage only for saving the last quiz result.
- Project data must live in a central registry file.
- No project card content should be hardcoded inside UI components.

## Design Direction

Aesthetic: mythic observatory, constellation map, dark academic interface, quiet gold/blue accents.

Avoid fantasy-game clutter, therapy-app aesthetics, or generic SaaS dashboards.

## Required Data Model

Create a project registry with fields:

```ts
interface OrionProject {
  id: string
  repoName: string
  title: string
  subtitle: string
  type: 'portal' | 'essay' | 'instrument' | 'world' | 'book' | 'archive' | 'study'
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

## Required Components

- `ProjectCard`
- `ProjectGrid`
- `ProjectFilters`
- `RouteCard`
- `StatusChip`
- `DomainChip`
- `GuideQuestion`
- `GuideResult`
- `MapView`
- `ProjectDetail`
- `Layout`
- `Nav`
- `Footer`

## Required Pages

### Home

Hero copy:

```txt
ORION
You are not lost. Only unmapped.

A map into a body of work on psychology, meaning, attention, emotion, story, and formation.
```

Include three route cards:

1. Understand the World
2. Understand Yourself
3. Practice Formation

### Library

Show essays/worlds/studies.

### Lab

Show instruments/tools.

### Guide

Ask 5–7 questions and recommend projects.

### Map

Show all projects grouped visually by type or domain.

### About

Explain what Orion is and include boundary language:

```txt
Orion and its linked projects are reflective and educational. They are not clinical, diagnostic, or therapeutic tools.
```

## Guide Logic

The guide should map answers to domains and user needs, then score projects by overlap.

Return:

- one primary recommendation;
- two adjacent recommendations;
- short explanation;
- suggested order.

## Accessibility Requirements

- Keyboard navigable.
- Visible focus states.
- High contrast.
- Reduced motion support.
- Map must have list fallback.
- Quiz must not require mouse.

## Acceptance Criteria

The MVP is done when:

- all projects render from registry;
- Home, Map, Guide, Library, Lab, About all exist;
- filters work;
- quiz returns plausible recommendations;
- project detail pages or modals exist;
- mobile layout is usable;
- no clinical claims are made;
- site can deploy statically.

## Do Not Build Yet

- account system;
- database;
- AI chat;
- complex knowledge graph;
- journaling system;
- analytics dashboard;
- admin CMS;
- social features.

Build the simplest durable portal first.
