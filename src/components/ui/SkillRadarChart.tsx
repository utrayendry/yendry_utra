import { useMemo } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { SkillCategory } from "../../types";

interface SkillRadarChartProps {
  categories: SkillCategory[];
}

export const SkillRadarChart: React.FC<SkillRadarChartProps> = ({
  categories,
}) => {
  const chartData = useMemo(() => {
    return categories.map((category) => ({
      category: category.name.split(" ").slice(0, 2).join(" "),
      proficiency:
        category.skills.length > 0
          ? Math.round(
              category.skills.reduce(
                (sum, skill) => sum + skill.proficiency,
                0,
              ) / category.skills.length,
            )
          : 0,
      fullName: category.name,
    }));
  }, [categories]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Contenedor del radar con altura fija */}
      <div className="w-full h-80 sm:h-96 md:h-[420px] relative flex items-center justify-center">
        {/* Fondo gradiente sutil */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-900/20 to-pink-900/20 rounded-2xl blur-xl opacity-50 pointer-events-none" />

        {/* ResponsiveContainer con altura explícita */}
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            data={chartData}
            margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
          >
            {/* Grid personalizado */}
            <PolarGrid
              stroke="#4f46e5"
              strokeOpacity={0.2}
              strokeDasharray="4 4"
            />

            {/* Radio más visible */}
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fill: "#818cf8", fontSize: 11 }}
            />

            {/* Angulo de categorías - SIN type="number" */}
            <PolarAngleAxis
              dataKey="category"
              tick={{ fill: "#a5b4fc", fontSize: 12 }}
              angle={90}
            />

            {/* Tooltip personalizado */}
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(17, 24, 39, 0.95)",
                border: "1px solid rgba(79, 70, 229, 0.3)",
                borderRadius: "8px",
                color: "#c7d2fe",
              }}
              formatter={(value) => `${value}%`}
            />

            {/* Radar chart con gradiente */}
            <Radar
              name="Dominio Promedio %"
              dataKey="proficiency"
              stroke="#ec4899"
              fill="#ec4899"
              fillOpacity={0.25}
              strokeWidth={2.5}
              dot={{
                fill: "#ec4899",
                r: 5,
              }}
              activeDot={{
                r: 7,
                fill: "#f472b6",
              }}
              isAnimationActive={true}
              animationDuration={1500}
              animationEasing="ease-out"
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Leyenda personalizada */}
      <div className="mt-4 text-center">
        <p className="text-xs sm:text-sm text-indigo-200">
          Dominio promedio por categoría
        </p>
      </div>
    </div>
  );
};
