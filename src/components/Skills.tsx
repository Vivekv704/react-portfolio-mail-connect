import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "TypeScript", "Solidity"],
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
      title: "Web3",
      icon: <Globe className="w-6 h-6" />,
      skills: ["Solidity", "Blockchain", "Smart Contracts", "IPFS"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Deployment",
      icon: <Users className="w-6 h-6" />,
      skills: ["AWS", "AWS-EC2", "AWS LAMBDA"],
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-primary/20 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group hover:border-primary/40">
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
                      className="bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-sm text-center hover:bg-primary/20 hover:border-primary/40 transition-colors"
                    >
                      {skill}
                    </div>
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

export default Skills;