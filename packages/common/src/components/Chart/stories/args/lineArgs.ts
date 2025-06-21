import { type Args } from "@storybook/react-vite";
import { dataKey } from "./chartArgs";
import { generalStyleArgs, hide, labelDescription, labelSummary } from "./stylesArgs";

export const lineArgs: Args = {
  ...generalStyleArgs,
  dataKey,
  connectNulls: {
    description: "Whether to connect a graph line across null points.",
    table: {
      type: {
        summary: "boolean",
      },
      category: "Style",
      defaultValue: {
        summary: "false",
      },
    },
    control: "boolean",
  },
  dot: {
    description: `If false set, dots will not be drawn. If true set, dots will be drawn which have the props
      calculated internally. If object set, dots will be drawn which have the props merged by the internal
      calculated props and the option. If ReactElement set, the option can be the custom dot element.If set
      a function, the function will be called to render customized dot.`,
    table: {
      type: {
        summary: "Boolean | Object | ReactElement | Function",
        detail:
          '<Line dataKey="value" dot={false} />\n' +
          "<Line dataKey=\"value\" dot={{ stroke: 'red', strokeWidth: 2 }} />\n" +
          '<Line dataKey="value" dot={<CustomizedDot />} />\n' +
          '<Line dataKey="value" dot={renderDot} />',
      },
      defaultValue: {
        summary: "true",
      },
      category: "Style",
    },
    control: "boolean",
  },
  hide,
  label: {
    description: labelDescription,
    table: {
      type: {
        summary: labelSummary,
        detail:
          '<Line dataKey="value" label />\n' +
          "<Line dataKey=\"value\" label={{ fill: 'red', fontSize: 20 }} />\n" +
          '<Line dataKey="value" label={<CustomizedLabel />} />\n' +
          '<Line dataKey="value" label={renderLabel} />',
      },
      defaultValue: {
        summary: "false",
      },
      category: "Style",
    },
    control: "boolean",
  },
  type: {
    description: `The interpolation type of line. It's the same as type in Area.
      And customized interpolation function can be set to type. https://github.com/d3/d3-shape#curves`,
    default: "linear",
    table: {
      category: "Style",
    },
    control: "select",
    options: [
      "basis",
      "basisClosed",
      "basisOpen",
      "bumpX",
      "bumpY",
      "bump",
      "linear",
      "linearClosed",
      "natural",
      "monotoneX",
      "monotoneY",
      "monotone",
      "step",
      "stepBefore",
      "stepAfter",
    ],
  },
};
