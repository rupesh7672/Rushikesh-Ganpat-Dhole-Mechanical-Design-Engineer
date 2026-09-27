export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  category: 'cad' | 'engineering' | 'manufacturing' | 'soft';
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  keyFeatures: string[];
  toolsUsed: string[];
  schematicType: 'hepa' | 'damper' | 'controller' | 'conveyor';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  badge?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  type: string;
  year?: string;
}

export interface ContactInfo {
  name: string;
  role: string;
  email: string;
  phones: string[];
  linkedIn: string;
  location: string;
}
