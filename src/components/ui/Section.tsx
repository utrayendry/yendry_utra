interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: "dark" | "darker";
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = "",
  bgColor = "dark",
}) => {
  const bgColors = {
    dark: "bg-[#0a0f1a]",
    darker: "bg-[#0a0a15]",
  };

  return (
    <section
      id={id}
      className={`py-24 relative ${bgColors[bgColor]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">{children}</div>
    </section>
  );
};
