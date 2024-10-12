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
import { type ArgTypes } from "@storybook/react";
import { type CategoricalChartProps } from "recharts/types/chart/generateCategoricalChart";
import type { Flatten } from "./types";
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
import { OmitSVGElement } from "./types";
import { xAxisArgs } from "./xAxisArgs";
import { yAxisArgs } from "./yAxisArgs";

type AxisProps = {
  xAxis: OmitSVGElement<XAxisProps>;
  yAxis: OmitSVGElement<YAxisProps>;
};

/**
 * Bar chart
 */
type BarArgKey = "bar" | "barChart" | "xAxis" | "yAxis";

export type BarChartProps = {
  bar: OmitSVGElement<BarProps>;
  barChart: CategoricalChartProps;
} & AxisProps;

export type BarChartArgs = Partial<Flatten<BarChartProps>> & {};

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

/**
 * Line chart
 */
type LineArgKey = "line" | "lineChart" | "xAxis" | "yAxis";

export type LineChartProps = {
  line: OmitSVGElement<LineProps>;
  lineChart: CategoricalChartProps;
} & AxisProps;

export type LineChartArgs = Partial<Flatten<LineChartProps>> & {};

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

/**
 * Area chart
 */
type AreaArgKey = "area" | "areaChart" | "xAxis" | "yAxis";

export type AreaChartProps = {
  area: OmitSVGElement<AreaProps>;
  areaChart: CategoricalChartProps;
} & AxisProps;

export type AreaChartArgs = Partial<Flatten<AreaChartProps>> & {};

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

/**
 * Pie chart
 */
type PieArgKey = "pie" | "pieChart";

export type PieChartProps = {
  pie: OmitSVGElement<PieProps>;
  pieChart: CategoricalChartProps;
};

export type PieChartArgs = Partial<Flatten<PieChartProps>> & {};

export const pieArgKey = {
  pie: "pie",
  pieChart: "pieChart",
} satisfies Record<string, PieArgKey>;

export const pieChartArgs = {
  ...categorizeArgs(pieChartComponentArgs, pieArgKey.pieChart),
  ...categorizeArgs(pieArgs, pieArgKey.pie),
} satisfies ArgTypes;

/**
 * RadialBar chart
 */
type RadialBarArgKey = "radialBar" | "radialBarChart";

export type RadialBarChartProps = {
  radialBar: OmitSVGElement<RadialBarProps>;
  radialBarChart: CategoricalChartProps;
};

export type RadialBarChartArgs = Partial<Flatten<RadialBarChartProps>> & {};

export const radialBarArgKey = {
  radialBar: "radialBar",
  radialBarChart: "radialBarChart",
} satisfies Record<string, RadialBarArgKey>;

export const radialBarChartArgs = {
  ...categorizeArgs(radialBarChartComponentArgs, radialBarArgKey.radialBarChart),
  ...categorizeArgs(radialBarArgs, radialBarArgKey.radialBar),
} satisfies ArgTypes;

/**
 * Radar chart
 */
type RadarArgKey = "radar" | "radarChart";

export type RadarChartProps = {
  radar: OmitSVGElement<RadarProps>;
  radarChart: CategoricalChartProps;
};

export type RadarChartArgs = Partial<Flatten<RadarChartProps>> & {};

export const radarArgKey = {
  radar: "radar",
  radarChart: "radarChart",
} satisfies Record<string, RadarArgKey>;

export const radarChartArgs = {
  ...categorizeArgs(radarChartComponentArgs, radarArgKey.radarChart),
  ...categorizeArgs(radarArgs, radarArgKey.radar),
} satisfies ArgTypes;
