import React from "react";
import { motion } from "framer-motion";
import { Section, SectionTitle, Card } from "../ui";
import { Icon } from "../ui/Icon";
import type { IconName } from "../ui/Icon";

/**
 * Services data — client-focused value propositions.
 * All icons use the Icon component (SVG) instead of emojis
 * for professional, accessible rendering.
 */
const SERVICES: {
  id: string;
  icon: IconName;
  iconColor: string;
  iconLabel: string;
  title: string;
  description: string;
  value: string;
  benefits: string[];
}[] = [
  {
    id: "fullstack",
    icon: "rocket",
    iconColor: "text-indigo-400",
    iconLabel: "Aplicaciones web completas",
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
    icon: "cart",
    iconColor: "text-emerald-400",
    iconLabel: "Tiendas online",
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
    icon: "chart",
    iconColor: "text-purple-400",
    iconLabel: "Sistemas de gestión",
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
    icon: "target",
    iconColor: "text-pink-400",
    iconLabel: "Landing pages",
    title: "Landing Pages que Convierten",
    description:
      "Páginas de alto impacto diseñadas con psicología de conversión para captar leads y vender más.",
    value: "Más clientes, más rápido. Tu mensaje directo al público correcto.",
    benefits: ["Optimización SEO", "Velocidad de carga", "Diseño persuasivo"],
  },
  {
    id: "performance",
    icon: "zap",
    iconColor: "text-amber-400",
    iconLabel: "Optimización y velocidad",
    title: "Optimización y Velocidad",
    description:
      "Auditoría y mejora de rendimiento. Lighthouse 90+ para que tu web cargue en segundos y posicione mejor.",
    value: "Tu web vuela, Google te premia, tus usuarios se quedan.",
    benefits: ["Core Web Vitals", "SEO técnico", "Reducción de bounce rate"],
  },
  {
    id: "api",
    icon: "api",
    iconColor: "text-cyan-400",
    iconLabel: "APIs y backend",
    title: "APIs y Backend a Medida",
    description:
      "Construyo la columna vertebral de tu negocio: APIs seguras, rápidas y bien documentadas que conectan todo.",
    value: "Integraciones fluidas, datos protegidos, operaciones eficientes.",
    benefits: ["JWT + Seguridad", "Documentación Swagger", "Escalabilidad"],
  },
];

/**
 * Solution types — simplified for quick scanning.
 * Uses professional SVG icons instead of emojis.
 */
const SOLUTIONS: {
  icon: IconName;
  iconColor: string;
  iconLabel: string;
  title: string;
  desc: string;
}[] = [
  {
    icon: "store",
    iconColor: "text-emerald-400",
    iconLabel: "E-Commerce",
    title: "E-Commerce",
    desc: "Tiendas que venden 24/7",
  },
  {
    icon: "target",
    iconColor: "text-pink-400",
    iconLabel: "Landing Pages",
    title: "Landing Pages",
    desc: "Convierten visitantes en clientes",
  },
  {
    icon: "chart",
    iconColor: "text-purple-400",
    iconLabel: "Dashboards",
    title: "Dashboards",
    desc: "Control total de tu negocio",
  },
  {
    icon: "briefcase",
    iconColor: "text-indigo-400",
    iconLabel: "Sitios Corporativos",
    title: "Sitios Corporativos",
    desc: "Transmiten confianza y autoridad",
  },
  {
    icon: "code",
    iconColor: "text-cyan-400",
    iconLabel: "Apps Web",
    title: "Apps Web",
    desc: "Experiencias interactivas",
  },
  {
    icon: "api",
    iconColor: "text-amber-400",
    iconLabel: "APIs",
    title: "APIs",
    desc: "Conectan tu ecosistema digital",
  },
];

/**
 * Service card component — memoized for performance.
 * Displays a service with SVG icon, title, description, value prop, and benefits.
 */
const ServiceCard: React.FC<{
  service: (typeof SERVICES)[0];
  index: number;
}> = React.memo(({ service, index }) => {
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
        {/* Decorative glow on hover */}
        <div
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />

        <div className="relative z-10">
          {/* SVG Icon — replaces emoji */}
          <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
            <Icon
              name={service.icon}
              className={`w-12 h-12 ${service.iconColor}`}
              aria-label={service.iconLabel}
            />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>

          {/* Description */}
          <p className="text-indigo-200/80 text-sm mb-3 leading-relaxed">
            {service.description}
          </p>

          {/* Value proposition — sparkles icon replaces ✨ emoji */}
          <p className="text-indigo-300 text-sm mb-4 font-medium border-l-2 border-pink-500/50 pl-3 flex items-start gap-2">
            <Icon
              name="sparkles"
              className="w-4 h-4 text-pink-400 shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <span>{service.value}</span>
          </p>

          {/* Benefits list */}
          <ul className="space-y-1.5 pt-3 border-t border-indigo-800/30">
            {service.benefits.map((benefit, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-xs text-indigo-300"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-pink-400 shrink-0"
                  aria-hidden="true"
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  );
});

ServiceCard.displayName = "ServiceCard";

/**
 * Solution card component — memoized for performance.
 * Compact card showing solution type with SVG icon.
 */
const SolutionCard: React.FC<{
  solution: (typeof SOLUTIONS)[0];
  index: number;
}> = React.memo(({ solution, index }) => {
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
        <div className="mb-2 group-hover:scale-110 transition-transform duration-300 inline-flex">
          <Icon
            name={solution.icon}
            className={`w-8 h-8 ${solution.iconColor}`}
            aria-label={solution.iconLabel}
          />
        </div>
        <h3 className="font-bold text-white text-sm mb-1">{solution.title}</h3>
        <p className="text-indigo-300/70 text-xs">{solution.desc}</p>
      </Card>
    </motion.div>
  );
});

SolutionCard.displayName = "SolutionCard";

/**
 * Services section — showcases all services and solutions.
 * All icons are professional SVG from the Icon component.
 * Zero emojis for maximum professionalism and accessibility.
 */
export const ServicesSection: React.FC = () => {
  return (
    <Section id="services" bgColor="darker">
      <SectionTitle
        title="Soluciones que transforman tu negocio"
        subtitle="No solo construyo páginas web. Creo herramientas digitales que resuelven problemas reales, atraen clientes y hacen crecer tu empresa."
      />

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* Solutions section */}
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
      />
    </Section>
  );
};
