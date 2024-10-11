import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import type { BarChartArgs } from "./args";
import { barChartArgs } from "./args";
import {
  ActiveBarChartExample,
  BarChartExample,
  CustomLabelBarChartExample,
  HorizontalBarChartExample,
  LabelBarChartExample,
  MixedBarChartExample,
  MultipleBarChartExample,
  NegativeBarChartExample,
  StackedBarChartExample,
} from "./examples/BarChart";
import { getArgsFromArgTypes, renderer, withArgs } from "./helpers";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const withTheme = (Component: StoryFn, context: StoryContext<BarChartArgs>) => {
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
const meta: Meta<BarChartArgs> = {
  title: "Components/Chart/Bar",
  component: BarChartExample,
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
  argTypes: barChartArgs,
  args: getArgsFromArgTypes(barChartArgs),
  decorators: [withTheme, withArgs],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    "bar isAnimationActive": false,
  },
};

export const MultipleBarChart: Story = {
  args: {
    "bar isAnimationActive": false,
    "xAxis dataKey": "month",
    "xAxis tickLine": false,
    "xAxis tickMargin": 10,
    "xAxis axisLine": false,
    "xAxis tickFormatter": (value: string) => value.slice(0, 3),
    "barChart accessibilityLayer": true,
    "barChart data": chartData,
  },
  render: renderer(MultipleBarChartExample),
};

export const HorizontalBarChart: Story = {
  args: {
    "bar isAnimationActive": false,
    "xAxis type": "number",
    "xAxis dataKey": "desktop",
    "xAxis hide": true,
    "yAxis dataKey": "month",
    "yAxis type": "category",
    "yAxis tickLine": false,
    "yAxis tickMargin": 10,
    "yAxis axisLine": false,
    "yAxis tickFormatter": (value: string) => value.slice(0, 3),
    "barChart accessibilityLayer": true,
    "barChart data": chartData,
    "barChart layout": "vertical",
    "barChart margin": {
      left: -20,
    },
  },
  render: renderer(HorizontalBarChartExample),
};

export const LabelBarChart: Story = {
  args: {
    "bar isAnimationActive": false,
    "xAxis dataKey": "month",
    "xAxis tickLine": false,
    "xAxis tickMargin": 10,
    "xAxis axisLine": false,
    "xAxis tickFormatter": (value: string) => value.slice(0, 3),
    "barChart accessibilityLayer": true,
    "barChart data": chartData,
    "barChart margin": {
      top: 20,
    },
  },
  render: renderer(LabelBarChartExample),
};

export const CustomLabelBarChart: Story = {
  args: {
    "bar isAnimationActive": false,
    "xAxis type": "number",
    "xAxis dataKey": "desktop",
    "xAxis hide": true,
    "yAxis dataKey": "month",
    "yAxis type": "category",
    "yAxis tickLine": false,
    "yAxis tickMargin": 10,
    "yAxis axisLine": false,
    "yAxis hide": true,
    "yAxis tickFormatter": (value: string) => value.slice(0, 3),
    "barChart accessibilityLayer": true,
    "barChart data": chartData,
    "barChart layout": "vertical",
    "barChart margin": {
      right: 16,
    },
  },
  render: renderer(CustomLabelBarChartExample),
};

const mixedChartData = [
  { browser: "chrome", visitors: 187, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 275, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];
export const MixedBarChart: Story = {
  args: {
    "bar isAnimationActive": false,
    "xAxis type": "number",
    "xAxis dataKey": "visitors",
    "xAxis hide": true,
    "yAxis dataKey": "browser",
    "yAxis type": "category",
    "yAxis tickLine": false,
    "yAxis tickMargin": 10,
    "yAxis axisLine": false,
    "barChart accessibilityLayer": true,
    "barChart data": mixedChartData,
    "barChart layout": "vertical",
    "barChart margin": {
      left: 0,
    },
  },
  render: renderer(MixedBarChartExample),
};

export const StackedBarChart: Story = {
  args: {
    "bar isAnimationActive": false,
    "xAxis dataKey": "month",
    "xAxis tickLine": false,
    "xAxis tickMargin": 10,
    "xAxis axisLine": false,
    "xAxis tickFormatter": (value: string) => value.slice(0, 3),
    "barChart accessibilityLayer": true,
    "barChart data": chartData,
  },
  render: renderer(StackedBarChartExample),
};

export const ActiveBarChart: Story = {
  args: {
    "bar isAnimationActive": false,
    "xAxis dataKey": "browser",
    "xAxis tickLine": false,
    "xAxis tickMargin": 10,
    "xAxis axisLine": false,
    "barChart accessibilityLayer": true,
    "barChart data": mixedChartData,
  },
  render: renderer(ActiveBarChartExample),
};

const negativeChartData = [
  { month: "January", visitors: 186 },
  { month: "February", visitors: 205 },
  { month: "March", visitors: -207 },
  { month: "April", visitors: 173 },
  { month: "May", visitors: -209 },
  { month: "June", visitors: 214 },
];
export const NegativeBarChart: Story = {
  args: {
    "bar isAnimationActive": false,
    "barChart accessibilityLayer": true,
    "barChart data": negativeChartData,
  },
  render: renderer(NegativeBarChartExample),
};
