export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web-app' | 'portfolio' | 'cyber-tool';
  tags: string[];
  metrics: { label: string; value: string }[];
  description: string;
  challenge: string;
  solution: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  stars?: number;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'career' | 'cyber' | 'web';
  deliveryTime: string;
  basePrice: number;
  highlight: string;
  description: string;
  deliverables: string[];
  idealFor: string;
}

export interface BulletComparison {
  role: string;
  industry: string;
  before: string;
  after: string;
  improvements: string[];
  metricGain: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  serviceUsed: string;
  outcome: string;
  quote: string;
  avatarSeed: string;
}

export interface PackageConfig {
  cvRevamp: boolean;
  linkedinOptimization: boolean;
  coverLetterPrep: boolean;
  interviewCoaching: boolean;
  cyberAudit: boolean;
  deviceHardening: boolean;
  landingPage: boolean;
  customWebPlatform: boolean;
  rushDelivery: boolean;
}
