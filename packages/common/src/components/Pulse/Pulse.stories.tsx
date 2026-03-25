import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pulse } from "./Pulse";

const meta = {
  title: "Feedback/Pulse",
  component: Pulse,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Pulse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: "Connected" } };
export const Error: Story = { args: { variant: "error", label: "Disconnected" } };
export const Warning: Story = { args: { variant: "warning", label: "Syncing..." } };
export const Info: Story = { args: { variant: "info", label: "Processing" } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Pulse variant="success" label="Live data" />
      <Pulse variant="info" label="Syncing" />
      <Pulse variant="warning" label="Rate limited" />
      <Pulse variant="error" label="Connection lost" />
      <Pulse variant="primary" label="Market open" />
      <Pulse animated={false} variant="neutral" label="Offline" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Pulse size="xs" label="XS" />
      <Pulse size="sm" label="SM" />
      <Pulse size="md" label="MD" />
      <Pulse size="lg" label="LG" />
    </div>
  ),
};
