import type { Meta, StoryObj } from "@storybook/react-vite";
import { Amount } from "./Amount";

const meta = {
  title: "Data Display/Amount",
  component: Amount,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Amount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlainNumber: Story = {
  args: { value: 1234567.89 },
};

export const USD: Story = {
  args: { value: 1234567.89, currency: "USD" },
};

export const EUR: Story = {
  args: { value: 1234567.89, currency: "EUR", locale: "de-DE" },
};

export const Compact: Story = {
  args: { value: 1500000, currency: "USD", notation: "compact" },
};

export const Colored: Story = {
  render: () => (
    <div className="flex flex-col gap-2 text-lg font-semibold">
      <Amount value={12450.5} currency="USD" colored />
      <Amount value={-3200.75} currency="USD" colored />
      <Amount value={0} currency="USD" colored />
    </div>
  ),
};

export const FinanceDashboard: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-base-content/60">Revenue</span>
        <Amount value={2450000} currency="USD" notation="compact" className="text-2xl font-bold" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-base-content/60">Profit</span>
        <Amount value={890000} currency="USD" notation="compact" className="text-2xl font-bold" colored />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-base-content/60">Loss</span>
        <Amount value={-120000} currency="USD" notation="compact" className="text-2xl font-bold" colored />
      </div>
    </div>
  ),
};
