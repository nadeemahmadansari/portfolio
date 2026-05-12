import { SectionHeader } from "./section-header";
import { Container } from "./container";
import { buttonVariants } from "@/components/ui/button";
import { Download, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const highlights = [
  "Senior Full Stack Expertise (5+ years)",
  "Led engineering for products with 6M+ users",
  "Specialist in React, Next.js, and Node.js",
  "Strong focus on system design and scalability",
  "Google Workspace API & Apps Script automation expert",
];

export function Resume() {
  return (
    <section id="resume" className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-secondary/50 to-background border border-border p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to build something{" "}
              <span className="text-primary">extraordinary?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Download my full resume to see a detailed breakdown of my
              experience, technical skills, and the impact I've delivered in
              previous roles.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 px-10 text-lg group",
              )}
            >
              <Download className="mr-3 h-5 w-5 transition-transform group-hover:translate-y-1" />
              Download Resume (PDF)
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
