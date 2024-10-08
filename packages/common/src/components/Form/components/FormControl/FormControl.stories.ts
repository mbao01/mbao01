import type { Meta, StoryObj } from "@storybook/react";
import { FormControl } from "./FormControl";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: FormControl,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: "Hello world",
  },
};

export const InlineFormControl: Story = {
  args: {
    as: "span",
    children: "Inline form control",
  },
};

export const BlockFormControl: Story = {
  args: {
    as: "div",
    children: "Block form control",
  },
};

export const LabelFormControl: Story = {
  args: {
    as: "label",
    children: "Label form control",
  },
};
