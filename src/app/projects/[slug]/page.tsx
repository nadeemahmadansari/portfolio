import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, CheckCircle2, TrendingUp } from "lucide-react";
import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/fade-in";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pb-20">
      <div className="bg-secondary/20 py-12 border-b border-border">
        <Container>
          <Link 
            href="/#projects" 
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.description}
              </p>
            </div>
            
            <div className="flex gap-4">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: "lg" }), "h-12 px-6")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-6")}
                >
                  <Github className="h-4 w-4 mr-2" /> GitHub
                </a>
              )}
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <FadeIn direction="up">
              <section>
                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
                  <p>{project.fullDescription}</p>
                </div>
              </section>
            </FadeIn>

            <FadeIn direction="up">
              <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    Challenges
                  </h3>
                  <ul className="space-y-4">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500/50 mt-2.5 shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    Solutions
                  </h3>
                  <ul className="space-y-4">
                    {project.solutions.map((solution, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </FadeIn>
          </div>

          <aside className="space-y-8">
            <FadeIn direction="up" delay={0.2}>
              <div className="p-8 rounded-3xl bg-card border border-border sticky top-24">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 rounded-full bg-secondary border border-border text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                      Key Impact
                    </h3>
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-highlight/10 border border-highlight/20 text-highlight">
                      <TrendingUp className="h-6 w-6" />
                      <span className="font-bold">{project.impact}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link 
                      href="/#contact" 
                      className={cn(buttonVariants({ className: "w-full h-12 text-base font-bold" }))}
                    >
                      Discuss a Similar Project
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>
      </Container>
    </div>
  );
}
