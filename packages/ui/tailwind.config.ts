import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
export default config;
