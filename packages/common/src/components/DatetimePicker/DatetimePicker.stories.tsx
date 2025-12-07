import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { DatetimePicker } from "./DatetimePicker";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Molecules/DatetimePicker",
  component: DatetimePicker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof DatetimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    onChange: fn(),
  },
};

export const DateInput: Story = {
  args: {
    onChange: fn(),
    date: new Date(2024, 1, 23),
    format: [["months", "days", "years"]],
    size: "xs",
    variant: "success",
  },
};

export const TimeInput: Story = {
  args: {
    onChange: fn(),
    date: new Date(1727806014178),
    format: [["hours", "minutes", "am/pm"]],
  },
};

export const Time24HourInput: Story = {
  args: {
    onChange: fn(),
    date: new Date(1727806014178),
    format: [["hours", "minutes"]],
    hour12: false,
  },
};

export const TimeWithSecondsInput: Story = {
  args: {
    onChange: fn(),
    date: new Date(1727806014178),
    format: [["hours", "minutes", "seconds", "am/pm"]],
    variant: "info",
  },
};

export const TimeDateInput: Story = {
  args: {
    onChange: fn(),
    date: new Date(1727806014178),
    format: [
      ["hours", "minutes", "am/pm"],
      ["months", "days", "years"],
    ],
    outline: true,
  },
};

export const DisabledTimeOnlyInput: Story = {
  args: {
    onChange: fn(),
    date: new Date(1727806014178),
    format: [["hours", "minutes", "am/pm"]],
    variant: "primary",
    disabled: true,
  },
};

export const DisabledDateTimeInput: Story = {
  args: {
    onChange: fn(),
    date: new Date(1727806014178),
    format: [
      ["months", "days", "years"],
      ["hours", "minutes", "am/pm"],
    ],
    disabled: true,
  },
};

export const DateTimeWithMinAndMaxInput: Story = {
  args: {
    onChange: fn(),
    date: new Date(1727805500000),
    minDate: new Date(1727805000000),
    maxDate: new Date(1727806014178),
  },
};
