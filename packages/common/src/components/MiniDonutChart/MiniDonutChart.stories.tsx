import type { Meta, StoryObj } from "@storybook/react-vite";
import { MiniDonutChart } from "./MiniDonutChart";

const meta = {
  title: "Data Display/MiniDonutChart",
  component: MiniDonutChart,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof MiniDonutChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    segments: [
      { value: 60, label: "Stocks" },
      { value: 25, label: "Bonds" },
      { value: 15, label: "Cash" },
    ],
    label: "60%",
  },
};

export const PortfolioAllocation: Story = {
  args: { segments: [{ value: 45 }, { value: 20 }, { value: 20 }, { value: 10 }, { value: 5 }] },
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-3">
        <MiniDonutChart
          size={64}
          segments={[
            { value: 45, label: "US Equities", color: "oklch(0.7 0.15 250)" },
            { value: 20, label: "Int'l Equities", color: "oklch(0.7 0.15 200)" },
            { value: 20, label: "Bonds", color: "oklch(0.7 0.15 150)" },
            { value: 10, label: "Real Estate", color: "oklch(0.7 0.15 50)" },
            { value: 5, label: "Cash", color: "oklch(0.8 0.05 250)" },
          ]}
        />
        <div className="flex flex-col gap-0.5 text-xs">
          <span>US Equities 45%</span>
          <span>Int&apos;l Equities 20%</span>
          <span>Bonds 20%</span>
          <span>Real Estate 10%</span>
          <span>Cash 5%</span>
        </div>
      </div>
    </div>
  ),
};

export const InTable: Story = {
  args: { segments: [{ value: 70 }, { value: 30 }] },
  render: () => (
    <table className="table w-[400px]">
      <thead>
        <tr>
          <th>Fund</th>
          <th>Allocation</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Growth Fund</td>
          <td>
            <MiniDonutChart size={32} segments={[{ value: 70 }, { value: 30 }]} label="70%" />
          </td>
          <td>$35,000</td>
        </tr>
        <tr>
          <td>Income Fund</td>
          <td>
            <MiniDonutChart size={32} segments={[{ value: 45 }, { value: 55 }]} label="45%" />
          </td>
          <td>$22,500</td>
        </tr>
      </tbody>
    </table>
  ),
};
