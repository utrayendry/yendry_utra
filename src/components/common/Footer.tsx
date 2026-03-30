import React from "react";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";

export const Footer: React.FC = () => {
  const { scrollToTop, scrollToElement } = useSmoothScroll();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0a0a15] to-[#050508] border-t border-indigo-800/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-9">
          {/* Brand - Igual al Navbar */}
          <div>
            <button
              onClick={() => scrollToElement("home")}
              className="cursor-pointer select-none mb-3"
            >
              <span
                className="text-3xl md:text-4xl font-extrabold text-white"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                Yendry<span className="text-pink-400">.</span>
              </span>
            </button>
            <p className="text-indigo-300/70 text-sm mb-3">
              Desarrollador Web Full Stack. Experiencias digitales modernas y
              funcionales.
            </p>
            {/* Frase de marca */}
            <p className="text-indigo-400/60 text-xs italic border-l-2 border-pink-500/50 pl-2">
              "Codificando el mañana, hoy"
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-indigo-200 font-semibold mb-4 text-sm">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Inicio", href: "home" },
                { label: "¿Por qué yo?", href: "why-me" },
                { label: "Proyectos", href: "projects" },
                { label: "Habilidades", href: "skills" },
                { label: "Contacto", href: "contact" },
              ].map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToElement(item.href)}
                    className="text-indigo-300/70 hover:text-indigo-200 transition-colors text-sm"
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
            <p className="text-indigo-300/70 text-sm mb-3">
              ¿Tienes un proyecto en mente?
            </p>
            <button
              onClick={() => scrollToElement("contact")}
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-lg text-white text-sm font-medium hover:scale-105 transition-all shadow-lg shadow-indigo-500/25"
            >
              Contáctame
            </button>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-indigo-200 font-semibold mb-4 text-sm">
              Conéctate
            </h4>
            <div className="flex space-x-3">
              {[
                {
                  icon: "fab fa-github",
                  url: "https://github.com",
                  label: "GitHub",
                },
                {
                  icon: "fab fa-linkedin",
                  url: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: "fab fa-whatsapp",
                  url: "https://wa.me/5355266801",
                  label: "WhatsApp",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-800/40 flex items-center justify-center text-indigo-300 hover:text-white hover:bg-indigo-800/60 hover:border-indigo-500/50 transition-all"
                >
                  <i className={social.icon} />
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
              onClick={scrollToTop}
              className="text-indigo-400/50 hover:text-indigo-300 text-xs transition-colors flex items-center gap-1"
            >
              <i className="fas fa-arrow-up text-xs" />
              Volver arriba
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
