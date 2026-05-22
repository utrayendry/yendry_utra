import React from "react";
import { Icon } from "./Icon";

interface CVDownloadProps {
  /** Button variant: "hero" (large, prominent) or "about" (inline, subtle) */
  variant?: "hero" | "about";
  className?: string;
}

/**
 * CV Download button — reusable across Hero and About sections.
 * Downloads the PDF from /public/cv-yendry.pdf
 *
 * Usage:
 * <CVDownload variant="hero" />
 * <CVDownload variant="about" />
 */
export const CVDownload: React.FC<CVDownloadProps> = ({
  variant = "hero",
  className = "",
}) => {
  const handleDownload = () => {
    // Open CV in new tab for preview, user can download from there
    window.open("/cv-yendry.pdf", "_blank", "noopener,noreferrer");
  };

  if (variant === "hero") {
    return (
      <button
        type="button"
        onClick={handleDownload}
        className={`inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base sm:text-lg font-semibold rounded-xl bg-white/5 backdrop-blur-sm text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 ${className}`}
      >
        <Icon name="briefcase" className="w-5 h-5" aria-hidden="true" />
        Descargar CV
        <Icon name="arrow-right" className="w-4 h-4" aria-hidden="true" />
      </button>
    );
  }

  // About variant — more subtle
  return (
    <button
      type="button"
      onClick={handleDownload}
      className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-indigo-300 bg-indigo-900/20 border border-indigo-500/30 rounded-xl hover:bg-indigo-900/40 hover:text-white hover:border-indigo-500/50 transition-all duration-300 ${className}`}
    >
      <Icon name="briefcase" className="w-4 h-4" aria-hidden="true" />
      Descargar CV
    </button>
  );
};
