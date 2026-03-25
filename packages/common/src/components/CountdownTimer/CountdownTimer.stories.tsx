import type { Meta, StoryObj } from "@storybook/react-vite";
import { CountdownTimer } from "./CountdownTimer";

const meta = {
  title: "Data Display/CountdownTimer",
  component: CountdownTimer,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof CountdownTimer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MarketClose: Story = {
  args: {
    targetDate: new Date(Date.now() + 4 * 3600000),
    label: "Market closes in",
  },
};

export const PaymentDeadline: Story = {
  args: {
    targetDate: new Date(Date.now() + 2 * 24 * 3600000),
    label: "Payment due in",
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    targetDate: new Date(Date.now() + 30 * 60000),
    label: "Session expires",
    size: "sm",
    showSeconds: false,
  },
};
