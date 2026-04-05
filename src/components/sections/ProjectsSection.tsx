import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionTitle, Card } from "../ui";
import { PROJECTS } from "../../constants";
import type { Project } from "../../types";

// Importación dinámica de imágenes locales
// Las imágenes deben estar en src/assets/projects/
// Ejemplo: import project1Img from "../../assets/projects/project1.webp";

// Categorías - Memoizadas para evitar re-renders
const CATEGORIES = [
  {
    id: "all",
    label: "Todos los proyectos",

    description: "Ver todo mi trabajo",
  },
  {
    id: "fullstack",
    label: "Plataformas completas",

    description: "Sistemas que escalan con tu negocio",
  },
  {
    id: "frontend",
    label: "Experiencias digitales",

    description: "Interfaces que convierten",
  },
  {
    id: "backend",
    label: "APIs y servicios",

    description: "Estructura robusta y segura",
  },
];

// Componente de imagen optimizada con lazy loading y soporte WebP
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
          <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`${className} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          // Fallback a placeholder si la imagen no existe
          setImgSrc("https://placehold.co/600x400/1e1b4b/818cf8?text=Proyecto");
        }}
      />
    </div>
  );
};

// Componente de tarjeta de proyecto optimizado
const ProjectCard = React.memo<{ project: Project; index: number }>(
  ({ project, index }) => {
    const categoryConfig = {
      fullstack: {
        badge: "Full-Stack",
        gradient: "from-emerald-500/20 to-teal-500/20",
        benefit: "Solución completa y escalable",
        result: "Reducción de costos de mantenimiento",
      },
      frontend: {
        badge: "Frontend",
        gradient: "from-blue-500/20 to-cyan-500/20",
        benefit: "Experiencia de usuario premium",
        result: "Aumento en conversión y retención",
      },
      backend: {
        badge: "Backend",
        gradient: "from-purple-500/20 to-pink-500/20",
        benefit: "API robusta y segura",
        result: "Integración fluida con otros sistemas",
      },
    };

    const config = categoryConfig[
      project.category as keyof typeof categoryConfig
    ] || {
      badge: "💻 Proyecto",
      gradient: "from-indigo-500/20 to-purple-500/20",
      benefit: "Solución profesional",
      result: "Resultados medibles",
    };

    // Generar ruta de imagen local
    const getImagePath = (projectId: string) => {
      // Formato: /src/assets/projects/{id}.webp
      // Puedes ajustar según tu estructura de carpetas
      return `/src/assets/projects/${projectId}.webp`;
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2, margin: "100px" }}
        transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
        whileHover={{ y: -8 }}
      >
        <Card className="group h-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950/40 to-purple-950/40 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col">
          {/* Imagen optimizada */}
          <div className="relative h-52 overflow-hidden flex-shrink-0 bg-indigo-900/30">
            <OptimizedImage
              src={getImagePath(project.id)}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay con beneficio - Solo visible en desktop para rendimiento */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-5 hidden sm:flex">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-indigo-300 text-xs font-medium mb-1 flex items-center gap-1">
                  <span>🎯</span> Beneficio clave
                </p>
                <p className="text-white text-sm font-semibold leading-relaxed">
                  {config.benefit}
                </p>
                <p className="text-indigo-300 text-xs mt-2">
                  ✨ {config.result}
                </p>
              </div>
            </div>

            {/* Badge de categoría */}
            <div className="absolute top-3 left-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${config.gradient} backdrop-blur-sm text-white border border-white/20`}
              >
                {config.badge}
              </span>
            </div>
          </div>

          {/* Contenido */}
          <div className="p-5 flex flex-col flex-grow">
            <div className="mb-3">
              <h3 className="font-bold text-xl text-white mb-2 line-clamp-1">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-indigo-300/70 text-xs bg-indigo-900/30 px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-indigo-400/50 text-xs">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>

            <p className="text-indigo-200/70 text-sm leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Botón "Ver más" optimizado */}
            <div className="mt-auto pt-4">
              <button
                onClick={() => console.log("Ver más:", project.title)}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600/20 to-pink-600/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium transition-all duration-300 hover:from-indigo-600/40 hover:to-pink-600/40 hover:border-indigo-500/60 hover:text-white hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group/btn"
              >
                <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5">
                  Ver más
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Memoizar proyectos filtrados
  const filteredProjects = useMemo(() => {
    return activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  // Memoizar handler de categoría
  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
  }, []);

  // Memoizar handler de contacto
  const handleContactClick = useCallback(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Section id="projects" bgColor="darker">
      <SectionTitle
        title="Soluciones que transforman negocios"
        subtitle="Cada proyecto nace de un problema real. Aquí te muestro cómo los resuelvo con tecnología, estrategia y enfoque en resultados."
      />

      {/* Categorías */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`group relative px-6 py-3 rounded-full transition-all duration-300 ${
              activeCategory === cat.id
                ? "bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-lg shadow-indigo-500/25"
                : "bg-indigo-900/20 text-indigo-200 hover:bg-indigo-900/40 border border-indigo-500/20"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm md:text-base">
                {cat.label}
              </span>
            </div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-indigo-900/90 backdrop-blur-sm text-indigo-200 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {cat.description}
            </div>
          </button>
        ))}
      </div>

      {/* Grid de proyectos con animación */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Mensaje si no hay proyectos */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-indigo-300 text-lg">
            No hay proyectos en esta categoría aún.
          </p>
          <p className="text-indigo-400/60 mt-2">Pronto más novedades 🚀</p>
        </div>
      )}

      {/* CTA final optimizado */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="inline-block p-6 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-2xl border border-indigo-500/20 backdrop-blur-sm">
          <p className="text-indigo-200/80 mb-2 text-sm">
            ¿Ves algo que te gustaría para tu negocio?
          </p>
          <p className="text-white text-xl font-bold mb-4">
            Hablemos y creemos tu solución
          </p>
          <button
            onClick={handleContactClick}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-xl text-white font-medium hover:scale-105 transition-transform inline-flex items-center gap-2 shadow-lg shadow-indigo-500/25"
          >
            <span>💬</span>
            Comienza tu proyecto
          </button>
        </div>
      </motion.div>
    </Section>
  );
};
