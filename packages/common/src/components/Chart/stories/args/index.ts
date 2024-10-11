import { PropsWithoutRef } from "react";
import { type ArgTypes } from "@storybook/react";
import { BarProps, LineProps, XAxisProps, YAxisProps } from "recharts";
import { CategoricalChartProps } from "recharts/types/chart/generateCategoricalChart";
import { barChartArgs as barChartComponentArgs } from "../args/barChartArgs";
import { lineChartArgs as lineChartComponentArgs } from "../args/lineChartArgs";
import { lineStyleArgs } from "../args/stylesArgs";
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

type LineArgKey = "line" | "lineChart" | "xAxis" | "yAxis";

export type LineChartProps = Partial<{
  line: PropsWithoutRef<LineProps>;
  lineChart: CategoricalChartProps;
  xAxis: XAxisProps;
  yAxis: YAxisProps;
}>;

export type LineChartArgs = Partial<NonNullable<Flatten<Required<LineChartProps>>>>;

export const argsKeys = {
  line: "line",
  lineChart: "lineChart",
  xAxis: "xAxis",
  yAxis: "yAxis",
} satisfies Record<string, LineArgKey>;

export const lineChartArgs = {
  ...categorizeArgs(lineChartComponentArgs, argsKeys.lineChart),
  ...categorizeArgs(xAxisArgs, argsKeys.xAxis),
  ...categorizeArgs(yAxisArgs, argsKeys.yAxis),
  ...categorizeArgs(lineStyleArgs, argsKeys.line),
} satisfies ArgTypes;
