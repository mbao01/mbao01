import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "node_modules/@mbao01/common/src/**/*"],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [...require("@mbao01/common/plugin")],
};
export default config;
