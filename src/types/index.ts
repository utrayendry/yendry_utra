export interface Project {
  id: string;
  title: string;
  description: string;
  keyResult?: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  solutionType: "ecommerce" | "landing" | "dashboard" | "corporate";
  category: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  icon?: string;
  iconColor?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface TimelineItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  project: string;
  terms: boolean;
}
