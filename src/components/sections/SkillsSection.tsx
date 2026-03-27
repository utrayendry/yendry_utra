import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Section, SectionTitle, Card, SkillBarChart } from "../ui";
import { SkillBar } from "../ui/SkillBar";
import { SKILL_CATEGORIES } from "../../constants/skillCategories";

// Componente para cada categoría de habilidades - MEJORADO CON ANIMACIONES
const SkillCategoryCard: React.FC<{
  categoryIcon: string;
  categoryName: string;
  skills: (typeof SKILL_CATEGORIES)[0]["skills"];
  index: number;
}> = ({ categoryIcon, categoryName, skills, index }) => {
  // Calcular promedio de proficiencia para esta categoría
  const categoryAverage = Math.round(
    skills.reduce((acc, skill) => acc + skill.proficiency, 0) / skills.length,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        variant="gradient"
        className="h-full p-5 sm:p-6 md:p-8 rounded-2xl backdrop-blur-md border border-indigo-500/20 hover:border-pink-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 group"
      >
        {/* Encabezado de la categoría - Optimizado para móvil */}
        <div className="flex items-center justify-between gap-2 sm:gap-3 mb-5 sm:mb-6 md:mb-7">
          <div className="flex items-center gap-2 min-w-0">
            <div className="text-2xl sm:text-3xl shrink-0">{categoryIcon}</div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg md:text-xl font-bold bg-linear-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent truncate">
                {categoryName}
              </h3>
              <div className="h-1 w-8 sm:w-12 bg-linear-to-r from-indigo-500 to-pink-500 rounded-full mt-1" />
            </div>
          </div>
          {/* Dominio promedio de la categoría */}
          <div className="shrink-0 text-right">
            <div className="text-xl sm:text-2xl font-bold text-pink-400">
              {categoryAverage}%
            </div>
            <p className="text-xs text-indigo-300">Promedio</p>
          </div>
        </div>

        {/* Lista de habilidades con stagger */}
        <div className="space-y-2 sm:space-y-3">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
            >
              <SkillBar
                name={skill.name}
                proficiency={skill.proficiency}
                icon={skill.icon}
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
  // Memoizar las categorías para evitar re-renders innecesarios
  const categoriesData = useMemo(() => SKILL_CATEGORIES, []);

  // Calcular estadísticas generales
  const totalSkills = useMemo(() => {
    return categoriesData.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [categoriesData]);

  const averageProficiency = useMemo(() => {
    const allSkills = categoriesData.flatMap((cat) => cat.skills);
    const total = allSkills.reduce((acc, skill) => acc + skill.proficiency, 0);
    return Math.round(total / allSkills.length);
  }, [categoriesData]);

  return (
    <Section id="skills" bgColor="dark">
      {/* Encabezado de la sección */}
      <SectionTitle
        title="Habilidades Técnicas"
        subtitle="Tecnologías y herramientas con las que trabajo día a día, con años de experiencia práctica en cada una."
      />

      {/* Estadísticas generales - Responsivo móvil-first */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-linear-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent">
            {totalSkills}
          </div>
          <p className="text-indigo-200 text-xs sm:text-sm mt-1 md:mt-2">
            Competencias
          </p>
        </motion.div>

        <motion.div
          className="bg-linear-to-br from-pink-900/40 to-indigo-900/40 border border-pink-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 0.05 }}
        >
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-pink-300 to-indigo-300 bg-clip-text text-transparent">
            {averageProficiency}%
          </div>
          <p className="text-pink-200 text-xs sm:text-sm mt-1 md:mt-2">
            Dominio Promedio
          </p>
        </motion.div>
      </motion.div>

      {/* Grid de categorías - Mobile-first responsivo */}
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

      {/* RADAR CHART - Visualización profesional */}
      <motion.div
        className="my-12 sm:my-14 md:my-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 text-white">
            Matriz de Competencias
          </h3>
          <p className="text-center text-indigo-200 text-sm sm:text-base">
            Vista panorámica del dominio en cada área técnica
          </p>
        </div>

        <Card
          variant="gradient"
          className="p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-md border border-indigo-500/20"
        >
          <SkillBarChart categories={categoriesData} />
        </Card>
      </motion.div>

      {/* Sección de Diferenciadores Clave - Responsiva móvil */}
      <motion.div
        className="mt-12 sm:mt-14 md:mt-16 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-white">
          Diferenciadores Clave
        </h3>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              icon: "⚡",
              title: "Full-Stack",
              desc: "Frontend, Backend y DevOps",
            },
            {
              icon: "🔒",
              title: "Seguridad",
              desc: "Autenticación, Encriptación",
            },
            {
              icon: "🎯",
              title: "Performance",
              desc: "Optimización y Escalabilidad",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-linear-to-br from-indigo-900/30 to-pink-900/20 border border-indigo-500/20 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-center hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10 group cursor-default"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="font-bold text-indigo-200 mb-1 text-sm sm:text-base">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-indigo-300/70">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};
