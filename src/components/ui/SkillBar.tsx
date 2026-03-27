import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  name: string;
  proficiency: number;
  icon?: string;
  iconColor?: string;
}

export const SkillBar: React.FC<SkillBarProps> = ({
  name,
  proficiency,
  icon,
  iconColor,
}) => {
  const [animatedProficiency, setAnimatedProficiency] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isIconHovering, setIsIconHovering] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // IntersectionObserver para animar únicamente cuando está visible
  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animar solo si pasó el threshold
          const timer = setTimeout(() => {
            setAnimatedProficiency(proficiency);
          }, 50);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [proficiency]);

  const isImageIcon = icon?.startsWith("http");
  const glowColor = iconColor || "#666666";

  return (
    <div ref={ref} className="mb-5 sm:mb-6 animate-fade-in-up">
      <div className="flex justify-between items-center mb-2 gap-2">
        <div className="flex items-center gap-2 min-w-0 shrink-0">
          {icon && (
            <div
              className="relative w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform duration-300 ease-out"
              onMouseEnter={() => setIsIconHovering(true)}
              onMouseLeave={() => setIsIconHovering(false)}
              style={{
                transform: isIconHovering
                  ? "scale(1.15) rotate(5deg)"
                  : "scale(1)",
              }}
            >
              {isImageIcon ? (
                <>
                  {/* Glow effect dinámico - SOLO cuando hay hover sobre el icono */}
                  <div
                    className="absolute inset-0 rounded-full blur-md transition-opacity duration-300"
                    style={{
                      backgroundColor: glowColor,
                      filter: `blur(8px)`,
                      opacity: isIconHovering ? 1 : 0,
                    }}
                  />
                  {/* Icono con máscara */}
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundColor: glowColor,
                      maskImage: `url(${icon})`,
                      WebkitMaskImage: `url(${icon})`,
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                    }}
                  />
                </>
              ) : (
                <span className="text-lg">{icon}</span>
              )}
            </div>
          )}
          <span className="font-semibold text-indigo-100 text-sm sm:text-base truncate">
            {name}
          </span>
        </div>
        <span className="text-indigo-300 text-xs sm:text-xs font-medium shrink-0">
          {animatedProficiency}%
        </span>
      </div>

      {/* Skill bar mejorado */}
      <div className="w-full bg-indigo-900/30 border border-indigo-800/40 rounded-full h-2 sm:h-2.5 overflow-hidden shadow-md relative">
        {/* Fondo con patrón sutil */}
        <div className="absolute inset-0 opacity-10 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500" />

        {/* Barra animada */}
        <div
          className="h-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg transition-shadow duration-500"
          style={{
            width: isVisible ? `${animatedProficiency}%` : "0%",
            transition: isVisible
              ? "width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)"
              : "width 0.3s ease-out",
            boxShadow: `0 8px 16px rgba(99, 102, 241, 0.5)`,
          }}
        />
      </div>
    </div>
  );
};
