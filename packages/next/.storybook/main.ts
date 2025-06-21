import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-coverage",
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/addon-themes",
    "@storybook/addon-docs",
    "@storybook/addon-docs"
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  }
};
export default config;
