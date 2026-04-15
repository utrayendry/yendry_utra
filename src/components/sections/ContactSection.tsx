import React, { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionTitle, Button, Card } from "../ui";
import { generateWhatsAppMessage, openWhatsApp } from "../../utils/whatsapp";

// SVGs optimizados - Memoizados para evitar re-renders
const WhatsAppIcon = React.memo(
  ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
    >
      <path d="M16.001 3.2c-7.063 0-12.8 5.736-12.8 12.8 0 2.257.589 4.457 1.708 6.4L3.2 28.8l6.595-1.683c1.843.999 3.92 1.517 6.206 1.517h.001c7.063 0 12.8-5.736 12.8-12.8s-5.737-12.8-12.801-12.8zm0 23.466h-.001c-1.998 0-3.938-.536-5.63-1.548l-.403-.239-3.913.999 1.04-3.818-.262-.392c-1.036-1.55-1.582-3.351-1.582-5.233 0-5.292 4.305-9.6 9.6-9.6 2.563 0 4.976.999 6.792 2.813 1.815 1.815 2.813 4.229 2.813 6.792 0 5.292-4.307 9.6-9.654 9.6zm5.497-7.2c-.301-.15-1.778-.878-2.054-.978-.275-.1-.476-.15-.676.15-.2.301-.776.978-.951 1.178-.175.2-.351.225-.651.075-.301-.15-1.271-.469-2.421-1.494-.895-.797-1.5-1.78-1.676-2.08-.175-.301-.019-.464.131-.614.134-.133.301-.351.451-.526.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.627-.926-2.226-.244-.586-.491-.507-.676-.517l-.576-.01c-.2 0-.526.075-.801.376-.275.301-1.051 1.027-1.051 2.502 0 1.476 1.076 2.9 1.226 3.101.15.2 2.119 3.238 5.138 4.536.718.31 1.278.494 1.714.632.72.229 1.375.197 1.894.12.578-.086 1.778-.726 2.03-1.428.251-.701.251-1.302.176-1.428-.075-.125-.275-.2-.576-.35z" />
    </svg>
  ),
);

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

    //Simplified Validation
    if (!formData.name.trim()) {
      setErrors({ name: "Debe ingresar su nombre..." });
      return;
    }

    if (!formData.project.trim()) {
      setErrors({ project: "Se necesita una descripcion de su proyecto..." });
      return;
    }

    // Generate and send WhatsApp message
    setIsLoading(true);
    const message = generateWhatsAppMessage(formData.name, formData.project);
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
            {/* Name - Simplified */}
            <div>
              <label className="block text-indigo-200 font-medium mb-2 text-sm">
                ¿Cuál es su nombre? <span className="text-pink-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Su nombre"
                className="w-full px-4 py-3 rounded-xl bg-indigo-900/20 border border-indigo-800/40 text-white placeholder-indigo-400/50 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
              {errors.name && (
                <p className="text-pink-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Project - Simplified */}
            <div>
              <label className="block text-indigo-200 font-medium mb-2 text-sm">
                ¿En qué puedo ayudarle? <span className="text-pink-400">*</span>
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
              variant="secondary"
              size="lg"
              disabled={isLoading}
              className="w-full rounded-xl"
              icon={<WhatsAppIcon className="w-6 h-5 " />}
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
            ¿Prefiere escribirme directamente?
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
              href="mailto:utrayendry@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 text-indigo-300 font-medium transition-all hover:scale-105 text-sm"
            >
              <i className="fas fa-envelope" />
              utrayendry@gmail.com
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
            Sin compromiso. Primero conversamos, entiendo su necesidad y luego
            le doy una propuesta clara.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
