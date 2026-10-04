import React from "react";
import { motion } from "framer-motion";
import { personalProfile } from "../data";

export default function Footer() {
  return (
    <>
      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-surface text-navy border-t border-navy/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
              LET'S CREATE<br/>SOMETHING MEANINGFUL.
            </h2>
            
            <p className="text-sm font-sans text-muted leading-relaxed mb-12 max-w-md">
              I'm open to internships, collaborations, and job opportunities. If you have an interesting technical project or just want to connect, feel free to reach out.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-muted">Location</span>
                <span className="text-sm font-sans text-navy">{personalProfile.location}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-muted">WhatsApp</span>
                <a href="https://wa.me/916281069504" target="_blank" rel="noreferrer" className="text-sm font-sans text-navy hover:text-sceptre transition-colors">+91 6281069504</a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-muted">Email</span>
                <a href={`mailto:${personalProfile.email}`} className="text-sm font-sans text-navy hover:text-sceptre transition-colors">{personalProfile.email}</a>
              </div>
              
              <div className="flex items-center gap-6 mt-4">
                <a href={personalProfile.github} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest font-sans text-navy border-b border-navy hover:text-sceptre hover:border-sceptre transition-all pb-1">
                  GitHub
                </a>
                <a href={personalProfile.linkedin} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest font-sans text-navy border-b border-navy hover:text-sceptre hover:border-sceptre transition-all pb-1">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col w-full max-w-md md:ml-auto"
          >
            <form className="flex flex-col gap-8" action="https://formspree.io/f/xppanqla" method="POST">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-muted" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="bg-transparent border-b border-navy/20 focus:border-gold outline-none py-2 text-sm font-sans transition-colors rounded-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-muted" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="bg-transparent border-b border-navy/20 focus:border-gold outline-none py-2 text-sm font-sans transition-colors rounded-none"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-muted" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows="4"
                  className="bg-transparent border-b border-navy/20 focus:border-gold outline-none py-2 text-sm font-sans transition-colors resize-none rounded-none"
                  placeholder="Hello Anjum..."
                />
              </div>
              <button 
                type="submit"
                className="inline-flex items-center justify-center px-8 py-4 bg-java text-ivory text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold hover:text-navy hover:shadow-glow-gold transition-colors w-full mt-4"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* FOOTER MINIMAL */}
      <footer className="py-8 px-6 md:px-12 bg-java text-ivory border-t border-gold/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-serif mb-1">ANJUM AZRA</h3>
            <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-ivory/80">
              AI & Data Science Developer
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 my-4 md:my-0">
            {["About", "Projects", "Experience", "Skills", "Contact"].map(item => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] uppercase tracking-widest font-sans text-ivory/90 hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <p className="text-[10px] font-sans text-ivory/70 uppercase tracking-widest text-center">
            &copy; {new Date().getFullYear()} Pathan Anjum Azra. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
