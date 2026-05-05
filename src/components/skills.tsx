import { SectionHeader } from "./section-header";
import { Container } from "./container";
import { SkillBadge } from "./skill-badge";
import { Code2, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Python", "Google Apps Script", "GraphQL", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Prisma", "SQL"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Docker", "AWS", "Vercel", "Git", "GitHub Actions", "System Design"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <SectionHeader 
          title="Technical Skills" 
          subtitle="My toolbox for building modern, scalable digital products." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="p-8 rounded-2xl bg-card border border-border flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
