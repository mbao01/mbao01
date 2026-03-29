import type { Preview } from "@storybook/react-vite";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import "../src/stylesheets/index.css"; // replace with the name of your tailwind css file
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
