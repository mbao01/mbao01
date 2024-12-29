import { Bar, BarChart, XAxis } from "recharts";
import type { ChartConfig } from "../../types";
import { Chart } from "../../Chart";
import { ChartTooltip, ChartTooltipContent } from "../../components";
import { type ChartTooltipContentProps } from "../../types";

const chartData = [
  { date: "2024-07-15", running: 450, swimming: 300 },
  { date: "2024-07-16", running: 380, swimming: 420 },
  { date: "2024-07-17", running: 520, swimming: 120 },
  { date: "2024-07-18", running: 140, swimming: 550 },
  { date: "2024-07-19", running: 600, swimming: 350 },
  { date: "2024-07-20", running: 480, swimming: 400 },
];
const tooltipChartConfig = {
  activities: {
    label: "Activities",
  },
  running: {
    label: "Running",
    color: "hsl(var(--chart-3))",
  },
  swimming: {
    label: "Swimming",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const BarChartExample = (props: ChartTooltipContentProps) => {
  return (
    <Chart config={tooltipChartConfig} className="h-[250px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <XAxis
          dataKey="date"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value: string) => {
            return new Date(value).toLocaleDateString("en-US", {
              weekday: "short",
            });
          }}
        />
        <Bar
          isAnimationActive={false}
          dataKey="running"
          stackId="a"
          fill="var(--color-running)"
          radius={[0, 0, 4, 4]}
        />
        <Bar
          isAnimationActive={false}
          dataKey="swimming"
          stackId="a"
          fill="var(--color-swimming)"
          radius={[4, 4, 0, 0]}
        />

        <ChartTooltip
          content={<ChartTooltipContent {...props} />}
          isAnimationActive={false}
          cursor={false}
          defaultIndex={1}
        />
      </BarChart>
    </Chart>
  );
};
