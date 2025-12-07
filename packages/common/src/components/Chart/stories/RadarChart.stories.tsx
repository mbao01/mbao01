import type { Meta, StoryContext, StoryObj } from "@storybook/react-vite";
import type { RadarChartArgs } from "./args";
import { radarChartArgs } from "./args";
import {
  CustomLabeledRadarChartExample,
  DotRadarChartExample,
  GridCircleFilledRadarChartExample,
  GridCircleRadarChartExample,
  GridCustomRadarChartExample,
  GridFilledRadarChartExample,
  LegendRadarChartExample,
  LinesRadarChartExample,
  MultipleRadarChartExample,
  NoGridRadarChartExample,
  NoLinesGridCircleRadarChartExample,
  RadarChartExample,
  RadiusAxisRadarChartExample,
} from "./examples/RadarChart";
import { getArgsFromArgTypes, renderer, withArgs } from "./helpers";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const withTheme = (Component: React.FC<RadarChartArgs>, context: StoryContext<RadarChartArgs>) => {
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
  title: "Organisms/Chart/RadarChart",
  component: RadarChartExample as (args: RadarChartArgs) => React.JSX.Element,
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
  argTypes: radarChartArgs,
  args: getArgsFromArgTypes(radarChartArgs),
  decorators: [withTheme, withArgs],
} satisfies Meta<RadarChartArgs>;

export default meta;
type Story = StoryObj<RadarChartArgs>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    "radar isAnimationActive": false,
    "radar dataKey": "desktop",
    "radar fill": "var(--color-desktop)",
    "radar fillOpacity": 0.6,
    "radarChart data": chartData,
  },
};

export const DotRadarChart: Story = {
  args: {
    "radar isAnimationActive": false,
    "radar dataKey": "desktop",
    "radar fill": "var(--color-desktop)",
    "radar fillOpacity": 0.6,
    "radar dot": {
      r: 4,
      fillOpacity: 1,
    },
    "radarChart data": chartData,
  },
  render: renderer(DotRadarChartExample),
};

export const MultipleRadarChart: Story = {
  args: { "radar isAnimationActive": false, "radarChart data": chartData },
  render: renderer(MultipleRadarChartExample),
};

export const LinesRadarChart: Story = {
  args: {
    "radar isAnimationActive": false,
    "radarChart data": chartData,
    "radar fillOpacity": 0,
    "radar strokeWidth": 2,
  },
  render: renderer(LinesRadarChartExample),
};

export const CustomLabeledRadarChart: Story = {
  args: {
    "radar isAnimationActive": false,
    "radarChart margin": {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    },
  },
  render: renderer(CustomLabeledRadarChartExample),
};

export const RadiusAxisRadarChart: Story = {
  args: { "radar isAnimationActive": false, "radarChart data": chartData },
  render: renderer(RadiusAxisRadarChartExample),
};

export const GridCustomRadarChart: Story = {
  args: {
    "radar isAnimationActive": false,
    "radarChart data": chartData,
    "radar dataKey": "desktop",
    "radar fill": "var(--color-desktop)",
    "radar fillOpacity": 0.6,
  },
  render: renderer(GridCustomRadarChartExample),
};

export const GridFilledRadarChart: Story = {
  args: {
    "radar isAnimationActive": false,
    "radarChart data": chartData,
    "radar dataKey": "desktop",
    "radar fill": "var(--color-desktop)",
    "radar fillOpacity": 0.5,
  },
  render: renderer(GridFilledRadarChartExample),
};

export const NoGridRadarChart: Story = {
  args: {
    "radar isAnimationActive": false,
    "radarChart data": chartData,
    "radar dataKey": "desktop",
    "radar fill": "var(--color-desktop)",
    "radar fillOpacity": 0.6,
    "radar dot": {
      r: 4,
      fillOpacity: 1,
    },
  },
  render: renderer(NoGridRadarChartExample),
};

export const GridCircleRadarChart: Story = {
  args: {
    "radar isAnimationActive": false,
    "radarChart data": chartData,
    "radar dataKey": "desktop",
    "radar fill": "var(--color-desktop)",
    "radar fillOpacity": 0.6,
    "radar dot": {
      r: 4,
      fillOpacity: 1,
    },
  },
  render: renderer(GridCircleRadarChartExample),
};

export const NoLinesGridCircleRadarChart: Story = {
  args: {
    "radar isAnimationActive": false,
    "radarChart data": chartData,
    "radar dataKey": "desktop",
    "radar fill": "var(--color-desktop)",
    "radar fillOpacity": 0.6,
    "radar dot": {
      r: 4,
      fillOpacity: 1,
    },
  },
  render: renderer(NoLinesGridCircleRadarChartExample),
};

export const GridCircleFilledRadarChart: Story = {
  args: {
    "radar isAnimationActive": false,
    "radarChart data": chartData,
    "radar dataKey": "desktop",
    "radar fill": "var(--color-desktop)",
    "radar fillOpacity": 0.5,
  },
  render: renderer(GridCircleFilledRadarChartExample),
};

export const LegendRadarChart: Story = {
  args: {
    "radar isAnimationActive": false,
    "radarChart data": chartData,
    "radarChart margin": {
      top: -40,
      bottom: -10,
      right: 0,
      left: 0,
    },
  },
  render: renderer(LegendRadarChartExample),
};
