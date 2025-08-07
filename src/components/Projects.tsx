import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "My DawaWala Backend",
      description: "A complete backend system for e-commerce platform from starting and still managing and adding new backend features",
      technologies: ["Node.js", "Express", "MongoDB"],
      icon: <Globe className="w-6 h-6" />,
      link: "https://www.mydawawala.com",
      category: "E-commerce"
    },
    {
      title: "Health Data Exchange on Blockchain",
      description: "A decentralized application where patients can store their reports and share with doctor and hospitals securely",
      technologies: ["React", "Web3.js", "Solidity", "IPFS", "Truffle", "Ganache", "Metamask"],
      icon: <Shield className="w-6 h-6" />,
      category: "Blockchain"
    },
    {
      title: "Live E-commerce Management",
      description: "Working on live e-commerce app and managing its backend infrastructure with real-time features",
      technologies: ["Backend Management", "Real-time Systems", "API Development"],
      icon: <ExternalLink className="w-6 h-6" />,
      category: "Management"
    }
  ];

  const achievements = [
    "Team leader in 4+ IN-PERSON HACKATHONS ALL OVER WEST-BENGAL INCLUDING NIT-DURGAPUR"
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Projects & Achievements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-grow">
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.link && (
                  <div className="pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      View Project
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-none shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;