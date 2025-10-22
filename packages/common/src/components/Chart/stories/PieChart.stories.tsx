import type { Meta, StoryContext, StoryObj } from "@storybook/react-vite";
import type { PieChartArgs } from "./args";
import { pieChartArgs } from "./args";
import {
  ActiveDonutPieChartExample,
  CustomLabeledPieChartExample,
  DonutPieChartExample,
  LabeledPieChartExample,
  LabelListPieChartExample,
  PieChartExample,
  StackedPieChartExample,
  WithLegendPieChartExample,
} from "./examples/PieChart";
import { getArgsFromArgTypes, renderer, withArgs } from "./helpers";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const withTheme = (Component: React.FC<PieChartArgs>, context: StoryContext<PieChartArgs>) => {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --chart-1: 221.2 83.2% 53.3%;
          --chart-2: 212 95% 68%;
          --chart-3: 216 92% 60%;
          --chart-4: 210 98% 78%;
          --chart-5: 212 97% 87%;
        }
        .dark {
          --chart-1: 221.2 83.2% 53.3%;
          --chart-2: 212 95% 68%;
          --chart-3: 216 92% 60%;
          --chart-4: 210 98% 78%;
          --chart-5: 212 97% 87%;
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
  title: "Components/Chart/Pie",
  component: PieChartExample as (args: PieChartArgs) => React.JSX.Element,
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
  argTypes: pieChartArgs,
  args: getArgsFromArgTypes(pieChartArgs),
  decorators: [withTheme, withArgs],
} satisfies Meta<PieChartArgs>;

export default meta;
type Story = StoryObj<PieChartArgs>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    "pie isAnimationActive": false,
    "pie data": chartData,
    "pie dataKey": "visitors",
    "pie nameKey": "browser",
  },
};

export const PieChart: Story = {
  args: {
    "pie isAnimationActive": false,
    "pie data": chartData,
    "pie dataKey": "visitors",
    "pie nameKey": "browser",
  },
};

export const LabeledPieChart: Story = {
  args: {
    "pie isAnimationActive": false,
    "pie data": chartData,
    "pie dataKey": "visitors",
    "pie label": true,
    "pie nameKey": "browser",
  },
  render: renderer(LabeledPieChartExample),
};

export const CustomLabeledPieChart: Story = {
  args: {
    "pie isAnimationActive": false,
    "pie data": chartData,
    "pie dataKey": "visitors",
    "pie labelLine": false,
    "pie nameKey": "browser",
  },
  render: renderer(CustomLabeledPieChartExample),
};

export const LabelListPieChart: Story = {
  args: { "pie isAnimationActive": false, "pie data": chartData, "pie dataKey": "visitors" },
  render: renderer(LabelListPieChartExample),
};

export const WithLegendPieChart: Story = {
  args: { "pie isAnimationActive": false, "pie data": chartData, "pie dataKey": "visitors" },
  render: renderer(WithLegendPieChartExample),
};

export const DonutPieChart: Story = {
  args: {
    "pie isAnimationActive": false,
    "pie data": chartData,
    "pie dataKey": "visitors",
    "pie nameKey": "browser",
    "pie innerRadius": 60,
  },
  render: renderer(DonutPieChartExample),
};

export const ActiveDonutPieChart: Story = {
  args: {
    "pie isAnimationActive": false,
    "pie data": chartData,
    "pie dataKey": "visitors",
    "pie nameKey": "browser",
    "pie innerRadius": 60,
    "pie strokeWidth": 5,
  },
  render: renderer(ActiveDonutPieChartExample),
};

export const StackedPieChart: Story = {
  args: { "pie isAnimationActive": false },
  render: renderer(StackedPieChartExample),
};
