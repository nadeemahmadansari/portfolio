import { SectionHeader } from "./section-header";
import { Container } from "./container";
import { ProjectCard } from "./project-card";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/10">
      <Container>
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A selection of my best work, focusing on technical complexity and measurable impact." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.slug}
              {...project}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
