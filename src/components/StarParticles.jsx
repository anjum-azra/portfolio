import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function StarParticles() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate 30 static stars
    const newStars = Array.from({ length: 40 }).map((_, i) => {
      // Choose a star character
      const chars = ["✦", "✧", "★", "⋆"];
      const type = chars[Math.floor(Math.random() * chars.length)];
      
      return {
        id: i,
        size: Math.random() * 8 + 6, // 6px to 14px
        x: Math.random() * 100, // 0 to 100vw
        y: Math.random() * 100, // 0 to 100vh
        duration: Math.random() * 3 + 2, // 2s to 5s twinkle
        delay: Math.random() * 5,
        type: type,
        color: Math.random() > 0.5 ? "text-gold drop-shadow-glow-gold" : "text-ivory/50"
      };
    });
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className={`absolute flex items-center justify-center will-change-transform ${s.color}`}
          style={{
            fontSize: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
          }}
          animate={{
            opacity: [0.1, 1, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        >
          {s.type}
        </motion.div>
      ))}
    </div>
  );
}
