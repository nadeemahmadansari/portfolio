import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Projects } from "@/components/projects";
import { Resume } from "@/components/resume";
import { Contact } from "@/components/contact";
import { FadeIn } from "@/components/fade-in";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      
      <About />

      <ExperienceTimeline />
      
      <FadeIn direction="up">
        <Projects />
      </FadeIn>
      
      <FadeIn direction="up">
        <Resume />
      </FadeIn>
      
      <FadeIn direction="up">
        <Contact />
      </FadeIn>
    </div>
  );
}
