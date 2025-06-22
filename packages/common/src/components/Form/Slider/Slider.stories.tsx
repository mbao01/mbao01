import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "../../Text";
import { Fieldset } from "../components/Fieldset";
import { Slider } from "./Slider";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Slider,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    "aria-label": "Choose level",
  },
};

export const PrimarySlider: Story = {
  args: {
    variant: "primary",
    "aria-label": "Choose level",
  },
};

export const TinySlider: Story = {
  args: {
    size: "xs",
    "aria-label": "Choose level",
  },
};

export const DisabledSlider: Story = {
  args: {
    disabled: true,
    defaultValue: [25],
    "aria-label": "Choose level",
  },
};

export const LabeledSlider: Story = {
  render: (args) => {
    return (
      <Fieldset>
        <Fieldset.Label htmlFor="terms" id="terms-label">
          <Slider id="terms" aria-labelledby="terms-label" {...args} />
          <Text size="sm">Risk Level</Text>
        </Fieldset.Label>
      </Fieldset>
    );
  },
};
