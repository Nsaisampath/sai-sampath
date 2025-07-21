import { Button } from "@/components/ui/button";
import { ChevronDown, Download, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image Placeholder */}
          <div className="w-40 h-40 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-card border-2 border-primary/20 flex items-center justify-center hero-glow">
              <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">SS</span>
              </div>
            </div>
            <div className="absolute -inset-2 bg-gradient-primary rounded-full blur opacity-30 animate-pulse"></div>
          </div>
          
          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Naramsetti</span>
            <span className="text-gradient">Sai Sampath</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Aspiring Software Developer | AI/ML Enthusiast
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            B.Tech IT student passionate about building impactful software using modern web and AI technologies.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="btn-primary">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Projects
            </Button>
            <Button variant="outline" className="border-border bg-card/50 hover:bg-card">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;