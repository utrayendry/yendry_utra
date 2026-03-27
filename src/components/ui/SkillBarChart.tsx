import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import type { SkillCategory } from "../../types";

interface SkillBarChartProps {
  categories: SkillCategory[];
}

export const SkillBarChart: React.FC<SkillBarChartProps> = ({ categories }) => {
  // Calcular promedios por categoría
  const chartData = useMemo(() => {
    return categories.map((category, index) => ({
      name: category.name.split(" ")[0], // nombre corto
      fullName: category.name,
      proficiency:
        category.skills.length > 0
          ? Math.round(
              category.skills.reduce(
                (sum, skill) => sum + skill.proficiency,
                0,
              ) / category.skills.length,
            )
          : 0,
      index,
    }));
  }, [categories]);

  // Colores de gradiente para cada barra (indigo → pink)
  const colors = [
    "#6366f1", // indigo
    "#7c3aed", // violet
    "#a855f7", // purple
    "#d946ef", // fuchsia
    "#ec4899", // pink
    "#f43f5e", // rose
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Contenedor del chart con altura mobile-first */}
      <div className="w-full h-[260px] sm:h-[340px] md:h-[420px] relative flex items-center justify-center">
        {/* Fondo blur + gradiente */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-900/20 to-pink-900/20 rounded-2xl blur-xl opacity-50 pointer-events-none" />

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              left: 10,
              bottom: 40, // espacio para etiquetas rotadas
            }}
          >
            {/* Grid */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#4f46e5"
              opacity={0.15}
              vertical={false}
            />

            {/* Eje X - Categorías */}
            <XAxis
              dataKey="name"
              tick={{
                fill: "#c7d2fe",
                fontSize: 10,
              }}
              tickLine={{ stroke: "#4f46e5", opacity: 0.2 }}
              axisLine={{ stroke: "#4f46e5", opacity: 0.2 }}
              interval={0}
              angle={-30} // rotación para móvil
              textAnchor="end"
              height={50}
            />

            {/* Eje Y - Porcentaje */}
            <YAxis
              type="number"
              domain={[0, 100]}
              tick={{ fill: "#a5b4fc", fontSize: 11 }}
              axisLine={{ stroke: "#4f46e5", opacity: 0.2 }}
              tickLine={{ stroke: "#4f46e5", opacity: 0.2 }}
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(17, 24, 39, 0.95)",
                border: "1px solid rgba(79, 70, 229, 0.3)",
                borderRadius: "8px",
                color: "#c7d2fe",
              }}
              formatter={(value) => `${value}%`}
              labelFormatter={(label) => `${label}`}
            />

            {/* Barras verticales */}
            <Bar
              dataKey="proficiency"
              radius={[6, 6, 0, 0]}
              animationDuration={1200}
              animationEasing="ease-out"
              isAnimationActive={true}
              barSize={35} // ancho de barra mobile-first
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Leyenda */}
      <div className="mt-6 sm:mt-8 text-center max-w-2xl">
        <p className="text-sm sm:text-base text-indigo-200 font-medium mb-3">
          Dominio promedio por categoría
        </p>

        <div className="flex flex-wrap gap-2 justify-center">
          {chartData.map((item, idx) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[idx % colors.length] }}
              />
              <span className="text-xs text-indigo-300">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
