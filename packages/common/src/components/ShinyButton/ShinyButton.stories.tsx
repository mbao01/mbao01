import type { Meta, StoryObj } from "@storybook/react-vite";
import { ShinyButton } from "./ShinyButton";

const meta = {
  title: "Effects/ShinyButton",
  component: ShinyButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ShinyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Shiny Button",
  },
};

export const CallToAction: Story = {
  args: {
    children: "Get Started",
    className: "text-lg px-8 py-3",
  },
};
