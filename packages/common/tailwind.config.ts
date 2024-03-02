import { type Config } from "tailwindcss";
import daisyui from "daisyui";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [daisyui, require("tailwindcss-animate")],
  daisyui: {
    themes: ["light", "dark"],
  },
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
} satisfies Config;

export default config;
