import { Label, LabelList, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { Chart } from "../../Chart";
import { ChartTooltip, ChartTooltipContent } from "../../components";
import { type ChartConfig } from "../../types";
import { RadialBarChartProps } from "../args";

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
 * The RadialBarChart can be used within: `<Chart />`
 *
 * ## Children
 *
 * The RadialBarChart can be used with the following child components: `<PolarAngleAxis />`, `<PolarRadiusAxis />`,
 * `<PolarGrid />`, `<ChartLegend />`, `<ChartTooltip />`, `<RadialBar />`, `<Customized />`
 */
export const RadialChartExample = (props: Partial<RadialBarChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadialBarChart {...props.radialBarChart}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel nameKey="browser" />}
        />
        <RadialBar dataKey="visitors" {...props.radialBar} />
      </RadialBarChart>
    </Chart>
  );
};

export const LabeledRadialChartExample = (props: Partial<RadialBarChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadialBarChart {...props.radialBarChart}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel nameKey="browser" />}
        />
        <RadialBar dataKey="visitors" {...props.radialBar}>
          <LabelList
            position="insideStart"
            dataKey="browser"
            className="fill-white capitalize mix-blend-luminosity"
            fontSize={11}
          />
        </RadialBar>
      </RadialBarChart>
    </Chart>
  );
};

export const GridRadialChartExample = (props: Partial<RadialBarChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadialBarChart {...props.radialBarChart}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel nameKey="browser" />}
        />
        <PolarGrid gridType="circle" />
        <RadialBar dataKey="visitors" {...props.radialBar} />
      </RadialBarChart>
    </Chart>
  );
};

export const TextRadialChartExample = (props: Partial<RadialBarChartProps>) => {
  const chartData = [{ browser: "safari", visitors: 200, fill: "var(--color-safari)" }];
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadialBarChart {...props.radialBarChart}>
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-base-200 last:fill-base-100"
          polarRadius={[86, 74]}
        />
        <RadialBar dataKey="visitors" {...props.radialBar} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-4xl font-bold"
                    >
                      {chartData[0].visitors.toLocaleString()}
                    </tspan>
                    <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-base-content">
                      Visitors
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </Chart>
  );
};

export const ShapeRadialChartExample = (props: Partial<RadialBarChartProps>) => {
  const chartData = [{ browser: "safari", visitors: 1260, fill: "var(--color-safari)" }];
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadialBarChart {...props.radialBarChart}>
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-base-200 last:fill-base-100"
          polarRadius={[86, 74]}
        />
        <RadialBar dataKey="visitors" {...props.radialBar} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-base-content text-4xl font-bold"
                    >
                      {chartData[0].visitors.toLocaleString()}
                    </tspan>
                    <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-base-content">
                      Visitors
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </Chart>
  );
};

export const StackedRadialChartExample = (props: Partial<RadialBarChartProps>) => {
  const chartData = [{ month: "january", desktop: 1260, mobile: 570 }];
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

  const totalVisitors = chartData[0].desktop + chartData[0].mobile;

  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadialBarChart {...props.radialBarChart}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      className="fill-foreground text-2xl font-bold"
                    >
                      {totalVisitors.toLocaleString()}
                    </tspan>
                    <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 4} className="fill-base-content">
                      Visitors
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
        <RadialBar dataKey="desktop" fill="var(--color-desktop)" {...props.radialBar} />
        <RadialBar dataKey="mobile" fill="var(--color-mobile)" {...props.radialBar} />
      </RadialBarChart>
    </Chart>
  );
};
