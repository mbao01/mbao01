import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./TextField";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: TextField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    // backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TextOnlyField: Story = {
  args: {
    placeholder: "First name",
  },
};

export const EmailField: Story = {
  args: {
    type: "email",
    placeholder: "Email",
  },
};

export const PhoneField: Story = {
  args: {
    type: "tel",
    placeholder: "+44 789 1234 567",
  },
};

export const TextFieldWithLabel: Story = {
  args: {
    label: "First name",
  },
};

export const DisabledTextField: Story = {
  args: {
    label: "First name",
    disabled: true,
  },
};
