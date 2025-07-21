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

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-border card-hover group">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Project Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-lg`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button className="btn-primary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="border-border bg-card/50 hover:bg-card">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Key Features</h4>
                  <div className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
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