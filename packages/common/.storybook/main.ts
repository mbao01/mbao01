import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-coverage",
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/addon-themes",
    "@storybook/addon-docs"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: "./vite-storybook.config.ts",
      },
    },
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
    // Provide your own options if necessary.
    // See https://storybook.js.org/docs/configure/typescript for more information.
    reactDocgenTypescriptOptions: {
      shouldRemoveUndefinedFromOptional: true,
    },
  }
};
export default config;
