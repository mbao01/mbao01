import { type ArgTypes } from "@storybook/react-vite";

export const activeShapeArgs: ArgTypes = {
  activeIndex: {
    description:
      "The index of the individual shapes of the graph element to be marked as active, and render props.activeShape",
    table: {
      category: "General",
    },
    control: "number",
  },
  shape: {
    description: "The customized shape to be rendered.",
    table: {
      type: {
        summary: "Function | boolean | ReactElement | object",
      },
      defaultValue: undefined,
      category: "General",
    },
    control: "object",
  },
  activeShape: {
    description: "The customized shape to be rendered if activeIndex or activeTooltipIndex match",
    table: {
      type: {
        summary: "Function | boolean | ReactElement | object",
      },
      defaultValue: undefined,
      category: "General",
    },
    control: "object",
  },
};
