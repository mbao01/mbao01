import { type ArgTypes } from "@storybook/react-vite";

/**
 * Caveat: If any prop is added here, it would falsely be add to the documentation of the component
 * where this group is used. If the group is to be extended, then only single props should be imported
 * by each component that does not use all of them.
 * */
export const sectorArgs: ArgTypes = {
  cx: {
    description: "The x-coordinate of center.",
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "0",
      },
    },
    control: "number",
  },
  cy: {
    description: "The y-coordinate of center.",
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "0",
      },
    },
    control: "number",
  },
  innerRadius: {
    description: "The inner radius of the sector.",
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "0",
      },
    },
    control: "number",
  },
  outerRadius: {
    description: "The outer radius of the sector.",
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "0",
      },
    },
    control: "number",
  },
  startAngle: {
    description: "The start angle of the sector.",
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "0",
      },
    },
    control: "number",
  },
  endAngle: {
    description: "The end angle of the sector.",
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "0",
      },
    },
    control: "number",
  },
  cornerRadius: {
    description: "The radius of corners.",
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "0",
      },
    },
    control: "number",
  },
  forceCornerRadius: {
    description:
      "Whether or not force to render round corner when the angle of sector is very small",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
    control: "boolean",
  },
};
