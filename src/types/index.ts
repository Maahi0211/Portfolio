export interface Project {
  slug: string;
  name: string;
  tagline: string;
  period: string;
  description: string;
  problem: string;
  contribution: string;
  stack: string[];
  github: string;
  live?: string;
  image?: string;
  featured: boolean;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  start: string;
  end: string;
  detail: string;
}

export interface TechGroup {
  label: string;
  items: string[];
}
