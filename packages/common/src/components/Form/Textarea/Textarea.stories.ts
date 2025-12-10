import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Form/Textarea",
  component: Textarea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    // backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    placeholder: "First name",
  },
};

export const BorderedTextarea: Story = {
  args: {
    outline: true,
    placeholder: "Full name",
  },
};

export const PrimaryTextarea: Story = {
  args: {
    variant: "primary",
    placeholder: "Full name",
  },
};

export const TinyTextarea: Story = {
  args: {
    size: "xs",
    variant: "accent",
    placeholder: "Full name",
  },
};

export const DisabledTextarea: Story = {
  args: {
    disabled: true,
    "aria-label": "Address",
  },
};

export const FloatingLabelForInput: Story = {
  args: {
    label: "Your work experience",
    placeholder: "So tell me...",
  },
};
