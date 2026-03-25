import type { Meta, StoryObj } from "@storybook/react-vite";
import { CalendarHeatmap } from "./CalendarHeatmap";

const meta = {
  title: "Data Display/CalendarHeatmap",
  component: CalendarHeatmap,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof CalendarHeatmap>;

export default meta;
type Story = StoryObj<typeof meta>;

// Generate random data for past year
const generateData = () => {
  const data = [];
  const end = new Date();
  const start = new Date(end.getFullYear() - 1, end.getMonth(), end.getDate() + 1);
  const cursor = new Date(start);
  while (cursor <= end) {
    if (Math.random() > 0.3) {
      data.push({
        date: cursor.toISOString().split("T")[0],
        value: Math.floor(Math.random() * 20),
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return data;
};

export const TransactionActivity: Story = {
  args: {
    data: generateData(),
    formatTooltip: (date, value) => `${date}: ${value} transactions`,
  },
};

export const SpendingPattern: Story = {
  args: {
    data: generateData(),
    colors: ["oklch(0.95 0.02 150)", "oklch(0.85 0.08 150)", "oklch(0.7 0.14 150)", "oklch(0.6 0.18 150)", "oklch(0.5 0.2 150)"],
    formatTooltip: (date, value) => `${date}: $${value * 100} spent`,
  },
};

export const Compact: Story = {
  args: {
    data: generateData(),
    cellSize: 8,
    cellGap: 1,
    showDayLabels: false,
  },
};
