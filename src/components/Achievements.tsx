import { Card } from "@/components/ui/card";
import { Trophy, Award, Users, Star, Zap } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "SDF VIDYADHAN Scholar",
      description: "Selected as 1 in 270 out of 7000+ applicants for this prestigious scholarship program",
      icon: <Trophy className="w-8 h-8" />,
      gradient: "from-yellow-500 to-orange-500",
      category: "Scholarship"
    },
    {
      title: "NASSCOM Foundation Delegate",
      description: "Chosen as 1 in 12 delegates across India for the NASSCOM Foundation program",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-500",
      category: "Leadership"
    },
    {
      title: "BITS Pilani Hackathon",
      description: "Secured Top 10 position in the competitive BITS Pilani hackathon",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      category: "Competition"
    },
    {
      title: "NSS March Past & Community Events",
      description: "Active participation in National Service Scheme activities and community service",
      icon: <Star className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500",
      category: "Service"
    },
    {
      title: "National-Level Competitions",
      description: "Participant in National-Level Debate and Science Congress competitions",
      icon: <Award className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500",
      category: "Academic"
    }
  ];

  const stats = [
    { number: "7000+", label: "Applicants Competed", subtext: "for VIDYADHAN scholarship" },
    { number: "Top 10", label: "Hackathon Ranking", subtext: "at BITS Pilani" },
    { number: "1 in 12", label: "National Selection", subtext: "NASSCOM delegate" },
    { number: "96%", label: "Academic Score", subtext: "Consistent excellence" }
  ];

  return (
    <section id="achievements" className="section-padding bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-gradient">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for academic excellence, leadership, and contribution to the community.
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="relative p-8 bg-gradient-card border-border text-center card-hover group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">{stat.number}</div>
                <div className="font-semibold mb-2 text-lg">{stat.label}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{stat.subtext}</div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Card>
          ))}
        </div>

        {/* Enhanced Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="relative p-8 bg-gradient-card border-border card-hover group overflow-hidden">
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${achievement.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
              
              <div className="flex items-start space-x-6 relative z-10">
                <div className="relative group">
                  <div className={`flex-shrink-0 w-20 h-20 rounded-3xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}>
                    {achievement.icon}
                  </div>
                  <div className={`absolute -inset-2 bg-gradient-to-br ${achievement.gradient} rounded-3xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity`}></div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-xs px-3 py-2 bg-primary/10 text-primary rounded-xl font-semibold border border-primary/20">
                      {achievement.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{achievement.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Recognition Quote */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-primary/5 border-primary/20 max-w-4xl mx-auto">
            <Trophy className="w-16 h-16 text-primary mx-auto mb-6" />
            <blockquote className="text-xl font-medium text-center mb-4">
              "Excellence is not a skill, it's an attitude. These achievements reflect my commitment to continuous learning and contribution to society."
            </blockquote>
            <cite className="text-muted-foreground">- Naramsetti Sai Sampath</cite>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;