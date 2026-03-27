export const generateWhatsAppMessage = (name: string, email: string, projectDescription: string): string => {
  return `*Nuevo Contacto desde Portafolio*\n\n📋 *Nombre:* ${name}\n📧 *Email:* ${email}\n\n💼 *Descripción del Proyecto:*\n${projectDescription}`;
};

export const openWhatsApp = (phoneNumber: string, message: string): void => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};
