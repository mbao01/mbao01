import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatetimeInput } from "./DatetimeInput";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Form/DatetimeInput",
  component: DatetimeInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    // backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof DatetimeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    "aria-label": "Enter something",
  },
};

export const OutlinedDatetimeInput: Story = {
  args: {
    outline: true,
  },
};

export const PrimaryDatetimeInput: Story = {
  args: {
    variant: "primary",
  },
};

export const SmallDatetimeInput: Story = {
  args: {
    size: "sm",
    variant: "info",
  },
};

export const DisabledDatetimeInput: Story = {
  args: {
    id: "calendar",
    variant: "primary",
    disabled: true,
  },
};

export const WithDefaultDateDatetimeInput: Story = {
  args: {
    id: "calendar",
    variant: "primary",
    defaultDate: new Date(2024, 10, 2),
  },
};

export const WithUSLocaleDatetimeInput: Story = {
  args: {
    id: "calendar",
    variant: "success",
    locale: "en-US",
    date: new Date(2024, 10, 2),
  },
};

export const WithMultipleLocalesDatetimeInput: Story = {
  args: {
    id: "calendar",
    variant: "warning",
    locale: ["en-GB", "en-US", "fr-FR", "es-ES"],
    date: new Date(2024, 10, 2),
  },
};
