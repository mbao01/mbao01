import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "common",
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss", "typescript", /\.css$/],
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
    react(),
  ],
});
