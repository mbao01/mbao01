import { type ArgTypes } from "@storybook/react";
import { categoricalChartArgs } from "./chartArgs";

export const barChartArgs: ArgTypes = {
  ...categoricalChartArgs,
  barCategoryGap: {
    description:
      "The gap between two bar categories, which can be a percent value or a fixed value.",
    table: {
      type: {
        summary: "Percentage | number",
      },
      defaultValue: {
        summary: "'10%'",
      },
      category: "Bar",
    },
    control: "text",
  },
  barGap: {
    description: "The gap between two bars in the same category.",
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "4",
      },
      category: "Bar",
    },
    control: "number",
  },
  barSize: {
    description: `The width or height of each bar. If the barSize is not specified, the size of the bar
      will be calculated by the barCategoryGap, barGap and the quantity of bar groups.`,
    table: {
      type: {
        summary: "number | Percentage",
      },
      category: "Bar",
    },
    control: "text",
  },
  maxBarSize: {
    description: "The maximum size of bar.",
    table: {
      type: {
        summary: "number",
      },
      category: "Bar",
    },
    control: "number",
  },
  layout: {
    description: "The layout of bar in the chart, usually inherited from parent.",
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
