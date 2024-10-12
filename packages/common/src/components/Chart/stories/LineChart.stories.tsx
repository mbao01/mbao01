import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import { lineChartArgs, LineChartArgs } from "./args";
import {
  CustomDotLineChartExample,
  LabeledLineChartExample,
  LineChartExample,
  StackedLineChartExample,
  WithLegendLineChartExample,
} from "./examples/LineChart";
import { getArgsFromArgTypes, renderer, withArgs } from "./helpers";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const withTheme = (Component: StoryFn, context: StoryContext<LineChartArgs>) => {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --chart-1: 139 65% 20%;
          --chart-2: 140 74% 44%;
          --chart-3: 142 88% 28%;
          --chart-4: 137 55% 15%;
          --chart-5: 141 40% 9%;
        }
        .dark {
          --chart-1: 142 88% 28%;
          --chart-2: 139 65% 20%;
          --chart-3: 140 74% 24%;
          --chart-4: 137 55% 15%;
          --chart-5: 141 40% 9%;
        }
        `,
        }}
      />
      <Component {...context.args} />
    </div>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Chart/Line",
  component: LineChartExample as any,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            reviewOnFail: true,
          },
        ],
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: lineChartArgs,
  args: getArgsFromArgTypes(lineChartArgs),
  decorators: [withTheme, withArgs],
} satisfies Meta<LineChartArgs>;

export default meta;
type Story = StoryObj<LineChartArgs>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    "line isAnimationActive": false,
    "line dataKey": "desktop",
    "line type": "natural",
    "line stroke": "var(--color-desktop)",
    "line strokeWidth": 2,
    "line dot": false,
    "lineChart accessibilityLayer": true,
    "lineChart data": chartData,
    "lineChart margin": {
      left: 12,
      right: 12,
    },
  },
};

export const LinearLineChart: Story = {
  args: {
    "line isAnimationActive": false,
    "line dataKey": "desktop",
    "line type": "linear",
    "line stroke": "var(--color-desktop)",
    "line strokeWidth": 2,
    "line dot": false,
    "xAxis dataKey": "month",
    "xAxis tickLine": false,
    "xAxis axisLine": false,
    "xAxis tickMargin": 8,
    "xAxis tickFormatter": (value: string) => value.slice(0, 3),
    "lineChart accessibilityLayer": true,
    "lineChart data": chartData,
    "lineChart margin": {
      left: 12,
      right: 12,
    },
  },
};

export const StepLineChart: Story = {
  args: {
    "line isAnimationActive": false,
    "line dataKey": "desktop",
    "line type": "step",
    "line stroke": "var(--color-desktop)",
    "line strokeWidth": 2,
    "line dot": false,
    "xAxis dataKey": "month",
    "xAxis tickLine": false,
    "xAxis axisLine": false,
    "xAxis tickMargin": 8,
    "xAxis tickFormatter": (value: string) => value.slice(0, 3),
    "lineChart accessibilityLayer": true,
    "lineChart data": chartData,
    "lineChart margin": {
      left: 12,
      right: 12,
    },
  },
};

export const StackedLineChart: Story = {
  args: {
    "line isAnimationActive": false,
    "line type": "natural",
    "line dot": false,
    "line fillOpacity": 0.4,
    "xAxis dataKey": "month",
    "xAxis tickLine": false,
    "xAxis axisLine": false,
    "xAxis tickMargin": 8,
    "xAxis tickFormatter": (value: string) => value.slice(0, 3),
    "lineChart accessibilityLayer": true,
    "lineChart data": chartData,
    "lineChart margin": {
      left: 12,
      right: 12,
    },
  },
  render: renderer(StackedLineChartExample),
};

export const StepStackedLineChart: Story = {
  args: {
    "line isAnimationActive": false,
    "line type": "step",
    "line dot": false,
    "lineChart data": chartData,
    "xAxis dataKey": "month",
  },
  render: renderer(StackedLineChartExample),
};

export const CustomDotLineChart: Story = {
  args: {
    "line isAnimationActive": false,
    "line dataKey": "desktop",
    "line type": "natural",
    "line stroke": "var(--color-desktop)",
    "line strokeWidth": 2,
    "xAxis dataKey": "month",
    "xAxis tickLine": false,
    "xAxis axisLine": false,
    "xAxis tickMargin": 8,
    "xAxis tickFormatter": (value: string) => value.slice(0, 3),
    "lineChart accessibilityLayer": true,
    "lineChart data": chartData,
    "lineChart margin": {
      left: 12,
      right: 12,
    },
  },
  render: renderer(CustomDotLineChartExample),
};

export const LabeledLineChart: Story = {
  args: {
    "line isAnimationActive": false,
    "line dataKey": "desktop",
    "line type": "natural",
    "line stroke": "var(--color-desktop)",
    "line strokeWidth": 2,
    "line dot": {
      fill: "var(--color-desktop)",
    },
    "line activeDot": {
      r: 6,
    },
    "xAxis dataKey": "month",
    "xAxis tickLine": false,
    "xAxis axisLine": false,
    "xAxis tickMargin": 8,
    "xAxis tickFormatter": (value: string) => value.slice(0, 3),
    "yAxis dataKey": "desktop",
    "yAxis tickLine": false,
    "yAxis axisLine": false,
    "yAxis tickMargin": 8,
    "yAxis tickCount": 3,
    "lineChart accessibilityLayer": true,
    "lineChart data": chartData,
    "lineChart margin": {
      top: 20,
      left: 12,
      right: 12,
    },
  },
  render: renderer(LabeledLineChartExample),
};

export const WithLegendLineChart: Story = {
  args: {
    "line isAnimationActive": false,
    "line type": "natural",
    "line fillOpacity": 0.4,
    "xAxis dataKey": "month",
    "xAxis tickLine": false,
    "xAxis axisLine": false,
    "xAxis tickMargin": 8,
    "xAxis tickFormatter": (value: string) => value.slice(0, 3),
    "lineChart accessibilityLayer": true,
    "lineChart data": chartData,
    "lineChart margin": {
      left: 12,
      right: 12,
    },
  },
  render: renderer(WithLegendLineChartExample),
};
