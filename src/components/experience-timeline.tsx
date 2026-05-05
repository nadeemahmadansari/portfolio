"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Container } from "./container";
import { SectionHeader } from "./section-header";
import { Briefcase, Milestone, Star } from "lucide-react";

const experiences = [
  {
    title: "Full Stack & Apps Script Developer",
    company: "CloudFort Technologies & Consultancy",
    period: "Mar 2021 - Present",
    description: "Architected and maintained responsive web applications using React.js, Redux, and Node.js on GCP. Designed enterprise-grade Google Workspace automation solutions. Integrated RESTful and GraphQL APIs to streamline data flow, improving response times by 30%.",
    impact: "Reduced project delivery time by 15%",
    icon: Star,
  },
  {
    title: "B.Tech in Computer Science",
    company: "Integral University",
    period: "Jul 2016 - Aug 2020",
    description: "Completed Bachelor of Technology in Computer Science & Engineering. Built strong foundations in algorithms, data structures, full-stack development, and relational database modeling.",
    impact: "7.86 CGPA",
    icon: Milestone,
  }
];

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <Container>
        <SectionHeader 
          title="Career Journey" 
          subtitle="A track record of delivering high-impact solutions across industries." 
        />

        <div ref={containerRef} className="relative max-w-4xl mx-auto mt-20">
          {/* Vertical Progress Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary rounded-full origin-top hidden md:block"
          />
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-border rounded-full md:hidden" />

          <div className="space-y-24">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.period}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex items-center justify-between gap-8 flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[45%] p-8 rounded-3xl glass-card relative group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                      <exp.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-sm text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex items-center gap-2 p-3 rounded-xl bg-primary/5 border border-primary/10">
                    <Star className="h-4 w-4 text-amber-400 fill-current" />
                    <span className="text-xs font-bold">{exp.impact}</span>
                  </div>

                  <div className="absolute top-1/2 -translate-y-1/2 hidden md:block">
                    <div className={`w-8 h-px bg-primary/30 ${i % 2 === 0 ? "-right-8" : "-left-8"} absolute`} />
                  </div>
                </div>

                {/* Dot on Line */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary z-20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Period Label */}
                <div className="w-full md:w-[45%] flex justify-start md:justify-center">
                  <span className="text-3xl font-black text-muted-foreground/30 uppercase tracking-tighter">
                    {exp.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
