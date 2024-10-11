import { DrawingPinIcon } from "@radix-ui/react-icons";
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
              <DrawingPinIcon
                key={payload.month}
                x={cx - r / 4}
                y={cy - r / 4}
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
