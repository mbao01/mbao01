import { type ArgTypes } from "@storybook/react-vite";
import { generalStyleArgs, hide, labelDescription, labelSummary } from "./stylesArgs";
import { animationArgs } from "./animationArgs";
import { dataKey, zAxisId } from "./cartesianSharedArgs";

export const scatterArgs: ArgTypes = {
  ...generalStyleArgs,
  ...animationArgs,
  dataKey,
  zAxisId,
  hide,
  name: {
    description: `The name of data. This option will be used in tooltip and legend to represent a scatter.
    If no value was set to this option, the value of dataKey will be used alternatively.`,
    table: {
      type: {
        summary: "string | number",
      },
      category: "General",
    },
    control: "text",
  },
  shape: {
    description:
      "If a string set, specified symbol will be used to show scatter item. If ReactElement, the element will be cloned to render scatter item. If a function, it will be called to render scatter item.",
    table: {
      type: {
        summary: "'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | ReactElement | Function",
      },
      defaultValue: {
        summary: "'circle'",
      },
      category: "Style",
    },
    control: "select",
    options: ["circle", "cross", "diamond", "square", "star", "triangle", "wye"],
  },
  line: {
    description:
      "If false set, line will not be drawn. If true set, line will be drawn which have the props calculated internally. If object set, line will be drawn which have the props merged by the internal calculated props and the option.",
    table: {
      type: {
        summary: "boolean | Object | ReactElement | Function",
      },
      defaultValue: {
        summary: "false",
      },
      category: "Style",
    },
    control: "boolean",
  },
  lineType: {
    description: "The type of line in the scatter chart, 'joint' connects adjacent points, 'fitting' uses a fitting line.",
    table: {
      type: {
        summary: "'joint' | 'fitting'",
      },
      defaultValue: {
        summary: "'joint'",
      },
      category: "Style",
    },
    control: "radio",
    options: ["joint", "fitting"],
  },
  label: {
    description: labelDescription,
    table: {
      type: {
        summary: labelSummary,
      },
      defaultValue: {
        summary: "false",
      },
      category: "Style",
    },
    control: "boolean",
  },
};