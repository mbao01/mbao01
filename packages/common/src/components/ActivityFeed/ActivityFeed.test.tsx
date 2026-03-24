import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ActivityFeed } from "./";

const mockItems = [
  { id: "1", content: "Payment received", timestamp: "2 min ago" },
  { id: "2", content: "Invoice sent", timestamp: "1 hour ago" },
  { id: "3", content: "Account created", timestamp: "Yesterday" },
];

describe("ActivityFeed", () => {
  it("renders all items", () => {
    render(<ActivityFeed items={mockItems} />);
    expect(screen.getByText("Payment received")).toBeInTheDocument();
    expect(screen.getByText("Invoice sent")).toBeInTheDocument();
    expect(screen.getByText("Account created")).toBeInTheDocument();
  });

  it("renders timestamps", () => {
    render(<ActivityFeed items={mockItems} />);
    expect(screen.getByText("2 min ago")).toBeInTheDocument();
  });

  it("limits items with maxItems", () => {
    render(<ActivityFeed items={mockItems} maxItems={2} />);
    expect(screen.getByText("Payment received")).toBeInTheDocument();
    expect(screen.getByText("Invoice sent")).toBeInTheDocument();
    expect(screen.queryByText("Account created")).not.toBeInTheDocument();
  });

  it("renders meta content", () => {
    const items = [
      { id: "1", content: "Payment", meta: <span>$100</span> },
    ];
    render(<ActivityFeed items={items} />);
    expect(screen.getByText("$100")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<ActivityFeed items={mockItems} className="my-class" />);
    expect(container.firstChild).toHaveClass("my-class");
  });

  it("renders without connecting line when showLine is false", () => {
    const { container } = render(<ActivityFeed items={mockItems} showLine={false} />);
    const lines = container.querySelectorAll(".bg-base-300");
    expect(lines).toHaveLength(0);
  });
});
