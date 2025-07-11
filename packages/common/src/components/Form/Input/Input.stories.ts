import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    // backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    placeholder: "First name",
  },
};

export const EmailInput: Story = {
  args: {
    type: "email",
    placeholder: "Email",
  },
};

export const PhoneInput: Story = {
  args: {
    type: "tel",
    placeholder: "+44 789 1234 567",
  },
};

export const BorderedInput: Story = {
  args: {
    outline: true,
    placeholder: "Full name",
  },
};

export const PrimaryInput: Story = {
  args: {
    variant: "primary",
    placeholder: "Full name",
  },
};

export const TinyInput: Story = {
  args: {
    size: "xs",
    variant: "accent",
    placeholder: "Full name",
  },
};

export const DisabledInput: Story = {
  args: {
    "aria-label": "First name",
    disabled: true,
  },
};

export const ReadOnlyInput: Story = {
  args: {
    "aria-label": "First name",
    readOnly: true,
  },
};

export const DisabledAndReadOnlyInput: Story = {
  args: {
    "aria-label": "First name",
    disabled: true,
    readOnly: true,
  },
};

export const LabelForInput: Story = {
  args: {
    type: "url",
    label: "https://",
    placeholder: "URL",
  },
};

export const SuffixLabelForInput: Story = {
  args: {
    label: ".com",
    labelPosition: "end",
    placeholder: "domain name",
  },
};

export const LabelForDateInput: Story = {
  args: {
    type: "date",
    label: "Publish date",
  },
};

export const FloatingLabelForInput: Story = {
  args: {
    label: "Your Email",
    labelPosition: "floating",
    placeholder: "mail@site.com",
  },
};
