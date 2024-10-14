import { type ArgTypes } from "@storybook/react";

export const textArgs: ArgTypes = {
  content: {
    description: "The content of text.",
  },
  lineHeight: {
    description: "The height of each line of text in pixels.",
    table: {
      type: {
        summary: "string",
      },
    },
    control: "text",
  },
  breakAll: {
    description: "Break words if the text exceeds the width.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "true",
      },
    },
    control: "boolean",
  },
  maxLines: {
    description: "The max number of lines for text wrapping.",
    table: {
      type: {
        summary: "number",
      },
    },
    control: "number",
  },
  scaleToFit: {
    description: "Scale the text to fit the width or not.",
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

  angle: {
    description: "The rotate angle of Text. (Optional)",
    table: {
      type: {
        summary: "number",
      },
    },
    control: "number",
  },

  width: {
    description:
      "The width of Text. When the width is specified to be a number," +
      " the text will warp auto by calculating the width of text. (Optional)",
    table: {
      type: {
        summary: "number",
      },
    },
    control: "number",
  },

  textAnchor: {
    table: {
      type: {
        summary: "'start' | 'middle' | 'end' | 'inherit'",
      },
      defaultValue: {
        summary: "'start'",
      },
    },
    control: "radio",
    options: ["start", "middle", "end", "inherit"],
  },

  verticalAnchor: {
    table: {
      type: {
        summary: "'start' | 'middle' | 'end'",
      },
      defaultValue: {
        summary: "'end'",
      },
    },
    control: "radio",
    options: ["start", "middle", "end"],
  },
};
