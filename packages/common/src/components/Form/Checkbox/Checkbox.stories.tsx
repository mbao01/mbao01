import type { Meta, StoryObj } from "@storybook/react";
import { FormControl } from "../components/FormControl";
import { Label } from "../components/Label";
import { Checkbox } from "./Checkbox";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    "aria-label": "Are you happy?",
  },
};

export const PrimaryCheckbox: Story = {
  args: {
    variant: "primary",
    "aria-label": "Are you happy?",
  },
};

export const TinyCheckbox: Story = {
  args: {
    size: "xs",
    "aria-label": "Are you happy?",
  },
};

export const RoundedCheckbox: Story = {
  args: {
    size: "md",
    rounded: "md",
    "aria-label": "Are you happy?",
  },
};

export const DisabledCheckbox: Story = {
  args: {
    disabled: true,
    "aria-label": "Are you happy?",
  },
};

export const IntermediateCheckbox: Story = {
  args: {
    disabled: true,
    "aria-label": "Are you happy?",
    defaultChecked: "indeterminate",
  },
};

export const LabeledCheckbox: Story = {
  render: (args) => {
    return (
      <FormControl as="div" className="flex-row items-center">
        <Checkbox id="terms" {...args} />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </FormControl>
    );
  },
};
