import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Salary Slip Generator",
      description: "Automated tool for generating professional salary slips in PDF format with customizable templates, supporting deductions, bonuses, and allowances",
      tech: ["React", "MUI", "Bootstrap", "PHP Laravel", "MySQL"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop",
      github: "https://github.com/kanchan905/Salary-Slip-Generator",
      live: "https://payroll.indutechit.com/login"
    },
    {
      title: "Apoorva Products",
      description: "Full-featured e-commerce platform with product catalog, shopping cart, secure checkout, and order management system for seamless online shopping experience",
      tech: ["Next.js", "Bootstrap", "Node.js", "MySQL"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      github: "",
      live: "https://apoorvaproducts.com/"
    },
    {
      title: "WESTERN SAFETY PATROL",
      description: "Comprehensive safety management and patrol monitoring system with real-time tracking, incident reporting, and administrative dashboard for security operations",
      tech: ["Angular", "Bootstrap", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
      github: "",
      live: "https://appadmin.wsp-india.com/"
    },
    {
      title: "Koko paymentFlow",
      description: "KokoApp is a transaction analytics dashboard designed to monitor payment gateway performance, user activity, and system metrics in real time.",
      tech: ["Angular", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
      github: "https://github.com/kanchan905/koko-app.git",
      live: "https://koko-app-blond.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex gap-2">
                    {project.github && project.github !== "#" && (
                      <Button size="sm" variant="outline" className="bg-background/50 backdrop-blur" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.live && project.live !== "#" && (
                      <Button size="sm" className="bg-primary" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
