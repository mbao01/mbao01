import { type Args } from "@storybook/react";
import { polarChartArgs } from "./polarChartArgs";
import { polarSharedArgs } from "./polarSharedArgs";

export const pieArgs: Args = {
  ...polarSharedArgs,
  ...polarChartArgs,
  fillOpacity: {
    description: "The opacity of the fill.",
    table: {
      type: {
        summary: "number",
      },
      category: "Style",
    },
    control: "number",
  },
};
