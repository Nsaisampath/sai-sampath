import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Server, Smartphone, CheckSquare } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Hostel Management System",
      description: "Full-stack web application with authentication, admin dashboard, and hostel operations automation. Features include room allocation, student management, and fee tracking.",
      icon: <Server className="w-8 h-8" />,
      tags: ["React.js", "Node.js", "PostgreSQL", "Express.js"],
      gradient: "from-blue-500 to-cyan-500",
      features: ["User Authentication", "Admin Dashboard", "Room Management", "Fee Tracking"]
    },
    {
      title: "Offline-First Learning App",
      description: "Mobile application built with React Native for rural education access without internet connectivity. Features offline quizzes and local data synchronization.",
      icon: <Smartphone className="w-8 h-8" />,
      tags: ["React Native", "SQLite", "Offline Storage", "Mobile"],
      gradient: "from-green-500 to-emerald-500",
      features: ["Offline Access", "Quiz System", "Progress Tracking", "Local Sync"]
    },
    {
      title: "To-Do List App",
      description: "Responsive React application for managing personal tasks with dynamic state handling using React Hooks. Clean UI with drag-and-drop functionality.",
      icon: <CheckSquare className="w-8 h-8" />,
      tags: ["React.js", "React Hooks", "CSS3", "Local Storage"],
      gradient: "from-purple-500 to-violet-500",
      features: ["Task Management", "Drag & Drop", "Local Storage", "Responsive Design"]
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating technical skills and problem-solving capabilities across different domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-10">
          {projects.map((project, index) => (
            <Card key={index} className="relative p-8 bg-gradient-card border-border card-hover group overflow-hidden">
              {/* Background Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-5 rounded-full blur-3xl`}></div>
              
              <div className="grid lg:grid-cols-3 gap-8 items-center relative z-10">
                {/* Project Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start space-x-6">
                    <div className="relative group">
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                        {project.icon}
                      </div>
                      <div className={`absolute -inset-2 bg-gradient-to-br ${project.gradient} rounded-3xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity`}></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Enhanced Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Enhanced Action Buttons */}
                  <div className="flex gap-4">
                    <Button className="btn-primary group">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="border-border bg-card/50 hover:bg-card hover:border-primary/50 group">
                      <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Source Code
                    </Button>
                  </div>
                </div>
                
                {/* Enhanced Features */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold flex items-center">
                    <span className="w-1 h-6 bg-gradient-primary rounded-full mr-3"></span>
                    Key Features
                  </h4>
                  <div className="space-y-4">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-4 p-3 rounded-lg bg-card/30 border border-border/30 hover:border-primary/30 transition-colors">
                        <div className="w-3 h-3 bg-gradient-primary rounded-full shadow-lg"></div>
                        <span className="text-muted-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-primary/5 border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in my work?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects and contributions to the open source community.
            </p>
            <Button className="btn-primary">
              <Github className="w-5 h-5 mr-2" />
              Visit GitHub Profile
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;