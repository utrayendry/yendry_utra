export const validateEmail = (email: string): boolean => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
};

export const validateContactForm = (
  name: string,
  email: string,
  project: string,
): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!name.trim()) {
    errors.name = "El nombre es requerido";
  }

  if (!email.trim()) {
    errors.email = "El email es requerido";
  } else if (!validateEmail(email)) {
    errors.email = "El email no es válido";
  }

  if (!project.trim()) {
    errors.project = "La descripción del proyecto es requerida";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
