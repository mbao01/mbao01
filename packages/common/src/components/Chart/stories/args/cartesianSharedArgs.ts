import { type ArgTypes } from "@storybook/react-vite";

export const dataKey: ArgTypes[0] = {
  description: `The key or getter of a group of data.
      It could be an accessor function such as (row)=>value`,
  table: {
    type: { summary: "string | number | Function" },
    category: "General",
  },
  control: "text",
};

export const nameKey: ArgTypes[0] = {
  description: "The key of each sector's name.",
  table: {
    type: { summary: "string" },
    category: "General",
  },
  control: "text",
};

export const activeShape: ArgTypes[0] = {
  description: "",
  table: {
    type: {
      summary: "Object | ReactElement | Function | boolean",
    },
    category: "General",
  },
  control: "object",
};

export const trapezoids: ArgTypes[0] = {
  description: "The coordinates of all trapezoids in the chart, usually calculated internally",
  table: {
    type: {
      summary: "Array",
      detail: "[{x: 12, y: 12, upperWidth: 240, lowerWidth: 22, height: 80}]",
    },
  },
  control: "object",
};

export const xAxisId: ArgTypes[0] = {
  description: "The id of x-axis which is corresponding to the data.",
  table: {
    type: {
      summary: "string | number",
    },
    category: "General",
  },
  control: "text",
};
export const yAxisId: ArgTypes[0] = {
  description: "The id of y-axis which is corresponding to the data.",
  table: {
    type: {
      summary: "string | number",
    },
    category: "General",
  },
  control: "text",
};
export const zAxisId: ArgTypes[0] = {
  description: "The id of z-axis which is corresponding to the data.",
  table: {
    type: {
      summary: "string | number",
    },
    category: "General",
  },
  control: "text",
};

export const cartesianSharedArgs: ArgTypes = {
  dataKey,
  id: {
    description: `The unique id of this component, which will be used to generate unique clip path id internally.
      This props is suggested to be set in SSR.`,
    type: {
      name: "string",
    },
    table: {
      category: "General",
    },
    control: "text",
  },
  name: {
    description: `The name of data. This option will be used in tooltip and legend to represent a line.
    If no value was set to this option, the value of dataKey will be used alternatively.`,
    table: {
      type: {
        summary: "string | number",
      },
      category: "General",
    },
    control: "text",
  },
  unit: {
    description: "The unit of data. This option will be used in tooltip.",
    table: {
      type: {
        summary: "string | number",
      },
      category: "General",
    },
    control: "text",
  },
  xAxisId,
  yAxisId,
};

export const data: ArgTypes[0] = {
  description: `The source data, in which each element is an object.
    This can be defined either on the chart element (ScatterChart, LineChart, etc) or on the graphical item (Scatter, Line).
    The object shape is flexible, with no pre-defined properties;
    The dataKey props then define which properties from this object render where.`,
  table: {
    category: "General",
    type: {
      summary: "array of objects",
    },
  },
};

export const layout: ArgTypes[0] = {
  description: "The layout of line, usually inherited from parent.",
  table: {
    type: {
      summary: "'horizontal' | 'vertical'",
    },
    category: "Internal",
  },
  control: "radio",
  options: ["horizontal", "vertical"],
};
