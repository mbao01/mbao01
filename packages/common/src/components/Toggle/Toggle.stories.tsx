import type { Meta, StoryObj } from "@storybook/react-vite";
import { BoldIcon } from "lucide-react";
import { Toggle } from "./Toggle";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Atoms/Toggle",
  component: Toggle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: "default",
    children: "Toggle",
  },
};

export const IconContent: Story = {
  args: {
    variant: "default",
  },
  render: () => {
    return (
      <Toggle aria-label="Toggle italic">
        <BoldIcon className="h-4 w-4" />
      </Toggle>
    );
  },
};

export const OnToggle: Story = {
  args: {
    variant: "primary",
    children: "Toggle",
    defaultPressed: true,
  },
};

export const PrimaryToggle: Story = {
  args: {
    variant: "primary",
    children: "Toggle",
  },
};

export const PrimaryOnToggle: Story = {
  args: {
    variant: "primary",
    children: "Toggle",
    defaultPressed: true,
  },
};

export const LinkToggle: Story = {
  args: {
    link: true,
    children: "Link Toggle",
  },
};

export const WideToggle: Story = {
  args: {
    wide: true,
    children: "Wide Toggle",
  },
};

export const TinyToggle: Story = {
  args: {
    size: "xs",
    children: "Tiny",
  },
};

export const OutlineToggle: Story = {
  args: {
    outline: true,
    children: "Click me!",
  },
};

export const OutlineOnToggle: Story = {
  args: {
    outline: true,
    children: "Click me!",
    defaultPressed: true,
  },
};

export const DisabledToggle: Story = {
  args: {
    disabled: true,
    children: "Click me?",
  },
};

export const BlockToggle: Story = {
  args: {
    disabled: true,
    className: "btn-block",
    children: "Block Toggle",
  },
};
