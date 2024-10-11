import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Chart } from "../../Chart";
import {
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components";
import { type ChartConfig } from "../../types";
import { type AreaChartProps } from "../args";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

/**
 * ## Parent
 *
 * The AreaChart can be used within: `<Chart />`
 *
 * ## Children
 *
 * The AreaChart can be used with the following child components: `<XAxis />`, `<YAxis />`, `<ReferenceArea />`, `<ReferenceDot />`, `<ReferenceArea />`,
 * `<Brush />`, `<CartesianGrid />`, `<ChartLegend />`, `<ChartTooltip />`, `<Area />`, `<Customized />` or valid svg elements.
 */
export const AreaChartExample = (props: AreaChartProps) => {
  return (
    <Chart config={chartConfig} className="h-[250px] w-full">
      <AreaChart {...props.areaChart}>
        <CartesianGrid vertical={false} />
        <XAxis {...props.xAxis} />
        <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
        <Area dataKey="desktop" {...props.area} />
      </AreaChart>
    </Chart>
  );
};

export const StackedAreaChartExample = (props: AreaChartProps) => {
  return (
    <Chart config={chartConfig} className="h-[250px] w-full">
      <AreaChart {...props.areaChart}>
        <CartesianGrid vertical={false} />
        <XAxis {...props.xAxis} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
        <Area
          dataKey="mobile"
          fill="var(--color-mobile)"
          stroke="var(--color-mobile)"
          {...props.area}
        />
        <Area
          dataKey="desktop"
          fill="var(--color-desktop)"
          stroke="var(--color-desktop)"
          {...props.area}
        />
      </AreaChart>
    </Chart>
  );
};

export const StackedExpandedAreaChartExample = (props: AreaChartProps) => {
  return (
    <Chart config={chartConfig} className="h-[250px] w-full">
      <AreaChart {...props.areaChart}>
        <CartesianGrid vertical={false} />
        <XAxis {...props.xAxis} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <defs>
          <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <Area
          dataKey="other"
          fill="var(--color-other)"
          fillOpacity={0.1}
          stroke="var(--color-other)"
          {...props.area}
        />
        <Area
          dataKey="mobile"
          fill="url(#fillMobile)"
          fillOpacity={0.4}
          stroke="var(--color-mobile)"
          {...props.area}
        />
        <Area
          dataKey="desktop"
          type="natural"
          fill="url(#fillDesktop)"
          fillOpacity={0.4}
          stroke="var(--color-desktop)"
          stackId="a"
          {...props.area}
        />
      </AreaChart>
    </Chart>
  );
};

export const LabeledAreaChartExample = (props: AreaChartProps) => {
  return (
    <Chart config={chartConfig} className="h-[250px] w-full">
      <AreaChart {...props.areaChart}>
        <CartesianGrid vertical={false} />
        <XAxis {...props.xAxis} />
        <YAxis {...props.yAxis} />
        <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
        <Area dataKey="month" {...props.area} />
      </AreaChart>
    </Chart>
  );
};

export const WithLegendAreaChartExample = (props: AreaChartProps) => {
  return (
    <Chart config={chartConfig} className="h-[250px] w-full">
      <AreaChart {...props.areaChart}>
        <CartesianGrid vertical={false} />
        <XAxis {...props.xAxis} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <Area
          dataKey="mobile"
          fill="var(--color-mobile)"
          stroke="var(--color-mobile)"
          {...props.area}
        />
        <Area
          dataKey="desktop"
          fill="var(--color-desktop)"
          stroke="var(--color-desktop)"
          {...props.area}
        />
        <ChartLegend content={<ChartLegendContent />} />
      </AreaChart>
    </Chart>
  );
};
