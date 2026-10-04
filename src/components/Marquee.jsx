import React from 'react';

export default function Marquee() {
  const text = "ARTIFICIAL INTELLIGENCE ✦ DATA SCIENCE ✦ GENERATIVE AI ✦ FULL-STACK DEVELOPMENT ✦ ";
  
  return (
    <div className="w-full bg-navy py-6 border-y border-gold/30 overflow-hidden flex whitespace-nowrap relative">
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-navy z-10 pointer-events-none w-full" />
      <div className="animate-marquee flex items-center">
        {/* We repeat the text to ensure it covers 200% width so that -50% translation is seamless */}
        <span className="text-ivory text-xl md:text-3xl font-serif font-light tracking-[0.2em] px-4">
          {text}{text}{text}{text}
        </span>
        <span className="text-ivory text-xl md:text-3xl font-serif font-light tracking-[0.2em] px-4">
          {text}{text}{text}{text}
        </span>
      </div>
    </div>
  );
}
