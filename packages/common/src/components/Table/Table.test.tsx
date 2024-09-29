import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Table } from "./Table";

describe("Table", () => {
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

  const renderTable = () => {
    return render(
      <Table>
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
  it("renders a table", () => {
    const { asFragment } = renderTable();

    expect(
      screen.getByRole("table", { name: "A list of your recent invoices." })
    ).toBeInTheDocument();

    items.forEach(({ invoice, status, method, amount }) => {
      expect(
        screen.getByRole("row", {
          name: `${invoice} ${status} ${method} ${amount}`,
        })
      ).toBeInTheDocument();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
