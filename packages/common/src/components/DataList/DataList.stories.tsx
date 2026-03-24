import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataList } from "./DataList";

const meta = {
  title: "Data Display/DataList",
  component: DataList,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof DataList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccountDetails: Story = {
  args: {
    items: [
      { label: "Account Name", value: "Business Checking" },
      { label: "Account Number", value: "****4242" },
      { label: "Routing Number", value: "021000021" },
      { label: "Balance", value: "$12,450.00" },
      { label: "Status", value: "Active" },
      { label: "Opened", value: "Jan 15, 2023" },
    ],
  },
};

export const TransactionDetails: Story = {
  args: {
    items: [
      { label: "Transaction ID", value: "TXN-00042" },
      { label: "Date", value: "Mar 24, 2026" },
      { label: "Amount", value: "$2,500.00" },
      { label: "Fee", value: "$0.00" },
      { label: "From", value: "Acme Inc" },
      { label: "Method", value: "Wire Transfer" },
    ],
  },
};

export const Horizontal: Story = {
  args: {
    horizontal: true,
    items: [
      { label: "Revenue", value: "$45K" },
      { label: "Expenses", value: "$32K" },
      { label: "Profit", value: "$13K" },
      { label: "Margin", value: "28.9%" },
    ],
  },
  decorators: [(Story) => <div className="w-[500px]"><Story /></div>],
};

export const Small: Story = {
  args: {
    size: "sm",
    items: [
      { label: "Type", value: "Credit" },
      { label: "Status", value: "Settled" },
      { label: "Reference", value: "REF-9821" },
    ],
  },
};
