import type { Meta, StoryContext, StoryObj } from "@storybook/react";
import type { AreaChartArgs } from "./args";
import { areaChartArgs } from "./args";
import {
  AreaChartExample,
  LabeledAreaChartExample,
  StackedAreaChartExample,
  StackedExpandedAreaChartExample,
  WithLegendAreaChartExample,
} from "./examples/AreaChart";
import { getArgsFromArgTypes, renderer, withArgs } from "./helpers";

const chartData = [
  { month: "January", desktop: 186, mobile: 80, other: 45 },
  { month: "February", desktop: 305, mobile: 200, other: 100 },
  { month: "March", desktop: 237, mobile: 120, other: 150 },
  { month: "April", desktop: 73, mobile: 190, other: 50 },
  { month: "May", desktop: 209, mobile: 130, other: 100 },
  { month: "June", desktop: 214, mobile: 140, other: 160 },
];

const withTheme = (Component: React.FC<AreaChartArgs>, context: StoryContext<AreaChartArgs>) => {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --chart-1: 12 76% 61%;
          --chart-2: 173 58% 39%;
          --chart-3: 197 37% 24%;
          --chart-4: 43 74% 66%;
          --chart-5: 27 87% 67%;
        }
      
        .dark {
          --chart-1: 220 70% 50%;
          --chart-2: 160 60% 45%;
          --chart-3: 30 80% 55%;
          --chart-4: 280 65% 60%;
          --chart-5: 340 75% 55%;
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
  title: "Components/Chart/Area",
  component: AreaChartExample as (args: AreaChartArgs) => React.JSX.Element,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    // backgrounds: [{ name: 'dark background', value: '#000', default: true }],
    a11y: {
      config: {
        rules: [
          {
            // @fixme
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
  argTypes: areaChartArgs,
  args: getArgsFromArgTypes(areaChartArgs),
  decorators: [withTheme, withArgs],
} satisfies Meta<AreaChartArgs>;

export default meta;
type Story = StoryObj<AreaChartArgs>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    "area isAnimationActive": false,
    "area dataKey": "desktop",
    "area type": "natural",
    "area fill": "var(--color-desktop)",
    "area fillOpacity": 0.4,
    "area stroke": "var(--color-desktop)",
    "xAxis dataKey": "month",
    "xAxis tickLine": false,
    "xAxis axisLine": false,
    "xAxis tickMargin": 8,
    "xAxis tickFormatter": (value: string) => value.slice(0, 3),
    "areaChart accessibilityLayer": true,
    "areaChart data": chartData,
    "areaChart margin": {
      left: 12,
      right: 12,
    },
  },
};

export const LinearAreaChart: Story = {
  args: {
    "area isAnimationActive": false,
    "area dataKey": "desktop",
    "area type": "linear",
    "area fill": "var(--color-desktop)",
    "area fillOpacity": 0.4,
    "area stroke": "var(--color-desktop)",
    "xAxis dataKey": "month",
    "xAxis tickLine": false,
    "xAxis axisLine": false,
    "xAxis tickMargin": 8,
    "xAxis tickFormatter": (value: string) => value.slice(0, 3),
    "areaChart accessibilityLayer": true,
    "areaChart data": chartData,
    "areaChart margin": {
      left: 12,
      right: 12,
    },
  },
};

export const StepAreaChart: Story = {
  args: {
    "area isAnimationActive": false,
    "area dataKey": "desktop",
    "area type": "step",
    "area fill": "var(--color-desktop)",
    "area fillOpacity": 0.4,
    "area stroke": "var(--color-desktop)",
    "xAxis dataKey": "month",
    "xAxis tickLine": false,
    "xAxis axisLine": false,
    "xAxis tickMargin": 8,
    "xAxis tickFormatter": (value: string) => value.slice(0, 3),
    "areaChart accessibilityLayer": true,
    "areaChart data": chartData,
    "areaChart margin": {
      left: 12,
      right: 12,
    },
  },
};

export const StackedAreaChart: Story = {
  args: {
    "area isAnimationActive": false,
    "area type": "natural",
    "area fillOpacity": 0.4,
    "area stackId": "a",
    "xAxis dataKey": "month",
    "xAxis tickLine": false,
    "xAxis axisLine": false,
    "xAxis tickMargin": 8,
    "xAxis tickFormatter": (value: string) => value.slice(0, 3),
    "areaChart accessibilityLayer": true,
    "areaChart data": chartData,
    "areaChart margin": {
      left: 12,
      right: 12,
    },
  },
  render: renderer(StackedAreaChartExample),
};

export const StepStackedAreaChart: Story = {
  args: {
    "area isAnimationActive": false,
    "area type": "step",
    "area fillOpacity": 0.4,
    "area stackId": "a",
    "xAxis dataKey": "month",
    "xAxis tickLine": false,
    "xAxis axisLine": false,
    "xAxis tickMargin": 8,
    "xAxis tickFormatter": (value: string) => value.slice(0, 3),
    "areaChart accessibilityLayer": true,
    "areaChart data": chartData,
    "areaChart margin": {
      left: 12,
      right: 12,
    },
  },
  render: renderer(StackedAreaChartExample),
};

export const GradientStackedExpandedAreaChart: Story = {
  args: {
    "area isAnimationActive": false,
    "area type": "natural",
    "area stackId": "a",
    "xAxis dataKey": "month",
    "xAxis tickLine": false,
    "xAxis axisLine": false,
    "xAxis tickMargin": 8,
    "xAxis tickFormatter": (value: string) => value.slice(0, 3),
    "areaChart accessibilityLayer": true,
    "areaChart data": chartData,
    "areaChart stackOffset": "expand",
    "areaChart margin": {
      top: 12,
      left: 12,
      right: 12,
    },
  },
  render: renderer(StackedExpandedAreaChartExample),
};

export const LabeledAreaChart: Story = {
  args: {
    "area isAnimationActive": false,
    "area dataKey": "desktop",
    "area type": "natural",
    "area fill": "var(--color-desktop)",
    "area fillOpacity": 0.4,
    "area stroke": "var(--color-desktop)",
    "xAxis dataKey": "month",
    "xAxis tickLine": false,
    "xAxis axisLine": false,
    "xAxis tickMargin": 8,
    "xAxis tickFormatter": (value: string) => value.slice(0, 3),
    "yAxis dataKey": "desktop",
    "yAxis tickLine": false,
    "yAxis axisLine": false,
    "yAxis tickCount": 3,
    "yAxis tickMargin": 8,
    "areaChart accessibilityLayer": true,
    "areaChart data": chartData,
    "areaChart margin": {
      left: 12,
      right: 12,
    },
  },
  render: renderer(LabeledAreaChartExample),
};

export const WithLegendAreaChart: Story = {
  args: {
    "area isAnimationActive": false,
    "area type": "natural",
    "area fillOpacity": 0.4,
    "area stackId": "a",
    "xAxis dataKey": "month",
    "xAxis tickLine": false,
    "xAxis axisLine": false,
    "xAxis tickMargin": 8,
    "xAxis tickFormatter": (value: string) => value.slice(0, 3),
    "yAxis tickLine": false,
    "yAxis axisLine": false,
    "yAxis tickCount": 3,
    "yAxis tickMargin": 8,
    "areaChart accessibilityLayer": true,
    "areaChart data": chartData,
    "areaChart margin": {
      left: 12,
      right: 12,
    },
  },
  render: renderer(WithLegendAreaChartExample),
};
