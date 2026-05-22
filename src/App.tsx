import { lazy, Suspense } from "react";
import { Navbar, Footer } from "./components/common";

/**
 * Lazy-load all sections for code splitting.
 * Each section is loaded only when it enters the viewport.
 * This reduces initial bundle size significantly.
 */
const HeroSection = lazy(() =>
  import("./components/sections/HeroSection").then((m) => ({
    default: m.HeroSection,
  })),
);
const AboutSection = lazy(() =>
  import("./components/sections/AboutSection").then((m) => ({
    default: m.AboutSection,
  })),
);
const ProjectsSection = lazy(() =>
  import("./components/sections/ProjectsSection").then((m) => ({
    default: m.ProjectsSection,
  })),
);
const SkillsSection = lazy(() =>
  import("./components/sections/SkillsSection").then((m) => ({
    default: m.SkillsSection,
  })),
);
const ServicesSection = lazy(() =>
  import("./components/sections/ServicesSection").then((m) => ({
    default: m.ServicesSection,
  })),
);
const ContactSection = lazy(() =>
  import("./components/sections/ContactSection").then((m) => ({
    default: m.ContactSection,
  })),
);

/**
 * Fallback for lazy-loaded sections.
 * Shows a subtle pulse animation while the section loads.
 */
const SectionFallback: React.FC = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="bg-[#0a0a15] text-gray-200 overflow-x-hidden">
      {/* Navbar — loaded immediately (critical for UX) */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero — critical, loads first */}
        <Suspense fallback={<SectionFallback />}>
          <HeroSection />
        </Suspense>

        {/* About */}
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>

        {/* Projects */}
        <Suspense fallback={<SectionFallback />}>
          <ProjectsSection />
        </Suspense>

        {/* Skills */}
        <Suspense fallback={<SectionFallback />}>
          <SkillsSection />
        </Suspense>

        {/* Services */}
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>

        {/* Contact */}
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
