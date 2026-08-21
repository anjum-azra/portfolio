import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence, motion } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import CertificationsModal from "./components/CertificationsModal";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isCertOpen, setIsCertOpen] = useState(false);

  // Anti-Copy / Anti-Screenshot Deterrents
  useEffect(() => {
    // Disable Right Click
    const handleContextMenu = (e) => e.preventDefault();
    
    // Disable common screenshot/dev-tools shortcuts
    const handleKeyDown = (e) => {
      // Prevent PrintScreen key
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText(''); // Attempt to clear clipboard
        e.preventDefault();
      }
      
      // Prevent Ctrl+S, Ctrl+P, Ctrl+U (view source), F12 (dev tools), Ctrl+Shift+I/J/C
      if (
        (e.ctrlKey && ['s', 'p', 'u'].includes(e.key.toLowerCase())) ||
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    
    // Add non-selectable styling
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";
    document.body.style.webkitTouchCallout = "none"; // Prevents long-press save image on iOS
    
    // Prevent dragging images
    const handleDragStart = (e) => e.preventDefault();
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
      document.body.style.userSelect = "auto";
      document.body.style.webkitUserSelect = "auto";
      document.body.style.webkitTouchCallout = "default";
    };
  }, []);

  useEffect(() => {
    // Only initialize smooth scrolling when not loading
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <div className="bg-bg text-navy selection:bg-navy selection:text-bg font-sans antialiased">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navigation onOpenCertifications={() => setIsCertOpen(true)} />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Experience />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      <CertificationsModal isOpen={isCertOpen} onClose={() => setIsCertOpen(false)} />
    </div>
  );
}
