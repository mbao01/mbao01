import type { Meta, StoryContext, StoryObj } from "@storybook/react-vite";
import { scatterChartArgs, ScatterChartArgs } from "./args";
import {
  BubbleScatterChartExample,
  MultiSeriesScatterChartExample,
  ScatterChartExample,
  ShapesScatterChartExample,
  WithLineScatterChartExample,
} from "./examples/ScatterChart";
import { getArgsFromArgTypes, renderer, withArgs } from "./helpers";

const chartData = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const withTheme = (Component: React.FC<ScatterChartArgs>, context: StoryContext<ScatterChartArgs>) => {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --chart-1: 221 83% 53%;
          --chart-2: 262 83% 58%;
          --chart-3: 316 72% 51%;
          --chart-4: 198 93% 60%;
          --chart-5: 175 80% 40%;
        }
        .dark {
          --chart-1: 217 91% 60%;
          --chart-2: 263 70% 50%;
          --chart-3: 316 72% 51%;
          --chart-4: 198 93% 60%;
          --chart-5: 175 80% 40%;
        }
        `,
        }}
      />
      <Component {...context.args} />
    </div>
  );
};

const meta = {
  title: "Organisms/Chart/ScatterChart",
  component: ScatterChartExample as (args: ScatterChartArgs) => React.JSX.Element,
  parameters: {
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
  tags: ["autodocs"],
  argTypes: scatterChartArgs,
  args: getArgsFromArgTypes(scatterChartArgs),
  decorators: [withTheme, withArgs],
} satisfies Meta<ScatterChartArgs>;

export default meta;
type Story = StoryObj<ScatterChartArgs>;

export const Default: Story = {
  args: {
    "scatter isAnimationActive": false,
    "scatter fill": "var(--color-desktop)",
    "scatter dataKey": "y",
    "xAxis dataKey": "x",
    "xAxis type": "number",
    "xAxis tickLine": false,
    "xAxis axisLine": false,
    "xAxis tickMargin": 8,
    "yAxis dataKey": "y",
    "yAxis type": "number",
    "yAxis tickLine": false,
    "yAxis axisLine": false,
    "yAxis tickMargin": 8,
    "scatterChart accessibilityLayer": true,
    "scatterChart data": chartData,
  },
};

export const MultiSeries: Story = {
  args: {
    "scatter isAnimationActive": false,
    "xAxis dataKey": "x",
    "xAxis type": "number",
    "xAxis tickLine": false,
    "xAxis axisLine": false,
    "xAxis tickMargin": 8,
    "yAxis dataKey": "y",
    "yAxis type": "number",
    "yAxis tickLine": false,
    "yAxis axisLine": false,
    "yAxis tickMargin": 8,
    "scatterChart accessibilityLayer": true,
  },
  render: renderer(MultiSeriesScatterChartExample),
};

const bubbleData = [
  { hours: 2, score: 65, students: 120 },
  { hours: 3, score: 72, students: 200 },
  { hours: 4, score: 78, students: 300 },
  { hours: 5, score: 82, students: 180 },
  { hours: 6, score: 88, students: 250 },
  { hours: 7, score: 91, students: 150 },
  { hours: 8, score: 95, students: 100 },
  { hours: 1, score: 55, students: 80 },
  { hours: 3.5, score: 70, students: 220 },
  { hours: 5.5, score: 85, students: 160 },
];

export const Bubble: Story = {
  args: {
    "scatter isAnimationActive": false,
    "scatterChart accessibilityLayer": true,
    "scatterChart data": bubbleData,
  },
  render: renderer(BubbleScatterChartExample),
};

const performanceData = [
  { x: 1, y: 45 },
  { x: 2, y: 52 },
  { x: 3, y: 58 },
  { x: 4, y: 63 },
  { x: 5, y: 68 },
  { x: 6, y: 72 },
  { x: 7, y: 78 },
  { x: 8, y: 82 },
  { x: 10, y: 90 },
  { x: 12, y: 95 },
];

export const WithLine: Story = {
  args: {
    "scatter isAnimationActive": false,
    "scatterChart accessibilityLayer": true,
    "scatterChart data": performanceData,
  },
  render: renderer(WithLineScatterChartExample),
};

export const Shapes: Story = {
  args: {
    "scatter isAnimationActive": false,
    "scatterChart accessibilityLayer": true,
  },
  render: renderer(ShapesScatterChartExample),
};