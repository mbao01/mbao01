import type { Meta, StoryObj } from "@storybook/react";

import { Loading } from "./Loading";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Loading,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SpinnerLoading: Story = {
  args: {
    variant: "spinner",
  },
};

export const InfinityLoading: Story = {
  args: {
    variant: "infinity",
  },
};

export const ColoredSpinnerLoading: Story = {
  args: {
    variant: "spinner",
    intent: "primary",
  },
};

export const TinyLoading: Story = {
  args: {
    size: "xs",
    variant: "ring",
  },
};
