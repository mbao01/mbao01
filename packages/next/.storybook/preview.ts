import type { Preview } from "@storybook/nextjs-vite";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import "@mbao01/common/styles"; // replace with the name of your tailwind css file
import "./theme.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },

    docs: {
      codePanel: true,
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      "🌔 Light": "light",
      "🌒 Dark": "dark",
      "🌓 System": "system",
    },
    defaultTheme: "🌓 System",
    attributeName: "data-theme",
    parentSelector: "body",
  }),
];

export default preview;
