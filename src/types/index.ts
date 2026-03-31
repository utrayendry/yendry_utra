export interface Project {
  id: string;
  title: string;
  description: string;
  keyResult?: string; // Resultado tangible (ej: "+35% conversión")
  benefit?: string; // Beneficio principal (alternativa a keyResult)
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  solutionType: "ecommerce" | "landing" | "dashboard" | "corporate";
  // Mantén category si lo usas en otro lado
  category?: string;
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
