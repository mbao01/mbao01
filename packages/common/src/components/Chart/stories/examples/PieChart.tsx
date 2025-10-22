import { LabelList, Pie, PieChart, Sector } from "recharts";
import { type PieSectorDataItem } from "recharts/types/polar/Pie";
import { Chart } from "../../Chart";
import {
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components";
import { type ChartConfig } from "../../types";
import { type PieChartProps } from "../args";

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

/**
 * ## Parent
 *
 * The PieChart can be used within: `<Chart />`
 *
 * ## Children
 *
 * The PieChart can be used with the following child components: `<PolarAngleAxis />`, `<PolarRadiusAxis />`,
 * `<PolarGrid />`, `<ChartLegend />`, `<ChartTooltip />`, `<Pie />`, `<Customized />`
 */
export const PieChartExample = (props: Partial<PieChartProps>) => {
  return (
    <Chart config={chartConfig} className="h-[250px] w-full">
      <PieChart {...props.pieChart}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie dataKey="visitors" {...props.pie} />
      </PieChart>
    </Chart>
  );
};

export const LabeledPieChartExample = (props: Partial<PieChartProps>) => {
  return (
    <Chart
      config={chartConfig}
      className="mx-auto aspect-square h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-base-content"
    >
      <PieChart {...props.pieChart}>
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Pie dataKey="visitors" {...props.pie} />
      </PieChart>
    </Chart>
  );
};

export const CustomLabeledPieChartExample = (props: Partial<PieChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <PieChart {...props.pieChart}>
        <ChartTooltip content={<ChartTooltipContent nameKey="visitors" hideLabel />} />
        <Pie
          dataKey="visitors"
          {...props.pie}
          label={({ payload, ...props }) => {
            return (
              <text
                cx={props.cx}
                cy={props.cy}
                x={props.x}
                y={props.y}
                textAnchor={props.textAnchor}
                dominantBaseline={props.dominantBaseline}
                className="fill-base-content"
              >
                {`${
                  chartConfig[
                    (payload as Record<string, string>).browser as keyof typeof chartConfig
                  ]?.label
                } (${(payload as Record<string, string>).visitors})`}
              </text>
            );
          }}
        />
      </PieChart>
    </Chart>
  );
};

export const LabelListPieChartExample = (props: Partial<PieChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <PieChart {...props.pieChart}>
        <ChartTooltip content={<ChartTooltipContent nameKey="visitors" hideLabel />} />
        <Pie dataKey="visitors" {...props.pie}>
          <LabelList
            dataKey="browser"
            className="fill-base-100"
            stroke="none"
            fontSize={12}
            formatter={(value) => {
              if (typeof value === "string")
                return chartConfig[value as keyof typeof chartConfig]?.label;
            }}
            {...props}
          />
        </Pie>
      </PieChart>
    </Chart>
  );
};

export const WithLegendPieChartExample = (props: Partial<PieChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <PieChart {...props.pieChart}>
        <Pie dataKey="visitors" {...props.pie} />
        <ChartLegend
          content={<ChartLegendContent nameKey="browser" />}
          className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
        />
      </PieChart>
    </Chart>
  );
};

export const DonutPieChartExample = (props: Partial<PieChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <PieChart {...props.pieChart}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie dataKey="visitors" {...props.pie} />
      </PieChart>
    </Chart>
  );
};

export const ActiveDonutPieChartExample = (props: Partial<PieChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <PieChart {...props.pieChart}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie
          dataKey="visitors"
          {...props.pie}
          activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
            <Sector {...props} outerRadius={outerRadius + 10} />
          )}
        />
      </PieChart>
    </Chart>
  );
};

export const StackedPieChartExample = (props: Partial<PieChartProps>) => {
  const desktopData = [
    { month: "january", desktop: 186, fill: "var(--color-january)" },
    { month: "february", desktop: 305, fill: "var(--color-february)" },
    { month: "march", desktop: 237, fill: "var(--color-march)" },
    { month: "april", desktop: 173, fill: "var(--color-april)" },
    { month: "may", desktop: 209, fill: "var(--color-may)" },
  ];
  const mobileData = [
    { month: "january", mobile: 80, fill: "var(--color-january)" },
    { month: "february", mobile: 200, fill: "var(--color-february)" },
    { month: "march", mobile: 120, fill: "var(--color-march)" },
    { month: "april", mobile: 190, fill: "var(--color-april)" },
    { month: "may", mobile: 130, fill: "var(--color-may)" },
  ];
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    desktop: {
      label: "Desktop",
    },
    mobile: {
      label: "Mobile",
    },
    january: {
      label: "January",
      color: "hsl(var(--chart-1))",
    },
    february: {
      label: "February",
      color: "hsl(var(--chart-2))",
    },
    march: {
      label: "March",
      color: "hsl(var(--chart-3))",
    },
    april: {
      label: "April",
      color: "hsl(var(--chart-4))",
    },
    may: {
      label: "May",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <PieChart {...props.pieChart}>
        <ChartTooltip
          content={
            <ChartTooltipContent
              labelKey="visitors"
              nameKey="month"
              indicator="line"
              labelFormatter={(_, payload) => {
                return chartConfig[payload?.[0].dataKey as keyof typeof chartConfig].label;
              }}
            />
          }
        />
        <Pie {...props.pie} data={desktopData} dataKey="desktop" outerRadius={60} />
        <Pie {...props.pie} data={mobileData} dataKey="mobile" innerRadius={70} outerRadius={90} />
      </PieChart>
    </Chart>
  );
};
