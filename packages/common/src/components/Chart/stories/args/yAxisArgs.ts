import { type ArgTypes } from "@storybook/react";
import { sharedAxisArgs } from "./sharedAxisArgs";

export const yAxisArgs: ArgTypes = {
  ...sharedAxisArgs,
  yAxisId: {
    description: "The unique id of y-axis.",
    table: {
      type: {
        summary: "string | number",
      },
      defaultValue: {
        summary: "'0'",
      },
      category: "General",
    },
    control: "text",
  },
  width: {
    description: "The width of axis element in pixels.",
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "60",
      },
      category: "Layout",
    },
    control: "number",
  },
  orientation: {
    description: "The orientation of axis",
    table: {
      type: {
        summary: "'left' , 'right'",
      },
      defaultValue: {
        summary: "'left'",
      },
      category: "Layout",
    },
    control: "inline-radio",
    options: ["left", "right"],
  },
  type: {
    description: "The type of axis.",
    table: {
      type: {
        summary: "'number' | 'category'",
      },
      defaultValue: {
        summary: "'number'",
      },
      category: "General",
    },
    control: "inline-radio",
    options: ["number", "category"],
  },
  padding: {
    description: "Specify the padding of x-axis.",
    table: {
      type: {
        summary: "{ top: number, bottom: number }",
      },
      defaultValue: {
        summary: "{ top: 0, bottom: 0 }",
      },
      category: "Ticks",
    },
    control: "object",
  },
};
