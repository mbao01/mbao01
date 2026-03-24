import type { Meta, StoryObj } from "@storybook/react-vite";
import { ComparisonBar } from "./ComparisonBar";

const meta = {
  title: "Data Display/ComparisonBar",
  component: ComparisonBar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [(Story) => <div className="w-96"><Story /></div>],
} satisfies Meta<typeof ComparisonBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BudgetVsActual: Story = {
  args: {
    segments: [
      { label: "Budget Used", value: 7500, color: "oklch(0.7 0.15 250)" },
      { label: "Remaining", value: 2500, color: "oklch(0.85 0.05 250)" },
    ],
    showValues: true,
    formatValue: (v) => `$${v.toLocaleString()}`,
  },
};

export const ExpenseBreakdown: Story = {
  args: {
    segments: [
      { label: "Housing", value: 2000 },
      { label: "Food", value: 800 },
      { label: "Transport", value: 400 },
      { label: "Entertainment", value: 300 },
      { label: "Other", value: 500 },
    ],
    showValues: true,
    formatValue: (v) => `$${v}`,
  },
};

export const IncomeVsExpenses: Story = {
  args: {
    segments: [
      { label: "Income", value: 12000, color: "oklch(0.7 0.2 150)" },
      { label: "Expenses", value: 8500, color: "oklch(0.65 0.25 25)" },
    ],
    showValues: true,
    size: "lg",
    formatValue: (v) => `$${v.toLocaleString()}`,
  },
};

export const Small: Story = {
  args: {
    segments: [
      { label: "Completed", value: 85, color: "oklch(0.7 0.2 150)" },
      { label: "Remaining", value: 15, color: "oklch(0.8 0.03 250)" },
    ],
    size: "xs",
  },
};
