import { type ArgTypes } from "@storybook/react-vite";
import { categoricalChartArgs } from "./chartArgs";

export const cartesianChartArgs: ArgTypes = {
  ...categoricalChartArgs,
  layout: {
    description: "The layout of areas, bars, lines in the chart.",
    table: {
      type: {
        summary: "'horizontal' | 'vertical'",
      },
      defaultValue: {
        summary: "'horizontal'",
      },
      category: "General",
    },
    control: "radio",
    options: ["horizontal", "vertical"],
  },
  stackOffset: {
    description: `Determines how values are stacked:

- \`none\` is the default, it adds values on top of each other. No smarts. Negative values will overlap.
- \`expand\` make it so that the values always add up to 1 - so the chart will look like a rectangle.
- \`wiggle\` and \`silhouette\` tries to keep the chart centered.
- \`sign\` stacks positive values above zero and negative values below zero. Similar to \`none\` but handles negatives.
- \`positive\` ignores all negative values, and then behaves like \`none\`.

Also see https://d3js.org/d3-shape/stack#stack-offsets
(note that the \`diverging\` offset in d3 is named \`sign\` in recharts)
`,
    table: {
      type: {
        summary: "'expand' | 'none' | 'wiggle' | 'silhouette' | 'sign' | 'positive'",
      },
      defaultValue: { summary: "'none'" },
      category: "General",
    },
    control: "radio",
    options: ["sign", "expand", "none", "wiggle", "silhouette", "positive"],
  },
};
