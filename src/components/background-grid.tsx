"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function BackgroundGrid() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Mesh Gradient Base */}
      <div className="absolute inset-0 bg-mesh opacity-30" />
      
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial Glow following mouse */}
      <motion.div
        className="absolute -inset-[500px] opacity-40 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />

      {/* Grain Overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none contrast-150 brightness-100 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
