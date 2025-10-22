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
import { type ArgTypes } from "@storybook/react-vite";
import { CartesianChartProps, PolarChartProps } from "recharts/types/util/types";
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
  barChart: CartesianChartProps;
} & AxisProps;

export type BarChartArgs = Partial<Flatten<BarChartProps>> & {};

const barArgKey = {
  bar: "bar",
  barChart: "barChart",
  xAxis: "xAxis",
  yAxis: "yAxis",
} satisfies Record<string, BarArgKey>;

export const barChartArgs: ArgTypes = {
  ...categorizeArgs(barChartComponentArgs, barArgKey.barChart),
  ...categorizeArgs(xAxisArgs, barArgKey.xAxis),
  ...categorizeArgs(yAxisArgs, barArgKey.yAxis),
  ...categorizeArgs(barArgs, barArgKey.bar),
};

/**
 * Line chart
 */
type LineArgKey = "line" | "lineChart" | "xAxis" | "yAxis";

export type LineChartProps = {
  line: OmitSVGElement<LineProps>;
  lineChart: CartesianChartProps;
} & AxisProps;

export type LineChartArgs = Partial<Flatten<LineChartProps>> & {};

const lineArgKey = {
  line: "line",
  lineChart: "lineChart",
  xAxis: "xAxis",
  yAxis: "yAxis",
} satisfies Record<string, LineArgKey>;

export const lineChartArgs: ArgTypes = {
  ...categorizeArgs(lineChartComponentArgs, lineArgKey.lineChart),
  ...categorizeArgs(xAxisArgs, lineArgKey.xAxis),
  ...categorizeArgs(yAxisArgs, lineArgKey.yAxis),
  ...categorizeArgs(lineArgs, lineArgKey.line),
};

/**
 * Area chart
 */
type AreaArgKey = "area" | "areaChart" | "xAxis" | "yAxis";

export type AreaChartProps = {
  area: OmitSVGElement<AreaProps>;
  areaChart: CartesianChartProps;
} & AxisProps;

export type AreaChartArgs = Partial<Flatten<AreaChartProps>> & {};

export const areaArgKey = {
  area: "area",
  areaChart: "areaChart",
  xAxis: "xAxis",
  yAxis: "yAxis",
} satisfies Record<string, AreaArgKey>;

export const areaChartArgs: ArgTypes = {
  ...categorizeArgs(areaChartComponentArgs, areaArgKey.areaChart),
  ...categorizeArgs(xAxisArgs, areaArgKey.xAxis),
  ...categorizeArgs(yAxisArgs, areaArgKey.yAxis),
  ...categorizeArgs(areaArgs, areaArgKey.area),
};

/**
 * Pie chart
 */
type PieArgKey = "pie" | "pieChart";

export type PieChartProps = {
  pie: OmitSVGElement<PieProps>;
  pieChart: PolarChartProps;
};

export type PieChartArgs = Partial<Flatten<PieChartProps>> & {};

export const pieArgKey = {
  pie: "pie",
  pieChart: "pieChart",
} satisfies Record<string, PieArgKey>;

export const pieChartArgs: ArgTypes = {
  ...categorizeArgs(pieChartComponentArgs, pieArgKey.pieChart),
  ...categorizeArgs(pieArgs, pieArgKey.pie),
};

/**
 * RadialBar chart
 */
type RadialBarArgKey = "radialBar" | "radialBarChart";

export type RadialBarChartProps = {
  radialBar: OmitSVGElement<RadialBarProps>;
  radialBarChart: PolarChartProps;
};

export type RadialBarChartArgs = Partial<Flatten<RadialBarChartProps>> & {};

export const radialBarArgKey = {
  radialBar: "radialBar",
  radialBarChart: "radialBarChart",
} satisfies Record<string, RadialBarArgKey>;

export const radialBarChartArgs: ArgTypes = {
  ...categorizeArgs(radialBarChartComponentArgs, radialBarArgKey.radialBarChart),
  ...categorizeArgs(radialBarArgs, radialBarArgKey.radialBar),
};

/**
 * Radar chart
 */
type RadarArgKey = "radar" | "radarChart";

export type RadarChartProps = {
  radar: OmitSVGElement<RadarProps>;
  radarChart: PolarChartProps;
};

export type RadarChartArgs = Partial<Flatten<RadarChartProps>> & {};

export const radarArgKey = {
  radar: "radar",
  radarChart: "radarChart",
} satisfies Record<string, RadarArgKey>;

export const radarChartArgs: ArgTypes = {
  ...categorizeArgs(radarChartComponentArgs, radarArgKey.radarChart),
  ...categorizeArgs(radarArgs, radarArgKey.radar),
};
