import React, { useState, useRef } from "react";
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from "../../constants";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { Button } from "../ui";

export const Navbar: React.FC = () => {
  const { scrollToElement } = useSmoothScroll();
  const { isNavbarScrolled } = useScrollProgress();
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const trackerRef = useRef<HTMLSpanElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const moveTracker = (index: number) => {
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
    setTimeout(() => trackerRef.current?.classList.remove("glow-active"), 300);

    setCurrentIndex(index);
  };

  const hideTracker = () => {
    if (!trackerRef.current) return;

    setTimeout(() => {
      if (!trackerRef.current) return;
      trackerRef.current.style.width = "0px";
      setCurrentIndex(null);
    }, 150);
  };

  const handleNavClick = (href: string) => {
    scrollToElement(href);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`
          fixed w-full z-50 py-4 px-6 md:px-12 
          transition-all duration-300
          animate-[fadeSlideDown_0.7s_ease-out]
          ${
            isNavbarScrolled ? "delay-200 bg-[#0a0a15]/95 backdrop-blur-md" : ""
          }
        `}
      >
        <span
          className="absolute bottom-0 left-0 h-[1px] bg-indigo-800/20 transition-transform duration-300 ease-out"
          style={{
            width: "100%",
            transform: isNavbarScrolled ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: isNavbarScrolled ? "left" : "right",
          }}
        />

        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* LOGO */}
          <button
            onClick={() => scrollToElement("home")}
            className="cursor-pointer select-none"
          >
            <span
              className="text-3xl md:text-4xl font-extrabold text-white"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              Yendry<span className="text-pink-400">.</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div
            ref={navRef}
            className="hidden md:flex items-center space-x-10 relative"
            onMouseLeave={hideTracker}
          >
            {NAVIGATION_ITEMS.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                onMouseEnter={() => moveTracker(index)}
                className="
                  nav-item font-medium text-sm uppercase tracking-wider 
                  text-indigo-200 hover:text-white transition-colors relative
                "
              >
                {item.label}
                <span className="absolute inset-0 -top-6 -bottom-6 -left-6 -right-6" />
              </button>
            ))}

            <span
              ref={trackerRef}
              className="
                underline-tracker absolute -bottom-1 left-0 h-0.5 
                bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full
              "
              style={{ width: 0 }}
            />
          </div>

          {/* CTA + HOT DOG MENU */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => window.open(SOCIAL_LINKS.whatsapp)}
                icon={<i className="fab fa-whatsapp text-lg" />}
              >
                WhatsApp
              </Button>
            </div>

            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`block h-[5px] bg-indigo-300 rounded-full transition-all duration-300 ${isOpen ? "rotate-45 w-8 translate-y-[8px]" : "w-9"}`}
              />
              <span
                className={`block h-[5px] bg-indigo-300 rounded-full transition-all duration-300 my-[6px] ${isOpen ? "opacity-0 w-0" : "w-6"}`}
              />
              <span
                className={`block h-[5px] bg-indigo-300 rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 w-8 -translate-y-[8px]" : "w-8"}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* SIDEBAR MÓVIL */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 
          bg-[#0a0a15]/95 backdrop-blur-xl 
          border-l border-indigo-800/20 
          z-40 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col items-start p-8 space-y-8">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-indigo-200 text-lg font-medium hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <button
        onClick={() => window.open(SOCIAL_LINKS.whatsapp)}
        className="
          fixed bottom-6 right-6 z-50 
          bg-green-500 text-white w-16 h-16 rounded-full 
          flex items-center justify-center 
          animate-[softPulse_2s_ease-in-out_infinite]
          sm:hidden
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-9 h-9"
        >
          <path d="M16.001 3.2c-7.063 0-12.8 5.736-12.8 12.8 0 2.257.589 4.457 1.708 6.4L3.2 28.8l6.595-1.683c1.843.999 3.92 1.517 6.206 1.517h.001c7.063 0 12.8-5.736 12.8-12.8s-5.737-12.8-12.801-12.8zm0 23.466h-.001c-1.998 0-3.938-.536-5.63-1.548l-.403-.239-3.913.999 1.04-3.818-.262-.392c-1.036-1.55-1.582-3.351-1.582-5.233 0-5.292 4.305-9.6 9.6-9.6 2.563 0 4.976.999 6.792 2.813 1.815 1.815 2.813 4.229 2.813 6.792 0 5.292-4.307 9.6-9.654 9.6zm5.497-7.2c-.301-.15-1.778-.878-2.054-.978-.275-.1-.476-.15-.676.15-.2.301-.776.978-.951 1.178-.175.2-.351.225-.651.075-.301-.15-1.271-.469-2.421-1.494-.895-.797-1.5-1.78-1.676-2.08-.175-.301-.019-.464.131-.614.134-.133.301-.351.451-.526.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.627-.926-2.226-.244-.586-.491-.507-.676-.517l-.576-.01c-.2 0-.526.075-.801.376-.275.301-1.051 1.027-1.051 2.502 0 1.476 1.076 2.9 1.226 3.101.15.2 2.119 3.238 5.138 4.536.718.31 1.278.494 1.714.632.72.229 1.375.197 1.894.12.578-.086 1.778-.726 2.03-1.428.251-.701.251-1.302.176-1.428-.075-.125-.275-.2-.576-.35z" />
        </svg>
      </button>

      <ScrollProgressBar />
    </>
  );
};

const ScrollProgressBar: React.FC = () => {
  const { scrollProgress } = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-600 to-pink-500 z-50 transition-all duration-100"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};
