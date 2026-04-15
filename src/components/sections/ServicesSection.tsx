import React from "react";
import { motion } from "framer-motion";
import { Section, SectionTitle, Card } from "../ui";

// Datos de servicios - Enfoque en valor para el cliente
const SERVICES = [
  {
    id: "fullstack",
    icon: "🚀",
    title: "Aplicaciones Web Completas",
    description:
      "Tu idea se convierte en producto. Desarrollo desde el frontend hasta el backend con tecnologías modernas que escalan con tu negocio.",
    value: "Tienes una solución lista para crecer sin límites.",
    benefits: [
      "React + TypeScript",
      "APIs RESTful",
      "Bases de datos optimizadas",
    ],
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "Tiendas Online que Venden",
    description:
      "E-commerce profesionales con carrito, pagos seguros y experiencia de compra fluida que convierte visitantes en clientes.",
    value: "Aumentas tus ventas con una tienda que inspira confianza.",
    benefits: [
      "Pasarelas de pago",
      "Gestión de inventario",
      "Panel de administración",
    ],
  },
  {
    id: "dashboard",
    icon: "📊",
    title: "Sistemas de Gestión",
    description:
      "Dashboards y paneles de control personalizados para que tomes decisiones basadas en datos reales, en tiempo real.",
    value: "Control total de tu negocio desde una sola plataforma.",
    benefits: [
      "Gráficos interactivos",
      "Reportes personalizados",
      "Autenticación segura",
    ],
  },
  {
    id: "landing",
    icon: "🎯",
    title: "Landing Pages que Convierten",
    description:
      "Páginas de alto impacto diseñadas con psicología de conversión para captar leads y vender más.",
    value: "Más clientes, más rápido. Tu mensaje directo al público correcto.",
    benefits: ["Optimización SEO", "Velocidad de carga", "Diseño persuasivo"],
  },
  {
    id: "performance",
    icon: "⚡",
    title: "Optimización y Velocidad",
    description:
      "Auditoría y mejora de rendimiento. Lighthouse 90+ para que tu web cargue en segundos y posicione mejor.",
    value: "Tu web vuela, Google te premia, tus usuarios se quedan.",
    benefits: ["Core Web Vitals", "SEO técnico", "Reducción de bounce rate"],
  },
  {
    id: "api",
    icon: "🔌",
    title: "APIs y Backend a Medida",
    description:
      "Construyo la columna vertebral de tu negocio: APIs seguras, rápidas y bien documentadas que conectan todo.",
    value: "Integraciones fluidas, datos protegidos, operaciones eficientes.",
    benefits: ["JWT + Seguridad", "Documentación Swagger", "Escalabilidad"],
  },
];

// Tipos de soluciones - Simplificado y enfocado
const SOLUTIONS = [
  { icon: "🛍️", title: "E-Commerce", desc: "Tiendas que venden 24/7" },
  {
    icon: "🎯",
    title: "Landing Pages",
    desc: "Convierten visitantes en clientes",
  },
  { icon: "📊", title: "Dashboards", desc: "Control total de tu negocio" },
  {
    icon: "🏢",
    title: "Sitios Corporativos",
    desc: "Transmiten confianza y autoridad",
  },
  { icon: "💻", title: "Apps Web", desc: "Experiencias interactivas" },
  { icon: "🔌", title: "APIs", desc: "Conectan tu ecosistema digital" },
];

// Componente de tarjeta de servicio
const ServiceCard: React.FC<{
  service: (typeof SERVICES)[0];
  index: number;
}> = ({ service, index }) => {
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
        className="h-full p-6 rounded-2xl backdrop-blur-md border border-indigo-500/20 hover:border-pink-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 group relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
          {/* Ícono */}
          <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
            {service.icon}
          </div>

          {/* Título */}
          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>

          {/* Descripción */}
          <p className="text-indigo-200/80 text-sm mb-3 leading-relaxed">
            {service.description}
          </p>

          {/* Valor para el cliente */}
          <p className="text-indigo-300 text-sm mb-4 font-medium border-l-2 border-pink-500/50 pl-3">
            ✨ {service.value}
          </p>

          {/* Beneficios */}
          <div className="space-y-1.5 pt-3 border-t border-indigo-800/30">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs text-indigo-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-pink-400" />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

// Componente de tarjeta de solución simplificada
const SolutionCard: React.FC<{
  solution: (typeof SOLUTIONS)[0];
  index: number;
}> = ({ solution, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
    >
      <Card
        variant="gradient"
        className="p-5 rounded-xl backdrop-blur-md border border-indigo-500/20 hover:border-pink-500/30 transition-all duration-300 text-center group"
      >
        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
          {solution.icon}
        </div>
        <h3 className="font-bold text-white text-sm mb-1">{solution.title}</h3>
        <p className="text-indigo-300/70 text-xs">{solution.desc}</p>
      </Card>
    </motion.div>
  );
};

export const ServicesSection: React.FC = () => {
  return (
    <Section id="services" bgColor="darker">
      <SectionTitle
        title="Soluciones que transforman tu negocio"
        subtitle="No solo construyo páginas web. Creo herramientas digitales que resuelven problemas reales, atraen clientes y hacen crecer tu empresa."
      />

      {/* Grid de servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* Tipos de soluciones - Simplificado */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-white mb-2">¿Qué necesitas?</h2>
        <p className="text-indigo-200 text-sm">
          Elijo la tecnología adecuada para cada tipo de proyecto.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {SOLUTIONS.map((solution, index) => (
          <SolutionCard
            key={solution.title}
            solution={solution}
            index={index}
          />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </Section>
  );
};
