import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "ARTIFICIAL INTELLIGENCE",
    desc: "Machine learning, deep learning, GenAI, computer vision and intelligent applications."
  },
  {
    num: "02",
    title: "DATA SCIENCE",
    desc: "Data analysis, statistics, EDA, visualization and predictive modeling."
  },
  {
    num: "03",
    title: "AI APPLICATIONS",
    desc: "LLMs, Gemini API, AI agents, document intelligence and intelligent automation."
  },
  {
    num: "04",
    title: "FULL-STACK DEVELOPMENT",
    desc: "Modern frontend and backend applications using React, Django and FastAPI."
  },
  {
    num: "05",
    title: "DATA & DATABASES",
    desc: "MongoDB, PostgreSQL, MySQL, Microsoft SQL Server and data-driven systems."
  },
  {
    num: "06",
    title: "CLOUD & API DEVELOPMENT",
    desc: "REST APIs, backend services and Microsoft Azure."
  }
];

const techStack = [
  {
    category: "LANGUAGES",
    items: ["Python", "Java", "C", "SQL", "JavaScript"]
  },
  {
    category: "FRONTEND",
    items: ["HTML5", "CSS3", "React"]
  },
  {
    category: "BACKEND",
    items: ["Django", "FastAPI", "Flask", "REST APIs"]
  },
  {
    category: "DATABASES",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Microsoft SQL Server", "SQLite"]
  },
  {
    category: "AI & MACHINE LEARNING",
    items: ["Machine Learning", "Deep Learning", "Computer Vision", "Generative AI", "LLMs", "NLP", "AI Agents", "Hybrid RAG", "TensorFlow", "PyTorch", "Scikit-Learn"]
  },
  {
    category: "DATA",
    items: ["NumPy", "Pandas", "Statistics", "EDA", "Data Visualization", "Power BI", "Tableau"]
  },
  {
    category: "CLOUD & TOOLS",
    items: ["Microsoft Azure", "Git", "GitHub", "Docker", "Playwright"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        
        {/* WHAT I DO */}
        <div className="mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 md:mb-16 pb-8 border-b border-navy/20"
          >
            <h2 className="text-5xl md:text-8xl font-serif font-normal text-navy tracking-tight">
              WHAT I DO
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-16">
            {services.map((service, idx) => (
              <motion.div 
                key={service.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
                className="flex flex-col group p-6 -m-6 border border-transparent hover:border-maroon/20 hover:bg-surface hover:-translate-y-1 transition-all duration-300 rounded-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-sans font-medium text-muted group-hover:text-maroon transition-colors">{service.num}</span>
                  <div className="h-[1px] bg-navy/20 flex-grow group-hover:bg-maroon/30 transition-colors" />
                </div>
                <h3 className="text-xl font-serif text-navy mb-3 group-hover:text-maroon transition-colors">{service.title}</h3>
                <p className="text-sm font-sans text-muted leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TECHNOLOGY STACK */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 md:mb-16 pb-8 border-b border-navy/20"
          >
            <h2 className="text-5xl md:text-8xl font-serif font-normal text-navy tracking-tight">
              TECHNOLOGY
            </h2>
          </motion.div>

          <div className="flex flex-col gap-12 md:gap-16">
            {techStack.map((category, idx) => (
              <motion.div 
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 border-b border-navy/10 pb-8 last:border-0 group"
              >
                <div className="md:col-span-1">
                  <h3 className="text-xs tracking-widest uppercase font-sans text-muted group-hover:text-maroon transition-colors">{category.category}</h3>
                </div>
                <div className="md:col-span-3 flex flex-wrap gap-x-4 gap-y-3 md:gap-x-6 md:gap-y-4">
                  {category.items.map(tech => (
                    <span key={tech} className="text-[11px] font-mono text-navy bg-surface px-3 py-1.5 rounded uppercase tracking-wide hover:bg-maroon hover:text-bg transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
