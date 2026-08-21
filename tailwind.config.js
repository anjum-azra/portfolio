/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#F4F1EA", // Primary Background
        },
        surface: {
          DEFAULT: "#EBE6DA", // Secondary Background / Cards
        },
        navy: {
          DEFAULT: "#1A1A2E", // Primary Text
        },
        maroon: {
          DEFAULT: "#8B2942", // Accent
        },
        muted: {
          DEFAULT: "#5A5A6E", // Secondary Text
        },
        subtle: {
          DEFAULT: "#D8D2C4", // Borders
        }
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
