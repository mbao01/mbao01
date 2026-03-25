import type { Meta, StoryObj } from "@storybook/react-vite";
import { CircularProgress } from "./CircularProgress";

const meta = {
  title: "Data Display/CircularProgress",
  component: CircularProgress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: 72 },
};

export const Sizes: Story = {
  args: { value: 60 },
  render: () => (
    <div className="flex items-center gap-6">
      <CircularProgress value={60} preset="xs" />
      <CircularProgress value={60} preset="sm" />
      <CircularProgress value={60} preset="md" />
      <CircularProgress value={60} preset="lg" />
      <CircularProgress value={60} preset="xl" />
    </div>
  ),
};

export const Variants: Story = {
  args: { value: 75 },
  render: () => (
    <div className="flex items-center gap-4">
      <CircularProgress value={75} variant="primary" />
      <CircularProgress value={50} variant="secondary" />
      <CircularProgress value={90} variant="success" />
      <CircularProgress value={30} variant="warning" />
      <CircularProgress value={15} variant="error" />
      <CircularProgress value={60} variant="info" />
    </div>
  ),
};

export const CustomLabel: Story = {
  args: { value: 85, label: "$8.5K", variant: "success", preset: "lg" },
};

export const BudgetGauges: Story = {
  args: { value: 85 },
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <CircularProgress value={85} variant="success" preset="lg" />
        <span className="text-sm font-medium">Marketing</span>
        <span className="text-xs text-base-content/60">$8,500 / $10,000</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress value={65} variant="info" preset="lg" />
        <span className="text-sm font-medium">Engineering</span>
        <span className="text-xs text-base-content/60">$32,500 / $50,000</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress value={95} variant="warning" preset="lg" />
        <span className="text-sm font-medium">Operations</span>
        <span className="text-xs text-base-content/60">$19,000 / $20,000</span>
      </div>
    </div>
  ),
};
