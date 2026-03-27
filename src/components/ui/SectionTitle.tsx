interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16 animate-fade-in-up">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
        {title}
      </h2>
      {subtitle && (
        <p className="text-indigo-300/70 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};
