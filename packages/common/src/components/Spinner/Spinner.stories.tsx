import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./Spinner";

const meta = {
  title: "Atoms/Spinner",
  component: Spinner,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner variant="default" />
      <Spinner variant="primary" />
      <Spinner variant="secondary" />
      <Spinner variant="accent" />
      <Spinner variant="info" />
      <Spinner variant="success" />
      <Spinner variant="warning" />
      <Spinner variant="error" />
      <Spinner variant="ghost" />
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <button className="btn btn-primary">
      <Spinner size="sm" variant="default" className="text-primary-content" />
      Loading
    </button>
  ),
};
