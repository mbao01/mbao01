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
      name: "ui",
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss", "typescript"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [dts({ insertTypesEntry: true }), react()],
});
