import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Download, ExternalLink, Code, Brain, Trophy, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/30"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left side - Main Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                Available for opportunities
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="block text-foreground">Naramsetti</span>
                  <span className="block text-gradient bg-gradient-primary bg-clip-text">Sai Sampath</span>
                </h1>
                
                <div className="space-y-2">
                  <p className="text-xl md:text-2xl text-primary font-semibold">
                    Aspiring Software Developer
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    AI/ML Enthusiast • B.Tech IT Student
                  </p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Passionate about building impactful software using modern web and AI technologies. 
                Currently pursuing B.Tech in Information Technology with hands-on experience in machine learning.
              </p>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary group px-8 py-4 text-lg">
                  <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View Projects
                </Button>
                <Button variant="outline" className="border-border bg-card/50 hover:bg-card px-8 py-4 text-lg group">
                  <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">ML Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">96%</div>
                  <div className="text-sm text-muted-foreground">Academic Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Top 10</div>
                  <div className="text-sm text-muted-foreground">Hackathon</div>
                </div>
              </div>
            </div>
            
            {/* Right side - Enhanced Profile & Floating Cards */}
            <div className="lg:col-span-5 relative">
              {/* Main Profile Container */}
              <div className="relative max-w-md mx-auto">
                {/* Profile Image with Enhanced Effects */}
                <div className="relative w-80 h-80 mx-auto mb-8">
                  <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-xl opacity-30 animate-pulse"></div>
                  <div className="relative w-full h-full rounded-3xl bg-gradient-card border-2 border-primary/20 overflow-hidden">
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-6xl font-bold text-primary">SS</span>
                    </div>
                    {/* Overlay pattern */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                  </div>
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute -right-4 top-1/4 space-y-3">
                    <div className="w-12 h-12 bg-card rounded-xl border border-border flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <div className="w-12 h-12 bg-card rounded-xl border border-border flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                      <Brain className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                </div>
                
                {/* Floating Info Cards */}
                <Card className="absolute -left-8 top-12 p-4 bg-gradient-card border-border shadow-xl card-hover max-w-48">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">VIDYADHAN Scholar</div>
                      <div className="text-xs text-muted-foreground">1 in 270 selected</div>
                    </div>
                  </div>
                </Card>
                
                <Card className="absolute -right-8 bottom-12 p-4 bg-gradient-card border-border shadow-xl card-hover max-w-48">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Google AI/ML</div>
                      <div className="text-xs text-muted-foreground">3-month internship</div>
                    </div>
                  </div>
                </Card>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-12 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                <div className="absolute bottom-0 left-12 w-3 h-3 bg-accent rounded-full animate-ping delay-1000"></div>
                <div className="absolute top-1/2 -left-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3">
            <div className="flex space-x-1">
              <div className="w-1 h-8 bg-primary/30 rounded-full"></div>
              <div className="w-1 h-8 bg-primary/60 rounded-full"></div>
              <div className="w-1 h-8 bg-primary rounded-full animate-pulse"></div>
            </div>
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;