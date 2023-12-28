import type { Preview } from "@storybook/react";
import "../src/tailwind.css"; // replace with the name of your tailwind css file

import { withThemeByDataAttribute } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      "🌔 Light": "light",
      "🌘 Dark": "dark",
    },
    defaultTheme: "🌔 Light",
    attributeName: "data-theme",
  }),
];

export default preview;
