import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-section-gradient">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate B.Tech CSE-AIML student at Techno International New Town with a strong foundation in 
              full-stack development. I specialize in Python, JavaScript, and modern web technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With experience in both frontend and backend development, I enjoy creating scalable applications 
              and working with cutting-edge technologies like React, Node.js, and various databases.
            </p>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Kolkata, West Bengal</span>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">B.Tech - CSE-AIML</h3>
                    <p className="text-muted-foreground">Techno International New Town</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>2026 | 7.1 CGPA</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">12th - Science</h3>
                    <p className="text-muted-foreground">Radhika Town High School, West Bengal</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>2021 | 79.2%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;