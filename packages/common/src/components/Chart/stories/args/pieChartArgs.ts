import { type ArgTypes } from "@storybook/react";
import { chartSizeArgs, margin } from "./chartArgs";

export const pieChartArgs: ArgTypes = {
  ...chartSizeArgs,
  margin,
};
