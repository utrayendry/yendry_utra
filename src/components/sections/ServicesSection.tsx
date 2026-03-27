import React from "react";
import { motion } from "framer-motion";
import { Section, SectionTitle, Card } from "../ui";

// Interfaz para servicios
interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

// Interfaz para tipos de página
interface PageType {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// Datos de servicios
const SERVICES: Service[] = [
  {
    id: "fullstack",
    icon: "🚀",
    title: "Desarrollo Web Full-Stack",
    description:
      "Aplicaciones web modernas, escalables y robustas desde frontend hasta backend.",
    benefits: ["React + TypeScript", "APIs RESTful", "Bases de datos"],
  },
  {
    id: "ui-design",
    icon: "🎨",
    title: "Diseño de Interfaces (UI)",
    description:
      "Interfaces hermosas, intuititivas y consistentes con tu marca.",
    benefits: ["Diseño responsivo", "Figma & CSS", "Componentes reutilizables"],
  },
  {
    id: "ux-design",
    icon: "👤",
    title: "Experiencia de Usuario (UX)",
    description:
      "Estrategias centradas en el usuario para maximizar conversiones y satisfacción.",
    benefits: ["Wireframing", "User Testing", "Optimización UX"],
  },
  {
    id: "apis",
    icon: "🔌",
    title: "Desarrollo de APIs",
    description:
      "APIs seguras, rápidas y bien documentadas con NestJS, Express y Prisma.",
    benefits: ["JWT + Seguridad", "Escalabilidad", "Documentación"],
  },
  {
    id: "performance",
    icon: "⚡",
    title: "Optimización y Performance",
    description:
      "SEO técnico, velocidad de carga y Lighthouse 90+ para máximo alcance.",
    benefits: ["Core Web Vitals", "SEO técnico", "Auditorías de rendimiento"],
  },
  {
    id: "dashboards",
    icon: "📊",
    title: "Dashboards y Paneles Admin",
    description:
      "Sistemas internos profesionales para gestión de datos y análisis en tiempo real.",
    benefits: ["Gráficos interactivos", "Autenticación", "Analytics"],
  },
];

// Datos de tipos de páginas
const PAGE_TYPES: PageType[] = [
  {
    id: "ecommerce",
    icon: "🛍️",
    title: "E-Commerce Profesional",
    description:
      "Tiendas online modernas con carrito, pagos seguros e integración logística.",
  },
  {
    id: "landing",
    icon: "🎯",
    title: "Landing Pages",
    description:
      "Páginas de alto impacto diseñadas para convertir visitantes en clientes.",
  },
  {
    id: "portfolio",
    icon: "💼",
    title: "Portafolios Profesionales",
    description:
      "Portafolios elegantes que destacan tu trabajo y experiencia profesional.",
  },
  {
    id: "corporate",
    icon: "🏢",
    title: "Sitios Corporativos",
    description:
      "Websites profesionales que transmiten confianza y autoridad de marca.",
  },
  {
    id: "admin",
    icon: "⚙️",
    title: "Dashboards y Sistemas",
    description:
      "Plataformas internas para gestión de datos, usuarios y operaciones.",
  },
  {
    id: "apps",
    icon: "💻",
    title: "Aplicaciones Web Interactivas",
    description:
      "Apps web dinámicas con múltiples funcionalidades e interactividad.",
  },
];

// Componente de tarjeta de servicio
const ServiceCard: React.FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card
        variant="gradient"
        className="h-full p-6 sm:p-7 md:p-8 rounded-2xl backdrop-blur-md border border-indigo-500/20 hover:border-pink-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 group relative overflow-hidden"
      >
        {/* Fondo decorativo */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-pink-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Contenido */}
        <div className="relative z-10">
          {/* Ícono */}
          <div className="text-5xl sm:text-6xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            {service.icon}
          </div>

          {/* Título */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
            {service.title}
          </h3>

          {/* Descripción */}
          <p className="text-sm sm:text-base text-indigo-200 mb-4 leading-relaxed">
            {service.description}
          </p>

          {/* Beneficios */}
          <div className="space-y-2 pt-4 border-t border-indigo-800/30">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs sm:text-sm text-indigo-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-indigo-400 to-pink-400" />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

// Componente de tarjeta de tipo de página
const PageTypeCard: React.FC<{ pageType: PageType; index: number }> = ({
  pageType,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
    >
      <Card
        variant="gradient"
        className="h-full p-6 sm:p-7 rounded-2xl backdrop-blur-md border border-indigo-500/20 hover:border-pink-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10 group relative overflow-hidden"
      >
        {/* Fondo decorativo */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-indigo-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Contenido */}
        <div className="relative z-10 text-center">
          {/* Ícono */}
          <div className="text-4xl sm:text-5xl mb-3 transition-transform duration-300 group-hover:scale-110 inline-block">
            {pageType.icon}
          </div>

          {/* Título */}
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">
            {pageType.title}
          </h3>

          {/* Descripción */}
          <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed">
            {pageType.description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export const ServicesSection: React.FC = () => {
  return (
    <Section id="services" bgColor="darker">
      {/* Encabezado principal */}
      <SectionTitle
        title="Servicios Profesionales"
        subtitle="Soluciones web modernas, rápidas y diseñadas para convertir."
      />

      {/* Grid de servicios principales */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-14 md:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
          },
        }}
      >
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </motion.div>

      {/* Divisor visual */}
      <div className="my-12 sm:my-14 md:my-16">
        <div className="h-px bg-linear-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>

      {/* Subtítulo secundario */}
      <motion.div
        className="text-center mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
          Tipos de Páginas Web que Diseño
        </h2>
        <p className="text-indigo-200 text-sm sm:text-base">
          Soluciones especializadas para cada tipo de proyecto
        </p>
      </motion.div>

      {/* Grid de tipos de página */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
          },
        }}
      >
        {PAGE_TYPES.map((pageType, index) => (
          <PageTypeCard key={pageType.id} pageType={pageType} index={index} />
        ))}
      </motion.div>
    </Section>
  );
};
