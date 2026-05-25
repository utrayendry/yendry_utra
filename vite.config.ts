// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "framer-motion": ["framer-motion"],
          "icons-vendor": ["lucide-react"],
        },
      },
    },
    target: "es2020",
    minify: "terser", // Para mejor compresión de JS
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Elimina cssMinify - usa el default de Vite (esbuild)
    sourcemap: false,
    chunkSizeWarningLimit: 500,
  },
  server: {
    port: 5173,
    open: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion", "lucide-react"],
  },
});
