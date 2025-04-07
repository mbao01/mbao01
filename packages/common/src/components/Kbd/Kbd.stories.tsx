import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "./Kbd";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Kbd,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: "K",
  },
};

export const TinyKbd: Story = {
  args: {
    size: "xs",
    children: "Tiny",
  },
};

export const CompoundKbd: Story = {
  args: {},
  render: () => {
    return (
      <>
        Press <Kbd>⌘</Kbd> <Kbd>C</Kbd> or <Kbd>⌃</Kbd> <Kbd>C</Kbd> to cancel.
      </>
    );
  },
};

export const PrimaryKbd: Story = {
  args: {
    variant: "primary",
    children: "K",
  },
};

export const SuccessKbd: Story = {
  args: {
    variant: "success",
    children: "K",
  },
};

export const OutlineKbd: Story = {
  args: {
    outline: true,
    children: "K",
  },
};

export const OutlinePrimaryKbd: Story = {
  args: {
    outline: true,
    variant: "primary",
    children: "K",
  },
};

export const OutlineErrorKbd: Story = {
  args: {
    outline: true,
    variant: "error",
    children: "K",
  },
};
