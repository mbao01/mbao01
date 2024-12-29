import type { Meta, StoryContext, StoryObj } from "@storybook/react";
import type { ChartConfig, ChartTooltipContentProps } from "../types";
import { BarChartExample } from "./examples/Tooltip";

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

const withTheme = (
  Component: React.FC<ChartTooltipContentProps>,
  context: StoryContext<ChartTooltipContentProps>
) => {
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
  title: "Components/Chart/components/Tooltip",
  component: BarChartExample as (args: ChartTooltipContentProps) => React.JSX.Element,
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
  argTypes: {},
  decorators: [withTheme],
} satisfies Meta<ChartTooltipContentProps>;

export default meta;
type Story = StoryObj<ChartTooltipContentProps>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const LineIndicatorTooltip: Story = {
  args: {
    indicator: "line",
  },
};

export const NoIndicatorTooltip: Story = {
  args: {
    hideIndicator: true,
  },
};

export const CustomLabelTooltip: Story = {
  args: {
    labelKey: "activities",
    indicator: "line",
  },
};

export const LabelFormatterTooltip: Story = {
  args: {
    labelFormatter: (value: string) => {
      return new Date(value).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    },
  },
};

export const NoLabelTooltip: Story = {
  args: {
    hideIndicator: true,
    hideLabel: true,
  },
};

export const FormatterTooltip: Story = {
  args: {
    hideLabel: true,
    formatter: (value, name) => (
      <div className="flex min-w-[130px] items-center text-xs text-base-content">
        {tooltipChartConfig[name as keyof typeof tooltipChartConfig]?.label || name}
        <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
          {value}
          <span className="font-normal text-base-content">kcal</span>
        </div>
      </div>
    ),
  },
};

export const AdvancedTooltip: Story = {
  args: {
    hideLabel: true,
    className: "w-[180px]",
    formatter: (value, name, item, index) => (
      <>
        <div className="flex items-center w-full">
          <div
            className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg] mr-2"
            style={
              {
                "--color-bg": `var(--color-${name})`,
              } as React.CSSProperties
            }
          />
          {tooltipChartConfig[name as keyof typeof tooltipChartConfig]?.label || name}
          <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
            {value}
            <span className="font-normal text-base-content">kcal</span>
          </div>
        </div>
        {/* Add this after the last item */}
        {index === 1 && (
          <div className="flex basis-full items-center border-t pt-2 text-xs font-medium text-foreground">
            Total
            <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
              {(item.payload as { running: number }).running +
                (item.payload as { swimming: number }).swimming}
              <span className="font-normal text-base-content">kcal</span>
            </div>
          </div>
        )}
      </>
    ),
  },
};
