import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import type { RadialBarChartArgs } from "./args";
import { radialBarChartArgs } from "./args";
import {
  GridRadialChartExample,
  LabeledRadialChartExample,
  RadialChartExample,
  ShapeRadialChartExample,
  StackedRadialChartExample,
  TextRadialChartExample,
} from "./examples/RadialChart";
import { getArgsFromArgTypes, renderer, withArgs } from "./helpers";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const withTheme = (Component: StoryFn, context: StoryContext<RadialBarChartArgs>) => {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --chart-1: 25 34% 28%;
          --chart-2: 26 36% 34%;
          --chart-3: 28 40% 40%;
          --chart-4: 31 41% 48%;
          --chart-5: 35 43% 53%;
        }
        .dark {
          --chart-1: 25 34% 28%;
          --chart-2: 26 36% 34%;
          --chart-3: 28 40% 40%;
          --chart-4: 31 41% 48%;
          --chart-5: 35 43% 53%;
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
  title: "Components/Chart/Radial",
  component: RadialChartExample as any,
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
  argTypes: radialBarChartArgs,
  args: getArgsFromArgTypes(radialBarChartArgs),
  decorators: [withTheme, withArgs],
} satisfies Meta<RadialBarChartArgs>;

export default meta;
type Story = StoryObj<RadialBarChartArgs>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    "radialBar isAnimationActive": false,
    "radialBar dataKey": "visitors",
    "radialBar background": true,
    "radialBarChart data": chartData,
    "radialBarChart innerRadius": 30,
    "radialBarChart outerRadius": 110,
  },
};

export const LabeledRadialChart: Story = {
  args: {
    "radialBar isAnimationActive": false,
    "radialBar background": true,
    "radialBar dataKey": "visitors",
    "radialBarChart data": chartData,
    "radialBarChart startAngle": -90,
    "radialBarChart endAngle": 380,
    "radialBarChart innerRadius": 30,
    "radialBarChart outerRadius": 110,
  },
  render: renderer(LabeledRadialChartExample),
};

export const GridRadialChart: Story = {
  args: {
    "radialBar isAnimationActive": false,
    "radialBar dataKey": "visitors",
    "radialBarChart data": chartData,
    "radialBarChart innerRadius": 30,
    "radialBarChart outerRadius": 100,
  },
  render: renderer(GridRadialChartExample),
};

export const TextRadialChart: Story = {
  args: {
    "radialBar isAnimationActive": false,
    "radialBar dataKey": "visitors",
    "radialBar background": true,
    "radialBar cornerRadius": 10,
    "radialBarChart data": chartData,
    "radialBarChart startAngle": 0,
    "radialBarChart endAngle": 250,
    "radialBarChart innerRadius": 80,
    "radialBarChart outerRadius": 110,
  },
  render: renderer(TextRadialChartExample),
};

export const ShapeRadialChart: Story = {
  args: {
    "radialBar isAnimationActive": false,
    "radialBar dataKey": "visitors",
    "radialBar background": true,
    "radialBarChart data": chartData,
    "radialBarChart endAngle": 100,
    "radialBarChart innerRadius": 80,
    "radialBarChart outerRadius": 140,
  },
  render: renderer(ShapeRadialChartExample),
};

export const StackedRadialChart: Story = {
  args: {
    "radialBar isAnimationActive": false,
    "radialBar stackId": "a",
    "radialBar cornerRadius": 5,
    "radialBar className": "stroke-transparent stroke-2",
    "radialBarChart data": chartData,
    "radialBarChart endAngle": 180,
    "radialBarChart innerRadius": 80,
    "radialBarChart outerRadius": 130,
  },
  render: renderer(StackedRadialChartExample),
};
