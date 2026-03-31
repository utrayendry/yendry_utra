// src/components/ui/SkillIcons.tsx
import * as Icons from "lucide-react";

// Mapa de iconos para cada skill
export const skillIconMap: Record<string, any> = {
  // Lenguajes
  "C++": Icons.Cpu,
  Java: Icons.Coffee,
  HTML: Icons.Globe,
  CSS: Icons.Palette,
  JavaScript: Icons.Braces,
  TypeScript: Icons.FileCode,
  Python: Icons.Snake,
  SQL: Icons.Database,

  // Frameworks
  React: Icons.React,
  "Next.js": Icons.Rocket,
  TailwindCSS: Icons.Palette,
  Bootstrap: Icons.LayoutGrid,
  "Node.js": Icons.Server,
  Express: Icons.Route,
  NestJS: Icons.Shield,

  // Backend
  "REST API": Icons.Network,
  "JWT Authentication": Icons.Lock,
  Microservicios: Icons.Boxes,
  WebSockets: Icons.Wifi,

  // Bases de Datos
  PostgreSQL: Icons.Database,
  MySQL: Icons.Database,
  MongoDB: Icons.Leaf,
  "Prisma ORM": Icons.Box,
  TypeORM: Icons.Table,

  // Herramientas
  Git: Icons.GitBranch,
  GitHub: Icons.Github,
  Docker: Icons.Docker,
  Vite: Icons.Zap,
  Postman: Icons.Mail,

  // Otras
  SEO: Icons.Search,
  Posicionamiento: Icons.TrendingUp,
  Accesibilidad: Icons.Accessibility,
  "UX Design": Icons.Users,
  "UI Design": Icons.Paintbrush,
  "Prompt Engineering": Icons.Sparkles,
};

export const SkillIcon = ({
  name,
  className = "w-4 h-4",
  color,
}: {
  name: string;
  className?: string;
  color?: string;
}) => {
  const Icon = skillIconMap[name];
  if (!Icon) {
    // Fallback: emoji si no hay icono
    return <span className={className}>💻</span>;
  }
  return <Icon className={className} style={{ color }} strokeWidth={1.5} />;
};
