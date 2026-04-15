import React, { useState, useRef, useEffect, useCallback } from "react";
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from "../../constants";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { Button } from "../ui";

// SVGs optimizados - Memoizados para evitar re-renders
const WhatsAppIcon = React.memo(
  ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
    >
      <path d="M16.001 3.2c-7.063 0-12.8 5.736-12.8 12.8 0 2.257.589 4.457 1.708 6.4L3.2 28.8l6.595-1.683c1.843.999 3.92 1.517 6.206 1.517h.001c7.063 0 12.8-5.736 12.8-12.8s-5.737-12.8-12.801-12.8zm0 23.466h-.001c-1.998 0-3.938-.536-5.63-1.548l-.403-.239-3.913.999 1.04-3.818-.262-.392c-1.036-1.55-1.582-3.351-1.582-5.233 0-5.292 4.305-9.6 9.6-9.6 2.563 0 4.976.999 6.792 2.813 1.815 1.815 2.813 4.229 2.813 6.792 0 5.292-4.307 9.6-9.654 9.6zm5.497-7.2c-.301-.15-1.778-.878-2.054-.978-.275-.1-.476-.15-.676.15-.2.301-.776.978-.951 1.178-.175.2-.351.225-.651.075-.301-.15-1.271-.469-2.421-1.494-.895-.797-1.5-1.78-1.676-2.08-.175-.301-.019-.464.131-.614.134-.133.301-.351.451-.526.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.627-.926-2.226-.244-.586-.491-.507-.676-.517l-.576-.01c-.2 0-.526.075-.801.376-.275.301-1.051 1.027-1.051 2.502 0 1.476 1.076 2.9 1.226 3.101.15.2 2.119 3.238 5.138 4.536.718.31 1.278.494 1.714.632.72.229 1.375.197 1.894.12.578-.086 1.778-.726 2.03-1.428.251-.701.251-1.302.176-1.428-.075-.125-.275-.2-.576-.35z" />
    </svg>
  ),
);

const FacebookIcon = React.memo(
  ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
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

export const Navbar: React.FC = () => {
  const { scrollToElement } = useSmoothScroll();
  const { isNavbarScrolled } = useScrollProgress();
  //to open and close the hamburger menu
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const trackerRef = useRef<HTMLSpanElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Memoizar handlers para evitar re-renders
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [isOpen],
  );

  const handleScrollLock = useCallback(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    handleScrollLock();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [handleClickOutside, handleScrollLock]);

  const moveTracker = useCallback(
    (index: number) => {
      if (!navRef.current || !trackerRef.current) return;

      const items = navRef.current.querySelectorAll(".nav-item");
      const navRect = navRef.current.getBoundingClientRect();
      const target = items[index].getBoundingClientRect();
      const targetX = target.left - navRect.left;

      if (currentIndex === null) {
        const first = items[0].getBoundingClientRect();
        const startX = first.left - navRect.left;

        trackerRef.current.style.transition = "none";
        trackerRef.current.style.transform = `translateX(${startX}px)`;
        trackerRef.current.style.width = `${first.width}px`;
        void trackerRef.current.offsetWidth;
      }

      trackerRef.current.style.transition =
        "transform 0.45s cubic-bezier(0.25,1,0.5,1), width 0.45s cubic-bezier(0.25,1,0.5,1)";
      trackerRef.current.style.width = `${target.width}px`;
      trackerRef.current.style.transform = `translateX(${targetX}px)`;

      trackerRef.current.classList.add("glow-active");
      setTimeout(
        () => trackerRef.current?.classList.remove("glow-active"),
        300,
      );

      setCurrentIndex(index);
    },
    [currentIndex],
  );

  const hideTracker = useCallback(() => {
    if (!trackerRef.current) return;
    setTimeout(() => {
      if (!trackerRef.current) return;
      trackerRef.current.style.width = "0px";
      setCurrentIndex(null);
    }, 150);
  }, []);

  const handleNavClick = useCallback(
    (href: string) => {
      scrollToElement(href);
      setIsOpen(false);
    },
    [scrollToElement],
  );

  return (
    <>
      {/* Overlay optimized - only rendering when isOpen is true */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 transition-all duration-300 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Navbar */}
      <nav
        className={`fixed w-full py-4 px-6 md:px-12 transition-all duration-300 animate-[fadeSlideDown_0.7s_ease-out] ${
          isNavbarScrolled
            ? "delay-200 bg-[#0a0a15]/95 backdrop-blur-md"
            : "bg-transparent"
        } ${isOpen ? "z-30" : "z-50"}`}
        style={{ pointerEvents: isOpen ? "none" : "auto" }}
      >
        {/*  Inferior animated Border*/}
        <span
          className="absolute bottom-0 left-0 h-0.5 transition-all duration-500 ease-out"
          style={{
            width: "100%",
            background:
              "linear-gradient(90deg, rgba(99, 102, 241, 0.3) 0%, rgba(236, 72, 153, 0.6) 50%, rgba(99, 102, 241, 0.3) 100%)",
            boxShadow: isNavbarScrolled
              ? "0 0 8px rgba(236, 72, 153, 0.4)"
              : "none",
            transform: isNavbarScrolled ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: isNavbarScrolled ? "left" : "right",
          }}
        />

        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* LOGO */}
          <button
            onClick={() => scrollToElement("home")}
            className={`cursor-pointer select-none group transition-all duration-300 ${
              isOpen ? "opacity-40 scale-95" : "hover:scale-105"
            }`}
            style={{ pointerEvents: isOpen ? "none" : "auto" }}
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

          {/* Desktop Navigation */}
          <div
            ref={navRef}
            className="hidden md:flex items-center space-x-6 relative"
            onMouseLeave={hideTracker}
          >
            {NAVIGATION_ITEMS.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                onMouseEnter={() => moveTracker(index)}
                className="nav-item font-medium text-sm uppercase tracking-wider text-indigo-200 hover:text-white transition-colors relative"
              >
                {item.label}
                <span className="absolute inset-0 -top-6 -bottom-6 -left-6 -right-6" />
              </button>
            ))}
            <span
              ref={trackerRef}
              className="underline-tracker absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-indigo-400 to-pink-400 rounded-full"
              style={{ width: 0 }}
            />
          </div>

          {/* CTA + Botón hamburguesa */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => window.open(SOCIAL_LINKS.whatsapp)}
                icon={<WhatsAppIcon className="w-4 h-4" />}
              >
                WhatsApp
              </Button>
            </div>

            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
              onClick={() => setIsOpen(true)}
              aria-label="Abrir menú"
            >
              <span className="block w-6 h-0.5 bg-indigo-300 rounded-full mb-1.5" />
              <span className="block w-6 h-0.5 bg-indigo-300 rounded-full my-1.5" />
              <span className="block w-6 h-0.5 bg-indigo-300 rounded-full mt-1.5" />
            </button>
          </div>
        </div>
      </nav>

      {/* SIDEBAR MOVIL */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-80 bg-linear-to-b from-[#0a0a15] to-[#050508] backdrop-blur-xl border-l border-indigo-800/30 transform transition-all duration-500 ease-out shadow-2xl shadow-indigo-900/50 ${
          isOpen ? "translate-x-0 z-50" : "translate-x-full z-40"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header con botón X */}
          <div className="flex items-center justify-between p-6 border-b border-indigo-800/30">
            <button
              onClick={() => {
                scrollToElement("home");
                setIsOpen(false);
              }}
              className="transition-transform hover:scale-105"
            >
              <span
                className="text-2xl font-extrabold text-white"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                Yendry<span className="text-pink-400">.</span>
              </span>
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center group transition-all duration-300 hover:scale-110"
              aria-label="Cerrar menú"
            >
              <div className="relative w-5 h-5">
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-indigo-300 rounded-full rotate-45 transition-all duration-300 group-hover:bg-indigo-400" />
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-indigo-300 rounded-full -rotate-45 transition-all duration-300 group-hover:bg-indigo-400" />
              </div>
            </button>
          </div>

          {/* Frase con borde rosa a la izquierda */}
          <div className="px-6 py-4 border-b border-indigo-800/30">
            <p className="text-indigo-300/50 text-xs italic leading-relaxed border-l-2 border-pink-500 pl-3">
              "Codificando el mañana, hoy"
            </p>
          </div>

          {/* Navegación */}
          <div className="flex-1 py-6 px-6 overflow-y-auto">
            <div className="space-y-1">
              {NAVIGATION_ITEMS.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left py-3 px-4 text-indigo-200 text-lg font-medium hover:text-white hover:bg-indigo-900/30 rounded-lg transition-all duration-200 transform hover:translate-x-2"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Footer con redes sociales */}
          <div className="p-6 border-t border-indigo-800/30">
            {/* Botón WhatsApp */}
            <button
              onClick={() => window.open(SOCIAL_LINKS.whatsapp)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-emerald-600/20 to-emerald-600/10 border border-emerald-500/30 rounded-xl text-emerald-300 text-sm font-medium hover:from-emerald-600/40 hover:to-emerald-600/30 transition-all hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </button>

            {/* Redes sociales */}
            <div className="flex justify-center gap-10 mt-6">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex flex-col items-center gap-1 text-indigo-400 hover:text-[#1877F2] transition-all duration-300 hover:scale-110 cursor-pointer group"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
                <span className="text-[10px] text-indigo-400/60 group-hover:text-[#1877F2]">
                  Facebook
                </span>
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex flex-col items-center gap-1 text-indigo-400 hover:text-[#E4405F] transition-all duration-300 hover:scale-110 cursor-pointer group"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
                <span className="text-[10px] text-indigo-400/60 group-hover:text-[#E4405F]">
                  Instagram
                </span>
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex flex-col items-center gap-1 text-indigo-400 hover:text-[#0A66C2] transition-all duration-300 hover:scale-110 cursor-pointer group"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
                <span className="text-[10px] text-indigo-400/60 group-hover:text-[#0A66C2]">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Botón flotante WhatsApp - Solo visible en móvil cuando el menú está cerrado */}
      {!isOpen && (
        <button
          onClick={() => window.open(SOCIAL_LINKS.whatsapp)}
          className="fixed bottom-6 right-6 z-40 bg-linear-to-r from-green-500 to-emerald-600 text-white w-14 h-14 rounded-full flex items-center justify-center animate-[softPulse_2s_ease-in-out_infinite] shadow-lg shadow-green-500/30 sm:hidden hover:scale-110 transition-transform duration-300 hover:shadow-xl hover:shadow-green-500/40"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7" />
        </button>
      )}

      <ScrollProgressBar />
    </>
  );
};

const ScrollProgressBar: React.FC = () => {
  const { scrollProgress } = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-linear-to-r from-indigo-600 to-pink-500 z-50 transition-all duration-100"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};
