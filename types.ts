import { LucideIcon } from "lucide-react";

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'Data & Analytics' | 'AI & Workflow' | 'Training Operations' | 'Web Development' | 'Business Digitisation';
  organization: string;
  period: string;
  overview: string;
  problem: string;
  role: string;
  approach: string[];
  toolsAndMethods: string[];
  deliverables: string[];
  verifiedOutcome: string;
  keyMetrics?: { label: string; value: string }[];
  featured: boolean;
  evidenceType: 'Data Model & Forecast' | 'Roadmap & Audit Matrix' | 'Operational Tracker & LMS' | 'Live Web Architecture' | 'Brand & Ops Framework';
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  badge?: string;
  category: 'Corporate Experience' | 'Henalo & Consulting' | 'Leadership & Community';
  responsibilities: string[];
  verifiedHighlight?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: 'Core Strength' | 'Working Knowledge' | 'Foundational / Basic';
    context: string;
  }[];
}

export interface HenaloService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  sampleWorkSummary: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  date: string;
  status?: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  credentialNote?: string;
}

export interface AwardItem {
  title: string;
  organization: string;
  year: string;
  context: string;
}
