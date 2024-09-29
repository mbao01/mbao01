import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["vitest-setup.ts"],
    coverage: {
      all: false,
      enabled: true,
      ignoreEmptyLines: true,
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
