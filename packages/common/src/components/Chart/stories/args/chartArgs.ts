import { ArgTypes } from "@storybook/react";
import { onClick, onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseUp } from "./events";

export const data: ArgTypes[0] = {
  description: "The source data, in which each element is an object.",
  table: {
    type: {
      summary: "Array",
    },
    category: "General",
  },
  control: "object",
};

export const chartSizeArgs: ArgTypes = {
  height: {
    description: "The height of chart container.",
    table: {
      type: {
        summary: "number",
      },
      category: "General",
    },
    control: "number",
  },
  width: {
    description: "The width of chart container.",
    table: {
      type: {
        summary: "number",
      },
      category: "General",
    },
    control: "number",
  },
};

export const margin: ArgTypes[0] = {
  description: "The sizes of whitespace around the container.",
  table: {
    type: {
      summary: "object",
    },
    defaultValue: {
      summary: "{ top: 5, right: 5, bottom: 5, left: 5 }",
    },
    category: "General",
  },
  control: "object",
};

export const dataKey: ArgTypes[0] = {
  description: "The key or getter of a group of data which should be unique in a chart.",
  table: {
    type: {
      summary: "string | number | Function",
    },
    category: "General",
  },
  control: "text",
};

// These props are shared between the following charts:
// - AreaChart
// - BarChart
// - ComposedChart
// - LineChart
// - PieChart
// - RadarChart
// - RadialBarChart
// - ScatterChart
// - FunnelChart
export const categoricalChartArgs: ArgTypes = {
  ...chartSizeArgs,
  dataKey: {
    description: `Can be used to mirror dataKey used on children components, using it as this level will force
the chart to animate between two states even though the data array stays the same. Useful to animate when
toggling between multiple dataKey.`,
    table: {
      type: {
        summary: "string | number | Function | undefined",
      },
      category: "General",
    },
    control: "text",
  },
  data,
  margin,
  accessibilityLayer: {
    description: "Turn on accessibility support for keyboard-only and screen reader users.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "true",
      },
      category: "General",
    },
    control: "boolean",
  },
  role: {
    description:
      "The ARIA role for the chart, which provides semantic information for screen reader users.",
    table: {
      type: {
        summary: "string | undefined",
      },
      defaultValue: undefined,
      category: "General",
    },
    control: "text",
  },
  tabIndex: {
    description: "If and where the chart should appear in the tab order",
    table: {
      type: {
        summary: "number | undefined",
      },
      defaultValue: undefined,
      category: "General",
    },
    control: "number",
  },
  style: {
    description: "The style of chart.",
    table: {
      type: {
        summary: "object",
      },
      category: "General",
    },
    control: "object",
  },
  desc: {
    description: "The description of chart.",
    table: {
      type: {
        summary: "string",
      },
      category: "General",
    },
    control: "text",
  },
  className: {
    table: {
      category: "Internal",
    },
    control: "text",
  },
  defaultShowTooltip: {
    description: "If true set, the tooltip will be displayed when the chart is rendered.",
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
  id: {
    description: "The unique id of chart.",
    table: {
      type: {
        summary: "string",
      },
      category: "General",
    },
    control: "text",
  },
  onClick,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onMouseUp,
  reverseStackOrder: {
    description: `If \`false\`, stacked items will be rendered left to right. If \`true\`, stacked items
      will be rendered right to left. (Render direction affects SVG layering, not x position.)`,
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
  syncId: {
    description: `If any two categorical charts(LineChart, AreaChart, BarChart, ComposedChart) have the same syncId,
      these two charts can sync the position tooltip, and the startIndex, endIndex of Brush.`,
    table: {
      type: {
        summary: "string",
      },
      category: "General",
    },
    control: "text",
  },
  syncMethod: {
    description: `When syncId is provided, allows customization of how the charts will synchronize tooltips and
    brushes. Using 'index' (default setting), other charts will reuse current datum's index within the data array.
    In cases where data does not have the same length, this might yield unexpected results. In that case use 'value'
    which will try to match other charts values, or a fully custom function which will receive tick, data as argument
    and should return an index.`,
    table: {
      type: {
        summary: "'index' | 'value' | Function",
      },
      defaultValue: {
        summary: "'index'",
      },
      category: "General",
    },
    control: "inline-radio",
    options: ["index", "value"],
  },
  throttleDelay: {
    description: `The delay of throttle for mouse events, which can be used to avoid
      the performance problem when the chart is rendered in a heavy environment.`,
    table: {
      type: {
        summary: "number",
      },
      category: "General",
    },
    control: "number",
  },
  title: {
    description: "The title of chart.",
    table: {
      type: {
        summary: "string",
      },
      category: "General",
    },
    control: "text",
  },
};
