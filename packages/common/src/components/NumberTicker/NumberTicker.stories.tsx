import type { Meta, StoryObj } from "@storybook/react-vite";
import { NumberTicker } from "./NumberTicker";

const meta = {
  title: "Effects/NumberTicker",
  component: NumberTicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NumberTicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1000,
    className: "text-4xl font-bold",
  },
};

export const WithDecimals: Story = {
  args: {
    value: 99.99,
    decimalPlaces: 2,
    className: "text-4xl font-bold",
  },
};

export const SlowCount: Story = {
  args: {
    value: 500,
    duration: 5,
    className: "text-4xl font-bold",
  },
};

export const Delayed: Story = {
  args: {
    value: 2024,
    delay: 1,
    className: "text-4xl font-bold",
  },
};
