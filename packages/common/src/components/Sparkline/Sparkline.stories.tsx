import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sparkline } from "./Sparkline";

const meta = {
  title: "Data Display/Sparkline",
  component: Sparkline,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sparkline>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleUp = [10, 15, 12, 20, 18, 25, 30, 28, 35, 40, 38, 45];
const sampleDown = [45, 40, 42, 35, 30, 28, 25, 20, 22, 15, 12, 10];
const sampleVolatile = [20, 35, 15, 40, 10, 45, 20, 50, 25, 35, 30, 42];

export const Default: Story = {
  args: { data: sampleUp },
};

export const Filled: Story = {
  args: { data: sampleUp, filled: true, color: "oklch(0.7 0.2 150)" },
};

export const Downtrend: Story = {
  args: { data: sampleDown, color: "oklch(0.65 0.25 25)" },
};

export const Volatile: Story = {
  args: { data: sampleVolatile, filled: true },
};

export const InKPICard: Story = {
  args: { data: sampleUp },
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-base-content/60">Revenue</span>
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-bold">$12,450</span>
          <Sparkline data={sampleUp} color="oklch(0.7 0.2 150)" filled width={80} height={24} />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-base-content/60">Expenses</span>
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-bold">$8,200</span>
          <Sparkline data={sampleDown} color="oklch(0.65 0.25 25)" filled width={80} height={24} />
        </div>
      </div>
    </div>
  ),
};
