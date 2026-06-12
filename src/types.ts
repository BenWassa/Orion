export interface Gate {
  id: string;
  name: string;
  desc: string;
  angle: number;
}

export type OrionProjectType =
  | 'portal'
  | 'essay'
  | 'instrument'
  | 'world'
  | 'book'
  | 'archive'
  | 'study';

export type OrionProjectStatus =
  | 'concept'
  | 'research'
  | 'prototype'
  | 'functional'
  | 'published'
  | 'archived';

export interface OrionProject {
  id: string;
  repoName: string;
  title: string;
  subtitle: string;
  type: OrionProjectType;
  domain: string[];
  userNeed: string[];
  status: OrionProjectStatus;
  maturity: 1 | 2 | 3 | 4 | 5;
  medium: string[];
  audience: string[];
  description: string;
  routePitch: string;
  repoUrl?: string;
  liveUrl?: string;
  nextProjects?: string[];
  cautions?: string[];
}
