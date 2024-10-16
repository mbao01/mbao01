import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-coverage",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
    "@storybook/addon-themes",
    "@storybook/addon-viewport",
    "storybook-addon-remix-react-router",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: "./vite-storybook.config.ts",
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
