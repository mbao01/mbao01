import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useRef } from "react";
import { Text } from "../../Text";
import { Fieldset } from "../components/Fieldset";
import { Radio } from "./Radio";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Form/Radio",
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
  args: {
    "aria-label": "Female",
  },
};

export const PrimaryRadio: Story = {
  args: {
    variant: "primary",
    "aria-label": "Female",
  },
};

export const TinyRadio: Story = {
  args: {
    size: "xs",
    "aria-label": "Female",
  },
};

export const DisabledRadio: Story = {
  args: {
    disabled: true,
    "aria-label": "Female",
  },
};

const IntermediateRadioExample = <T,>(props: T) => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref?.current) ref.current.indeterminate = true;
  }, []);

  return <Radio aria-label="Female" {...props} ref={ref} />;
};
export const IntermediateRadio: Story = {
  render: (args) => {
    return <IntermediateRadioExample {...args} />;
  },
};

export const LabeledRadio: Story = {
  render: (args) => {
    return (
      <Fieldset>
        <Fieldset.Label htmlFor="term">
          <Radio id="term" name="term" {...args} />
          Male
        </Fieldset.Label>
      </Fieldset>
    );
  },
};

export const RadioGroup: Story = {
  render: (args) => {
    return (
      <div role="radiogroup">
        <Fieldset>
          <Fieldset.Label htmlFor="gender">
            <Radio id="gender-male" name="gender" {...args} />
            <Text size="md">Male</Text>
          </Fieldset.Label>
        </Fieldset>
        <Fieldset>
          <Fieldset.Label htmlFor="gender">
            <Radio id="gender-male" name="gender" {...args} />
            <Text size="md">Female</Text>
          </Fieldset.Label>
        </Fieldset>
      </div>
    );
  },
};
