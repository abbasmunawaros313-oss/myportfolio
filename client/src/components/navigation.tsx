import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add('backdrop-blur-md', 'bg-background/80');
        } else {
          nav.classList.remove('backdrop-blur-md', 'bg-background/80');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-display font-bold gradient-text" data-testid="logo">
            MA
          </div>
          
          {!isMobile ? (
            <div className="flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors" data-testid="nav-home">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors" data-testid="nav-about">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors" data-testid="nav-skills">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors" data-testid="nav-projects">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors" data-testid="nav-contact">
                Contact
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-foreground"
              data-testid="button-mobile-menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('hero')} className="text-left hover:text-primary transition-colors" data-testid="nav-mobile-home">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-primary transition-colors" data-testid="nav-mobile-about">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:text-primary transition-colors" data-testid="nav-mobile-skills">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-primary transition-colors" data-testid="nav-mobile-projects">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-primary transition-colors" data-testid="nav-mobile-contact">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
