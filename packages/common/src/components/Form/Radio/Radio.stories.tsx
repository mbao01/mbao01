import { useEffect, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../components/Label";
import { FormControl } from "../components/FormControl";
import { Radio } from "./Radio";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Radio,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const PrimaryRadio: Story = {
  args: {
    variant: "primary",
  },
};

export const TinyRadio: Story = {
  args: {
    size: "xs",
  },
};

export const DisabledRadio: Story = {
  args: {
    disabled: true,
  },
};

export const IntermediateRadio: Story = {
  render: (args) => {
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
      if (ref?.current) ref.current.indeterminate = true;
    }, []);

    return <Radio {...args} ref={ref} />;
  },
};

export const LabeledRadio: Story = {
  render: (args) => {
    return (
      <FormControl as="div" className="flex-row items-center">
        <Radio id="terms" {...args} />
        <Label htmlFor="terms">Male</Label>
      </FormControl>
    );
  },
};

export const RadioGroup: Story = {
  render: (args) => {
    return (
      <div role="radiogroup">
        <FormControl
          as="label"
          className="flex-row justify-start items-center gap-2"
        >
          <Radio id="gender-male" name="gender" {...args} />
          <Label htmlFor="gender-male">Male</Label>
        </FormControl>{" "}
        <FormControl
          as="label"
          className="flex-row justify-start items-center gap-2"
        >
          <Radio id="gender-female" name="gender" {...args} />
          <Label htmlFor="gender-female">Female</Label>
        </FormControl>
      </div>
    );
  },
};
