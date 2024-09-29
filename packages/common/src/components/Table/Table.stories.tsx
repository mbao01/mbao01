import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { type TableProps } from "./types";

const items = [
  {
    invoice: "INV001",
    status: "Paid",
    method: "Credit Card",
    amount: "$250.00",
  },
  {
    invoice: "INV002",
    status: "Unpaid",
    method: "Direct Debit",
    amount: "$250.00",
  },
  {
    invoice: "INV003",
    status: "Paid",
    method: "Credit Card",
    amount: "$250.00",
  },
  {
    invoice: "INV004",
    status: "Paid",
    method: "Direct Debit",
    amount: "$250.00",
  },
  {
    invoice: "INV005",
    status: "Pending",
    method: "Debit Card",
    amount: "$250.00",
  },
  {
    invoice: "INV006",
    status: "Paid",
    method: "Credit Card",
    amount: "$250.00",
  },
  {
    invoice: "INV007",
    status: "Paid",
    method: "Credit Card",
    amount: "$250.00",
  },
];

const withTable = (_: StoryFn, context: StoryContext<TableProps>) => {
  return (
    <Table {...context.args}>
      <Table.Caption>A list of your recent invoices.</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head className="w-[100px]">Invoice</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Method</Table.Head>
          <Table.Head className="text-right">Amount</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.invoice}>
            <Table.Cell className="font-medium">{item.invoice}</Table.Cell>
            <Table.Cell>{item.status}</Table.Cell>
            <Table.Cell>{item.method}</Table.Cell>
            <Table.Cell className="text-right">{item.amount}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={3}>Total</Table.Cell>
          <Table.Cell className="text-right">$2,500.00</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withTable],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
