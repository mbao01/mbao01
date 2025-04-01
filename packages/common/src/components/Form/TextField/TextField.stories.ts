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
    id: "first-name",
    placeholder: "First name",
  },
};

export const EmailField: Story = {
  args: {
    id: "email",
    type: "email",
    placeholder: "Email",
  },
};

export const PhoneField: Story = {
  args: {
    id: "phone-number",
    type: "tel",
    placeholder: "+44 789 1234 567",
  },
};

export const TextFieldWithLabel: Story = {
  args: {
    id: "first-name",
    label: "First name",
  },
};

export const TextFieldWithInfo: Story = {
  args: {
    id: "first-name",
    label: "First name",
    info: "Required",
  },
};

export const TextFieldWithError: Story = {
  args: {
    id: "first-name",
    label: "First name",
    error: "Something went wrong!",
  },
};

export const TextFieldWithErrors: Story = {
  args: {
    id: "first-name",
    label: "First name",
    error: ["First name is required", "Must be greater than 3 characters", "Something went wrong!"],
  },
};

export const DisabledTextField: Story = {
  args: {
    id: "last-name",
    disabled: true,
    "aria-label": "Last name",
  },
};
