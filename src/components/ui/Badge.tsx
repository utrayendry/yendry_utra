interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-indigo-900/40 border border-indigo-800 text-indigo-200',
    secondary: 'bg-purple-900/40 border border-purple-800 text-purple-200',
    success: 'bg-emerald-900/40 border border-emerald-800 text-emerald-200',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};
