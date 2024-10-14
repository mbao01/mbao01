import { type ArgTypes } from "@storybook/react";

export const r: ArgTypes[0] = {
  description: "The radius of the dot.",
  table: {
    type: {
      summary: "number",
    },
    defaultValue: {
      summary: "10",
    },
    category: "General",
  },
  control: "number",
};

export const cx: ArgTypes[0] = {
  description: "The x-coordinate of the dots center.",
  table: {
    type: {
      summary: "number",
    },
    category: "General",
  },
  control: "number",
};

export const cy: ArgTypes[0] = {
  description: "The y-coordinate of the dots center.",
  table: {
    type: { summary: "number" },
    category: "General",
  },
  control: "number",
};

/**
 * Caveat: If any prop is added here, it would falsely be add to the documentation of the component where this group
 * is used. If the group is to be extended, then only single props should be imported by each component that does not
 * use all of them.
 * */
export const DotProps: ArgTypes = {
  r,
  cx,
  cy,
};
