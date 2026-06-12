# Orion Information Architecture

## IA Goal

Orion must make a large psychology / formation ecosystem feel navigable within seconds.

The IA should reduce ambiguity, not amplify it.

## Recommended Top-Level Pages

```txt
/
├── Home
├── Map
├── Guide
├── Library
├── Lab
├── About
└── Project Detail /projects/:id
```

## Page 1 — Home

### Purpose

Explain what Orion is and route users into the right mode.

### Required Sections

1. **Hero**
   - Title: Orion
   - Line: “You are not lost. Only unmapped.”
   - One-sentence explanation.
   - Primary CTA: Start the Guide.
   - Secondary CTA: View the Map.

2. **The Three Doors**
   - Understand the World
   - Understand Yourself
   - Practice Formation

3. **What This Is**
   - A map into a body of psychology, meaning, and self-knowledge projects.

4. **Featured Routes**
   - A few prebuilt routes such as:
     - “I feel distracted.” → dukkha / Project-Loki / Iris
     - “I want to understand myself.” → Janus / ecological-constellation / orpheus
     - “I want meaning.” → sankofa / agoge / Skywalker
     - “I want to understand ambition.” → faust / Mirror Laws external / great-decoupling

5. **Project Universe Snapshot**
   - Count of essays, instruments, worlds, archives.

## Page 2 — Map

### Purpose

Provide the visual overview.

### Layout Options

#### MVP Layout

A filterable constellation grid.

- Center: Orion
- Rings:
  - Essays / Worlds
  - Instruments / Tools
  - Standalone Works
  - Archive / Studies

#### Later Layout

Interactive radial map with:
- gate clusters;
- animated arcs;
- hover previews;
- project maturity indicators.

### Required Filters

- Type: Essay, Instrument, World, Book, Archive
- Status: Published, Functional, Prototype, Research, Archived
- Domain: Meaning, Attention, Ambition, Shadow, Emotion, Personality, Dreams, Myth, Society
- Time: 5 min, 20 min, Deep Dive

## Page 3 — Guide

### Purpose

Route a visitor to the right project.

### User Flow

1. User answers 5–7 questions.
2. System derives a route profile.
3. User receives:
   - Primary recommendation;
   - Two adjacent recommendations;
   - Why these were chosen;
   - Suggested order.

### Example Questions

1. What are you trying to understand right now?
   - myself
   - the world
   - my ambition
   - my attention
   - my emotions
   - my dreams
   - myth/story
   - society

2. Do you want to read, explore, or use a tool?
   - read
   - use a tool
   - listen/watch
   - guided route

3. What tone do you want?
   - grounded science
   - mythic reflection
   - practical protocol
   - narrative journey
   - analytic essay

4. How much time do you want to spend?
   - 5 minutes
   - 20 minutes
   - 60+ minutes
   - ongoing project

5. What kind of result would help?
   - insight about myself
   - language for my situation
   - practical next action
   - historical context
   - conceptual map

6. How intense should it be?
   - light
   - moderate
   - deep
   - uncomfortable but useful

7. Do you want public-facing content or private reflection?
   - public essay/site
   - private tool
   - either

## Page 4 — Library

### Purpose

Index the essays, worlds, and intellectual experiences.

### Recommended Initial Entries

- `sankofa`
- `dukkha`
- `faust`
- `agoge`
- `Ares`
- `great-decoupling`
- `Skywalker`
- `nemo`
- `pinocchio`
- `pantheon`
- `Psi` if classified as narrative/history
- Mirror Laws as external standalone, not absorbed

### Card Fields

- Title
- Repo name
- Type
- Status
- One-sentence value
- Domain chips
- Time/depth indicator
- Link

## Page 5 — Lab

### Purpose

Index self-knowledge instruments and interactive systems.

### Recommended Initial Entries

- `Janus`
- `Iris`
- `orpheus`
- `morpheus-dream-archive`
- `ecological-constellation`
- `Project-Loki`
- `psyche`
- `static`
- `Psi` if classified as interactive companion

### Card Fields

- Tool name
- Input type
- Output type
- Privacy status
- Maturity
- Non-clinical disclaimer, where needed
- Link

## Page 6 — About

### Purpose

Explain the project thesis, boundaries, and relationship to Ben’s broader work.

### Sections

1. What Orion is.
2. What formation means here.
3. Why essays and instruments coexist.
4. Boundaries: not therapy, not diagnosis, not a substitute for professional help.
5. Credits / authorship.
6. Repo / contact links.

## Project Detail Page

### Required Sections

1. Project title and repo name.
2. One-line purpose.
3. “What it gives you.”
4. “How to use it.”
5. Status and maturity.
6. Related projects.
7. Links.
8. Disclaimer if needed.

## Core Taxonomy

### Types

- `portal`
- `essay`
- `instrument`
- `world`
- `book`
- `archive`
- `study`

### Domains

- Meaning
- Formation
- Attention
- Ambition
- Power
- Emotion
- Personality
- Dreams
- Myth
- Society
- Shadow
- Neurodivergence
- History
- Story

### Status

- Concept
- Research
- Prototype
- Functional
- Published
- Archived

### Maturity

1. Idea / placeholder
2. Research or scaffold
3. Prototype
4. Functional / published
5. Mature / flagship

## Navigation Rule

No visitor should be more than two clicks from:

- a recommended project;
- the full project index;
- the guide;
- the About explanation.
