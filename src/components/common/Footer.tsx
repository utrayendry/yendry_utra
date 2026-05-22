import React, { useCallback } from "react";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { Icon } from "../ui/Icon";
import { NAVIGATION_ITEMS } from "../../constants/index";

/**
 * Site footer with navigation, contact, and social links.
 *
 * Uses the shared Icon component for all SVG icons:
 * - github, linkedin, instagram for social media
 * - chevron-up for scroll-to-top
 *
 * No inline SVGs, no duplicated code.
 */
export const Footer: React.FC = () => {
  const { scrollToTop, scrollToElement } = useSmoothScroll();
  const currentYear = new Date().getFullYear();

  // Memoized handlers
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
      icon: "instagram" as const,
      hoverColor: "hover:text-pink-400",
    },
    {
      label: "LinkedIn",
      url: "#",
      icon: "linkedin" as const,
      hoverColor: "hover:text-blue-400",
    },
    {
      label: "GitHub",
      url: "#",
      icon: "github" as const,
      hoverColor: "hover:text-white",
    },
  ];

  return (
    <footer className="bg-linear-to-b from-[#0a0a15] to-[#050508] border-t border-indigo-800/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-9">
          {/* ─── Brand ────────────────────────────────── */}
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
                <span className="text-pink-400 group-hover:text-pink-300 transition-colors">
                  .
                </span>
              </span>
            </button>
            <p className="text-indigo-300/70 text-sm mb-3 leading-relaxed">
              Desarrollador Web Full Stack. Experiencias digitales modernas y
              funcionales.
            </p>
            <p className="text-indigo-400/60 text-xs italic border-l-2 border-pink-500/50 pl-2">
              Codificando el mañana, hoy.
            </p>
          </div>

          {/* ─── Navegación ─────────────────────────────── */}
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

          {/* ─── Contacto ────────────────────────────────── */}
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

          {/* ─── Social ──────────────────────────────────── */}
          <div>
            <h4 className="text-indigo-200 font-semibold mb-4 text-sm">
              Conéctate
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-800/40 flex items-center justify-center text-indigo-300 ${social.hoverColor} hover:bg-indigo-800/60 hover:border-indigo-500/50 transition-all duration-300 hover:scale-110`}
                >
                  <Icon
                    name={social.icon}
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
            <p className="text-indigo-400/50 text-xs mt-3">
              Respuesta en menos de 24h
            </p>
          </div>
        </div>

        {/* ─── Divider ────────────────────────────────── */}
        <div className="border-t border-indigo-800/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-indigo-300/40 text-xs">
              &copy; {currentYear} Yendry. Todos los derechos reservados.
            </p>
            <p className="text-indigo-300/40 text-xs">
              React &middot; TypeScript &middot; TailwindCSS
            </p>
            <button
              onClick={handleScrollToTop}
              className="text-indigo-400/50 hover:text-indigo-300 text-xs transition-all duration-300 flex items-center gap-1 hover:scale-110"
            >
              <Icon name="chevron-up" className="w-3 h-3" aria-hidden="true" />
              Volver arriba
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
