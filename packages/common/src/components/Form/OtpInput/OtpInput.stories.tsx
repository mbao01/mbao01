import type { Meta, StoryObj } from "@storybook/react";

import { OtpInput } from "./OtpInput";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: OtpInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    // backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof OtpInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    inputProps: {
      placeholder: "x",
    },
  },
};

export const BorderedInput: Story = {
  args: {
    inputProps: {
      outline: true,
    },
  },
};

export const PrimaryInput: Story = {
  args: {
    inputProps: {
      variant: "primary",
    },
  },
};

export const TinyInput: Story = {
  args: {
    inputProps: {
      size: "xs",
      variant: "accent",
    },
  },
};

export const DisabledInput: Story = {
  args: {
    inputProps: {
      disabled: true,
    },
  },
};
