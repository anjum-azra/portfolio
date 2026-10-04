import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-sceptre rounded-full pointer-events-none z-[9999] shadow-glow-sceptre"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: "-50%",
          y: "-50%",
        }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-gold rounded-full pointer-events-none z-[9998] shadow-glow-gold"
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(212, 175, 55, 0.15)" : "rgba(212, 175, 55, 0)",
          borderColor: isHovering ? "rgba(212, 175, 55, 0)" : "rgba(212, 175, 55, 0.5)",
        }}
        transition={{ duration: 0.2 }}
        style={{
          translateX: smoothX,
          translateY: smoothY,
          x: "-50%",
          y: "-50%",
        }}
      />
    </>
  );
}
