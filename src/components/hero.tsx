"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "./container";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Star,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import Image from "next/image";

function MagneticWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    if (ref.current) {
      ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    }
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = `translate(0px, 0px)`;
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-200 ease-out"
    >
      {children}
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="max-w-3xl space-y-10">
          {/* Avatar & Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-border bg-secondary flex items-center justify-center">
              <span className="text-2xl font-bold text-muted-foreground">
                N
              </span>
              {/* Replace with actual image later */}
              {/* <Image src="/avatar.jpg" alt="Nadeem" fill className="object-cover" /> */}
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold shadow-sm mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>Available for work</span>
              </div>
              <h2 className="text-xl font-bold">Nadeem Ahmad</h2>
              <p className="text-sm text-muted-foreground">
                Senior Full Stack Developer
              </p>
            </div>
          </motion.div>

          {/* Intro Text */}
          <div className="space-y-6 pt-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="block"
              >
                Hi, I'm Nadeem Ahmad. A Full Stack Developer with 5+ years of
                experience.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              I specialize in architecting scalable AI-driven automation tools
              and high-performance React applications. Proven track record of
              delivering enterprise-grade solutions with 6M+ global users.
              Expert in full-stack JavaScript environments and Google Cloud
              ecosystems.
            </motion.p>
          </div>

          {/* Quick Links & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8"
          >
            <div className="flex flex-wrap gap-4">
              <MagneticWrapper>
                <Link
                  href="/#projects"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 px-6 rounded-xl group shadow-lg shadow-primary/20 font-bold",
                  )}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticWrapper>

              <MagneticWrapper>
                <Link
                  href="/#contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 px-6 rounded-xl font-bold",
                  )}
                >
                  Let's Talk
                </Link>
              </MagneticWrapper>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground sm:ml-auto">
              <a
                href="https://github.com/nadeemahmadansari"
                className="hover:text-foreground transition-colors p-2 bg-secondary/50 rounded-lg"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nadeem-ahmad-a7563477/"
                className="hover:text-foreground transition-colors p-2 bg-secondary/50 rounded-lg"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:nadeem2136@gmail.com"
                className="hover:text-foreground transition-colors p-2 bg-secondary/50 rounded-lg"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Social Proof Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8 border-t border-border mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[10px] font-bold"
                >
                  {i === 4 ? "+50" : <UserPlaceholder i={i} />}
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-amber-400 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                Trusted by 5+ Clients Worldwide
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Floating Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"
      />
    </section>
  );
}

function UserPlaceholder({ i }: { i: number }) {
  return (
    <div
      className={cn(
        "h-full w-full rounded-full flex items-center justify-center",
        i === 1
          ? "bg-blue-500/20"
          : i === 2
            ? "bg-purple-500/20"
            : "bg-green-500/20",
      )}
    >
      <div className="h-4 w-4 rounded-full bg-white/20" />
    </div>
  );
}
