import type { Meta, StoryObj } from "@storybook/react";
import { FormControl } from "../components/FormControl";
import { Label } from "../components/Label";
import { Range } from "./Range";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Range,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Range>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    defaultValue: 50,
    max: 100,
    step: 1,
    "aria-label": "Select level",
  },
};

export const PrimaryRange: Story = {
  args: {
    variant: "primary",
    "aria-label": "Select level",
  },
};

export const TinyRange: Story = {
  args: {
    size: "xs",
    "aria-label": "Select level",
  },
};

export const DisabledRange: Story = {
  args: {
    disabled: true,
    defaultValue: 25,
    "aria-label": "Select level",
  },
};

export const LabeledRange: Story = {
  render: (args) => {
    return (
      <FormControl as="div" className="flex-row items-center">
        <Range id="terms" {...args} />
        <Label htmlFor="terms">Risk Level</Label>
      </FormControl>
    );
  },
};
