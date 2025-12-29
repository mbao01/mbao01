import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const PrimaryBadge: Story = {
  args: {
    variant: "primary",
    children: "Badge",
  },
};

export const SuccessBadge: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const SoftBadge: Story = {
  args: {
    soft: true,
    variant: "success",
    children: "Success",
  },
};

export const OutlineBadge: Story = {
  args: {
    outline: true,
    variant: "accent",
    children: "Pending",
  },
};

export const TinyBadge: Story = {
  args: {
    size: "xs",
    children: "Tiny Badge",
  },
};
