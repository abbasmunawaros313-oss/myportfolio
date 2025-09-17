import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    // In a real implementation, this would download an actual CV file
    const link = document.createElement('a');
    link.href = '/api/download-cv'; // This endpoint would serve the CV file
    link.download = 'Munawar_Abbas_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text" data-testid="about-title">
              About Me
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p data-testid="about-bio-1">
                Hi, I'm Munawar Abbas. I hold a BS in Computer Science from Air University Islamabad. 
                Passionate about building scalable, interactive, and modern web applications using React, 
                Redux, Firebase, Node.js, Express, FastAPI, Python, C, C++, Stripe, TailwindCSS, GSAP, and more.
              </p>
              <p data-testid="about-bio-2">
                With a strong foundation in both frontend and backend development, I create comprehensive 
                solutions that deliver exceptional user experiences while maintaining clean, efficient code.
              </p>
            </div>
            
            <Button 
              onClick={handleDownloadCV}
              className="mt-8 group flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300"
              data-testid="button-download-cv"
            >
              <i className="fas fa-download mr-2 group-hover:-translate-y-1 transition-transform"></i>
              Download CV
            </Button>
          </div>

          <div className="flex justify-center">
            <div className="neon-border animate-glow">
              <div className="neon-border-inner text-center">
                <div className="w-64 h-64 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center" data-testid="avatar-placeholder">
                  <i className="fas fa-user text-6xl text-muted-foreground"></i>
                </div>
                <h3 className="text-xl font-semibold gradient-text" data-testid="avatar-name">Munawar Abbas</h3>
                <p className="text-muted-foreground" data-testid="avatar-title">Full Stack Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
