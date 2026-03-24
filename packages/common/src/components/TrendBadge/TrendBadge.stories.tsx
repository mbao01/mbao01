import type { Meta, StoryObj } from "@storybook/react-vite";
import { TrendBadge } from "./TrendBadge";

const meta = {
  title: "Data Display/TrendBadge",
  component: TrendBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TrendBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Positive: Story = {
  args: { value: 12.5 },
};

export const Negative: Story = {
  args: { value: -3.2 },
};

export const Neutral: Story = {
  args: { value: 0 },
};

export const Large: Story = {
  args: { value: 24.8, size: "lg" },
};

export const NoPercent: Story = {
  args: { value: 150, showPercent: false, decimalPlaces: 0 },
};

export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">$12,450</span>
        <TrendBadge value={12.5} />
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">$8,200</span>
        <TrendBadge value={-4.3} />
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">$5,000</span>
        <TrendBadge value={0} />
      </div>
    </div>
  ),
};
