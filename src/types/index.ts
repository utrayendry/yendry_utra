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
  category?: string; // 'frontend' | 'backend' | 'fullstack'
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  iconName?: string; // ← Cambiado: nombre del icono para Lucide-react
  iconColor?: string; // Color del icono (ej: "#61DAFB")
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string; // Emoji o ícono de la categoría (ej: "📝")
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
