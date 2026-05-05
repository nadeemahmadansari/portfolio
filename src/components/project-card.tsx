"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { Github, ExternalLink, ArrowRight, TrendingUp } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  impact: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  slug: string;
}

export function ProjectCard({
  title,
  description,
  impact,
  techStack,
  liveUrl,
  githubUrl,
  slug,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse rotation values for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full perspective-[1000px]"
    >
      <div 
        className={cn(
          "relative h-full flex flex-col p-8 rounded-[2.5rem] glass-card transition-all duration-500 overflow-hidden",
          isHovered ? "bg-white/10" : "bg-white/5"
        )}
        style={{ transform: "translateZ(50px)" }}
      >
        {/* Impact Overlay Background Effect */}
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
          <TrendingUp className="h-24 w-24 text-primary" />
        </div>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/30">
              Impact Highlight
            </span>
            <div className="flex gap-2">
              {githubUrl && (
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
          <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Impact Metric Card */}
        <div className="mb-8 p-4 rounded-2xl bg-primary/5 border border-primary/10 group-hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <TrendingUp className="h-4 w-4" />
            </div>
            <span className="font-bold text-sm">{impact}</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {techStack.slice(0, 4).map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-0.5 rounded-lg bg-secondary/50 text-[10px] font-medium border border-border/50"
            >
              {tech}
            </span>
          ))}
          {techStack.length > 4 && (
            <span className="text-[10px] text-muted-foreground flex items-center">+{techStack.length - 4} more</span>
          )}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <Link 
            href={`/projects/${slug}`}
            className="flex items-center gap-2 text-sm font-bold group/link"
          >
            Case Study
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
          
          {liveUrl && (
            <Link 
              href={liveUrl}
              target="_blank"
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "rounded-full h-8 px-4 border border-white/5")}
            >
              Live Demo
              <ExternalLink className="ml-2 h-3 w-3" />
            </Link>
          )}
        </div>
      </div>

      {/* Glossy Reflection Effect */}
      <motion.div 
        className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 80%)",
          opacity: isHovered ? 0.5 : 0,
        }}
      />
    </motion.div>
  );
}
