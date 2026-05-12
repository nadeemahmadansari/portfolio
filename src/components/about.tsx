"use client";

import { motion } from "framer-motion";
import { Container } from "./container";
import { SectionHeader } from "./section-header";
import {
  Code2,
  Cpu,
  Globe,
  Layers,
  Smartphone,
  Zap,
  CheckCircle2,
  TrendingUp,
  Users2,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Motion"],
    className: "md:col-span-1 bg-blue-500/5 border-blue-500/20",
  },
  {
    title: "Backend",
    icon: Cpu,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
    className: "md:col-span-1 bg-purple-500/5 border-purple-500/20",
  },
  {
    title: "DevOps",
    icon: Layers,
    skills: ["Docker", "GCP", "AWS", "Git", "Vercel", "Linux"],
    className: "md:col-span-1 bg-green-500/5 border-green-500/20",
  },
  {
    title: "Specialties",
    icon: Zap,
    skills: ["Apps Script", "Automation", "API Design"],
    className: "md:col-span-1 bg-amber-500/5 border-amber-500/20",
  },
];

const stats = [
  { label: "Years Exp", value: "5+", icon: Calendar },
  { label: "Users Impacted", value: "6M+", icon: Users2 },
  { label: "Projects Done", value: "5+", icon: CheckCircle2 },
  // { label: "ROI Delivered", value: "300%", icon: TrendingUp },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <Container>
        <SectionHeader
          title="Expertise & Impact"
          subtitle="Combining deep technical knowledge with a focus on business results."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
          {/* Skill Category Cards */}
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "p-5 rounded-3xl border glass-card group flex flex-col justify-start",
                cat.className,
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-background border border-border group-hover:scale-110 transition-transform">
                  <cat.icon className="h-4 w-4 text-primary" />
                </div>
                <h4 className="font-bold text-sm">{cat.title}</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md bg-secondary/50 text-[11px] font-medium border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Stats Cards */}
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="col-span-1 p-5 rounded-3xl glass-card flex flex-col items-center justify-center text-center space-y-2 group"
            >
              <stat.icon className="h-5 w-5 text-highlight group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-black">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-tighter text-muted-foreground font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
