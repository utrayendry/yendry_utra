import React, { useState, useRef, useEffect, useCallback } from "react";
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from "../../constants";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { Icon } from "../ui/Icon";
import { Button } from "../ui";

/**
 * Professional navbar with slide-in drawer from the left.
 *
 * Mobile:
 * - ☰ hamburger icon on the right (3 bars)
 * - On click: middle bar fades, top/bottom bars rotate into ✕
 * - Drawer slides from the left with backdrop overlay
 * - WhatsApp floating button when menu is closed
 *
 * Desktop:
 * - Horizontal navigation with animated underline tracker
 * - WhatsApp CTA button
 *
 * All social icons use the shared Icon component (SVG).
 */
export const Navbar: React.FC = () => {
  const { scrollToElement } = useSmoothScroll();
  const { isNavbarScrolled } = useScrollProgress();
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const trackerRef = useRef<HTMLSpanElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // ─── Click outside to close drawer ──────────────────
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [isOpen],
  );

  // ─── Scroll lock + ESC key ──────────────────────────
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  // ─── Underline tracker animation ────────────────────
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

  // ─── Navigation handler ─────────────────────────────
  const handleNavClick = useCallback(
    (href: string) => {
      scrollToElement(href);
      setIsOpen(false);
    },
    [scrollToElement],
  );

  return (
    <>
      {/* ─── Backdrop Overlay ──────────────────────────── */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ─── Navbar ────────────────────────────────────── */}
      <nav
        className={`fixed w-full py-4 px-6 md:px-12 transition-all duration-300 z-50 animate-[fadeSlideDown_0.7s_ease-out] ${
          isNavbarScrolled
            ? "bg-[#0a0a15]/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        {/* Animated bottom border */}
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
            transformOrigin: "left",
          }}
        />

        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* ─── Logo ──────────────────────────────────── */}
          <button
            onClick={() => handleNavClick("home")}
            className="cursor-pointer select-none group transition-all duration-300 hover:scale-105"
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

          {/* ─── Desktop Navigation ────────────────────── */}
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

          {/* ─── Actions ────────────────────────────────── */}
          <div className="flex items-center space-x-4">
            {/* WhatsApp CTA (desktop) */}
            <div className="hidden sm:block">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => window.open(SOCIAL_LINKS.whatsapp)}
                icon={
                  <Icon
                    name="whatsapp"
                    className="w-4 h-4"
                    aria-hidden="true"
                  />
                }
              >
                WhatsApp
              </Button>
            </div>

            {/* ─── Hamburger → ✕ Animation ──────────────── */}
            <button
              ref={hamburgerRef}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
            >
              {/* Top bar */}
              <span
                className={`block w-6 h-0.5 bg-indigo-300 rounded-full transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              {/* Middle bar — fades out */}
              <span
                className={`block w-6 h-0.5 bg-indigo-300 rounded-full my-1.5 transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              {/* Bottom bar */}
              <span
                className={`block w-6 h-0.5 bg-indigo-300 rounded-full transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════
          MOBILE DRAWER — Slides from the LEFT
          ═══════════════════════════════════════════════════ */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-72 max-w-[85vw] bg-linear-to-b from-[#0a0a15] to-[#050508] border-r border-indigo-800/30 transform transition-transform duration-400 ease-out shadow-2xl z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* ─── Drawer Header: Solo logo ────────────────── */}
          <div className="flex items-center p-5 border-b border-indigo-800/30">
            <button
              onClick={() => {
                handleNavClick("home");
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
          </div>

          {/* ─── Phrase ────────────────────────────────────── */}
          <div className="px-5 py-3 border-b border-indigo-800/30">
            <p className="text-indigo-300/50 text-xs italic leading-relaxed border-l-2 border-pink-500 pl-3">
              "Codificando el mañana, hoy"
            </p>
          </div>

          {/* ─── Navigation Links ────────────────────────── */}
          <div className="flex-1 py-4 px-4 overflow-y-auto">
            <div className="space-y-1">
              {NAVIGATION_ITEMS.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left py-3 px-4 text-indigo-200 text-lg font-medium hover:text-white hover:bg-indigo-900/30 rounded-lg transition-all duration-200 transform hover:translate-x-2"
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* ─── Drawer Footer ────────────────────────────── */}
          <div className="p-5 border-t border-indigo-800/30 space-y-4">
            {/* WhatsApp button */}
            <button
              onClick={() => window.open(SOCIAL_LINKS.whatsapp)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-emerald-600/20 to-emerald-600/10 border border-emerald-500/30 rounded-xl text-emerald-300 text-sm font-medium hover:from-emerald-600/40 hover:to-emerald-600/30 transition-all hover:scale-105"
            >
              <Icon name="whatsapp" className="w-4 h-4" aria-hidden="true" />
              WhatsApp
            </button>

            {/* Social links */}
            <div className="flex justify-center gap-8">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex flex-col items-center gap-1 text-indigo-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Icon name="facebook" className="w-5 h-5" aria-hidden="true" />
                <span className="text-[10px] text-indigo-400/60">Facebook</span>
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex flex-col items-center gap-1 text-indigo-400 hover:text-pink-400 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Icon name="instagram" className="w-5 h-5" aria-hidden="true" />
                <span className="text-[10px] text-indigo-400/60">
                  Instagram
                </span>
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex flex-col items-center gap-1 text-indigo-400 hover:text-blue-500 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" className="w-5 h-5" aria-hidden="true" />
                <span className="text-[10px] text-indigo-400/60">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── WhatsApp Floating Button (mobile) ──────────── */}
      {!isOpen && (
        <button
          onClick={() => window.open(SOCIAL_LINKS.whatsapp)}
          className="fixed bottom-6 right-6 z-40 bg-linear-to-r from-green-500 to-emerald-600 text-white w-14 h-14 rounded-full flex items-center justify-center animate-[softPulse_2s_ease-in-out_infinite] shadow-lg shadow-green-500/30 sm:hidden hover:scale-110 transition-transform duration-300"
          aria-label="WhatsApp"
        >
          <Icon name="whatsapp" className="w-7 h-7" aria-hidden="true" />
        </button>
      )}

      {/* ─── Scroll Progress Bar ────────────────────────── */}
      <ScrollProgressBar />
    </>
  );
};

const ScrollProgressBar: React.FC = () => {
  const { scrollProgress } = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-linear-to-r from-indigo-600 to-pink-500 z-[60] transition-all duration-100"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};
