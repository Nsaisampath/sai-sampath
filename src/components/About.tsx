import { Card } from "@/components/ui/card";
import { GraduationCap, Award, MapPin } from "lucide-react";

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

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and innovation, driven by curiosity and a desire to create meaningful solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile and Bio */}
          <div className="space-y-6">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl bg-gradient-card border border-border overflow-hidden card-hover">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary">SS</span>
                </div>
              </div>
              <div className="absolute -inset-2 bg-gradient-primary rounded-2xl blur opacity-20"></div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Hello! I'm Sai Sampath</h3>
              <p className="text-muted-foreground leading-relaxed">
                A dedicated B.Tech Information Technology student with a passion for software development and artificial intelligence. 
                I believe in the power of technology to solve real-world problems and create positive impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                During my AI/ML internship at Google via Eduskills, I built 3 machine learning models and gained hands-on 
                experience with real datasets, strengthening my foundation in data science and machine learning.
              </p>
              <div className="flex items-center text-primary">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Andhra Pradesh, India</span>
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