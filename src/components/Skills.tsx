import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "Solidity"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Frontend Development", 
      icon: <Globe className="w-6 h-6" />,
      skills: ["React", "HTML/CSS", "Responsive Design"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Backend & Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Express", "FastAPI", "MongoDB", "PostgreSQL", "IPFS"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Teamwork", "Team Management", "Leadership"],
      color: "from-pink-500 to-rose-600"
    }
  ];

  const interests = ["Playing Cricket", "Exploring new things", "Singing"];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Skills & Interests
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-secondary/50 px-3 py-1 rounded-full text-sm text-center hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Personal Interests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4">
              {interests.map((interest, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                >
                  {interest}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;