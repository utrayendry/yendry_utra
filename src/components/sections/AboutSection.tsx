import React from "react";
import { Section, SectionTitle, Card } from "../ui";

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
        <div className="grid lg:grid-cols-2 gap-10 items-stretch mb-16">
          {/* COLUMNA IZQUIERDA: Foto Anime + frase de impacto */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300" />
            <Card
              variant="glass"
              className="relative overflow-hidden rounded-2xl h-full"
            >
              <div className="p-1">
                <img
                  src="https://i.pinimg.com/564x/5d/af/72/5daf72f12e4b841db3da6d96d82431a8.jpg"
                  alt="Yendry - Desarrollador Full Stack"
                  className="w-full h-auto object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center border-t border-indigo-500/20 mt-2">
                <p className="text-indigo-300 text-sm uppercase tracking-wider mb-1">
                  💡 Mi compromiso
                </p>
                <p className="text-white text-lg font-medium">
                  "Tu éxito es mi éxito. Trabajo como si fuera mi propio
                  negocio."
                </p>
              </div>
            </Card>
          </div>

          {/* COLUMNA DERECHA: 3 beneficios principales (tarjetas verticales) */}
          <div className="flex flex-col gap-5">
            {/* Beneficio 1 */}
            <div className="group cursor-default">
              <div className="p-5 rounded-xl bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">
                      Entiendo tu negocio
                    </h4>
                    <p className="text-indigo-200/80 leading-relaxed">
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
              <div className="p-5 rounded-xl bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">
                      Resultados, no líneas de código
                    </h4>
                    <p className="text-indigo-200/80 leading-relaxed">
                      Mido mi éxito por el impacto que genero:{" "}
                      <span className="text-indigo-300">mayor conversión</span>,
                      <span className="text-indigo-300">
                        {" "}
                        mejor experiencia de usuario
                      </span>{" "}
                      y
                      <span className="text-indigo-300">
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
              <div className="p-5 rounded-xl bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">
                      Trabajo con reglas claras
                    </h4>
                    <p className="text-indigo-200/80 leading-relaxed">
                      Entregas parciales, comunicación constante y código limpio
                      que
                      <span className="text-indigo-300">
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

        {/* SECCIÓN: ¿Para quién trabajo idealmente? (Tarjetas horizontales en grid) */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium mb-3">
              🎯 Perfil ideal
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Trabajo contigo si tu negocio...
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                className="group p-4 rounded-xl bg-indigo-900/20 border border-indigo-500/10 hover:border-indigo-500/30 hover:bg-indigo-900/30 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-indigo-200/80 text-sm leading-relaxed">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECCIÓN: Stats con resultados tangibles */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium mb-3">
              📊 Resultados tangibles
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Lo que puedes esperar
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                className="p-5 text-center hover:scale-105 transition-all duration-300 cursor-default"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-indigo-300 text-sm font-medium">
                  {stat.label}
                </div>
                <div className="text-indigo-400/60 text-xs mt-1">
                  {stat.detail}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CIERRE: Llamada a la acción */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-2xl border border-indigo-500/20 backdrop-blur-sm max-w-2xl mx-auto">
            <div className="text-5xl mb-4">🤝</div>
            <h4 className="text-white text-xl md:text-2xl font-bold mb-3">
              ¿Tienes un proyecto en mente?
            </h4>
            <p className="text-indigo-200/80 mb-6 max-w-md mx-auto">
              Hablemos sin compromiso. Te ayudo a definir qué necesitas y cómo
              puedo aportarte valor.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection)
                  contactSection.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-lg text-white font-medium hover:scale-105 transition-transform shadow-lg hover:shadow-indigo-500/25"
            >
              📲 Hablemos de tu proyecto
            </button>
            <p className="text-indigo-400/60 text-xs mt-4">
              Sin compromiso. Primero entendemos tu necesidad.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
