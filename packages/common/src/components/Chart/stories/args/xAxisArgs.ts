import { type ArgTypes } from "@storybook/react-vite";
import { sharedAxisArgs } from "./sharedAxisArgs";

export const xAxisArgs: ArgTypes = {
  ...sharedAxisArgs,
  hide: {
    description: "If set true, the axis do not display in the chart.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
      category: "General",
    },
    control: "boolean",
  },
  includeHidden: {
    description: "Consider hidden graphical elements when computing domain.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
      category: "Domain",
    },
    control: "boolean",
  },
  dataKey: {
    description: "The key of data displayed in the axis.",
    table: {
      type: {
        summary: "string | number | Function",
      },
      category: "General",
    },
    control: "text",
  },
  xAxisId: {
    description: "The unique id of x-axis.",
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
  height: {
    description: "The height of axis element in pixels.",
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "30",
      },
      category: "Layout",
    },
    control: "number",
  },
  orientation: {
    description: "The orientation of axis",
    table: {
      type: {
        summary: "'bottom' , 'top'",
      },
      defaultValue: {
        summary: "'bottom'",
      },
      category: "Layout",
    },
    control: "inline-radio",
    options: ["top", "bottom"],
  },
  type: {
    description: "The type of axis.",
    table: {
      type: {
        summary: "'number' | 'category'",
      },
      defaultValue: {
        summary: "'category'",
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
        summary: 'Object | "gap" | "no-gap"',
      },
      defaultValue: {
        summary: "{ left: 0, right: 0 }",
      },
      category: "Ticks",
    },
    control: "object",
  },
};
