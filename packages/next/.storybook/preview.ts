import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "./tailwind.css"; // replace with the name of your tailwind css file

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
