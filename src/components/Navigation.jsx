import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "../utils/cn";

export default function Navigation({ onOpenCertifications }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150 && !mobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" },
    { name: "Expertise", href: "#skills" },
    { name: "Interests", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        aria-label="Main Navigation"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300",
          scrolled ? "bg-navy-base shadow-md" : "bg-navy-base"
        )}
      >
        <div className={cn(
          "flex items-center justify-between px-6 md:px-12 transition-all duration-300",
          scrolled ? "py-4" : "py-6 md:py-8"
        )}>
          <a href="#" className="text-xl md:text-2xl font-serif font-bold tracking-wide text-ivory flex items-center gap-2 relative z-50">
            ANJUM AZRA
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-ivory/70 hover:text-gold transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={onOpenCertifications}
                className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-ivory/70 hover:text-gold transition-colors relative group py-2"
              >
                Certifications
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-ivory/70 hover:text-gold transition-colors relative group py-2"
              >
                Resume
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-end w-8 h-8 z-[60] relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className={cn("bg-ivory h-[1px] transition-all duration-300 ease-out", mobileMenuOpen ? "w-6 rotate-45 translate-y-[2px]" : "w-6 mb-1.5")} />
            <span className={cn("bg-ivory h-[1px] transition-all duration-300 ease-out", mobileMenuOpen ? "w-6 -rotate-45" : "w-4")} />
          </button>
        </div>
        
        {/* Thin divider line */}
        <div className={cn("w-full h-[1px] bg-navy-mid/40 transition-opacity duration-300", scrolled ? "opacity-100" : "opacity-0 md:opacity-100")} />
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-navy-base pt-24 px-6 md:hidden flex flex-col h-screen"
          >
            <ul className="flex flex-col gap-6 mt-12">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-serif text-ivory hover:text-gold transition-colors block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCertifications();
                  }}
                  className="text-3xl font-serif text-ivory hover:text-gold transition-colors block text-left w-full"
                >
                  Certifications
                </button>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.1 }}
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl font-serif text-ivory hover:text-gold transition-colors block text-left w-full"
                >
                  Resume
                </a>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
