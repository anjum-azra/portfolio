import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div 
        className="absolute -top-[10%] -left-[20%] w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] rounded-full bg-cerulean/20 mix-blend-screen blur-[100px] md:blur-[140px]"
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[30%] -right-[20%] w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full bg-sceptre/10 mix-blend-screen blur-[100px] md:blur-[140px]"
        animate={{ 
          x: [0, -80, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute -bottom-[10%] left-[10%] w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] rounded-full bg-gold/10 mix-blend-screen blur-[100px] md:blur-[140px]"
        animate={{ 
          x: [0, 60, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
    </div>
  );
}
