import type { Config } from "tailwindcss";
import plugin from "@mbao01/common/plugin";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/@mbao01/common/src/**/*",
  ],
  plugins: [plugin],
};
export default config;
