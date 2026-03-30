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

      {/* Blobs decorativos */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

      {/* Content - Minimalista */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
        {/* Headline principal */}
        <h1
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="block text-white">¿Tienes una idea?</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
            Conviértela en negocio
          </span>
        </h1>

        {/* Subheadline - Una sola frase de beneficio */}
        <p
          className="text-indigo-200/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Webs rápidas que{" "}
          <span className="text-indigo-300 font-medium">venden más</span> y
          generan <span className="text-indigo-300 font-medium">confianza</span>{" "}
          desde el primer clic.
        </p>

        {/* CTAs - Dos opciones claras */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            onClick={() => scrollToElement("why-me")}
            variant="primary"
            size="lg"
            className="shadow-lg shadow-indigo-500/20 hover:shadow-pink-500/30 transition-all"
            icon={<i className="fas fa-bolt" />}
          >
            ¿Cómo te ayudo?
          </Button>

          <Button
            onClick={() => scrollToElement("contact")}
            variant="secondary"
            size="lg"
            icon={<i className="fas fa-comment" />}
          >
            Hablemos
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0a0a15] to-transparent z-10" />
    </section>
  );
};
