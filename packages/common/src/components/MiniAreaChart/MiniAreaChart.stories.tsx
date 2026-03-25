import type { Meta, StoryObj } from "@storybook/react-vite";
import { MiniAreaChart } from "./MiniAreaChart";

const meta = {
  title: "Data Display/MiniAreaChart",
  component: MiniAreaChart,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof MiniAreaChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { data: [10, 15, 12, 20, 18, 25, 30, 28, 35, 40], color: "oklch(0.7 0.15 250)" },
};

export const InCards: Story = {
  args: { data: [10, 15, 12, 20, 18, 25, 30, 28, 35, 40] },
  render: () => (
    <div className="flex gap-4">
      <div className="rounded-lg border p-3 w-48">
        <div className="text-xs text-base-content/60">Portfolio</div>
        <div className="flex items-end justify-between mt-1">
          <span className="text-lg font-bold">$45.2K</span>
          <MiniAreaChart data={[30, 35, 32, 40, 38, 45, 42, 48]} color="oklch(0.7 0.2 150)" width={70} height={28} />
        </div>
      </div>
      <div className="rounded-lg border p-3 w-48">
        <div className="text-xs text-base-content/60">Expenses</div>
        <div className="flex items-end justify-between mt-1">
          <span className="text-lg font-bold">$8.2K</span>
          <MiniAreaChart data={[20, 18, 22, 15, 25, 12, 20, 10]} color="oklch(0.65 0.25 25)" width={70} height={28} />
        </div>
      </div>
    </div>
  ),
};
