import { Card } from "@/components/ui/card";
import { GraduationCap, Award, MapPin, Code, BookOpen, Sparkles } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.Tech Information Technology",
      school: "MVGR College of Engineering",
      year: "2026",
      score: "Pursuing",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Intermediate (MPC)",
      school: "Sri Chaitanya College",
      year: "2022",
      score: "96%",
      icon: <Award className="w-6 h-6" />
    },
    {
      degree: "SSC",
      school: "ZPHS BJ Puram",
      year: "2020",
      score: "96%",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const highlights = [
    { icon: <Code className="w-5 h-5" />, text: "3+ Years Coding Experience", color: "text-blue-400" },
    { icon: <BookOpen className="w-5 h-5" />, text: "Machine Learning Certified", color: "text-green-400" },
    { icon: <Sparkles className="w-5 h-5" />, text: "Full-Stack Developer", color: "text-purple-400" }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary font-semibold">About Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Creating Digital <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate technology enthusiast with a vision to solve real-world problems through innovative software solutions and AI-driven applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Profile and Bio */}
          <div className="space-y-8">
            {/* Enhanced Profile Section */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative w-80 h-80 mx-auto lg:mx-0 rounded-3xl bg-gradient-card border border-border/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <div className="w-full h-full flex items-center justify-center relative z-10">
                  <span className="text-7xl font-bold text-primary drop-shadow-lg">SS</span>
                </div>
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-6 h-6 bg-accent/30 rounded-full blur-sm animate-pulse delay-100"></div>
              </div>
            </div>
            
            {/* Bio Section with Enhanced Typography */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text">
                  Hello! I'm Sai Sampath
                </h3>
                <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                A dedicated <span className="text-primary font-semibold">B.Tech Information Technology</span> student with an unwavering passion for software development and artificial intelligence. I believe in the transformative power of technology to solve complex real-world problems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                During my <span className="text-primary font-semibold">AI/ML internship at Google</span> via Eduskills, I built 3 machine learning models and gained invaluable hands-on experience with real datasets, significantly strengthening my foundation in data science.
              </p>
              
              {/* Quick Highlights */}
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-card/30 border border-border/30">
                    <div className={`${highlight.color}`}>
                      {highlight.icon}
                    </div>
                    <span className="text-muted-foreground">{highlight.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center text-primary bg-primary/5 p-3 rounded-lg border border-primary/10">
                <MapPin className="w-5 h-5 mr-3" />
                <span className="font-medium">Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Right side - Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Educational Journey</h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-border card-hover">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-2">{edu.school}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{edu.year}</span>
                        <span className="text-primary font-semibold">{edu.score}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Internship Highlight */}
            <Card className="p-6 bg-gradient-primary/5 border-primary/20 card-hover">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">AI/ML Internship</h4>
                  <p className="text-muted-foreground mb-2">Google via Eduskills • 3 months</p>
                  <p className="text-sm text-muted-foreground">
                    Built 3 machine learning models and gained practical experience with real datasets
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;