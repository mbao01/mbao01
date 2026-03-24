import { MapPinIcon } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis, YAxis } from "recharts";
import { Chart } from "../../Chart";
import {
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components";
import { type ChartConfig } from "../../types";
import { LineChartProps } from "../args";

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
 * The LineChart can be used within: `<Chart />`
 *
 * ## Children
 *
 * The LineChart can be used with the following child components: `<XAxis />`, `<YAxis />`, `<ReferenceArea />`, `<ReferenceDot />`, `<ReferenceLine />`,
 * `<Brush />`, `<CartesianGrid />`, `<ChartLegend />`, `<ChartTooltip />`, `<Line />`, `<Customized />` or valid svg elements.
 */
export const LineChartExample = (props: LineChartProps) => {
  return (
    <Chart config={chartConfig} className="h-[250px] w-full">
      <LineChart {...props.lineChart}>
        <CartesianGrid vertical={false} />
        <XAxis {...props.xAxis} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Line {...props.line} />
      </LineChart>
    </Chart>
  );
};

export const StackedLineChartExample = (props: LineChartProps) => {
  return (
    <Chart config={chartConfig} className="h-[250px] w-full">
      <LineChart {...props.lineChart}>
        <CartesianGrid vertical={false} />
        <XAxis {...props.xAxis} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
        <Line
          {...props.line}
          dataKey="mobile"
          fill="var(--color-mobile)"
          stroke="var(--color-mobile)"
        />
        <Line
          {...props.line}
          dataKey="desktop"
          fill="var(--color-desktop)"
          stroke="var(--color-desktop)"
        />
      </LineChart>
    </Chart>
  );
};

export const CustomDotLineChartExample = (props: LineChartProps) => {
  return (
    <Chart config={chartConfig} className="h-[250px] w-full">
      <LineChart {...props.lineChart}>
        <CartesianGrid vertical={false} />
        <XAxis {...props.xAxis} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Line
          {...props.line}
          dot={({ cx, cy, payload }) => {
            const r = 24;
            return (
              <MapPinIcon
                key={payload.month}
                x={Number(cx) - r / 4}
                y={Number(cy) - r / 4}
                width={r / 2}
                height={r / 2}
                fill="hsl(var(--background))"
                stroke="var(--color-desktop)"
              />
            );
          }}
        />
      </LineChart>
    </Chart>
  );
};

export const LabeledLineChartExample = (props: LineChartProps) => {
  return (
    <Chart config={chartConfig} className="h-[250px] w-full">
      <LineChart {...props.lineChart}>
        <CartesianGrid vertical={false} />
        <XAxis {...props.xAxis} />
        <YAxis {...props.yAxis} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <Line {...props.line}>
          <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
        </Line>
      </LineChart>
    </Chart>
  );
};

export const WithLegendLineChartExample = (props: LineChartProps) => {
  return (
    <Chart config={chartConfig} className="h-[250px] w-full">
      <LineChart {...props.lineChart}>
        <CartesianGrid vertical={false} />
        <XAxis {...props.xAxis} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <Line
          {...props.line}
          dataKey="mobile"
          fill="var(--color-mobile)"
          stroke="var(--color-mobile)"
        />
        <Line
          {...props.line}
          dataKey="desktop"
          fill="var(--color-desktop)"
          stroke="var(--color-desktop)"
        />
        <ChartLegend content={<ChartLegendContent />} />
      </LineChart>
    </Chart>
  );
};

/**
 * Smooth curved line chart with gradient stroke and refined active dot.
 * Shows a single data series with emphasis on the curve smoothness.
 */
export const SmoothLineChartExample = (props: LineChartProps) => {
  const chartConfig = {
    value: {
      label: "Revenue",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <Chart config={chartConfig} className="h-[250px] w-full">
      <LineChart {...props.lineChart}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          {...props.xAxis}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          {...props.yAxis}
        />
        <ChartTooltip
          content={<ChartTooltipContent indicator="dot" />}
        />
        <Line
          dataKey="value"
          type="natural"
          stroke="var(--color-value)"
          strokeWidth={2.5}
          dot={false}
          activeDot={{
            r: 6,
            strokeWidth: 2,
            stroke: "var(--color-value)",
            fill: "white",
          }}
          {...props.line}
        />
      </LineChart>
    </Chart>
  );
};

/**
 * Multi-series comparison line chart with dashed reference line.
 * Useful for budget vs actual, target vs performance comparisons.
 */
export const ComparisonLineChartExample = (props: LineChartProps) => {
  const chartConfig = {
    actual: {
      label: "Actual",
      color: "hsl(var(--chart-1))",
    },
    target: {
      label: "Target",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  return (
    <Chart config={chartConfig} className="h-[250px] w-full">
      <LineChart {...props.lineChart}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value: string) => value.slice(0, 3)}
          {...props.xAxis}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}k`}
          {...props.yAxis}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          dataKey="target"
          type="monotone"
          stroke="var(--color-target)"
          strokeWidth={2}
          strokeDasharray="6 3"
          dot={false}
          {...props.line}
        />
        <Line
          dataKey="actual"
          type="monotone"
          stroke="var(--color-actual)"
          strokeWidth={2.5}
          dot={false}
          activeDot={{ r: 5, strokeWidth: 2, fill: "var(--color-actual)" }}
          {...props.line}
        />
      </LineChart>
    </Chart>
  );
};
