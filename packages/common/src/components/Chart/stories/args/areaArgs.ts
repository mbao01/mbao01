import { type Args } from "@storybook/react-vite";
import { lineArgs } from "./lineArgs";

export const areaArgs: Args = {
  ...lineArgs,
  fillOpacity: {
    description: "The opacity of the fill.",
    table: {
      type: {
        summary: "number",
      },
      category: "Style",
    },
    control: "number",
  },
};
