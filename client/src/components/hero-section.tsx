import { useEffect, useState } from "react";
import ThreeBackground from "@/components/three-background";

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Frontend Developer', 'Full Stack Engineer', 'React Specialist', 'Node.js Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeBackground />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-display font-black mb-6" data-testid="hero-title">
            <span className="gradient-text">Munawar Abbas</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-8">
            <span 
              className="transition-opacity duration-500" 
              data-testid="role-switcher"
              key={currentRole}
            >
              {roles[currentRole]}
            </span>
          </div>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed" data-testid="hero-description">
            Passionate about building scalable, interactive, and modern web applications using cutting-edge technologies.
          </p>

          <button 
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
            data-testid="button-view-work"
          >
            View My Work
            <i className="fas fa-arrow-down ml-2 group-hover:translate-y-1 transition-transform"></i>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-primary text-xl" data-testid="scroll-indicator"></i>
      </div>
    </section>
  );
}
