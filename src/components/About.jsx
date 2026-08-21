import React from "react";
import { motion } from "framer-motion";
import { personalProfile } from "../data";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-surface relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-4">
            <span className="text-xs tracking-[0.2em] uppercase font-sans text-muted mb-8 block">
              About
            </span>
            <div className="w-full h-[1px] bg-navy/20 mb-8" />
            <p className="text-sm font-sans text-muted leading-relaxed">
              Based in {personalProfile.location}.<br/>
              {personalProfile.availability}
            </p>
          </div>

          <div className="lg:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-5xl font-serif text-navy leading-[1.3] max-w-4xl"
            >
              "{personalProfile.summary}"
            </motion.h2>
          </div>

        </div>
      </div>
    </section>
  );
}
