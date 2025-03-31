import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ui",
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss", "typescript"],
      output: {
        globals: { react: "React" },
      },
    },
  },
  plugins: [
    dts({
      outDir: "dist/types",
      entryRoot: "src",
      copyDtsFiles: false,
      strictOutput: true,
      insertTypesEntry: true,
      declarationOnly: true,
      exclude: ["**/*.(test|stories).{js,ts,jsx,tsx,mdx}", "node_modules/**"],
    }),
    tailwindcss(),
    react(),
  ],
});
