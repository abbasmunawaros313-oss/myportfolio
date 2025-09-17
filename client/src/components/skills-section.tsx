export default function SkillsSection() {
  const skills = [
    { name: 'React', icon: 'fab fa-react', color: 'primary', description: 'Advanced component architecture & hooks' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'accent', description: 'ES6+, async/await, modern JS' },
    { name: 'HTML5', icon: 'fab fa-html5', color: 'secondary', description: 'Semantic markup & accessibility' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'primary', description: 'Flexbox, Grid, animations' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'accent', description: 'RESTful APIs & server development' },
    { name: 'Python', icon: 'fab fa-python', color: 'secondary', description: 'FastAPI, data processing' },
    { name: 'Firebase', icon: 'fas fa-fire', color: 'primary', description: 'Auth, Firestore, hosting' },
    { name: 'MongoDB', icon: 'fas fa-database', color: 'accent', description: 'NoSQL database design' },
    { name: 'Tailwind', icon: 'fas fa-wind', color: 'secondary', description: 'Utility-first CSS framework' },
    { name: 'GitHub', icon: 'fab fa-github', color: 'primary', description: 'Version control & collaboration' },
    { name: 'Stripe', icon: 'fas fa-credit-card', color: 'accent', description: 'Payment processing integration' },
    { name: 'Three.js', icon: 'fas fa-cube', color: 'secondary', description: '3D graphics & animations' },
  ];

  const additionalSkills = [
    'Redux', 'Express', 'FastAPI', 'MySQL', 'C++', 'GSAP', 'Framer Motion', 'Vercel'
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text" data-testid="skills-title">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="skills-description">
            A comprehensive toolkit of modern technologies for building exceptional web experiences.
          </p>
        </div>

        {/* 3D Skill Cloud */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-card relative h-32 cursor-pointer" data-testid={`skill-card-${skill.name.toLowerCase()}`}>
              <div className="skill-card-front glass-card rounded-lg p-6 flex flex-col items-center justify-center h-full">
                <i className={`${skill.icon} text-3xl text-${skill.color} mb-2`}></i>
                <span className="font-medium">{skill.name}</span>
              </div>
              <div className={`skill-card-back bg-${skill.color} rounded-lg p-6 flex flex-col items-center justify-center h-full`}>
                <span className={`text-${skill.color}-foreground text-sm text-center`}>
                  {skill.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Badges */}
        <div className="flex flex-wrap justify-center gap-3" data-testid="additional-skills">
          {additionalSkills.map((skill, index) => {
            const colorClasses = [
              'bg-primary/20 text-primary border-primary/30',
              'bg-secondary/20 text-secondary border-secondary/30',
              'bg-accent/20 text-accent border-accent/30'
            ];
            const colorClass = colorClasses[index % colorClasses.length];
            
            return (
              <span 
                key={skill} 
                className={`px-4 py-2 ${colorClass} rounded-full font-mono text-sm border`}
                data-testid={`skill-badge-${skill.toLowerCase()}`}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
