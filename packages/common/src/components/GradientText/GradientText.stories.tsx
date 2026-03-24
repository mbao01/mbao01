import type { Meta, StoryObj } from "@storybook/react-vite";
import { GradientText } from "./GradientText";

const meta = {
  title: "Effects/GradientText",
  component: GradientText,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof GradientText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Your portfolio is up 24%", className: "text-4xl font-bold" },
};

export const Animated: Story = {
  args: { children: "Welcome to your dashboard", className: "text-3xl font-bold", animated: true },
};

export const CustomColors: Story = {
  args: {
    children: "$1,234,567.89",
    className: "text-5xl font-bold",
    from: "oklch(0.7 0.2 150)",
    via: "oklch(0.75 0.15 200)",
    to: "oklch(0.7 0.25 250)",
  },
};
