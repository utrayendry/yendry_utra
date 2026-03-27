import type { Project, Skill, TimelineItem } from "../types";
export { SKILL_CATEGORIES } from "./skillCategories";

export const PROJECTS: Project[] = [
  {
    id: "panel-admin",
    title: "Panel Admin con React + NestJS",
    description:
      "Panel de administración con autenticación, roles, métricas y una API robusta construida con NestJS y Prisma sobre PostgreSQL.",
    technologies: ["React", "NestJS", "Prisma", "PostgreSQL"],
    category: "fullstack",
    image:
      "https://images.unsplash.com/photo-1526378727979-4a07d8f8fd33?auto=format&fit=crop&w=1170&q=80",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "task-system",
    title: "Sistema de Tareas Colaborativo",
    description:
      "Aplicación de tareas en tiempo real con WebSocket, autenticación JWT, y notificaciones en tiempo real.",
    technologies: ["TypeScript", "WebSocket", "Node.js", "React"],
    category: "fullstack",
    image:
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=1170&q=80",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "landing-page",
    title: "Landing Page - E-Commerce",
    description:
      "Landing page moderna y responsiva con carrito dinámico, filtros avanzados y animations smooth.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    category: "frontend",
    image:
      "https://images.unsplash.com/photo-1460925895917-adf4e566fc84?auto=format&fit=crop&w=1170&q=80",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "api-rest",
    title: "API REST con NestJS",
    description:
      "API REST robusta con autenticación, validación, documentación Swagger y tests unitarios.",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Swagger"],
    category: "backend",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1170&q=80",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "dashboard-analytics",
    title: "Dashboard de Análitica",
    description:
      "Dashboard interactivo con gráficos, filtros y reportes en tiempo real usando Chart.js.",
    technologies: ["React", "Chart.js", "TailwindCSS", "TypeScript"],
    category: "frontend",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "ecommerce-platform",
    title: "Plataforma E-Commerce Completa",
    description:
      "Plataforma e-commerce full-stack con carrito, pagos, órdenes y panel de administración.",
    technologies: ["React", "NestJS", "Stripe", "PostgreSQL", "Prisma"],
    category: "fullstack",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1170&q=80",
    demoUrl: "#",
    githubUrl: "#",
  },
];

// ✅ Legacy SKILLS array - Mantener para compatibilidad
export const SKILLS: Skill[] = [
  // Frontend
  { id: "react", name: "React", category: "Frontend", proficiency: 95 },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    proficiency: 90,
  },
  {
    id: "tailwindcss",
    name: "TailwindCSS",
    category: "Frontend",
    proficiency: 95,
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    proficiency: 95,
  },
  { id: "nextjs", name: "Next.js", category: "Frontend", proficiency: 85 },
  { id: "vite", name: "Vite", category: "Frontend", proficiency: 90 },

  // Backend
  { id: "nestjs", name: "NestJS", category: "Backend", proficiency: 90 },
  { id: "nodejs", name: "Node.js", category: "Backend", proficiency: 90 },
  { id: "postgres", name: "PostgreSQL", category: "Backend", proficiency: 85 },
  { id: "prisma", name: "Prisma", category: "Backend", proficiency: 90 },
  { id: "express", name: "Express.js", category: "Backend", proficiency: 85 },
  { id: "mongodb", name: "MongoDB", category: "Backend", proficiency: 80 },

  // Herramientas
  { id: "git", name: "Git", category: "Herramientas", proficiency: 95 },
  { id: "docker", name: "Docker", category: "Herramientas", proficiency: 80 },
  { id: "webpack", name: "Webpack", category: "Herramientas", proficiency: 80 },
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "freelance",
    title: "Desarrollador Web Full Stack",
    company: "Freelance",
    period: "2021 - Presente",
    description:
      "Construcción de aplicaciones con React, TypeScript, NestJS y Prisma; despliegues y arquitectura en producción.",
  },
  {
    id: "software-engineer",
    title: "Ingeniero de Software",
    company: "Tech Company",
    period: "2019 - 2021",
    description:
      "Trabajo en backend con Node.js y bases de datos PostgreSQL, optimizando APIs y rendimiento.",
  },
  {
    id: "frontend-dev",
    title: "Desarrollador Frontend",
    company: "Digital Agency",
    period: "2017 - 2019",
    description:
      "Creación de interfaces accesibles con enfoque en diseño y experiencia de usuario.",
  },
];

export const SOCIAL_LINKS = {
  whatsapp:
    "https://wa.me/5355266801?text=Hola%20Yendry,%20quiero%20hablar%20sobre%20un%20proyecto.",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  email: "yendry@example.com",
};

export const NAVIGATION_ITEMS = [
  { label: "Inicio", href: "home" },
  { label: "Sobre mí", href: "about" },
  { label: "Proyectos", href: "projects" },
  { label: "Habilidades", href: "skills" },
  { label: "Contacto", href: "contact" },
];
