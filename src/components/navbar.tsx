"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "./container";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter hover:text-primary transition-colors"
          >
            NADEEM<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/#resume" 
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                >
                  Resume
                </Link>
              </li>
            </ul>
            <div className="border-l border-border h-6 mx-2" />
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="h-9 w-9" />}>
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-border">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-8 mt-12">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link 
                    href="/#resume" 
                    className={cn(buttonVariants({ className: "w-full" }))}
                  >
                    Download Resume
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </motion.header>
  );
}
