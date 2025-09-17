import { useEffect } from 'react';

export function useScrollAnimations() {
  useEffect(() => {
    // Check if GSAP is available
    if (typeof window !== 'undefined' && (window as any).gsap && (window as any).ScrollTrigger) {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      
      gsap.registerPlugin(ScrollTrigger);

      // Animate sections on scroll
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        gsap.fromTo(section, 
          {
            opacity: 0,
            y: 100
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Animate skill cards
      const skillCards = document.querySelectorAll('.skill-card');
      skillCards.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            scale: 0.8,
            rotationY: -180
          },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Animate project cards
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: (index % 3) * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Gradient text animation
      const gradientTexts = document.querySelectorAll('.gradient-text');
      gradientTexts.forEach((text) => {
        gsap.fromTo(text,
          {
            backgroundPosition: "0% 50%"
          },
          {
            backgroundPosition: "100% 50%",
            duration: 3,
            ease: "none",
            repeat: -1,
            yoyo: true
          }
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      };
    }
  }, []);
}
