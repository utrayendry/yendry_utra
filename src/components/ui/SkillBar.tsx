// src/components/ui/SkillBar.tsx
import React from "react";
import { SkillIcon } from "./SkillIcons";

interface SkillBarProps {
  name: string;
  proficiency: number;
  iconName?: string;
  iconColor?: string;
}

export const SkillBar: React.FC<SkillBarProps> = ({
  name,
  proficiency,
  iconName,
  iconColor,
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
        {iconName ? (
          <SkillIcon name={iconName} className="w-4 h-4" color={iconColor} />
        ) : (
          <span className="text-sm">💻</span>
        )}
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-xs mb-0.5">
          <span className="text-indigo-300">{name}</span>
          <span className="text-indigo-400">{proficiency}%</span>
        </div>
        <div className="h-1.5 bg-indigo-900/50 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${proficiency}%`,
              // Gradiente indigo → pink (como tenías originalmente)
              background: "linear-gradient(90deg, #6366F1, #EC4899)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
