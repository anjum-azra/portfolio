import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "../data";

export default function CertificationsModal({ isOpen, onClose }) {
  const [selectedCert, setSelectedCert] = useState(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSelectedCert(null);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9990] bg-bg/95 backdrop-blur-md overflow-y-auto"
          >
            {/* Close button */}
            <button 
              onClick={onClose}
              className="fixed top-6 right-6 md:top-12 md:right-12 z-50 text-xs tracking-widest uppercase font-sans text-navy flex items-center gap-2 group p-2"
            >
              <span>Close</span>
              <div className="w-8 h-[1px] bg-navy group-hover:w-4 transition-all" />
            </button>

            <div className="max-w-7xl mx-auto py-32 px-6 md:px-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-8xl font-serif font-normal text-navy tracking-tight mb-20 border-b border-navy/20 pb-8"
              >
                CERTIFICATIONS
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (idx % 3) * 0.1 }}
                    onClick={() => cert.image ? setSelectedCert(cert) : null}
                    className={`p-8 border border-navy/20 bg-surface flex flex-col h-full transition-colors duration-500 ${cert.image ? 'cursor-pointer group hover:bg-navy' : 'opacity-80'}`}
                  >
                    <h3 className={`text-lg font-serif transition-colors duration-500 mb-8 flex-grow ${cert.image ? 'text-navy group-hover:text-bg' : 'text-navy'}`}>
                      {cert.title}
                    </h3>
                    <div className={`flex items-center justify-between mt-auto pt-4 border-t transition-colors duration-500 ${cert.image ? 'border-navy/20 group-hover:border-bg/20' : 'border-navy/20'}`}>
                      <span className={`text-[10px] font-sans uppercase tracking-widest ${cert.image ? 'text-muted group-hover:text-bg/70' : 'text-muted'}`}>
                        {cert.issuer}
                      </span>
                      {cert.image && (
                        <span className="text-[10px] font-sans text-navy group-hover:text-bg uppercase tracking-widest flex items-center gap-1">
                          View &rarr;
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox for selected certification */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-navy/90 backdrop-blur-sm flex items-center justify-center p-6 md:p-12 cursor-pointer"
            onClick={() => setSelectedCert(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-12 md:right-12 z-50 text-xs tracking-widest uppercase font-sans text-bg flex items-center gap-2 group p-2"
              onClick={() => setSelectedCert(null)}
            >
              <span>Close Image</span>
              <div className="w-8 h-[1px] bg-bg group-hover:w-4 transition-all" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={`/${selectedCert.image}`}
              alt={selectedCert.title}
              className="max-w-full max-h-full object-contain shadow-2xl cursor-default border border-bg/20"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking image directly
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
