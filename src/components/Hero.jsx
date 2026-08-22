import React from "react";
import { motion } from "framer-motion";
import { PROFILE_SRC, personalProfile } from "../data";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-navy-mid to-navy-base">
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start"
      >
        {/* Main Content */}
        <div className="flex flex-col pt-12 lg:pt-0 z-20">
          
          <motion.div variants={item}>
            <span className="text-[10vw] lg:text-[110px] leading-[0.85] font-serif font-bold text-ivory tracking-tight block mb-2">
              Hey, I'm Anjum Azra,
            </span>
          </motion.div>
          <motion.h1
            variants={item}
            className="text-[10vw] lg:text-[110px] leading-[0.85] font-serif font-bold text-ivory tracking-tight mb-8"
          >
            AI & DATA SCIENCE<br/>DEVELOPER
          </motion.h1>

          <motion.div variants={item} className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif text-ivory leading-tight mb-6">
              I build <i className="italic text-gold-bright">intelligent</i> digital experiences that turn data into <i className="italic text-gold-bright">meaningful</i> solutions.
            </h2>
            
            <p className="text-base font-sans text-bluegray leading-relaxed mb-10 max-w-md">
              I am an IT student and developer working across Artificial Intelligence, Data Science, Generative AI, Full-Stack Development, and Data Analytics.
            </p>

            <div className="flex flex-wrap items-center gap-8 md:gap-12 mt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-4 text-xs tracking-widest uppercase font-semibold text-ivory hover:text-gold transition-colors group"
              >
                <span>Explore Work</span>
                <span className="w-8 h-[1px] bg-ivory group-hover:bg-gold group-hover:w-16 transition-all duration-300" />
              </a>

              <div className="flex items-center gap-6">
                <a href={personalProfile.github} target="_blank" rel="noreferrer" className="text-[10px] tracking-widest uppercase font-sans text-ivory hover:text-gold transition-colors border-b border-ivory/30 hover:border-gold pb-0.5">
                  GitHub
                </a>
                <a href={personalProfile.linkedin} target="_blank" rel="noreferrer" className="text-[10px] tracking-widest uppercase font-sans text-ivory hover:text-gold transition-colors border-b border-ivory/30 hover:border-gold pb-0.5">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Info Strip (Introduction/Stats) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="w-full max-w-7xl mx-auto mt-24 border-t border-b border-navy-mid/50 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 z-10"
      >
        <div className="flex flex-col">
          <span className="text-4xl font-serif text-ivory mb-2">4+</span>
          <span className="text-[10px] tracking-widest uppercase font-sans text-bluegray">Major Projects</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-serif text-ivory mb-2">AI + Data</span>
          <span className="text-[10px] tracking-widest uppercase font-sans text-bluegray">Core Focus</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-serif text-ivory mb-2">3+</span>
          <span className="text-[10px] tracking-widest uppercase font-sans text-bluegray">Internships</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-serif text-ivory mb-2">12+</span>
          <span className="text-[10px] tracking-widest uppercase font-sans text-bluegray">Certifications</span>
        </div>
      </motion.div>
    </section>
  );
}
