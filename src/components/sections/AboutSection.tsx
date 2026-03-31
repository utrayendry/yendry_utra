import React from "react";
import { Section, SectionTitle, Card } from "../ui";
import imgOfme from "../../../public/images/1774924704955.png";

export const AboutSection: React.FC = () => {
  return (
    <Section id="why-me" bgColor="dark" className="relative overflow-hidden">
      {/* Fondo diferenciado */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-purple-950/20 to-transparent" />
      <div className="absolute top-40 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Título con enfoque psicológico */}
        <SectionTitle
          title="¿Por qué confiar en mí?"
          subtitle="No busco solo escribir código. Busco entender tu negocio, tus usuarios y tus objetivos para construir soluciones que realmente funcionen."
        />

        {/* GRID PRINCIPAL: Foto + Beneficios principales */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center mb-16">
          {/* COLUMNA IZQUIERDA: Foto optimizada para móvil */}
          <div className="relative group order-1 lg:order-1">
            {/* Glow animado detrás de la foto */}
            <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-2xl md:rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-all duration-500 group-hover:blur-2xl" />

            <Card
              variant="glass"
              className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-950/60 to-purple-950/60 backdrop-blur-sm"
            >
              {/* Contenedor de foto - Ancho completo en móvil */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={imgOfme}
                  alt="Yendry - Desarrollador Full Stack"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    objectPosition: "center 20%",
                  }}
                  loading="lazy"
                />

                {/* Overlay sutil en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Frase de compromiso */}
              <div className="p-4 md:p-6 text-center border-t border-indigo-500/20 bg-gradient-to-r from-indigo-950/40 to-purple-950/40">
                <p className="text-indigo-300 text-[10px] md:text-xs uppercase tracking-wider mb-1 md:mb-2">
                  💡 Mi compromiso
                </p>
                <p className="text-white text-sm md:text-base lg:text-lg font-medium leading-relaxed">
                  "Tu éxito es mi éxito. Trabajo como si fuera mi propio
                  negocio."
                </p>
              </div>
            </Card>
          </div>

          {/* COLUMNA DERECHA: 3 beneficios principales */}
          <div className="flex flex-col gap-4 md:gap-5 order-2 lg:order-2">
            {/* Beneficio 1 */}
            <div className="group cursor-default">
              <div className="p-4 md:p-5 rounded-xl bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-indigo-500/30 transition-all duration-300">
                    <span className="text-xl md:text-2xl">🎯</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2">
                      Entiendo tu negocio
                    </h4>
                    <p className="text-indigo-200/80 leading-relaxed text-xs md:text-sm">
                      No empiezo a escribir código sin antes entender quiénes
                      son tus usuarios, cuál es tu propuesta de valor y qué
                      resultados necesitas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Beneficio 2 */}
            <div className="group cursor-default">
              <div className="p-4 md:p-5 rounded-xl bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-pink-500/30 transition-all duration-300">
                    <span className="text-xl md:text-2xl">📈</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2">
                      Resultados, no líneas de código
                    </h4>
                    <p className="text-indigo-200/80 leading-relaxed text-xs md:text-sm">
                      Mido mi éxito por el impacto que genero:{" "}
                      <span className="text-indigo-300 font-medium">
                        mayor conversión
                      </span>
                      ,
                      <span className="text-indigo-300 font-medium">
                        {" "}
                        mejor experiencia de usuario
                      </span>{" "}
                      y
                      <span className="text-indigo-300 font-medium">
                        {" "}
                        menor tiempo de carga
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Beneficio 3 */}
            <div className="group cursor-default">
              <div className="p-4 md:p-5 rounded-xl bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-purple-500/30 transition-all duration-300">
                    <span className="text-xl md:text-2xl">🔧</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2">
                      Trabajo con reglas claras
                    </h4>
                    <p className="text-indigo-200/80 leading-relaxed text-xs md:text-sm">
                      Entregas parciales, comunicación constante y código limpio
                      que
                      <span className="text-indigo-300 font-medium">
                        {" "}
                        cualquiera de tu equipo pueda mantener
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN: ¿Para quién trabajo idealmente? */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block px-3 md:px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs md:text-sm font-medium mb-3">
              🎯 Perfil ideal
            </span>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
              Trabajo contigo si tu negocio...
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              {
                text: "Necesita una web que venda, no que solo 'se vea bonita'",
                icon: "💰",
              },
              {
                text: "Quiere mejorar la experiencia de sus usuarios actuales",
                icon: "😊",
              },
              {
                text: "Busca escalar sin que el código se vuelva un dolor de cabeza",
                icon: "📊",
              },
              {
                text: "Valora la comunicación clara y las entregas a tiempo",
                icon: "⏰",
              },
              {
                text: "Quiere un socio técnico, no solo un 'programador'",
                icon: "🤝",
              },
              {
                text: "Está cansado de proyectos que nunca terminan",
                icon: "🚫",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-3 md:p-4 rounded-xl bg-indigo-900/20 border border-indigo-500/10 hover:border-indigo-500/30 hover:bg-indigo-900/30 transition-all duration-300 cursor-default hover:scale-[1.02]"
              >
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="text-indigo-200/80 text-xs md:text-sm leading-relaxed">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECCIÓN: Stats con resultados tangibles */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block px-3 md:px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs md:text-sm font-medium mb-3">
              📊 Resultados tangibles
            </span>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
              Lo que puedes esperar
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              {
                value: "3+",
                label: "Años de experiencia",
                icon: "💼",
                detail: "en proyectos reales",
              },
              {
                value: "12+",
                label: "Proyectos entregados",
                icon: "🚀",
                detail: "a tiempo y presupuesto",
              },
              {
                value: "8+",
                label: "Clientes satisfechos",
                icon: "🤝",
                detail: "que repiten o recomiendan",
              },
              {
                value: "99.9%",
                label: "Disponibilidad",
                icon: "⚡",
                detail: "comunicación fluida",
              },
            ].map((stat) => (
              <Card
                key={stat.label}
                variant="gradient"
                className="p-3 md:p-5 text-center hover:scale-105 transition-all duration-300 cursor-default group"
              >
                <div className="text-2xl md:text-3xl mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-0.5 md:mb-1">
                  {stat.value}
                </div>
                <div className="text-indigo-300 text-xs md:text-sm font-medium">
                  {stat.label}
                </div>
                <div className="text-indigo-400/60 text-[10px] md:text-xs mt-0.5 md:mt-1">
                  {stat.detail}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CIERRE: Llamada a la acción */}
        <div className="text-center">
          <div className="inline-block p-5 md:p-8 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-xl md:rounded-2xl border border-indigo-500/20 backdrop-blur-sm max-w-2xl mx-auto hover:border-indigo-500/40 transition-all duration-300">
            <div className="text-4xl md:text-5xl mb-3 md:mb-4 animate-pulse-slow">
              🤝
            </div>
            <h4 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">
              ¿Tienes un proyecto en mente?
            </h4>
            <p className="text-indigo-200/80 mb-4 md:mb-6 max-w-md mx-auto text-sm md:text-base">
              Hablemos sin compromiso. Te ayudo a definir qué necesitas y cómo
              puedo aportarte valor.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection)
                  contactSection.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-lg text-white font-medium text-sm md:text-base hover:scale-105 transition-transform shadow-lg hover:shadow-indigo-500/25"
            >
              📲 Hablemos de tu proyecto
            </button>
            <p className="text-indigo-400/60 text-[10px] md:text-xs mt-3 md:mt-4">
              Sin compromiso. Primero entendemos tu necesidad.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
