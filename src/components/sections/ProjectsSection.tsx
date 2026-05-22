import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionTitle, Card } from "../ui";
import { Icon } from "../ui/Icon";
import type { IconName } from "../ui/Icon";
import { PROJECTS } from "../../constants";
import type { Project } from "../../types";

/**
 * Category configuration with icons and colors.
 * Each category has a distinct visual identity.
 */
const CATEGORIES: {
  id: string;
  label: string;
  icon: IconName;
  iconColor: string;
  activeBg: string;
}[] = [
  {
    id: "all",
    label: "Todos",
    icon: "sparkles",
    iconColor: "text-indigo-400",
    activeBg: "from-indigo-600 to-purple-600",
  },
  {
    id: "fullstack",
    label: "Full-Stack",
    icon: "rocket",
    iconColor: "text-emerald-400",
    activeBg: "from-emerald-600 to-teal-600",
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "code",
    iconColor: "text-blue-400",
    activeBg: "from-blue-600 to-cyan-600",
  },
  {
    id: "backend",
    label: "Backend",
    icon: "server",
    iconColor: "text-purple-400",
    activeBg: "from-purple-600 to-pink-600",
  },
];

/**
 * Category config for project cards.
 */
const PROJECT_CONFIG: Record<
  string,
  {
    badge: string;
    gradient: string;
    icon: IconName;
    iconColor: string;
  }
> = {
  fullstack: {
    badge: "Full-Stack",
    gradient: "from-emerald-500/20 to-teal-500/20",
    icon: "rocket",
    iconColor: "text-emerald-400",
  },
  frontend: {
    badge: "Frontend",
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: "code",
    iconColor: "text-blue-400",
  },
  backend: {
    badge: "Backend",
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: "server",
    iconColor: "text-purple-400",
  },
};

// ─── Optimized Image Component ────────────────────────
const OptimizedImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className = "" }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden bg-indigo-900/20">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            name="loader"
            className="w-6 h-6 text-indigo-500 animate-spin"
            aria-hidden="true"
          />
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`${className} transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setImgSrc("https://placehold.co/600x400/1e1b4b/818cf8?text=Proyecto");
        }}
      />
    </div>
  );
};

// ─── Project Card ─────────────────────────────────────
const ProjectCard = React.memo<{ project: Project; index: number }>(
  ({ project, index }) => {
    const config = PROJECT_CONFIG[project.category] || {
      badge: "Proyecto",
      gradient: "from-indigo-500/20 to-purple-500/20",
      icon: "sparkles" as IconName,
      iconColor: "text-indigo-400",
    };

    const getImagePath = (projectId: string) => {
      return `/src/assets/projects/${projectId}.webp`;
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
        whileHover={{ y: -6 }}
      >
        <Card className="group h-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950/40 to-purple-950/40 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col">
          {/* ─── Image ────────────────────────────────── */}
          <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0 bg-indigo-900/30">
            <OptimizedImage
              src={getImagePath(project.id)}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Category badge — top left */}
            <div className="absolute top-3 left-3">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${config.gradient} backdrop-blur-sm text-white border border-white/15`}
              >
                <Icon
                  name={config.icon}
                  className="w-3 h-3"
                  aria-hidden="true"
                />
                {config.badge}
              </span>
            </div>
          </div>

          {/* ─── Content ──────────────────────────────── */}
          <div className="p-4 sm:p-5 flex flex-col flex-grow">
            {/* Title */}
            <h3 className="font-bold text-lg sm:text-xl text-white mb-2 line-clamp-1">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-indigo-200/70 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2 flex-grow">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-indigo-300/60 text-[10px] sm:text-xs bg-indigo-900/20 px-2 py-0.5 rounded-full border border-indigo-800/20"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-indigo-400/40 text-[10px] sm:text-xs">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-auto pt-3 border-t border-indigo-800/20">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs font-medium hover:bg-indigo-600/40 hover:text-white transition-all duration-200"
                >
                  <Icon name="eye" className="w-3.5 h-3.5" aria-hidden="true" />
                  Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs font-medium hover:bg-purple-600/40 hover:text-white transition-all duration-200"
                >
                  <Icon
                    name="github"
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                  />
                  Código
                </a>
              )}
              {/* Fallback when no links */}
              {!project.demoUrl && !project.githubUrl && (
                <button
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-indigo-600/10 border border-indigo-500/20 text-indigo-300/60 text-xs font-medium cursor-default"
                  disabled
                >
                  <Icon name="eye" className="w-3.5 h-3.5" aria-hidden="true" />
                  Próximamente
                </button>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

// ─── Projects Section ─────────────────────────────────
export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    return activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
  }, []);

  const handleContactClick = useCallback(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Section id="projects" bgColor="darker">
      <SectionTitle
        title="Proyectos que hablan por sí mismos"
        subtitle="Cada proyecto resuelve un problema real. Aquí tienes una muestra de mi trabajo con tecnologías modernas y enfoque en resultados."
      />

      {/* ─── Category Pills ──────────────────────────── */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count =
            cat.id === "all"
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.category === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive
                  ? `bg-gradient-to-r ${cat.activeBg} text-white shadow-lg shadow-indigo-500/20`
                  : "bg-indigo-900/20 text-indigo-300 hover:bg-indigo-900/40 border border-indigo-800/30"
              }`}
            >
              <Icon
                name={cat.icon}
                className={`w-4 h-4 ${isActive ? "text-white" : cat.iconColor}`}
                aria-hidden="true"
              />
              <span>{cat.label}</span>
              <span
                className={`text-xs ml-1 px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? "bg-white/20"
                    : "bg-indigo-800/30 text-indigo-400/60"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ─── Project Grid ────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ─── Empty State ─────────────────────────────── */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Icon
            name="folder"
            className="w-10 h-10 text-indigo-400/40 mx-auto mb-3"
            aria-hidden="true"
          />
          <p className="text-indigo-300 text-lg">
            No hay proyectos en esta categoría aún.
          </p>
          <p className="text-indigo-400/50 text-sm mt-1">
            Vuelve pronto o{" "}
            <button
              onClick={() => setActiveCategory("all")}
              className="text-indigo-400 hover:text-indigo-300 underline"
            >
              mira todos los proyectos
            </button>
          </p>
        </motion.div>
      )}

      {/* ─── CTA ──────────────────────────────────────── */}
      <motion.div
        className="text-center mt-14 sm:mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="inline-block p-5 sm:p-8 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-2xl border border-indigo-500/20 backdrop-blur-sm">
          <div className="mb-4 inline-flex">
            <Icon
              name="handshake"
              className="w-8 h-8 sm:w-10 sm:h-10 text-pink-400"
              aria-hidden="true"
            />
          </div>
          <h4 className="text-white text-lg sm:text-xl font-bold mb-2">
            ¿Tienes un proyecto similar en mente?
          </h4>
          <p className="text-indigo-200/70 text-sm mb-5 max-w-md mx-auto">
            Cuéntame tu idea y te ayudo a convertirla en una solución real.
          </p>
          <button
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-xl text-white font-medium text-sm sm:text-base hover:scale-105 transition-transform shadow-lg shadow-indigo-500/25"
          >
            <Icon
              name="mail"
              className="w-4 h-4 sm:w-5 sm:h-5"
              aria-hidden="true"
            />
            Hablemos de tu proyecto
          </button>
        </div>
      </motion.div>
    </Section>
  );
};
