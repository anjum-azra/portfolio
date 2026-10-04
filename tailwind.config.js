/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFDF8",
        bluegray: "#B0BBD1",
        navy: {
          DEFAULT: "#0B1021", // Deep Royal Navy
          primary: "#141C33",
          base: "#060A14",
          mid: "#1E2A4F",
          muted: "#4A5568"
        },
        gold: {
          DEFAULT: "#D4AF37", // Soft Gold
          bright: "#F3E5AB"
        },
        sceptre: {
          DEFAULT: "#8A1538", // Sceptre Red
        },
        java: {
          DEFAULT: "#4A3020", // Java Brown
        },
        cerulean: {
          DEFAULT: "#007BA7", // Cerulean Blue
        },
        bg: { DEFAULT: "#FDFBF7" }, // Warm Beige
        surface: { DEFAULT: "#F0EAD6" }, // Soft Beige
        maroon: { DEFAULT: "#8A1538" }, // Mapped to Sceptre Red for backwards compatibility
        muted: { DEFAULT: "#6C665F" },
        subtle: { DEFAULT: "#E8E2D2" }
      },
      boxShadow: {
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.4)',
        'glow-sceptre': '0 0 20px rgba(138, 21, 56, 0.4)',
        'glow-cerulean': '0 0 20px rgba(0, 123, 167, 0.4)',
      },
      dropShadow: {
        'glow-gold': '0 0 10px rgba(212, 175, 55, 0.6)',
        'glow-sceptre': '0 0 10px rgba(138, 21, 56, 0.6)',
        'glow-cerulean': '0 0 10px rgba(0, 123, 167, 0.6)',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Playfair Display", "serif"], // Mapping display to serif so existing classes just work
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "reveal": "reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards",
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        reveal: {
          "0%": { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
          "100%": { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        }
      }
    },
  },
  plugins: [],
}
