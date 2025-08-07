import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Bright Infonet",
      role: "Python Developer",
      type: "Online | 4 months",
      description: "Creating APIs as per requirements, Development using AWS lambda or EC-2",
      period: "Recent",
      technologies: ["Python", "AWS Lambda", "EC2", "API Development"]
    },
    {
      company: "SIDA Technologies", 
      role: "Backend Developer",
      type: "Online | 2 years",
      description: "Handling whole backend, creating APIs",
      period: "2+ Years",
      technologies: ["Backend Development", "API Creation", "System Architecture"]
    },
    {
      company: "Saday",
      role: "Graphic Designer & Team Leader",
      type: "Online | 1 year", 
      description: "Managing branding team",
      period: "1 Year",
      technologies: ["Graphic Design", "Team Leadership", "Brand Management"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-section-gradient">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Work Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors">
                      {exp.role}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;