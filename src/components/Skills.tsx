import { Card } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Globe, 
  Brain, 
  Settings, 
  Users,
  MessageSquare,
  Target 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "SQL", level: 80 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 }
      ],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "ML/AI Tools",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "NumPy", level: 85 },
        { name: "Pandas", level: 90 },
        { name: "Matplotlib", level: 80 }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 88 },
        { name: "Jupyter Notebook", level: 85 },
        { name: "VS Code", level: 95 }
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: "Leadership", level: 85 },
        { name: "Communication", level: 90 },
        { name: "Teamwork", level: 95 }
      ],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills that I've mastered through continuous learning and hands-on experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border card-hover group">
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                {/* Skills List with Progress Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-primary font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-primary/5 border-primary/20 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Problem Solving</h4>
                <p className="text-muted-foreground">Creative approach to complex challenges</p>
              </div>
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Communication</h4>
                <p className="text-muted-foreground">Clear and effective technical communication</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Collaboration</h4>
                <p className="text-muted-foreground">Strong team player and leader</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;