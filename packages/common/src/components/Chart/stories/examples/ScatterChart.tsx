import { CartesianGrid, Scatter, ScatterChart, XAxis, YAxis, ZAxis } from "recharts";
import { Chart } from "../../Chart";
import {
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components";
import { type ChartConfig } from "../../types";
import { ScatterChartProps } from "../args";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

/**
 * ## Parent
 *
 * The ScatterChart can be used within: `<Chart />`
 *
 * ## Children
 *
 * The ScatterChart can be used with the following child components: `<XAxis />`, `<YAxis />`, `<ZAxis />`,
 * `<ReferenceArea />`, `<ReferenceDot />`, `<ReferenceLine />`, `<CartesianGrid />`,
 * `<ChartLegend />`, `<ChartTooltip />`, `<Scatter />`, `<Customized />` or valid svg elements.
 */
export const ScatterChartExample = (props: ScatterChartProps) => {
  return (
    <Chart config={chartConfig} className="h-[300px] w-full">
      <ScatterChart {...props.scatterChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis {...props.xAxis} />
        <YAxis {...props.yAxis} />
        <ChartTooltip cursor={{ strokeDasharray: "3 3" }} content={<ChartTooltipContent />} />
        <Scatter {...props.scatter} />
      </ScatterChart>
    </Chart>
  );
};

export const MultiSeriesScatterChartExample = (props: ScatterChartProps) => {
  const desktopData = [
    { x: 100, y: 200 },
    { x: 120, y: 100 },
    { x: 170, y: 300 },
    { x: 140, y: 250 },
    { x: 150, y: 400 },
    { x: 110, y: 280 },
  ];

  const mobileData = [
    { x: 200, y: 260 },
    { x: 240, y: 290 },
    { x: 190, y: 340 },
    { x: 198, y: 250 },
    { x: 180, y: 280 },
    { x: 210, y: 220 },
  ];

  return (
    <Chart config={chartConfig} className="h-[300px] w-full">
      <ScatterChart {...props.scatterChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis {...props.xAxis} />
        <YAxis {...props.yAxis} />
        <ChartTooltip cursor={{ strokeDasharray: "3 3" }} content={<ChartTooltipContent />} />
        <Scatter
          {...props.scatter}
          name="Desktop"
          data={desktopData}
          fill="var(--color-desktop)"
        />
        <Scatter
          {...props.scatter}
          name="Mobile"
          data={mobileData}
          fill="var(--color-mobile)"
        />
        <ChartLegend content={<ChartLegendContent />} />
      </ScatterChart>
    </Chart>
  );
};

export const BubbleScatterChartExample = (props: ScatterChartProps) => {
  const chartConfig = {
    visitors: {
      label: "Visitors",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <Chart config={chartConfig} className="h-[300px] w-full">
      <ScatterChart {...props.scatterChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="hours"
          name="Hours Spent"
          type="number"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          {...props.xAxis}
        />
        <YAxis
          dataKey="score"
          name="Test Score"
          type="number"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          {...props.yAxis}
        />
        <ZAxis dataKey="students" range={[60, 400]} name="Students" />
        <ChartTooltip cursor={{ strokeDasharray: "3 3" }} content={<ChartTooltipContent />} />
        <Scatter
          name="Visitors"
          fill="var(--color-visitors)"
          {...props.scatter}
        />
      </ScatterChart>
    </Chart>
  );
};

export const WithLineScatterChartExample = (props: ScatterChartProps) => {
  const chartConfig = {
    performance: {
      label: "Performance",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <Chart config={chartConfig} className="h-[300px] w-full">
      <ScatterChart {...props.scatterChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="x"
          name="Experience (years)"
          type="number"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          {...props.xAxis}
        />
        <YAxis
          dataKey="y"
          name="Salary ($k)"
          type="number"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          {...props.yAxis}
        />
        <ChartTooltip cursor={{ strokeDasharray: "3 3" }} content={<ChartTooltipContent />} />
        <Scatter
          name="Performance"
          fill="var(--color-performance)"
          line={{ stroke: "var(--color-performance)", strokeWidth: 2 }}
          lineType="fitting"
          {...props.scatter}
        />
      </ScatterChart>
    </Chart>
  );
};

export const ShapesScatterChartExample = (props: ScatterChartProps) => {
  const chartConfig = {
    series1: {
      label: "Series A",
      color: "hsl(var(--chart-1))",
    },
    series2: {
      label: "Series B",
      color: "hsl(var(--chart-2))",
    },
    series3: {
      label: "Series C",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;

  const series1Data = [
    { x: 10, y: 30 },
    { x: 30, y: 50 },
    { x: 50, y: 70 },
    { x: 70, y: 40 },
    { x: 90, y: 60 },
  ];

  const series2Data = [
    { x: 20, y: 80 },
    { x: 40, y: 20 },
    { x: 60, y: 50 },
    { x: 80, y: 90 },
    { x: 100, y: 30 },
  ];

  const series3Data = [
    { x: 15, y: 45 },
    { x: 35, y: 65 },
    { x: 55, y: 25 },
    { x: 75, y: 85 },
    { x: 95, y: 55 },
  ];

  return (
    <Chart config={chartConfig} className="h-[300px] w-full">
      <ScatterChart {...props.scatterChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="x"
          type="number"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          {...props.xAxis}
        />
        <YAxis
          dataKey="y"
          type="number"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          {...props.yAxis}
        />
        <ChartTooltip cursor={{ strokeDasharray: "3 3" }} content={<ChartTooltipContent />} />
        <Scatter
          name="Series A"
          data={series1Data}
          fill="var(--color-series1)"
          shape="circle"
          {...props.scatter}
        />
        <Scatter
          name="Series B"
          data={series2Data}
          fill="var(--color-series2)"
          shape="diamond"
          {...props.scatter}
        />
        <Scatter
          name="Series C"
          data={series3Data}
          fill="var(--color-series3)"
          shape="triangle"
          {...props.scatter}
        />
        <ChartLegend content={<ChartLegendContent />} />
      </ScatterChart>
    </Chart>
  );
};