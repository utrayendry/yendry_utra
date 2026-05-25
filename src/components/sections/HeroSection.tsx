import React, { useEffect, useState } from "react";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { Icon } from "../ui/Icon";
import img from "../../../public/images/1735482116425.jpg";

export const HeroSection: React.FC = () => {
  const { scrollToElement } = useSmoothScroll();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = img;
    image.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-28 animate-[fadeSlideUp_0.8s_ease-out]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={img}
          alt="Fondo profesional de desarrollo web — Yendry, Full Stack Developer"
          width={1920}
          height={1080}
          className={`w-full h-full object-cover transition-opacity duration-700 ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0a0a15]/88 to-[#0a0a15]/88"
          aria-hidden="true"
        />
      </div>

      {/* Decorative Blobs */}
      <div
        className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-blob hidden md:block will-change-transform"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-2000 hidden md:block will-change-transform"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
        <h1
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="block text-white">¿Tienes una idea?</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
            Conviértela en negocio
          </span>
        </h1>

        <p
          className="text-indigo-200/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Webs rápidas que{" "}
          <span className="text-indigo-300 font-medium">venden más</span> y
          generan <span className="text-indigo-300 font-medium">confianza</span>{" "}
          desde el primer clic.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            type="button"
            onClick={() => scrollToElement("why-me")}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base sm:text-lg font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-pink-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400/40"
          >
            <Icon name="zap" className="w-5 h-5" aria-hidden="true" />
            ¿Cómo te ayudo?
          </button>

          <button
            type="button"
            onClick={() => scrollToElement("contact")}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base sm:text-lg font-medium rounded-xl bg-white/5 backdrop-blur-sm text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20"
          >
            <Icon
              name="message-circle"
              className="w-5 h-5"
              aria-hidden="true"
            />
            Hablemos
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0a0a15] to-transparent z-10"
        aria-hidden="true"
      />
    </section>
  );
};
