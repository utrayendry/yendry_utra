import React, { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionTitle, Button, Card } from "../ui";
import { generateWhatsAppMessage, openWhatsApp } from "../../utils/whatsapp";

interface FormData {
  name: string;
  project: string;
}

interface FormErrors {
  name?: string;
  project?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    project: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación simplificada
    if (!formData.name.trim()) {
      setErrors({ name: "Cuéntame cómo te llamo" });
      return;
    }

    if (!formData.project.trim()) {
      setErrors({ project: "Cuéntame en qué puedo ayudarte" });
      return;
    }

    // Generate and send WhatsApp message
    setIsLoading(true);
    const message = generateWhatsAppMessage(
      formData.name,
      "pendiente@validar",
      formData.project,
    );
    openWhatsApp("5355266801", message);

    setShowSuccess(true);
    setFormData({ name: "", project: "" });
    setErrors({});

    setTimeout(() => {
      setShowSuccess(false);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Section id="contact" bgColor="dark">
      <SectionTitle
        title="Hablemos de tu proyecto"
        subtitle="Cuéntame qué necesitas. Te responderé en menos de 24 horas para conversar sin compromiso."
      />

      <div className="max-w-2xl mx-auto">
        <Card variant="gradient" className="p-6 md:p-8">
          {/* Mensaje de confianza */}
          <div className="flex items-center justify-center gap-4 mb-6 text-sm">
            <div className="flex items-center gap-1 text-indigo-300/70">
              <i className="fas fa-bolt text-indigo-400 text-xs" />
              <span>Respuesta rápida</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-indigo-500/50" />
            <div className="flex items-center gap-1 text-indigo-300/70">
              <i className="fas fa-lock text-indigo-400 text-xs" />
              <span>Sin compromiso</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-indigo-500/50" />
            <div className="flex items-center gap-1 text-indigo-300/70">
              <i className="fas fa-clock text-indigo-400 text-xs" />
              <span>Primera consulta gratuita</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nombre - Simplificado */}
            <div>
              <label className="block text-indigo-200 font-medium mb-2 text-sm">
                ¿Cómo te llamo? <span className="text-pink-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-xl bg-indigo-900/20 border border-indigo-800/40 text-white placeholder-indigo-400/50 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
              {errors.name && (
                <p className="text-pink-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Proyecto - Simplificado */}
            <div>
              <label className="block text-indigo-200 font-medium mb-2 text-sm">
                ¿En qué puedo ayudarte? <span className="text-pink-400">*</span>
              </label>
              <textarea
                name="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="Ej: Necesito una landing page para mi negocio, quiero una tienda online, tengo una idea para una app..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-indigo-900/20 border border-indigo-800/40 text-white placeholder-indigo-400/50 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
              />
              {errors.project && (
                <p className="text-pink-400 text-xs mt-1">{errors.project}</p>
              )}
            </div>

            {/* Mensaje de éxito */}
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-emerald-900/30 border border-emerald-800/40 rounded-xl text-emerald-200 text-sm text-center"
              >
                <i className="fas fa-check-circle mr-2" />
                ¡Gracias! Te redirijo a WhatsApp para que podamos conversar.
              </motion.div>
            )}

            {/* Botón principal */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isLoading}
              className="w-full rounded-xl"
              icon={
                isLoading ? (
                  <i className="fas fa-spinner animate-spin" />
                ) : (
                  <i className="fab fa-whatsapp text-xl" />
                )
              }
            >
              {isLoading ? "Abriendo WhatsApp..." : "Enviar mensaje"}
            </Button>
          </form>
        </Card>

        {/* Contacto alternativo - Más cálido */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-indigo-300/60 text-sm mb-4">
            ¿Prefieres escribirme directamente?
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/5355266801"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600/20 hover:bg-emerald-600/40 border border-emerald-500/30 text-emerald-300 font-medium transition-all hover:scale-105 text-sm"
            >
              <i className="fab fa-whatsapp" />
              WhatsApp
            </a>
            <a
              href="mailto:yendry@example.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 text-indigo-300 font-medium transition-all hover:scale-105 text-sm"
            >
              <i className="fas fa-envelope" />
              yendry@example.com
            </a>
          </div>
        </motion.div>

        {/* Frase de cierre - Genera confianza */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-indigo-400/50 text-xs">
            Sin compromiso. Primero conversamos, entiendo tu necesidad y luego
            te doy una propuesta clara.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
