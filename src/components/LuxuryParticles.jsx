import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LuxuryParticles({ 
  colors = [
    "bg-gold shadow-glow-gold", 
    "bg-sceptre shadow-glow-sceptre", 
    "bg-navy shadow-none", 
    "bg-cerulean shadow-glow-cerulean"
  ] 
}) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate 100 random particles
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1, // 1px to 4px
      x: Math.random() * 100, // 0 to 100vw
      y: Math.random() * 100, // 0 to 100vh
      duration: Math.random() * 20 + 10, // 10s to 30s
      delay: Math.random() * 5,
      colorClass: colors[Math.floor(Math.random() * colors.length)]
    }));
    setParticles(newParticles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full will-change-transform ${p.colorClass}`}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: ["0%", "-500%", "0%"],
            opacity: [0, 0.8, 0],
            scale: [0.8, 1.5, 0.8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
