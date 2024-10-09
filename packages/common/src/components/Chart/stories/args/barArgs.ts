import { ArgTypes } from "@storybook/react";
import { animationArgs } from "./animationArgs";
import { cartesianSharedArgs, data } from "./cartesianSharedArgs";
import { legendType } from "./legendArgs";

/**
 * MultiSelect Docs: {@link: https://shadcn-extension.vercel.app/docs/multi-select}
 */
export const barArgs: ArgTypes = {
  ...cartesianSharedArgs,
  ...animationArgs,
  data,
  legendType,
  layout: {
    description: "The layout of bar in the chart, usually inherited from parent.",
    table: {
      type: {
        summary: "'horizontal' | 'vertical'",
      },
      category: "Bar",
    },
    control: "radio",
    options: ["horizontal", "vertical"],
  },
  label: {
    description:
      "If false set, labels will not be drawn. If true set, labels will be drawn which have the props calculated internally. If object set, labels will be drawn which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom label element. If set a function, the function will be called to render customized label.",
    table: {
      type: {
        summary: "boolean | Object | ReactElement | Function",
      },
      category: "Bar",
    },
    control: "object",
  },
  barSize: {
    description:
      "The width or height of each bar. If the barSize is not specified, the size of bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.",
    table: {
      type: {
        summary: "number | Percentage",
      },
      category: "Bar",
    },
    control: "text",
  },
  maxBarSize: {
    description:
      "The maximum width of bar in a horizontal BarChart, or maximum height in a vertical BarChart.",
    table: {
      type: {
        summary: "number",
      },
      category: "Bar",
    },
    control: "number",
  },
  minPointSize: {
    description:
      "The minimal height of a bar in a horizontal BarChart, or the minimal width of a bar in a vertical BarChart.\n            By default, 0 values are not shown. To visualize a 0 (or close to zero) point, set the minimal point size to a pixel\n            value like 3. In stacked bar charts, minPointSize might not be respected for tightly packed values. So we strongly recommend not using this props in stacked BarChart. You may provide a function to conditionally change this prop based on Bar value.",
    table: {
      type: {
        summary: "number | Function",
      },
      category: "Bar",
    },
    control: "number",
  },
  background: {
    description:
      "If false set, background of bars will not be drawn. If true set, background of bars will be drawn which have the props calculated internally. If object set, background of bars will be drawn which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom background element. If set a function, the function will be called to render customized background.",
    table: {
      type: {
        summary: "boolean | Object | ReactElement | Function",
      },
      category: "Bar",
    },
    control: "object",
  },
  shape: {
    description:
      "If set a ReactElement, the shape of bar can be customized. If set a function, the function will be called to render customized shape.",
    table: {
      type: {
        summary: "ReactElement | Function",
      },
      category: "Bar",
    },
  },
  activeBar: {
    description:
      "The active bar is shown when a user enters a bar chart and this chart has tooltip. If set to false, no active bar will be drawn. If set to true, active bar will be drawn with the props calculated internally. If passed an object, active bar will be drawn, and the internally calculated props will be merged with the key value pairs of the passed object. If passed a ReactElement, the option can be the custom active bar element. If passed a function, the function will be called to render a customized active bar.",
    table: {
      type: {
        summary: "boolean | Object | ReactElement | Function",
      },
      category: "Bar",
    },
    control: "object",
  },
  stackId: {
    description:
      "The stack id of bar, when two bars have the same value axis and same stackId, then the two bars are stacked in order.",
    table: {
      type: {
        summary: "string | number",
      },
      category: "Bar",
    },
    control: "text",
  },
  name: {
    description:
      "The name of data. This option will be used in tooltip and legend to represent a bar. If no value was set to this option, the value of dataKey will be used alternatively.",
    table: {
      type: {
        summary: "string",
      },
      category: "Bar",
    },
    control: "text",
  },
};
