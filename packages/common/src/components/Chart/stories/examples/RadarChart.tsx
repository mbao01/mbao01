import { type SVGProps } from "react";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";
import { Chart } from "../../Chart";
import {
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components";
import { type ChartConfig } from "../../types";
import { type RadarChartProps } from "../args";

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
 * The RadarChart can be used within: `<Chart />`
 *
 * ## Children
 *
 * The RadarChart can be used with the following child components: `<PolarAngleAxis />`, `<PolarRadiusAxis />`,
 * `<PolarGrid />`, `<ChartLegend />`, `<ChartTooltip />`, `<Radar />`, `<Customized />`
 */
export const RadarChartExample = (props: Partial<RadarChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadarChart {...props.radarChart}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarAngleAxis dataKey="month" />
        <PolarGrid />
        <Radar dataKey="desktop" {...props.radar} />
      </RadarChart>
    </Chart>
  );
};

export const DotRadarChartExample = (props: Partial<RadarChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadarChart {...props.radarChart}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarAngleAxis dataKey="month" />
        <PolarGrid />
        <Radar dataKey="desktop" {...props.radar} />
      </RadarChart>
    </Chart>
  );
};

export const MultipleRadarChartExample = (props: Partial<RadarChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadarChart {...props.radarChart}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <PolarAngleAxis dataKey="month" />
        <PolarGrid />
        <Radar {...props.radar} dataKey="desktop" fill="var(--color-desktop)" fillOpacity={0.6} />
        <Radar {...props.radar} dataKey="mobile" fill="var(--color-mobile)" />
      </RadarChart>
    </Chart>
  );
};

export const LinesRadarChartExample = (props: Partial<RadarChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadarChart {...props.radarChart}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <PolarAngleAxis dataKey="month" />
        <PolarGrid radialLines={false} />
        <Radar
          {...props.radar}
          dataKey="desktop"
          fill="var(--color-desktop)"
          stroke="var(--color-desktop)"
        />
        <Radar
          {...props.radar}
          dataKey="mobile"
          fill="var(--color-mobile)"
          stroke="var(--color-mobile)"
        />
      </RadarChart>
    </Chart>
  );
};

export const CustomLabeledRadarChartExample = (props: Partial<RadarChartProps>) => {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadarChart data={chartData}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <PolarAngleAxis
          dataKey="month"
          tick={({
            x,
            y,
            textAnchor,
            index,
            ...props
          }: SVGProps<SVGTextElement> & { index: number }) => {
            const data = chartData[index];
            return (
              <text
                x={x}
                y={index === 0 ? Number(y) - 10 : y}
                textAnchor={textAnchor}
                fontSize={13}
                fontWeight={500}
                {...props}
              >
                <tspan>{data.desktop}</tspan>
                <tspan className="fill-base-content">/</tspan>
                <tspan>{data.mobile}</tspan>
                <tspan x={x} dy={"1rem"} fontSize={12} className="fill-base-content">
                  {data.month}
                </tspan>
              </text>
            );
          }}
        />
        <PolarGrid />
        <Radar {...props.radar} dataKey="desktop" fill="var(--color-desktop)" fillOpacity={0.6} />
        <Radar {...props.radar} dataKey="mobile" fill="var(--color-mobile)" />
      </RadarChart>
    </Chart>
  );
};

export const RadiusAxisRadarChartExample = (props: Partial<RadarChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadarChart {...props.radarChart}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" labelKey="month" />}
        />
        <PolarGrid />
        <Radar {...props.radar} dataKey="desktop" fill="var(--color-desktop)" fillOpacity={0.6} />
        <Radar {...props.radar} dataKey="mobile" fill="var(--color-mobile)" />
        <PolarRadiusAxis
          angle={60}
          stroke="hsla(var(--foreground))"
          orientation="middle"
          axisLine={false}
        />
      </RadarChart>
    </Chart>
  );
};

export const GridCustomRadarChartExample = (props: Partial<RadarChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadarChart {...props.radarChart}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <PolarGrid radialLines={false} polarRadius={[90]} strokeWidth={1} />
        <PolarAngleAxis dataKey="month" />
        <Radar dataKey="desktop" {...props.radar} />
      </RadarChart>
    </Chart>
  );
};

export const GridFilledRadarChartExample = (props: Partial<RadarChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadarChart {...props.radarChart}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <PolarGrid className="fill-(--color-desktop) opacity-20" />
        <PolarAngleAxis dataKey="month" />
        <Radar dataKey="desktop" {...props.radar} />
      </RadarChart>
    </Chart>
  );
};

export const NoGridRadarChartExample = (props: Partial<RadarChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadarChart {...props.radarChart}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <PolarAngleAxis dataKey="month" />
        <Radar dataKey="desktop" {...props.radar} />
      </RadarChart>
    </Chart>
  );
};

export const GridCircleRadarChartExample = (props: Partial<RadarChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadarChart {...props.radarChart}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="month" />
        <Radar dataKey="desktop" {...props.radar} />
      </RadarChart>
    </Chart>
  );
};

export const NoLinesGridCircleRadarChartExample = (props: Partial<RadarChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadarChart {...props.radarChart}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <PolarGrid gridType="circle" radialLines={false} />
        <PolarAngleAxis dataKey="month" />
        <Radar dataKey="desktop" {...props.radar} />
      </RadarChart>
    </Chart>
  );
};

export const GridCircleFilledRadarChartExample = (props: Partial<RadarChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadarChart {...props.radarChart}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarGrid className="fill-(--color-desktop) opacity-20" gridType="circle" />
        <PolarAngleAxis dataKey="month" />
        <Radar dataKey="desktop" {...props.radar} />
      </RadarChart>
    </Chart>
  );
};

export const LegendRadarChartExample = (props: Partial<RadarChartProps>) => {
  return (
    <Chart config={chartConfig} className="mx-auto aspect-square h-[250px]">
      <RadarChart {...props.radarChart}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <PolarAngleAxis dataKey="month" />
        <PolarGrid />
        <Radar {...props.radar} dataKey="desktop" fill="var(--color-desktop)" fillOpacity={0.6} />
        <Radar {...props.radar} dataKey="mobile" fill="var(--color-mobile)" />
        <ChartLegend className="mt-8" content={<ChartLegendContent />} />
      </RadarChart>
    </Chart>
  );
};
