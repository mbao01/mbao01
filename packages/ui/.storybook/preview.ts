import type { Preview } from "@storybook/react";
import "@mbao01/common/styles"; // replace with the name of your tailwind css file

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
      "🌒 Dark": "dark",
      "🌓 System": "system",
    },
    defaultTheme: "🌓 System",
    attributeName: "data-theme",
  }),
];

export default preview;
