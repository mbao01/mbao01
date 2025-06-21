import { type ArgTypes } from "@storybook/react-vite";
import { categoricalChartArgs } from "./chartArgs";

export const radarChartArgs: ArgTypes = {
  ...categoricalChartArgs,
  cx: {
    description: "The x-coordinate of the center of the circle.",
    defaultValue: "50%",
    table: {
      type: {
        summary: "number | string",
      },
      category: "Polar",
    },
  },
  cy: {
    description: "The y-coordinate of the center of the circle.",
    defaultValue: "50%",
    table: {
      type: {
        summary: "number | string",
      },
      category: "Polar",
    },
  },
};
