import { type ArgTypes } from "@storybook/react-vite";
import { cartesianChartArgs } from "./cartesianChartArgs";

export const areaChartArgs: ArgTypes = {
  ...cartesianChartArgs,
  baseValue: {
    description: "The base value of area.",
    table: {
      type: {
        summary: "number | 'dataMin' | 'dataMax' | 'auto'",
      },
      defaultValue: {
        summary: "'auto'",
      },
      category: "Area",
    },
    control: "text",
  },
};
