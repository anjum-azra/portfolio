import React from "react";
import { motion } from "framer-motion";
import { personalProfile } from "../data";

import LuxuryParticles from "./LuxuryParticles";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-surface relative overflow-hidden">
      <LuxuryParticles colors={["bg-navy shadow-none", "bg-java shadow-none", "bg-sceptre shadow-none"]} />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 pb-8 border-b border-navy/20"
        >
          <h2 className="text-5xl md:text-8xl font-serif font-normal text-navy tracking-tight uppercase">
            About
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-4">
            <p className="text-sm font-sans text-muted leading-relaxed">
              Based in {personalProfile.location}.<br/>
              {personalProfile.availability}
            </p>
          </div>

          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <span className="absolute -left-6 -top-4 md:-left-10 md:-top-8 text-6xl md:text-9xl text-gold/30 font-serif leading-none select-none">
                  "
                </span>
                <span className="relative z-10 text-3xl md:text-5xl font-serif text-navy leading-[1.3] max-w-4xl block">
                  {personalProfile.summary}
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
