import type { Meta, StoryObj } from "@storybook/react-vite";
import { AnimatedList } from "./AnimatedList";

const meta = {
  title: "Effects/AnimatedList",
  component: AnimatedList,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof AnimatedList>;

export default meta;
type Story = StoryObj<typeof meta>;

const transactions = [
  { id: "1", content: <div className="flex items-center justify-between rounded-lg border p-3"><span className="text-sm">Payment from <strong>Acme Inc</strong></span><span className="text-sm font-medium text-success">+$2,500</span></div> },
  { id: "2", content: <div className="flex items-center justify-between rounded-lg border p-3"><span className="text-sm">Transfer to <strong>AWS</strong></span><span className="text-sm font-medium text-error">-$450</span></div> },
  { id: "3", content: <div className="flex items-center justify-between rounded-lg border p-3"><span className="text-sm">Payment from <strong>Stripe</strong></span><span className="text-sm font-medium text-success">+$8,200</span></div> },
  { id: "4", content: <div className="flex items-center justify-between rounded-lg border p-3"><span className="text-sm">Subscription <strong>Figma</strong></span><span className="text-sm font-medium text-error">-$15</span></div> },
  { id: "5", content: <div className="flex items-center justify-between rounded-lg border p-3"><span className="text-sm">Refund from <strong>Google</strong></span><span className="text-sm font-medium text-success">+$99</span></div> },
];

export const Default: Story = {
  args: { items: transactions },
};

export const Limited: Story = {
  args: { items: transactions, maxItems: 3 },
};
