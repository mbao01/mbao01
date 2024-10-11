import type {
  AreaProps,
  BarProps,
  LineProps,
  PieProps,
  RadarProps,
  RadialBarProps,
  XAxisProps,
  YAxisProps,
} from "recharts";
import { type PropsWithoutRef } from "react";
import { type ArgTypes } from "@storybook/react";
import { type CategoricalChartProps } from "recharts/types/chart/generateCategoricalChart";
import { categorizeArgs } from "../helpers";
import { areaArgs } from "./areaArgs";
import { areaChartArgs as areaChartComponentArgs } from "./areaChartArgs";
import { barArgs } from "./barArgs";
import { barChartArgs as barChartComponentArgs } from "./barChartArgs";
import { lineArgs } from "./lineArgs";
import { lineChartArgs as lineChartComponentArgs } from "./lineChartArgs";
import { pieArgs } from "./pieArgs";
import { pieChartArgs as pieChartComponentArgs } from "./pieChartArgs";
import { radarArgs } from "./radarArgs";
import { radarChartArgs as radarChartComponentArgs } from "./radarChartArgs";
import { radialBarArgs } from "./radialBarArgs";
import { radialBarChartArgs as radialBarChartComponentArgs } from "./radialBarChartArgs";
import { type Flatten } from "./types";
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

const lineArgKey = {
  line: "line",
  lineChart: "lineChart",
  xAxis: "xAxis",
  yAxis: "yAxis",
} satisfies Record<string, LineArgKey>;

export const lineChartArgs = {
  ...categorizeArgs(lineChartComponentArgs, lineArgKey.lineChart),
  ...categorizeArgs(xAxisArgs, lineArgKey.xAxis),
  ...categorizeArgs(yAxisArgs, lineArgKey.yAxis),
  ...categorizeArgs(lineArgs, lineArgKey.line),
} satisfies ArgTypes;

type AreaArgKey = "area" | "areaChart" | "xAxis" | "yAxis";

export type AreaChartProps = Partial<{
  area: PropsWithoutRef<AreaProps>;
  areaChart: CategoricalChartProps;
  xAxis: XAxisProps;
  yAxis: YAxisProps;
}>;

export type AreaChartArgs = Partial<NonNullable<Flatten<Required<AreaChartProps>>>>;

export const areaArgKey = {
  area: "area",
  areaChart: "areaChart",
  xAxis: "xAxis",
  yAxis: "yAxis",
} satisfies Record<string, AreaArgKey>;

export const areaChartArgs = {
  ...categorizeArgs(areaChartComponentArgs, areaArgKey.areaChart),
  ...categorizeArgs(xAxisArgs, areaArgKey.xAxis),
  ...categorizeArgs(yAxisArgs, areaArgKey.yAxis),
  ...categorizeArgs(areaArgs, areaArgKey.area),
} satisfies ArgTypes;

type PieArgKey = "pie" | "pieChart";

export type PieChartProps = Partial<{
  pie: PropsWithoutRef<PieProps>;
  pieChart: CategoricalChartProps;
}>;

export type PieChartArgs = Partial<NonNullable<Flatten<Required<PieChartProps>>>>;

export const pieArgKey = {
  pie: "pie",
  pieChart: "pieChart",
} satisfies Record<string, PieArgKey>;

export const pieChartArgs = {
  ...categorizeArgs(pieChartComponentArgs, pieArgKey.pieChart),
  ...categorizeArgs(pieArgs, pieArgKey.pie),
} satisfies ArgTypes;

type RadialBarArgKey = "radialBar" | "radialBarChart";

export type RadialBarChartProps = Partial<{
  radialBar: PropsWithoutRef<RadialBarProps>;
  radialBarChart: CategoricalChartProps;
}>;

export type RadialBarChartArgs = Partial<NonNullable<Flatten<Required<RadialBarChartProps>>>>;

export const radialBarArgKey = {
  radialBar: "radialBar",
  radialBarChart: "radialBarChart",
} satisfies Record<string, RadialBarArgKey>;

export const radialBarChartArgs = {
  ...categorizeArgs(radialBarChartComponentArgs, radialBarArgKey.radialBarChart),
  ...categorizeArgs(radialBarArgs, radialBarArgKey.radialBar),
} satisfies ArgTypes;

type RadarArgKey = "radar" | "radarChart";

export type RadarChartProps = Partial<{
  radar: PropsWithoutRef<RadarProps>;
  radarChart: CategoricalChartProps;
}>;

export type RadarChartArgs = Partial<NonNullable<Flatten<Required<RadarChartProps>>>>;

export const radarArgKey = {
  radar: "radar",
  radarChart: "radarChart",
} satisfies Record<string, RadarArgKey>;

export const radarChartArgs = {
  ...categorizeArgs(radarChartComponentArgs, radarArgKey.radarChart),
  ...categorizeArgs(radarArgs, radarArgKey.radar),
} satisfies ArgTypes;
