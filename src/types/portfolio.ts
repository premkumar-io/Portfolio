export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  twitter?: string;
  resumeUrl: string;
  availability: string;
  statusBadge: string;
  stats: {
    label: string;
    value: string;
    subtext?: string;
  }[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: "AI/ML" | "Full-Stack" | "Mobile & Web" | "Cloud & Microservices" | "Algorithms";
  featured: boolean;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  role: string;
  challenges: string[];
  outcome: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  screenshots?: {
    url: string;
    caption: string;
  }[];
  architectureSummary?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: "Full-time" | "Internship" | "Contract" | "Open Source";
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
  logoText?: string;
}

export interface SkillItem {
  name: string;
  iconName?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface Education {
  id: string;
  degree: string;
  fieldOfStudy: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  score?: string;
  highlights: string[];
  relevantCoursework: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  credentialId?: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  link?: string;
  badge?: string;
}
