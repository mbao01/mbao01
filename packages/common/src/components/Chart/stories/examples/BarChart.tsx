import { Bar, BarChart, CartesianGrid, Cell, LabelList, Rectangle, XAxis, YAxis } from "recharts";
import { Chart } from "../../Chart";
import {
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components";
import { type ChartConfig } from "../../types";
import { type BarChartProps } from "../args";

/**
 * ## Parent
 *
 * The BarChart can be used within: `<Chart />`
 *
 * ## Children
 *
 * The BarChart can be used with the following child components: `<XAxis />`, `<YAxis />`, `<ReferenceArea />`, `<ReferenceDot />`, `<ReferenceLine />`,
 * `<Brush />`, `<CartesianGrid />`, `<ChartLegend />`, `<ChartTooltip />`, `<Bar />`, `<Customized />` or valid svg elements.
 */
export const BarChartExample = (props: BarChartProps) => {
  const chartData = [
    { date: "2024-04-01", desktop: 222 },
    { date: "2024-04-02", desktop: 97 },
    { date: "2024-04-03", desktop: 167 },
    { date: "2024-04-04", desktop: 242 },
    { date: "2024-04-05", desktop: 373 },
    { date: "2024-04-06", desktop: 301 },
    { date: "2024-04-07", desktop: 245 },
    { date: "2024-04-08", desktop: 409 },
    { date: "2024-04-09", desktop: 59 },
    { date: "2024-04-10", desktop: 261 },
    { date: "2024-04-11", desktop: 327 },
    { date: "2024-04-12", desktop: 292 },
    { date: "2024-04-13", desktop: 342 },
    { date: "2024-04-14", desktop: 137 },
    { date: "2024-04-15", desktop: 120 },
    { date: "2024-04-16", desktop: 138 },
    { date: "2024-04-17", desktop: 446 },
    { date: "2024-04-18", desktop: 364 },
    { date: "2024-04-19", desktop: 243 },
    { date: "2024-04-20", desktop: 89 },
    { date: "2024-04-21", desktop: 137 },
    { date: "2024-04-22", desktop: 224 },
    { date: "2024-04-23", desktop: 138 },
    { date: "2024-04-24", desktop: 387 },
    { date: "2024-04-25", desktop: 215 },
    { date: "2024-04-26", desktop: 75 },
    { date: "2024-04-27", desktop: 383 },
    { date: "2024-04-28", desktop: 122 },
    { date: "2024-04-29", desktop: 315 },
    { date: "2024-04-30", desktop: 454 },
    { date: "2024-05-01", desktop: 165 },
    { date: "2024-05-02", desktop: 293 },
    { date: "2024-05-03", desktop: 247 },
    { date: "2024-05-04", desktop: 385 },
    { date: "2024-05-05", desktop: 481 },
    { date: "2024-05-06", desktop: 498 },
    { date: "2024-05-07", desktop: 388 },
    { date: "2024-05-08", desktop: 149 },
    { date: "2024-05-09", desktop: 227 },
    { date: "2024-05-10", desktop: 293 },
    { date: "2024-05-11", desktop: 335 },
    { date: "2024-05-12", desktop: 197 },
    { date: "2024-05-13", desktop: 197 },
    { date: "2024-05-14", desktop: 448 },
    { date: "2024-05-15", desktop: 473 },
    { date: "2024-05-16", desktop: 338 },
    { date: "2024-05-17", desktop: 499 },
    { date: "2024-05-18", desktop: 315 },
    { date: "2024-05-19", desktop: 235 },
    { date: "2024-05-20", desktop: 177 },
    { date: "2024-05-21", desktop: 82 },
    { date: "2024-05-22", desktop: 81 },
    { date: "2024-05-23", desktop: 252 },
    { date: "2024-05-24", desktop: 294 },
    { date: "2024-05-25", desktop: 201 },
    { date: "2024-05-26", desktop: 213 },
    { date: "2024-05-27", desktop: 420 },
    { date: "2024-05-28", desktop: 233 },
    { date: "2024-05-29", desktop: 78 },
    { date: "2024-05-30", desktop: 340 },
    { date: "2024-05-31", desktop: 178 },
    { date: "2024-06-01", desktop: 178 },
    { date: "2024-06-02", desktop: 470 },
    { date: "2024-06-03", desktop: 103 },
    { date: "2024-06-04", desktop: 439 },
    { date: "2024-06-05", desktop: 88 },
    { date: "2024-06-06", desktop: 294 },
    { date: "2024-06-07", desktop: 323 },
    { date: "2024-06-08", desktop: 385 },
    { date: "2024-06-09", desktop: 438 },
    { date: "2024-06-10", desktop: 155 },
    { date: "2024-06-11", desktop: 92 },
    { date: "2024-06-12", desktop: 492 },
    { date: "2024-06-13", desktop: 81 },
    { date: "2024-06-14", desktop: 426 },
    { date: "2024-06-15", desktop: 307 },
    { date: "2024-06-16", desktop: 371 },
    { date: "2024-06-17", desktop: 475 },
    { date: "2024-06-18", desktop: 107 },
    { date: "2024-06-19", desktop: 341 },
    { date: "2024-06-20", desktop: 408 },
    { date: "2024-06-21", desktop: 169 },
    { date: "2024-06-22", desktop: 317 },
    { date: "2024-06-23", desktop: 480 },
    { date: "2024-06-24", desktop: 132 },
    { date: "2024-06-25", desktop: 141 },
    { date: "2024-06-26", desktop: 434 },
    { date: "2024-06-27", desktop: 448 },
    { date: "2024-06-28", desktop: 149 },
    { date: "2024-06-29", desktop: 103 },
    { date: "2024-06-30", desktop: 446 },
  ];

  const chartConfig = {
    views: {
      label: "Page Views",
    },
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
  } satisfies ChartConfig;

  return (
    <Chart config={chartConfig} className="h-[250px] w-full">
      <BarChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
        {...props.barChart}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          {...props.xAxis}
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={32}
          tickFormatter={(value) => {
            const date = new Date(value);
            return date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            });
          }}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              className="w-[150px]"
              nameKey="views"
              labelFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });
              }}
            />
          }
        />
        <Bar {...props.bar} dataKey="desktop" fill="var(--color-desktop)" />
      </BarChart>
    </Chart>
  );
};

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

export const MultipleBarChartExample = (props: BarChartProps) => {
  return (
    <Chart config={chartConfig} className="h-[200px] w-full">
      <BarChart {...props.barChart}>
        <CartesianGrid vertical={false} />
        <XAxis {...props.xAxis} />
        <ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />
        <Bar {...props.bar} dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar {...props.bar} dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </Chart>
  );
};

export const HorizontalBarChartExample = (props: BarChartProps) => {
  return (
    <Chart config={chartConfig} className="h-[200px] w-full">
      <BarChart {...props.barChart}>
        <XAxis type="number" dataKey="desktop" hide {...props.xAxis} />
        <YAxis {...props.yAxis} />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} {...props.bar} />
      </BarChart>
    </Chart>
  );
};

export const LabelBarChartExample = (props: BarChartProps) => {
  return (
    <Chart config={chartConfig} className="h-[200px] w-full">
      <BarChart {...props.barChart}>
        <CartesianGrid vertical={false} />
        <XAxis {...props.xAxis} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} {...props.bar}>
          <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
        </Bar>
      </BarChart>
    </Chart>
  );
};

export const CustomLabelBarChartExample = (props: BarChartProps) => {
  return (
    <Chart config={chartConfig} className="h-[200px] w-full">
      <BarChart {...props.barChart}>
        <CartesianGrid horizontal={false} />
        <YAxis {...props.yAxis} />
        <XAxis {...props.xAxis} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <Bar
          dataKey="desktop"
          layout="vertical"
          fill="var(--color-desktop)"
          radius={4}
          {...props.bar}
        >
          <LabelList
            dataKey="month"
            position="insideLeft"
            offset={8}
            className="fill-black"
            fontSize={12}
          />
          <LabelList
            dataKey="desktop"
            position="right"
            offset={8}
            className="fill-base-content"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </Chart>
  );
};

export const MixedBarChartExample = (props: BarChartProps) => {
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  return (
    <Chart config={chartConfig} className="h-[200px] w-full">
      <BarChart {...props.barChart}>
        <YAxis
          tickFormatter={(value) => chartConfig[value as keyof typeof chartConfig]?.label}
          {...props.yAxis}
        />
        <XAxis {...props.xAxis} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey="visitors" layout="vertical" radius={5} {...props.bar} />
      </BarChart>
    </Chart>
  );
};

export const StackedBarChartExample = (props: BarChartProps) => {
  return (
    <Chart config={chartConfig} className="h-[200px] w-full">
      <BarChart {...props.barChart}>
        <CartesianGrid vertical={false} />
        <XAxis {...props.xAxis} />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          {...props.bar}
          dataKey="desktop"
          stackId="a"
          fill="var(--color-desktop)"
          radius={[0, 0, 4, 4]}
        />
        <Bar
          {...props.bar}
          dataKey="mobile"
          stackId="a"
          fill="var(--color-mobile)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </Chart>
  );
};

export const ActiveBarChartExample = (props: BarChartProps) => {
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  return (
    <Chart config={chartConfig} className="h-[200px] w-full">
      <BarChart {...props.barChart}>
        <CartesianGrid vertical={false} />
        <XAxis
          tickFormatter={(value) => chartConfig[value as keyof typeof chartConfig]?.label}
          {...props.xAxis}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Bar
          dataKey="visitors"
          strokeWidth={2}
          radius={8}
          activeIndex={2}
          activeBar={(p: Record<string, any>) => {
            return (
              <Rectangle
                {...p}
                fillOpacity={0.8}
                stroke={p.payload.fill}
                strokeDasharray={4}
                strokeDashoffset={4}
              />
            );
          }}
          {...props.bar}
        />
      </BarChart>
    </Chart>
  );
};

export const NegativeBarChartExample = (props: BarChartProps) => {
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
  } satisfies ChartConfig;

  return (
    <Chart config={chartConfig} className="h-[200px] w-full">
      <BarChart {...props.barChart}>
        <CartesianGrid vertical={false} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel hideIndicator />} />
        <Bar dataKey="visitors" {...props.bar}>
          <LabelList position="top" dataKey="month" fillOpacity={1} />
          {(props.barChart as { data: Array<{ month: string; visitors: number }> }).data?.map(
            (item) => (
              <Cell
                key={item.month}
                fill={item.visitors > 0 ? "hsl(var(--chart-1))" : "hsl(var(--chart-2))"}
              />
            )
          )}
        </Bar>
      </BarChart>
    </Chart>
  );
};
