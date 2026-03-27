export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: "frontend" | "backend" | "fullstack";
  image: string;
  demoUrl?: string;
  githubUrl?: string;
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
  icon: string;
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
