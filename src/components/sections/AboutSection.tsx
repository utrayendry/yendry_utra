import React from 'react';
import { Section, SectionTitle, Card } from '../ui';

export const AboutSection: React.FC = () => {
  return (
    <Section id="about" bgColor="dark">
      <SectionTitle
        title="Sobre Mí"
        subtitle="Conoce más sobre mi trayectoria, pasión por el desarrollo web y lo que me impulsa a crear."
      />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative animate-fade-in-left group hidden md:block">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300" />
          <Card variant="glass" className="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&h=700&q=80"
              alt="Yendry - Desarrollador Web Full Stack"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </Card>
        </div>

        {/* Content */}
        <div className="animate-fade-in-right">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Hola, soy <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">Yendry</span>
          </h3>

          <p className="text-indigo-200/80 mb-6 text-lg leading-relaxed">
            Soy un desarrollador web full stack con experiencia en frontend y backend. Trabajo con tecnologías modernas como React, TypeScript, NestJS, Node.js, TailwindCSS y Prisma.
          </p>

          <p className="text-indigo-200/80 mb-8 text-lg leading-relaxed">
            Me apasiona el diseño UI/UX, la accesibilidad, la arquitectura limpia y las buenas prácticas. Mi objetivo es crear productos digitales que combinen estética, rendimiento y funcionalidad.
          </p>

          <div className="mb-8">
            <p className="text-indigo-300 font-semibold text-lg">
              📍 Ubicación: <span className="text-indigo-200">Santa Clara, Cuba</span>
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Experiencia', value: '3+' },
              { label: 'Proyectos', value: '12+' },
              { label: 'Clientes', value: '8+' },
              { label: 'Tecnologías', value: '7+' },
            ].map((stat) => (
              <Card key={stat.label} variant="gradient" className="p-4">
                <div className="font-bold text-indigo-300 text-sm mb-2">{stat.label}</div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
