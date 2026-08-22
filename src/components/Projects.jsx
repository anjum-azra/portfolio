import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data";
import { cn } from "../utils/cn";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 bg-bg">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 pb-8 border-b border-navy/20"
        >
          <h2 className="text-5xl md:text-8xl font-serif font-normal text-navy tracking-tight">
            SELECTED WORKS
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24">
          {projects.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            // Curated editorial images for each project
            const projectImages = {
              "tkr-microgreens": "/tkr_microgreens_pic.jpg",
              "ai-accessibility-auditor": "/ai_auditor_pic.png",
              "smart-governance-assistant": "/smart_governance_pic.jpg",
              "prompt-injector": "/prompt_injector_pic.jpg"
            };

            const imageUrl = projectImages[project.id] || "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop";

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.15 }}
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-10 md:gap-16 group p-6 border border-transparent hover:border-maroon/20 hover:bg-surface/50 hover:-translate-y-2 transition-all duration-500 rounded-lg",
                  isReversed ? "lg:flex-row-reverse" : ""
                )}
              >
                {/* Image Area */}
                <div className="w-full lg:w-1/2 aspect-[4/3] bg-surface relative overflow-hidden shrink-0 rounded-md">
                  <img 
                    src={imageUrl} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 border border-navy/10 pointer-events-none z-10 rounded-md" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-navy/5 transition-opacity duration-700 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="flex flex-col w-full lg:w-1/2 py-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] uppercase tracking-widest text-muted shrink-0">
                      0{idx + 1}
                    </span>
                    <div className="h-[1px] bg-navy/20 flex-grow" />
                    <span className="text-[10px] uppercase tracking-widest text-muted shrink-0">
                      {project.role}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif text-navy leading-tight mb-4 group-hover:text-maroon transition-colors duration-300">
                    {project.name}
                  </h3>

                  <p className="text-sm font-sans text-muted leading-relaxed mb-8">
                    {project.desc}
                  </p>

                  <div className="mt-auto">
                    {/* Tech Stack Text */}
                    <div className="flex flex-wrap gap-3 items-center mb-8">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[9px] md:text-[10px] font-mono text-navy bg-transparent border border-navy/20 px-3 py-1.5 rounded-full uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-8 pt-4 border-t border-subtle">
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="text-xs font-semibold uppercase tracking-widest text-navy hover:text-maroon transition-colors flex items-center gap-2">
                          View Project &rarr;
                        </a>
                      )}
                      {project.repo && (
                        <a href={project.repo} target="_blank" rel="noreferrer" className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-maroon transition-colors">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
