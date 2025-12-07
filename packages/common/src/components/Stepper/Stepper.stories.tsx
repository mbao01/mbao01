import type { Meta, StoryObj } from "@storybook/react-vite";
import { Step, Stepper } from "./Stepper";

const meta = {
  title: "Molecules/Stepper",
  component: Stepper,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Stepper>
      <Step active>Register</Step>
      <Step active>Choose plan</Step>
      <Step>Purchase</Step>
      <Step>Receive Product</Step>
    </Stepper>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Stepper orientation="vertical" className="h-64">
      <Step active>Register</Step>
      <Step active>Choose plan</Step>
      <Step>Purchase</Step>
      <Step>Receive Product</Step>
    </Stepper>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Stepper>
        <Step variant="primary">Primary</Step>
        <Step variant="secondary">Secondary</Step>
        <Step variant="accent">Accent</Step>
        <Step variant="info">Info</Step>
      </Stepper>
      <Stepper>
        <Step variant="success">Success</Step>
        <Step variant="warning">Warning</Step>
        <Step variant="error">Error</Step>
        <Step variant="neutral">Neutral</Step>
      </Stepper>
    </div>
  ),
};

export const WithDataContent: Story = {
  render: () => (
    <Stepper>
      <Step data-content="?">Step 1</Step>
      <Step data-content="!">Step 2</Step>
      <Step data-content="✓" className="step-success">
        Step 3
      </Step>
      <Step data-content="✕" className="step-error">
        Step 4
      </Step>
    </Stepper>
  ),
};
