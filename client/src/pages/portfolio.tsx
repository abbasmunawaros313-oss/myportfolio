import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";

export default function Portfolio() {
  useScrollAnimations();

  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Munawar Abbas - Frontend Developer & Full Stack Engineer";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Portfolio of Munawar Abbas - Frontend Developer and Full Stack Engineer specializing in React, Node.js, and modern web technologies.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Munawar Abbas – Built with ❤️ using React & Three.js
            </p>
            <div className="mt-4 flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-privacy">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-terms">Terms of Service</a>
              <a href="#contact" className="hover:text-primary transition-colors" data-testid="link-contact-footer">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
