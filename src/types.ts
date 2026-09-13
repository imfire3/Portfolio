export interface Project {
  id: string;
  num: string;
  year: string;
  tag: string;
  title: string;
  shortDesc: string;
  role: string;
  impact: string;
  stack: string[];
  liveUrl: string;
  metrics: { label: string; value: string }[];
  accentColor: string;
  badge: string;
  caseStudy: {
    context: string;
    problem: string;
    solution: string;
    aiWorkflow: string;
    keyLearnings: string[];
    results: string[];
    mockupType: 'ma-place-au-port' | 'job-app' | 'catdex' | 'voxe-booster';
  };
  imageUrl?: string;
}

export interface Experience {
  num: string;
  period: string;
  role: string;
  company: string;
  sector: string;
  users: string;
  metrics: string;
  description: string;
  achievements: string[];
  tools: string[];
}

export interface SkillCategory {
  title: string;
  category: string;
  skills: string[];
  icon: string;
}

export interface Education {
  period: string;
  degree: string;
  school: string;
  details?: string;
}
