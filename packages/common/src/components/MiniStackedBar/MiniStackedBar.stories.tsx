import type { Meta, StoryObj } from "@storybook/react-vite";
import { MiniStackedBar } from "./MiniStackedBar";

const meta = {
  title: "Data Display/MiniStackedBar",
  component: MiniStackedBar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof MiniStackedBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    segments: [
      { value: 60, label: "Income", color: "oklch(0.7 0.2 150)" },
      { value: 40, label: "Expenses", color: "oklch(0.65 0.25 25)" },
    ],
    showLabels: true,
  },
};

export const BudgetCategories: Story = {
  args: {
    segments: [
      { value: 35, label: "Housing" },
      { value: 15, label: "Food" },
      { value: 10, label: "Transport" },
      { value: 8, label: "Entertainment" },
      { value: 32, label: "Savings" },
    ],
    showLabels: true,
    height: 12,
  },
};

export const InTable: Story = {
  args: { segments: [{ value: 60, label: "A" }, { value: 40, label: "B" }] },
  render: () => (
    <table className="table w-[500px]">
      <thead><tr><th>Month</th><th>Breakdown</th><th>Total</th></tr></thead>
      <tbody>
        <tr><td>January</td><td><MiniStackedBar segments={[{value:7000,color:"oklch(0.7 0.2 150)"},{value:5000,color:"oklch(0.65 0.25 25)"}]} /></td><td>$12,000</td></tr>
        <tr><td>February</td><td><MiniStackedBar segments={[{value:8000,color:"oklch(0.7 0.2 150)"},{value:4500,color:"oklch(0.65 0.25 25)"}]} /></td><td>$12,500</td></tr>
        <tr><td>March</td><td><MiniStackedBar segments={[{value:9000,color:"oklch(0.7 0.2 150)"},{value:6000,color:"oklch(0.65 0.25 25)"}]} /></td><td>$15,000</td></tr>
      </tbody>
    </table>
  ),
};
