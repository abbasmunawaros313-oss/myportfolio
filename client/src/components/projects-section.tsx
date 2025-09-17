export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Travel Agency Portal",
      description: "Enterprise management system used by 8 companies with 80-90 employees.",
      icon: "fas fa-plane",
      gradient: "from-primary to-accent",
      techStack: ["React", "Node.js", "Firebase"],
      features: [
        "Employee authentication system",
        "Booking management & tracking", 
        "Comprehensive reporting dashboard",
        "Multi-company support"
      ]
    },
    {
      id: 2,
      title: "E-commerce Store",
      description: "Full-featured online store with cart, checkout, and payment processing.",
      icon: "fas fa-shopping-cart",
      gradient: "from-secondary to-primary",
      techStack: ["React", "Stripe", "Firebase"],
      features: [
        "Product catalog & search",
        "Shopping cart management",
        "Secure Stripe payments",
        "Order tracking system"
      ]
    },
    {
      id: 3,
      title: "Food Delivery App",
      description: "Restaurant listing platform with live order tracking and payments.",
      icon: "fas fa-utensils",
      gradient: "from-accent to-secondary",
      techStack: ["React", "Node.js", "MongoDB"],
      features: [
        "Restaurant directory",
        "Real-time order tracking",
        "Integrated payment system",
        "Customer reviews & ratings"
      ]
    },
    {
      id: 4,
      title: "Digital Book Store",
      description: "Online bookstore with catalog, search functionality, and shopping cart.",
      icon: "fas fa-book",
      gradient: "from-primary to-secondary",
      techStack: ["React", "Express", "MySQL"],
      features: [
        "Advanced search & filters",
        "Book recommendations",
        "User reviews & ratings",
        "Wishlist functionality"
      ]
    },
    {
      id: 5,
      title: "Hotel Booking Portal",
      description: "Comprehensive hotel reservation system with room management.",
      icon: "fas fa-hotel",
      gradient: "from-secondary to-accent",
      techStack: ["React", "Node.js", "Stripe"],
      features: [
        "Room availability calendar",
        "Booking management",
        "Payment processing",
        "Customer support chat"
      ]
    },
    {
      id: 6,
      title: "Task Management App",
      description: "Kanban-style task management with drag-and-drop functionality.",
      icon: "fas fa-tasks",
      gradient: "from-accent to-primary",
      techStack: ["React", "DnD", "Firebase"],
      features: [
        "Drag & drop interface",
        "Team collaboration",
        "Progress tracking",
        "Real-time updates"
      ]
    },
    {
      id: 7,
      title: "Real-time Chat App",
      description: "Instant messaging with Firebase real-time database integration.",
      icon: "fas fa-comments",
      gradient: "from-primary to-accent",
      techStack: ["React", "Firebase"],
      features: [
        "Real-time messaging",
        "User authentication",
        "Message history",
        "Online status indicators"
      ]
    },
    {
      id: 8,
      title: "3D Portfolio Site",
      description: "Interactive 3D portfolio website with Three.js animations.",
      icon: "fas fa-cube",
      gradient: "from-secondary to-primary",
      techStack: ["React", "Three.js"],
      features: [
        "Interactive 3D scenes",
        "Smooth animations",
        "Responsive design",
        "Modern UI/UX"
      ]
    },
    {
      id: 9,
      title: "Blogging Platform",
      description: "Full-featured blogging platform with Markdown support and authentication.",
      icon: "fas fa-blog",
      gradient: "from-accent to-secondary",
      techStack: ["React", "Node.js"],
      features: [
        "Markdown editor",
        "User authentication",
        "Comment system",
        "SEO optimization"
      ]
    },
    {
      id: 10,
      title: "School Management",
      description: "Comprehensive school management system for students, teachers, and admin.",
      icon: "fas fa-school",
      gradient: "from-primary to-secondary",
      techStack: ["React", "Express"],
      features: [
        "Student management",
        "Grade tracking",
        "Teacher dashboard",
        "Parent portal"
      ]
    },
    {
      id: 11,
      title: "Fitness Tracker",
      description: "Comprehensive fitness tracking app with charts and progress dashboards.",
      icon: "fas fa-dumbbell",
      gradient: "from-secondary to-accent",
      techStack: ["React", "Charts"],
      features: [
        "Workout tracking",
        "Progress charts",
        "Goal setting",
        "Analytics dashboard"
      ]
    },
    {
      id: 12,
      title: "Finance Dashboard",
      description: "Advanced financial analytics dashboard with Stripe payment integration.",
      icon: "fas fa-chart-line",
      gradient: "from-accent to-primary",
      techStack: ["React", "Stripe"],
      features: [
        "Financial analytics",
        "Payment processing",
        "Transaction history",
        "Budget tracking"
      ]
    }
  ];

  const handleLiveDemo = (projectTitle: string) => {
    // In a real implementation, this would open the live demo
    console.log(`Opening live demo for ${projectTitle}`);
  };

  const handleViewCode = (projectTitle: string) => {
    // In a real implementation, this would open the GitHub repository
    console.log(`Opening GitHub repo for ${projectTitle}`);
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text" data-testid="projects-title">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="projects-description">
            A collection of real-world applications showcasing my expertise in modern web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card h-80" 
              data-testid={`project-card-${project.id}`}
            >
              <div className="project-card-inner">
                <div className="project-card-front glass-card p-6 h-full">
                  <div className={`h-32 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center`}>
                    <i className={`${project.icon} text-4xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2" data-testid={`project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-primary/20 text-primary text-xs rounded font-mono"
                        data-testid={`project-tech-${project.id}-${tech.toLowerCase()}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={`project-card-back bg-gradient-to-br ${project.gradient} p-6 h-full flex flex-col justify-center`}>
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="text-white/90 text-sm space-y-2 mb-6">
                    {project.features.map((feature, index) => (
                      <li key={index} data-testid={`project-feature-${project.id}-${index}`}>
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleLiveDemo(project.title)}
                      className="w-full bg-white text-primary py-2 rounded font-semibold hover:bg-white/90 transition-colors"
                      data-testid={`button-live-demo-${project.id}`}
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                    </button>
                    <button 
                      onClick={() => handleViewCode(project.title)}
                      className="w-full bg-white/20 text-white py-2 rounded font-semibold hover:bg-white/30 transition-colors"
                      data-testid={`button-view-code-${project.id}`}
                    >
                      <i className="fab fa-github mr-2"></i>View Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
