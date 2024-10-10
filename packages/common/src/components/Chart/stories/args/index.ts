import { PropsWithoutRef } from "react";
import { type ArgTypes } from "@storybook/react";
import { BarProps, XAxisProps, YAxisProps } from "recharts";
import { CategoricalChartProps } from "recharts/types/chart/generateCategoricalChart";
import { barChartArgs as barChartComponentArgs } from "../args/barChartArgs";
import { categorizeArgs } from "../helpers";
import { barArgs } from "./barArgs";
import { Flatten } from "./types";
import { xAxisArgs } from "./xAxisArgs";
import { yAxisArgs } from "./yAxisArgs";

type BarArgKey = "bar" | "barChart" | "xAxis" | "yAxis";

export type BarChartProps = Partial<{
  bar: PropsWithoutRef<BarProps>;
  barChart: CategoricalChartProps;
  xAxis: XAxisProps;
  yAxis: YAxisProps;
}>;

export type BarChartArgs = Partial<NonNullable<Flatten<Required<BarChartProps>>>>;

const barArgKey = {
  bar: "bar",
  barChart: "barChart",
  xAxis: "xAxis",
  yAxis: "yAxis",
} satisfies Record<string, BarArgKey>;

export const barChartArgs = {
  ...categorizeArgs(barChartComponentArgs, barArgKey.barChart),
  ...categorizeArgs(xAxisArgs, barArgKey.xAxis),
  ...categorizeArgs(yAxisArgs, barArgKey.yAxis),
  ...categorizeArgs(barArgs, barArgKey.bar),
} satisfies ArgTypes;
