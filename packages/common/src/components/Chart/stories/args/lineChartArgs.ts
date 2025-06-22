import { type ArgTypes } from "@storybook/react-vite";
import { categoricalChartArgs } from "./chartArgs";

export const lineChartArgs: ArgTypes = {
  ...categoricalChartArgs,
  layout: {
    description: "The layout of line in the chart, usually inherited from parent.",
    table: {
      type: {
        summary: "'horizontal' | 'vertical'",
      },
      category: "Bar",
    },
    control: "radio",
    options: ["horizontal", "vertical"],
  },
};
