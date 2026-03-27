import { Navbar, Footer } from "./components/common";
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ServicesSection,
  ContactSection,
} from "./components/sections";

function App() {
  return (
    <div className="bg-[#0a0a15] text-gray-200 overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
