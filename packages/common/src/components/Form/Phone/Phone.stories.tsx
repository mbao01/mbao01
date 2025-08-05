import type { Meta, StoryObj } from "@storybook/react-vite";
import { Phone } from "./Phone";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Phone,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Phone>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    "aria-label": "Phone number",
  },
};

export const DefaultCountryPhone: Story = {
  args: {
    "aria-label": "Phone number",
    defaultCountry: "ng",
  },
};

export const PrimaryPhone: Story = {
  args: {
    variant: "primary",
    "aria-label": "Phone number",
  },
};

export const OutlinePhone: Story = {
  args: {
    outline: true,
    variant: "accent",
    "aria-label": "Phone number",
  },
};

export const TinyPhone: Story = {
  args: {
    size: "xs",
    variant: "warning",
    placeholder: "Enter phone number",
  },
};

export const DisabledPhone: Story = {
  args: {
    disabled: true,
    "aria-label": "Phone number",
  },
};
