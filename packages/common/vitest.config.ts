import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["vitest-setup.ts"],
    coverage: {
      all: false,
      enabled: true,
      provider: "v8",
      reporter: ["text", "html", "clover", "json"],
      reportsDirectory: "coverage",
      thresholds: {
        autoUpdate: true,
      },
      exclude: ["**/*.stories.*"],
    },
  },
});
