import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const withTooltip = (Story: React.FC) => {
  return (
    <Tooltip.Provider>
      <Tooltip>
        <Tooltip.Trigger>Hover on me!</Tooltip.Trigger>
        <Story />
      </Tooltip>
    </Tooltip.Provider>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Tooltip/Tooltip.Content",
  component: Tooltip.Content,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withTooltip],
} satisfies Meta<typeof Tooltip.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: "neutral",
    children: "This is the content of a tooltip",
    forceMount: true,
    asChild: false,
    onEscapeKeyDown: () => null,
    onPointerDownOutside: () => null,
    side: "top",
    sideOffset: 4,
    align: "center",
    alignOffset: 20,
    avoidCollisions: true,
    arrowPadding: 4,
    sticky: "partial",
    hideWhenDetached: false,
  },
};

export const PrimaryTooltip: Story = {
  args: {
    variant: "primary",
    children: "Now you see me!",
  },
};

export const SuccessTooltip: Story = {
  args: {
    variant: "success",
    children: "Success tooltip",
  },
};

export const LeftTooltip: Story = {
  args: {
    side: "left",
    variant: "info",
    children: "Tooltip positioned left",
  },
};

export const AlignStartTooltip: Story = {
  args: {
    align: "start",
    children: "Tooltip aligned start",
  },
};
