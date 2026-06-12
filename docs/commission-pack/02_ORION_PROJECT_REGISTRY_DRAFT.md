# Orion Project Registry Draft

This is an initial content registry for Orion. Treat this as the single source of truth for the first MVP pass.

## Registry Principles

- Use repo names exactly.
- Separate display titles from repo names.
- Keep descriptions short.
- Track status honestly.
- Mark IP-dependent projects as studies or private/educational showcases.
- Do not overstate clinical or psychological validity.

## Draft Project List

```ts
export const ORION_PROJECTS = [
  {
    id: 'orion',
    repoName: 'Orion',
    title: 'Orion',
    subtitle: 'The Map of Formation',
    type: 'portal',
    domain: ['Formation', 'Navigation', 'Psychology'],
    userNeed: ['orientation', 'where to start'],
    status: 'prototype',
    maturity: 3,
    medium: ['web'],
    audience: ['curious visitor', 'self-explorer', 'professional reviewer'],
    description: 'The entrypoint and map for Ben Haddon’s psychology and formation project universe.',
    routePitch: 'Start here if you want to understand the whole ecosystem.'
  },

  // Essays / Worlds
  {
    id: 'sankofa',
    repoName: 'sankofa',
    title: 'Sankofa',
    subtitle: 'The Modern Meaning Crisis',
    type: 'essay',
    domain: ['Meaning', 'Community', 'Modernity'],
    userNeed: ['meaning crisis', 'cultural diagnosis'],
    status: 'published',
    maturity: 4,
    medium: ['site', 'audio', 'brief', 'visuals'],
    audience: ['general reader', 'educator', 'policy-adjacent reader'],
    description: 'A mythic-psychology research and storytelling project on why young people feel disconnected and hungry for purpose.',
    routePitch: 'Begin here if you want the broad diagnosis of modern meaning loss.'
  },
  {
    id: 'dukkha',
    repoName: 'dukkha',
    title: 'Dukkha',
    subtitle: 'A Field Guide to the Rewarded Animal',
    type: 'essay',
    domain: ['Attention', 'Desire', 'Dopamine', 'Practice'],
    userNeed: ['distraction', 'habit repair', 'attention'],
    status: 'published',
    maturity: 4,
    medium: ['site', 'protocols', 'research library'],
    audience: ['reader', 'self-experimenter'],
    description: 'An evidence-based field guide combining dopamine science and Buddhist concepts to reclaim attention and agency.',
    routePitch: 'Begin here if distraction, desire, or digital reward loops are the problem.'
  },
  {
    id: 'faust',
    repoName: 'faust',
    title: 'Faust',
    subtitle: 'The Architecture of Ambition',
    type: 'essay',
    domain: ['Ambition', 'Status', 'Work', 'Cities'],
    userNeed: ['ambition', 'career identity', 'status anxiety'],
    status: 'prototype',
    maturity: 3,
    medium: ['digital essay'],
    audience: ['young professionals', 'urban readers'],
    description: 'A digital essay on career as identity, rational maladaptation, and alternatives to status-driven ambition.',
    routePitch: 'Begin here if career ambition feels both necessary and deforming.'
  },
  {
    id: 'agoge',
    repoName: 'agoge',
    title: 'Agoge',
    subtitle: 'Initiation and Formation',
    type: 'essay',
    domain: ['Initiation', 'Masculinity', 'Formation', 'Anthropology'],
    userNeed: ['rites of passage', 'discipline', 'formation'],
    status: 'research',
    maturity: 3,
    medium: ['research briefs', 'podcast', 'site'],
    audience: ['readers interested in rites of passage'],
    description: 'A research and storytelling project on traditional initiation, resilience, and moral formation.',
    routePitch: 'Begin here if you are interested in how hardship forms character.'
  },
  {
    id: 'ares',
    repoName: 'Ares',
    title: 'Ares',
    subtitle: 'Extreme Mass Homicide Interactive Synopsis',
    type: 'study',
    domain: ['Shadow', 'Violence', 'Social Psychology', 'History'],
    userNeed: ['understand violence', 'shadow integration', 'historical psychology'],
    status: 'functional',
    maturity: 4,
    medium: ['interactive synopsis'],
    audience: ['serious reader', 'student', 'researcher'],
    description: 'A digital humanities synopsis of extreme mass homicide through psychological and historical lenses.',
    routePitch: 'Begin here if you want to study the dark edge of human social behavior.'
  },
  {
    id: 'great-decoupling',
    repoName: 'great-decoupling',
    title: 'The Great Decoupling',
    subtitle: 'Indicators, Institutions, and Lived Reality',
    type: 'essay',
    domain: ['Society', 'Economics', 'Institutions', 'Modernity'],
    userNeed: ['societal diagnosis', 'economic reality', 'institutional trust'],
    status: 'research',
    maturity: 2,
    medium: ['brief', 'narrative', 'visual'],
    audience: ['policy reader', 'analyst', 'general reader'],
    description: 'A structured research project on the gap between economic indicators, lived experience, and institutional outcomes.',
    routePitch: 'Begin here if the macro world feels increasingly disconnected from lived life.'
  },
  {
    id: 'skywalker',
    repoName: 'Skywalker',
    title: 'Skywalker Quest Map',
    subtitle: 'Archetypal Formation Through the Hero’s Journey',
    type: 'world',
    domain: ['Myth', 'Identity', 'Hero Journey', 'Formation'],
    userNeed: ['identity', 'calling', 'mythic reflection'],
    status: 'published',
    maturity: 4,
    medium: ['interactive site', 'audio'],
    audience: ['mythic self-explorer'],
    description: 'An interactive guide using Luke Skywalker’s mythic journey as a framework for self-discovery and spiritual development.',
    routePitch: 'Begin here if myth and story are the easiest way into self-reflection.',
    cautions: ['IP-dependent; present as an educational/fan-adjacent study rather than a central public brand.']
  },
  {
    id: 'nemo',
    repoName: 'nemo',
    title: 'FilmSeele: Finding Nemo',
    subtitle: 'Narrative Depth as Underwater Journey',
    type: 'world',
    domain: ['Story', 'Film', 'Myth', 'Family'],
    userNeed: ['narrative reflection', 'film analysis'],
    status: 'prototype',
    maturity: 3,
    medium: ['immersive web experience'],
    audience: ['film/story reader'],
    description: 'An immersive ocean-themed web experience transforming Finding Nemo’s narrative structure into an interactive journey.',
    routePitch: 'Begin here if you want an immersive story-analysis experience.',
    cautions: ['IP-dependent; keep as study/scaffold unless legally clarified.']
  },
  {
    id: 'pinocchio',
    repoName: 'pinocchio',
    title: 'Pinocchio Miniseries',
    subtitle: 'Museum-Grade Film UX Scaffold',
    type: 'world',
    domain: ['Story', 'Film', 'Myth', 'Character'],
    userNeed: ['film analysis', 'archetypal story'],
    status: 'concept',
    maturity: 1,
    medium: ['placeholder site', 'podcast scaffold'],
    audience: ['film/story reader'],
    description: 'A placeholder-only design skeleton for a film miniseries and podcast.',
    routePitch: 'Treat as an archived design scaffold until real content exists.',
    cautions: ['Placeholder-only; IP-dependent.']
  },
  {
    id: 'pantheon',
    repoName: 'pantheon',
    title: 'Pantheon',
    subtitle: 'One Theme a Day',
    type: 'instrument',
    domain: ['Learning', 'Culture', 'Formation', 'Attention'],
    userNeed: ['daily depth', 'learning ritual'],
    status: 'functional',
    maturity: 4,
    medium: ['daily learning app'],
    audience: ['reader', 'self-educator'],
    description: 'A daily learning app presenting one theme through six resonant facets: person, picture, poem, principle, passage, and parallel.',
    routePitch: 'Begin here if you want depth and delight as a daily ritual.'
  },

  // Instruments / Tools
  {
    id: 'janus',
    repoName: 'Janus',
    title: 'Janus',
    subtitle: 'Narrative RPG Psychological Profiling',
    type: 'instrument',
    domain: ['Personality', 'Narrative', 'Self-Knowledge'],
    userNeed: ['understand personality', 'playful self-assessment'],
    status: 'functional',
    maturity: 4,
    medium: ['text RPG', 'dashboard'],
    audience: ['self-explorer', 'player'],
    description: 'A retro text RPG where choices shape the story and infer psychological traits through play.',
    routePitch: 'Begin here if you want self-knowledge through narrative choices.'
  },
  {
    id: 'iris',
    repoName: 'Iris',
    title: 'Iris',
    subtitle: 'Neurochemical Emotion Mirror',
    type: 'instrument',
    domain: ['Emotion', 'Neurochemistry', 'Visualization'],
    userNeed: ['understand emotions', 'visual reflection'],
    status: 'functional',
    maturity: 4,
    medium: ['interactive visualization', 'Flask API'],
    audience: ['self-explorer', 'visual learner'],
    description: 'A science-informed tool mapping neurochemical sliders to a valence-arousal emotional visualization.',
    routePitch: 'Begin here if you want to see emotion as a moving map rather than a label.',
    cautions: ['Non-clinical; not diagnostic.']
  },
  {
    id: 'orpheus',
    repoName: 'orpheus',
    title: 'Orpheus',
    subtitle: 'Music as Emotional Underworld',
    type: 'instrument',
    domain: ['Emotion', 'Music', 'Patterns', 'Self-Knowledge'],
    userNeed: ['understand emotional patterns', 'music reflection'],
    status: 'functional',
    maturity: 4,
    medium: ['Python pipeline', 'React frontend'],
    audience: ['self-explorer', 'music listener'],
    description: 'A local-first analysis pipeline that turns Spotify listening history into emotional and thematic pattern reports.',
    routePitch: 'Begin here if your music history feels like a hidden autobiography.'
  },
  {
    id: 'morpheus-dream-archive',
    repoName: 'morpheus-dream-archive',
    title: 'Morpheus',
    subtitle: 'Dream Archive System',
    type: 'instrument',
    domain: ['Dreams', 'Memory', 'Subconscious', 'Archive'],
    userNeed: ['preserve dreams', 'revisit inner imagery'],
    status: 'functional',
    maturity: 3,
    medium: ['React app', 'static archive'],
    audience: ['private user', 'dream recorder'],
    description: 'A privacy-first archive for capturing, structuring, and visually revisiting dreams.',
    routePitch: 'Begin here if your dreams feel worth preserving before interpreting.'
  },
  {
    id: 'ecological-constellation',
    repoName: 'ecological-constellation',
    title: 'Ecological Constellation',
    subtitle: 'Big Five as Adaptive Strategies',
    type: 'instrument',
    domain: ['Personality', 'Ecology', 'Self-Knowledge'],
    userNeed: ['personality reflection', 'adaptive strategy'],
    status: 'functional',
    maturity: 4,
    medium: ['React app'],
    audience: ['self-explorer'],
    description: 'A Big Five personality mapping system that translates trait patterns into a ranked constellation of animal-based ecological strategies.',
    routePitch: 'Begin here if you want personality language without fixed types or horoscope logic.',
    cautions: ['Self-reported and exploratory; not diagnostic.']
  },
  {
    id: 'project-loki',
    repoName: 'Project-Loki',
    title: 'Loki',
    subtitle: 'Gumption Trap Analyzer',
    type: 'instrument',
    domain: ['Agency', 'Algorithms', 'Action', 'Motivation'],
    userNeed: ['unstick myself', 'identify action traps'],
    status: 'functional',
    maturity: 4,
    medium: ['React app'],
    audience: ['self-explorer', 'builder'],
    description: 'An analyzer for identifying practical traps such as anxiety, boredom, impatience, fog, and reassembly failure.',
    routePitch: 'Begin here if you are stuck and need the specific shape of the blockage.'
  },
  {
    id: 'psyche',
    repoName: 'psyche',
    title: 'Psyche',
    subtitle: 'Psychology Literacy App',
    type: 'instrument',
    domain: ['Psychology Literacy', 'Education', 'Concepts'],
    userNeed: ['learn psychology', 'understand concepts'],
    status: 'prototype',
    maturity: 3,
    medium: ['React app', 'content system'],
    audience: ['learner'],
    description: 'A working repository for a psychology literacy app with product specs, research synthesis, and content architecture.',
    routePitch: 'Begin here if you want the structured learning layer of the psychology ecosystem.'
  },
  {
    id: 'static',
    repoName: 'static',
    title: 'Static',
    subtitle: 'Autistic Pattern Recognition for Adults',
    type: 'essay',
    domain: ['Autism', 'Neurodivergence', 'Self-Understanding'],
    userNeed: ['recognize autistic patterns', 'adult self-understanding'],
    status: 'research',
    maturity: 3,
    medium: ['manuscript'],
    audience: ['self-discovering adults'],
    description: 'A practical guide for adults recognizing autistic patterns in themselves.',
    routePitch: 'Begin here if neurodivergent self-recognition is the live question.',
    cautions: ['Not diagnostic; not clinical guidance.']
  },
  {
    id: 'psi',
    repoName: 'Psi',
    title: 'Psi',
    subtitle: 'The Mind Unfolding',
    type: 'instrument',
    domain: ['History', 'Psychology', 'Learning', 'Audio'],
    userNeed: ['learn psychology history', 'trace concepts over time'],
    status: 'prototype',
    maturity: 3,
    medium: ['audio series', 'interactive companion'],
    audience: ['learner', 'history-of-ideas reader'],
    description: 'An interactive companion to a narrative history of psychology, organized by timeline and theme.',
    routePitch: 'Begin here if you want to understand the history of psychology as a living story.'
  }
]
```

## Missing / External Entries to Add Later

- Mirror Laws as a standalone external work, not absorbed into Orion.
- Any private repos or archived psychology projects not yet listed.
- Live URLs for deployed projects.
- Accurate maturity/status after repo audit.

## Open Classification Questions

1. Should `Psi` live in Library, Lab, or both?
2. Should `static` be considered an essay/manuscript or a practical instrument?
3. Should `pantheon` be framed as psychology-adjacent or general formation?
4. Should IP-dependent projects be visible publicly or hidden behind “Studies / Archive”?
