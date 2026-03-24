import type { Meta, StoryObj } from "@storybook/react-vite";
import { MiniBarChart } from "./MiniBarChart";

const meta = {
  title: "Data Display/MiniBarChart",
  component: MiniBarChart,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof MiniBarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { data: [4, 7, 3, 8, 5, 9, 6, 10, 7, 12] },
};

export const HighlightLast: Story = {
  args: { data: [4, 7, 3, 8, 5, 9, 6, 10, 7, 12], highlightLast: true, color: "oklch(0.7 0.15 250)" },
};

export const InTableCell: Story = {
  render: () => (
    <table className="table w-[500px]">
      <thead><tr><th>Account</th><th>Balance</th><th>Weekly Volume</th></tr></thead>
      <tbody>
        <tr><td>Checking</td><td>$12,450</td><td><MiniBarChart data={[5,3,8,4,7,9,6]} color="oklch(0.7 0.2 150)" highlightLast /></td></tr>
        <tr><td>Savings</td><td>$45,200</td><td><MiniBarChart data={[2,1,3,2,1,4,2]} color="oklch(0.7 0.15 250)" highlightLast /></td></tr>
        <tr><td>Investment</td><td>$128,900</td><td><MiniBarChart data={[8,12,6,15,9,11,14]} color="oklch(0.65 0.25 25)" highlightLast /></td></tr>
      </tbody>
    </table>
  ),
};
