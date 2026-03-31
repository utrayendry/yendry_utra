import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Section, SectionTitle, Card } from "../ui";
import { SkillBar } from "../ui/SkillBar";
import { SKILL_CATEGORIES } from "../../constants/skillCategories";

// Configuración de valor por categoría
const CATEGORY_VALUES = {
  "Lenguajes de Programación": {
    description:
      "La base sólida para cualquier solución. Código limpio, eficiente y mantenible.",
  },
  "Frameworks & Librerías": {
    description:
      "Acelero el desarrollo sin sacrificar calidad. Tecnologías modernas que escalan.",
  },
  "Backend & APIs": {
    description:
      "La columna vertebral de tu negocio. APIs seguras, rápidas y bien documentadas.",
  },
  "Bases de Datos & ORMs": {
    description:
      "Tus datos, seguros y optimizados. Estructuras que crecen con tu negocio.",
  },
  "Herramientas & DevOps": {
    description:
      "Automatizo procesos para que te enfoques en lo que importa: hacer crecer tu negocio.",
  },
  "Otras Tecnologías & Conocimientos": {
    description:
      "El valor agregado que marca la diferencia. Diseño, SEO y experiencia de usuario.",
  },
};

// Componente para cada categoría
const SkillCategoryCard: React.FC<{
  categoryIcon: string;
  categoryName: string;
  skills: (typeof SKILL_CATEGORIES)[0]["skills"];
  index: number;
}> = ({ categoryIcon, categoryName, skills, index }) => {
  // Calcular promedio de proficiencia
  const categoryAverage = Math.round(
    skills.reduce((acc, skill) => acc + skill.proficiency, 0) / skills.length,
  );

  const categoryValue = CATEGORY_VALUES[
    categoryName as keyof typeof CATEGORY_VALUES
  ] || {
    description: "Habilidades profesionales listas para tu proyecto.",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        variant="gradient"
        className="h-full p-5 sm:p-6 rounded-2xl backdrop-blur-md border border-indigo-500/20 hover:border-pink-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 group"
      >
        {/* Encabezado */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 min-w-0">
            <div className="text-2xl sm:text-3xl shrink-0">{categoryIcon}</div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-bold bg-gradient-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent truncate">
                {categoryName}
              </h3>
              <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-1" />
            </div>
          </div>
          <div className="shrink-0 text-right">
            <div className="text-xl sm:text-2xl font-bold text-pink-400">
              {categoryAverage}%
            </div>
            <p className="text-xs text-indigo-300">Dominio</p>
          </div>
        </div>

        {/* Descripción de valor */}
        <p className="text-indigo-300/80 text-xs sm:text-sm mb-4 leading-relaxed border-l-2 border-pink-500/50 pl-3">
          {categoryValue.description}
        </p>

        {/* Todas las habilidades - ACTUALIZADO: usa iconName en lugar de icon */}
        <div className="space-y-2">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.02 }}
            >
              <SkillBar
                name={skill.name}
                proficiency={skill.proficiency}
                iconName={skill.iconName} // ← CAMBIADO: icon → iconName
                iconColor={skill.iconColor}
              />
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export const SkillsSection: React.FC = () => {
  const categoriesData = useMemo(() => SKILL_CATEGORIES, []);

  return (
    <Section id="skills" bgColor="dark">
      <SectionTitle
        title="Tecnología que transforma ideas en resultados"
        subtitle="No solo domino tecnologías. Las uso estratégicamente para construir soluciones que resuelven problemas reales y generan valor para tu negocio."
      />

      {/* Grid de categorías */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16"
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
        {categoriesData.map((category, index) => (
          <SkillCategoryCard
            key={category.id}
            categoryIcon={category.icon}
            categoryName={category.name}
            skills={category.skills}
            index={index}
          />
        ))}
      </motion.div>

      {/* Diferenciadores clave */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Más que código
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: "⚡",
              title: "Velocidad sin sacrificar calidad",
              desc: "Entrega rápida con código limpio y mantenible. Tu proyecto no se estanca.",
            },
            {
              icon: "🔒",
              title: "Seguridad desde el inicio",
              desc: "Protejo tus datos y los de tus usuarios con prácticas de seguridad probadas.",
            },
            {
              icon: "📈",
              title: "Escalabilidad garantizada",
              desc: "Tu negocio crece, tu tecnología también. Arquitectura pensada para el futuro.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/30 to-purple-900/20 border border-indigo-500/20 hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 group cursor-default"
              whileHover={{ scale: 1.03, y: -5 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="font-bold text-white mb-2 text-lg">
                {item.title}
              </h4>
              <p className="text-sm text-indigo-300/80 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA final */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection)
              contactSection.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-xl text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-indigo-500/25"
        >
          Hablemos de tu proyecto
        </button>
      </motion.div>
    </Section>
  );
};
