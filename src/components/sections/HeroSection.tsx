import React from "react";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { Button } from "../ui";
import img from "../../../public/images/1735482116425.jpg";

export const HeroSection: React.FC = () => {
  const { scrollToElement } = useSmoothScroll();

  return (
    <section
      id="home"
      className="
        min-h-screen flex items-center justify-center 
        relative overflow-hidden pt-32 pb-28
        animate-[fadeSlideUp_0.8s_ease-out]
      "
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, rgba(6, 6, 10, 0.88), rgba(6, 6, 10, 0.88)), url(${img}) center/cover no-repeat`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
        <h1
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
            Codificando el mañana,
          </span>
          <span className="block text-white">
            hoy<span className="text-pink-400">.</span>
          </span>
        </h1>

        <p
          className="text-indigo-200/80 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Desarrollo experiencias digitales modernas, rápidas y visualmente
          impecables.
        </p>

        {/* CTA con pulso suave */}
        <div
          className="flex justify-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            onClick={() => scrollToElement("projects")}
            variant="primary"
            size="lg"
            className="
              shadow-lg shadow-indigo-500/20 hover:shadow-pink-500/30 
              transition-all
              animate-[softPulse_2.2s_ease-in-out_infinite]
            "
            icon={<i className="fas fa-briefcase" />}
          >
            Ver Proyectos
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0a0a15] to-transparent z-10" />
    </section>
  );
};
