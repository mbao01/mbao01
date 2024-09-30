import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef } from "react";
import { FormControl } from "../components/FormControl";
import { Label } from "../components/Label";
import { Switch } from "./Switch";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    "aria-label": "Accept terms",
  },
};

export const PrimarySwitch: Story = {
  args: {
    variant: "primary",
    "aria-label": "Accept terms",
  },
};

export const TinySwitch: Story = {
  args: {
    size: "xs",
    "aria-label": "Accept terms",
  },
};

export const DisabledSwitch: Story = {
  args: {
    disabled: true,
    "aria-label": "Accept terms",
  },
};

export const IntermediateSwitch: Story = {
  render: (args) => {
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
      if (ref?.current) ref.current.indeterminate = true;
    }, []);

    return <Switch {...args} ref={ref} aria-label="Undecided terms" />;
  },
};

export const LabeledSwitch: Story = {
  render: (args) => {
    return (
      <FormControl as="div" className="flex-row items-center">
        <Switch id="terms" {...args} />
        <Label htmlFor="terms">Male</Label>
      </FormControl>
    );
  },
};
