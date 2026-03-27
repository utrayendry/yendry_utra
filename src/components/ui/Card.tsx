interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
}) => {
  const variants = {
    default: 'bg-indigo-900/20 border border-indigo-800/40',
    glass: 'bg-indigo-900/10 border border-indigo-400/10 backdrop-blur-md',
    gradient: 'bg-gradient-to-br from-indigo-900/30 to-purple-900/20 border border-indigo-800/30',
  };

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-xl ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
};
