import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextShimmer } from "./TextShimmer";

const meta = {
  title: "Effects/TextShimmer",
  component: TextShimmer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextShimmer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Shimmering text effect",
    className: "text-2xl font-bold",
  },
};

export const SlowShimmer: Story = {
  args: {
    children: "Slow shimmer animation",
    className: "text-3xl font-semibold",
    duration: 4,
  },
};

export const HeadingShimmer: Story = {
  args: {
    children: "Welcome to the Design System",
    className: "text-4xl font-extrabold tracking-tight",
    duration: 3,
  },
};
