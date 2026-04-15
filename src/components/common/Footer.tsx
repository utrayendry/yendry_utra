import React, { useCallback } from "react";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { NAVIGATION_ITEMS } from "../../constants/index";

// SVGs optimizados - Memoizados para evitar re-renders
const GitHubIcon = React.memo(
  ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.306.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
);

const LinkedInIcon = React.memo(
  ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
    </svg>
  ),
);

const InstagramIcon = React.memo(
  ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
    </svg>
  ),
);

// SVG para flecha arriba
const ArrowUpIcon = React.memo(
  ({ className = "w-3 h-3" }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 4l-8 8h6v8h4v-8h6z" />
    </svg>
  ),
);

export const Footer: React.FC = () => {
  const { scrollToTop, scrollToElement } = useSmoothScroll();
  const currentYear = new Date().getFullYear();

  // Memoise handlers
  const handleScrollToElement = useCallback(
    (href: string) => {
      scrollToElement(href);
    },
    [scrollToElement],
  );

  const handleScrollToTop = useCallback(() => {
    scrollToTop();
  }, [scrollToTop]);

  const socialLinks = [
    {
      label: "Instagram",
      url: "#",
      icon: InstagramIcon,
      hoverColor: "hover:text-[#E4405F]",
      onClick: (e: React.MouseEvent) => e.preventDefault(),
    },
    {
      label: "LinkedIn",
      url: "#",
      icon: LinkedInIcon,
      hoverColor: "hover:text-[#0A66C2]",
      onClick: (e: React.MouseEvent) => e.preventDefault(),
    },
    {
      label: "GitHub",
      url: "#",
      icon: GitHubIcon,
      hoverColor: "hover:text-white",
      onClick: (e: React.MouseEvent) => e.preventDefault(),
    },
  ];

  return (
    <footer className="bg-linear-to-b from-[#0a0a15] to-[#050508] border-t border-indigo-800/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-9">
          {/* Brand */}
          <div>
            <button
              onClick={() => handleScrollToElement("home")}
              className="cursor-pointer select-none mb-3 group transition-transform hover:scale-105"
            >
              <span
                className="text-3xl md:text-4xl font-extrabold text-white"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                Yendry
                <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  .
                </span>
              </span>
            </button>
            <p className="text-indigo-300/70 text-sm mb-3 leading-relaxed">
              Desarrollador Web Full Stack. Experiencias digitales modernas y
              funcionales.
            </p>
            <p className="text-indigo-400/60 text-xs italic border-l-2 border-indigo-500/50 pl-2">
              "Codificando el mañana, hoy"
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-indigo-200 font-semibold mb-4 text-sm">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleScrollToElement(item.href)}
                    className="text-indigo-300/70 hover:text-indigo-200 transition-colors text-sm hover:translate-x-1 transform duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto directo */}
          <div>
            <h4 className="text-indigo-200 font-semibold mb-4 text-sm">
              ¿Hablamos?
            </h4>
            <p className="text-indigo-300/70 text-sm mb-3 leading-relaxed">
              ¿Tienes un proyecto en mente?
            </p>
            <button
              onClick={() => handleScrollToElement("contact")}
              className="px-5 py-2.5 bg-linear-to-r from-indigo-600 to-pink-600 rounded-lg text-white text-sm font-medium hover:scale-105 transition-all shadow-lg shadow-indigo-500/25"
            >
              Contáctame
            </button>
          </div>

          {/* Social - Con SVGs optimizados */}
          <div>
            <h4 className="text-indigo-200 font-semibold mb-4 text-sm">
              Conéctate
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  onClick={social.onClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-800/40 flex items-center justify-center text-indigo-300 ${social.hoverColor} hover:bg-indigo-800/60 hover:border-indigo-500/50 transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-indigo-400/50 text-xs mt-3">
              Respuesta en menos de 24h
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-indigo-800/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-indigo-300/40 text-xs">
              © {currentYear} Yendry. Todos los derechos reservados.
            </p>
            <p className="text-indigo-300/40 text-xs">
              React · TypeScript · TailwindCSS
            </p>
            <button
              onClick={handleScrollToTop}
              className="text-indigo-400/50 hover:text-indigo-300 text-xs transition-all duration-300 flex items-center gap-1 hover:scale-110"
            >
              <ArrowUpIcon className="w-3 h-3" />
              Volver arriba
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
