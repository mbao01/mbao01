import { type ArgTypes } from "@storybook/react-vite";
import { barChartArgs } from "./barChartArgs";
import { polarChartArgs } from "./polarChartArgs";

export const radialBarChartArgs: ArgTypes = {
  ...barChartArgs,
  ...polarChartArgs,
  startAngle: {
    ...polarChartArgs.startAngle,
    defaultValue: 0,
  },
  endAngle: {
    ...polarChartArgs.endAngle,
    defaultValue: 360,
  },
};
