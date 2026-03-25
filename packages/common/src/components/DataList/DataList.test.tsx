import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DataList } from "./";

const items = [
  { label: "Account", value: "****4242" },
  { label: "Balance", value: "$12,450.00" },
  { label: "Status", value: "Active" },
];

describe("DataList", () => {
  it("renders all items", () => {
    render(<DataList items={items} />);
    expect(screen.getByText("Account")).toBeInTheDocument();
    expect(screen.getByText("****4242")).toBeInTheDocument();
    expect(screen.getByText("Balance")).toBeInTheDocument();
    expect(screen.getByText("$12,450.00")).toBeInTheDocument();
  });

  it("renders as dl element", () => {
    const { container } = render(<DataList items={items} />);
    expect(container.querySelector("dl")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<DataList items={items} className="my-class" />);
    expect(container.firstChild).toHaveClass("my-class");
  });
});
