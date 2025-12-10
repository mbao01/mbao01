import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const PrimaryButton: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const WideButton: Story = {
  args: {
    wide: true,
    children: "Wide Button",
  },
};

export const TinyButton: Story = {
  args: {
    size: "xs",
    children: "Tiny",
  },
};

export const OutlineButton: Story = {
  args: {
    outline: true,
    children: "Click me!",
  },
};

export const DisabledButton: Story = {
  args: {
    disabled: true,
    children: "Click me?",
  },
};

export const LoadingButton: Story = {
  args: {
    isLoading: true,
    children: "Loading",
  },
};

export const BlockButton: Story = {
  args: {
    disabled: true,
    className: "btn-block",
    children: "Block Button",
  },
};

export const SlotButton: Story = {
  args: {
    asChild: true,
    className: "btn-block",
    children: (
      <a href="#" rel="noopener">
        Link
      </a>
    ),
  },
};
