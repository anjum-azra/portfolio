import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LuxuryParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate 30 random particles
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1, // 1px to 4px
      x: Math.random() * 100, // 0 to 100vw
      y: Math.random() * 100, // 0 to 100vh
      duration: Math.random() * 20 + 10, // 10s to 30s
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold shadow-glow-gold"
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
