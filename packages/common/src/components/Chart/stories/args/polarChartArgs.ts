import { type ArgTypes } from "@storybook/react-vite";
import { categoricalChartArgs } from "./chartArgs";

export const polarChartArgs: ArgTypes = {
  ...categoricalChartArgs,
  cx: {
    description: "The x-coordinate of the center of the circle.",
    table: {
      type: {
        summary: "number | string",
      },
      defaultValue: {
        summary: "50%",
      },
      category: "Polar",
    },
    control: "text",
  },
  cy: {
    description: "The y-coordinate of the center of the circle.",
    table: {
      type: {
        summary: "number | string",
      },
      defaultValue: {
        summary: "50%",
      },
      category: "Polar",
    },
    control: "text",
  },
  innerRadius: {
    description: "The inner radius of polar chart.",

    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "0",
      },
      category: "Polar",
    },
    control: "number",
  },
  outerRadius: {
    description: "The outer radius of polar chart.",
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "80%",
      },
      category: "Polar",
    },
    control: "number",
  },
  startAngle: {
    description: "The start angle of polar chart.",
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "90",
      },
      category: "Polar",
    },
    control: "number",
  },
  endAngle: {
    description: "The end angle of polar chart.",
    defaultValue: -270,
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "-270",
      },
      category: "Polar",
    },
    control: "number",
  },
};
