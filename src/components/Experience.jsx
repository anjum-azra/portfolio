import React from "react";
import { motion } from "framer-motion";
import { experiences, education, journey } from "../data";

import LuxuryParticles from "./LuxuryParticles";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 bg-bg relative overflow-hidden">
      
      <LuxuryParticles colors={["bg-navy shadow-none", "bg-java shadow-none", "bg-sceptre shadow-none"]} />
      <div className="relative z-10">
      {/* FOCUS & INTERESTS */}
      <div className="max-w-7xl mx-auto mb-32 md:mb-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 pb-8 border-b border-navy/20"
        >
          <h2 className="text-5xl md:text-8xl font-serif font-normal text-navy tracking-tight">
            FOCUS & INTERESTS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {[
            {
              title: "Agentic AI & LLMs",
              desc: "Building autonomous AI agents and leveraging large language models for complex problem-solving and automation."
            },
            {
              title: "Generative AI Architectures",
              desc: "Designing and implementing Hybrid RAG systems, semantic search, and advanced retrieval pipelines."
            },
            {
              title: "AI Security & Red-Teaming",
              desc: "Testing and securing AI models against adversarial prompt injections, jailbreaks, and vulnerabilities."
            },
            {
              title: "Data Science & Analytics",
              desc: "Transforming raw data into actionable insights through statistical analysis, EDA, and interactive visualization."
            },
            {
              title: "Full-Stack Engineering",
              desc: "Creating end-to-end applications that seamlessly integrate complex AI backends with intuitive frontends."
            },
            {
              title: "Accessibility & Inclusive Design",
              desc: "Developing tools and interfaces that ensure digital environments are accessible to everyone, regardless of ability."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
              className="flex flex-col border-t border-navy/10 pt-6 group hover:border-gold/50 hover:shadow-glow-gold transition-colors"
            >
              <h3 className="text-2xl font-serif text-navy mb-4 group-hover:text-sceptre transition-colors">
                {item.title}
              </h3>
              <p className="text-sm font-sans text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <div className="max-w-7xl mx-auto mb-32 md:mb-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24 pb-8 border-b border-navy/20"
        >
          <h2 className="text-5xl md:text-8xl font-serif font-normal text-navy tracking-tight">
            EDUCATION
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {education.map((edu, idx) => (
            <motion.div 
              key={`${edu.institute}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 group p-6 -m-6 border border-transparent hover:border-gold/30 hover:shadow-glow-gold hover:bg-surface hover:-translate-y-2 transition-all duration-500 rounded-lg"
            >
              <div className="md:col-span-4 flex flex-col">
                <span className="text-xs tracking-[0.2em] uppercase font-sans text-muted mb-4 group-hover:text-sceptre transition-colors">
                  {edu.duration}
                </span>
                <h3 className="text-3xl md:text-4xl font-serif text-navy mb-2 group-hover:text-sceptre transition-colors">
                  {edu.institute}
                </h3>
              </div>
              
              <div className="md:col-span-8 flex flex-col justify-center">
                <div className="h-[1px] bg-navy/20 w-full mb-8 hidden md:block group-hover:bg-gold/30 transition-colors" />
                <h4 className="text-2xl font-serif text-navy mb-4 group-hover:text-sceptre transition-colors">
                  {edu.degree}
                </h4>
                {edu.detail && (
                  <p className="text-sm font-sans text-muted leading-relaxed">
                    &mdash; {edu.detail}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="max-w-7xl mx-auto mb-32 md:mb-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24 pb-8 border-b border-navy/20"
        >
          <h2 className="text-5xl md:text-8xl font-serif font-normal text-navy tracking-tight">
            EXPERIENCE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={`${exp.company}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 group p-6 -m-6 border border-transparent hover:border-gold/30 hover:shadow-glow-gold hover:bg-surface hover:-translate-y-2 transition-all duration-500 rounded-lg"
            >
              <div className="md:col-span-4 flex flex-col">
                <span className="text-xs tracking-[0.2em] uppercase font-sans text-muted mb-4 group-hover:text-sceptre transition-colors">
                  {exp.period}
                </span>
                <h3 className="text-3xl md:text-4xl font-serif text-navy mb-2 group-hover:text-sceptre transition-colors">
                  {exp.company}
                </h3>
                <span className="text-sm font-sans italic text-navy mb-6 md:mb-0">
                  {exp.title} &mdash; {exp.location}
                </span>
              </div>
              
              <div className="md:col-span-8 flex flex-col">
                <div className="h-[1px] bg-navy/20 w-full mb-8 hidden md:block group-hover:bg-gold/30 transition-colors" />
                <ul className="flex flex-col gap-4 mb-8">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm font-sans text-muted leading-relaxed">
                      &mdash; {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((t, i) => (
                    <span 
                      key={t} 
                      className="text-[9px] md:text-[10px] font-mono text-cerulean bg-cerulean/10 border border-cerulean/30 px-3 py-1.5 rounded-full uppercase tracking-wider hover:bg-cerulean hover:text-ivory hover:border-cerulean hover:shadow-glow-cerulean transition-colors duration-300 cursor-default animate-float inline-block"
                      style={{ animationDelay: `${(idx * 0.2) + (i * 0.1)}s` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* JOURNEY / TIMELINE */}
      <div className="max-w-7xl mx-auto mb-32 md:mb-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24 pb-8 border-b border-navy/20"
        >
          <h2 className="text-5xl md:text-8xl font-serif font-normal text-navy tracking-tight">
            JOURNEY
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8 border-l border-navy/20 pl-6 md:pl-10 ml-2 md:ml-4">
          {journey.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-navy/20 group-hover:bg-sceptre group-hover:shadow-glow-sceptre transition-colors shadow-[0_0_0_4px_var(--tw-colors-bg)]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                <span className="text-xs tracking-widest font-mono text-navy/60 w-48 shrink-0 group-hover:text-sceptre transition-colors">
                  {step.when}
                </span>
                <p className="text-sm font-sans text-muted leading-relaxed group-hover:text-navy transition-colors">
                  {step.what}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WHAT'S NEXT */}
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 md:p-24 bg-navy text-bg text-center border border-gold/30 shadow-glow-gold rounded-2xl relative overflow-hidden"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-sans text-bg/50 block mb-8">
            Currently Exploring
          </span>
          <h2 className="text-2xl md:text-5xl font-serif leading-tight max-w-3xl mx-auto md:mb-8">
            Deepening my expertise in <i className="italic text-bg/60 font-light">Agentic AI</i>, advanced <i className="italic text-bg/60 font-light">Hybrid RAG</i> architectures, and building production-ready <i className="italic text-bg/60 font-light">AI applications</i>.
          </h2>
        </motion.div>
      </div>

    </div>
    </section>
  );
}
