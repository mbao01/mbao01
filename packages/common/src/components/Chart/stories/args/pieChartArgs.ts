import { type ArgTypes } from "@storybook/react-vite";
import { chartSizeArgs, margin } from "./chartArgs";

export const pieChartArgs: ArgTypes = {
  ...chartSizeArgs,
  margin,
};
