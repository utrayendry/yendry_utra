// src/App.tsx
import { Suspense, lazy } from "react";
import { Navbar, Footer } from "./components/common";
import { ErrorBoundary } from "./components/common/ErrorBoundary";

// Lazy-load all sections for code splitting
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

// Fallback component for lazy-loaded sections
const SectionFallback = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <div className="bg-[#0a0a15] text-gray-200 overflow-x-hidden">
        <Navbar />
        <main>
          <Suspense fallback={<SectionFallback />}>
            <HeroSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <AboutSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ProjectsSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <SkillsSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ServicesSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ContactSection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
