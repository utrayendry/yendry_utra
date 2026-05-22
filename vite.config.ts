import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      // Optimize React for production
      babel: {
        plugins: [],
      },
    }),
    tailwindcss(),
  ],
  build: {
    // ─── Code Splitting ───────────────────────────────
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React and ReactDOM
          "react-vendor": ["react", "react-dom"],
          // Split Framer Motion
          "framer-motion": ["framer-motion"],
          // Split UI components into a shared chunk
          "ui-components": [
            "./src/components/ui/Badge.tsx",
            "./src/components/ui/Button.tsx",
            "./src/components/ui/Card.tsx",
            "./src/components/ui/Icon.tsx",
            "./src/components/ui/Section.tsx",
            "./src/components/ui/SectionTitle.tsx",
            "./src/components/ui/SkillBar.tsx",
          ],
        },
      },
    },
    // ─── Output Optimization ──────────────────────────
    target: "es2020",
    minify: "esbuild",
    cssMinify: "lightningcss",
    sourcemap: false,
    // ─── Chunk Size Warning ───────────────────────────
    chunkSizeWarningLimit: 500,
  },
  server: {
    port: 5173,
    open: true,
  },
  // ─── Environment Variables ──────────────────────────
  define: {
    __APP_VERSION__: JSON.stringify("1.0.0"),
  },
});
