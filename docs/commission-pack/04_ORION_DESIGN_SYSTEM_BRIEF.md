# Orion Design System Brief

## Design Goal

Orion should feel like a mythic observatory for self-knowledge: calm, precise, spacious, and navigable.

It should not feel like:

- a fantasy RPG menu;
- a therapy app;
- a startup dashboard;
- a generic portfolio page;
- a psychedelic experience;
- a cluttered knowledge graph.

## Visual Keywords

- Observatory
- Constellation
- Archive
- Compass
- Map
- Night sky
- Gold linework
- Quiet scholarship
- Mythic restraint
- Spatial clarity

## Palette Direction

### Base

- Deep navy / near-black background.
- Slightly warmer dark panels.
- Soft off-white text.

### Accents

- Muted gold for primary actions and constellation lines.
- Cool blue for links / active states.
- Soft violet for depth / mythic accent.
- Desaturated green for “functional / live” status.
- Amber for “prototype / research” status.
- Grey for archived status.

## Typography

Recommended pairing:

- Serif or semi-serif for hero / mythic headings.
- Clean sans-serif for interface and body.

Rules:

- Never sacrifice readability for atmosphere.
- Body copy should be large enough for long reading.
- Project cards should be scannable.
- Avoid decorative type in dense UI.

## Layout Principles

1. **Wide breathing room.**
   Orion should not feel cramped.

2. **Cards as observatory plaques.**
   Project cards should feel like labeled exhibits, not app tiles.

3. **Clear hierarchy.**
   Hero → route choices → project universe → details.

4. **Subtle depth.**
   Use shadows, borders, and gradients lightly.

5. **No decorative overload.**
   Stars, lines, and glows should support navigation.

## Components

### Project Card

Required elements:

- Title
- Repo name
- Type chip
- Status chip
- Domain chips
- One-sentence description
- Primary link
- Optional live link

Optional elements:

- Maturity indicator
- Estimated time/depth
- Related project count

### Route Card

Used for the three doors and featured routes.

Required elements:

- Route title
- Short question or need
- 2–3 likely projects
- CTA

### Status Chip

Status options:

- Concept
- Research
- Prototype
- Functional
- Published
- Archived

### Domain Chip

Examples:

- Meaning
- Attention
- Ambition
- Emotion
- Personality
- Dreams
- Myth
- Society
- Shadow
- Neurodivergence
- History

### Recommendation Result

Required elements:

- Primary project
- Why this project
- Two adjacent projects
- Suggested order
- Reset guide button

## Motion Rules

Motion should feel celestial and calm.

Good:

- slow hover glow;
- line fade-in;
- gentle card elevation;
- subtle starfield drift;
- constellation line drawing.

Bad:

- constant twinkling everywhere;
- parallax that makes reading harder;
- fast animations;
- loading screens;
- motion required for comprehension.

Always support `prefers-reduced-motion`.

## Accessibility Rules

- All project cards keyboard reachable.
- All CTAs visible and descriptive.
- Focus states must be obvious.
- Contrast must be high.
- Map view must have list fallback.
- No meaning conveyed by color alone.
- Quiz should be usable with keyboard only.

## Copy Rules

Use language like:

- “Start here if…”
- “This helps you understand…”
- “A reflective tool for…”
- “A research-backed guide to…”
- “A story-based entry into…”

Avoid language like:

- “Unlock your destiny”
- “Discover your true self”
- “Heal your trauma”
- “Diagnose your mind”
- “Transform your life instantly”
- “Become your highest self”

## Hero Draft

```txt
ORION
You are not lost. Only unmapped.

A map into a body of work on psychology, meaning, attention, emotion, story, and formation.

Start with a guide, explore the map, or enter the library and lab directly.
```

## Three Door Drafts

### Understand the World

Essays and studies on meaning, ambition, attention, violence, institutions, and modern life.

### Understand Yourself

Reflective instruments for personality, emotion, music, dreams, agency, and neurodivergent patterns.

### Practice Formation

Routes, protocols, and frameworks for becoming more capable without surrendering depth.

## Footer Draft

```txt
Orion is a navigation layer for Ben Haddon’s psychology and formation projects. These works are reflective and educational, not clinical or diagnostic.
```
