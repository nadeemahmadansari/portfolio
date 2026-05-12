import Link from "next/link";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { Container } from "./container";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nadeem-ahmad-a7563477/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/nadeemahmadansari",
    icon: Github,
  },
  {
    name: "Fiverr",
    href: "https://fiverr.com/yourprofile",
    icon: ExternalLink,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 bg-secondary/30">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              NADEEM<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Building impactful digital experiences with modern technology.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Nadeem. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link
              href="#privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div> */}
        </div>
      </Container>
    </footer>
  );
}
