import React, { useState } from "react";
import { Section, SectionTitle, Button, Card } from "../ui";
import { validateContactForm } from "../../utils/validation";
import { generateWhatsAppMessage, openWhatsApp } from "../../utils/whatsapp";

interface FormData {
  name: string;
  email: string;
  project: string;
  terms: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  project?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    project: "",
    terms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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

    // Validate
    const { isValid, errors: validationErrors } = validateContactForm(
      formData.name,
      formData.email,
      formData.project,
    );

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    if (!formData.terms) {
      alert("Debes aceptar los términos y condiciones");
      return;
    }

    // Generate and send WhatsApp message
    setIsLoading(true);
    const message = generateWhatsAppMessage(
      formData.name,
      formData.email,
      formData.project,
    );
    openWhatsApp("5355266801", message);

    setShowSuccess(true);
    setFormData({ name: "", email: "", project: "", terms: false });
    setErrors({});

    setTimeout(() => {
      setShowSuccess(false);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Section id="contact" bgColor="dark">
      <SectionTitle
        title="Contáctame"
        subtitle="¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y colaborar contigo."
      />

      <div className="max-w-2xl mx-auto">
        <Card variant="gradient" className="p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <label className="block text-indigo-200 font-semibold mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-lg bg-indigo-900/20 border border-indigo-800/40 text-white placeholder-indigo-400/50 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <label className="block text-indigo-200 font-semibold mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="w-full px-4 py-3 rounded-lg bg-indigo-900/20 border border-indigo-800/40 text-white placeholder-indigo-400/50 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Project Description */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <label className="block text-indigo-200 font-semibold mb-2">
                Descripción del proyecto
              </label>
              <textarea
                name="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="Cuéntame sobre tu proyecto..."
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-indigo-900/20 border border-indigo-800/40 text-white placeholder-indigo-400/50 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all resize-none"
              />
              {errors.project && (
                <p className="text-red-400 text-sm mt-1">{errors.project}</p>
              )}
            </div>

            {/* Terms */}
            <div
              className="flex items-start gap-3 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mt-1 w-5 h-5 rounded border-indigo-800 accent-indigo-600"
              />
              <label htmlFor="terms" className="text-indigo-300/80 text-sm">
                Acepto los términos y condiciones y la política de privacidad
              </label>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="p-4 bg-emerald-900/30 border border-emerald-800/40 rounded-lg text-emerald-200 text-sm animate-fade-in">
                ¡Mensaje enviado correctamente! Te redireccionaremos a WhatsApp
                en un momento.
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isLoading}
              className="w-full animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
              icon={
                isLoading ? (
                  <i className="fas fa-spinner animate-spin" />
                ) : (
                  <i className="fab fa-whatsapp text-xl" />
                )
              }
            >
              {isLoading ? "Abriendo WhatsApp..." : "Enviar por WhatsApp"}
            </Button>
          </form>
        </Card>

        {/* Alternative Contact */}
        <div
          className="mt-12 text-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-indigo-300/70 mb-6">
            O contáctame directamente en:
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/5355266801"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all hover:scale-105"
            >
              <i className="fab fa-whatsapp text-lg" />
              WhatsApp
            </a>
            <a
              href="mailto:yendry@example.com"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all hover:scale-105"
            >
              <i className="fas fa-envelope text-lg" />
              Email
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
