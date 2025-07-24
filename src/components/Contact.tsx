import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Github, MapPin, Send, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "saisampathnaramsetty@gmail.com",
      href: "mailto:saisampathnaramsetty@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9908358022",
      href: "tel:+919908358022",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/saisampath369",
      href: "https://linkedin.com/in/saisampath369",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/Nsaisampath",
      href: "https://github.com/Nsaisampath",
      gradient: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Enhanced Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="relative p-6 bg-gradient-card border-border card-hover group overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <a href={contact.href} className="flex items-center space-x-6 group relative z-10">
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}>
                        {contact.icon}
                      </div>
                      <div className={`absolute -inset-2 bg-gradient-to-br ${contact.gradient} rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity`}></div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="font-semibold text-lg mb-1">{contact.label}</div>
                      <div className="text-primary hover:text-primary-glow transition-colors font-medium">
                        {contact.value}
                      </div>
                    </div>
                    
                    <div className="text-muted-foreground group-hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Location */}
            <Card className="p-6 bg-gradient-primary/5 border-primary/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-muted-foreground">Andhra Pradesh, India</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Enhanced Contact Form */}
          <div>
            <Card className="relative p-10 bg-gradient-card border-border overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2">Send a Message</h3>
                <p className="text-muted-foreground mb-8">I'd love to hear about your project or opportunity.</p>
                
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-sm font-semibold">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        className="bg-background/50 border-border focus:border-primary focus:bg-background h-12 text-lg"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-semibold">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-background/50 border-border focus:border-primary focus:bg-background h-12 text-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-sm font-semibold">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="What would you like to discuss?"
                      className="bg-background/50 border-border focus:border-primary focus:bg-background h-12 text-lg"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-semibold">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, collaboration idea, or just say hello..."
                      rows={6}
                      className="bg-background/50 border-border focus:border-primary focus:bg-background resize-none text-lg"
                    />
                  </div>
                  
                  <Button className="w-full btn-primary h-14 text-lg group">
                    <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;