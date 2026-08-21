import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Loader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3200); // Extended slightly for the richer animation
    return () => clearTimeout(timer);
  }, [onComplete]);

  const name = "ANJUM AZRA";
  const letters = name.split("");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.4,
      },
    },
  };

  const letterAnim = {
    hidden: { y: "100%", opacity: 0, rotate: 10 },
    show: { 
      y: 0, 
      opacity: 1, 
      rotate: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[99999] bg-bg flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-1/2 md:w-1/4 h-[1px] bg-navy/10"
        />
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex overflow-hidden relative z-10 py-4"
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnim}
            className="text-4xl md:text-7xl font-serif font-normal text-navy tracking-[0.2em] inline-block"
            style={{ marginRight: char === " " ? "1rem" : "0" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
      
      <div className="overflow-hidden mt-8">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
          className="text-[10px] uppercase tracking-[0.4em] font-sans text-muted text-center"
        >
          AI & Data Science Developer
        </motion.div>
      </div>
    </motion.div>
  );
}
