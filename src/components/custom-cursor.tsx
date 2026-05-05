"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[100] hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
    </motion.div>
  );
}
