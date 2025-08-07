import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Vivek Gupta
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Full Stack Developer & Tech Enthusiast
          </p>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            I want to contribute to my society and nation with my skills and hard work. 
            Passionate about creating innovative solutions and building impactful applications.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('projects')}
              className="hover:bg-primary/10 transition-all duration-300"
            >
              View Projects
            </Button>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:vivek.gupta.aiml.2022@tint.edu.in" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;