import React from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

export const Footer: React.FC = () => {
  const { scrollToTop } = useSmoothScroll();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a15] border-t border-indigo-800/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-9">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400 mb-2">
              Yendry
            </h3>
            <p className="text-indigo-300/70 text-sm">
              Desarrollador Web Full Stack enfocado en crear experiencias digitales modernas y funcionales.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-indigo-200 font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-indigo-300/70">
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('home');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-indigo-200 transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('about');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-indigo-200 transition-colors"
                >
                  Sobre mí
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('projects');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-indigo-200 transition-colors"
                >
                  Proyectos
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-indigo-200 font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-indigo-900/30 border border-indigo-800/40 flex items-center justify-center text-indigo-300 hover:text-white hover:bg-indigo-900/50 transition-all"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-indigo-900/30 border border-indigo-800/40 flex items-center justify-center text-indigo-300 hover:text-white hover:bg-indigo-900/50 transition-all"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="https://wa.me/5355266801"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-indigo-900/30 border border-indigo-800/40 flex items-center justify-center text-indigo-300 hover:text-white hover:bg-indigo-900/50 transition-all"
              >
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-indigo-200 font-semibold mb-4">¿Tienes un proyecto?</h4>
            <p className="text-sm text-indigo-300/70 mb-4">
              Me encantará colaborar contigo en tu próximo proyecto.
            </p>
            <button
              onClick={scrollToTop}
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full text-sm font-bold transition-all hover:scale-105"
            >
              Ir al inicio
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-indigo-800/20 pt-8">
          <p className="text-center text-indigo-300/50 text-sm">
            © {currentYear} Yendry. Todos los derechos reservados. Hecho con React, TypeScript y TailwindCSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
