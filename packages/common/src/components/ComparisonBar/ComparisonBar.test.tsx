import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ComparisonBar } from "./";

const segments = [
  { label: "Income", value: 5000 },
  { label: "Expenses", value: 3000 },
  { label: "Savings", value: 2000 },
];

describe("ComparisonBar", () => {
  it("renders segment labels", () => {
    render(<ComparisonBar segments={segments} />);
    expect(screen.getByText("Income")).toBeInTheDocument();
    expect(screen.getByText("Expenses")).toBeInTheDocument();
    expect(screen.getByText("Savings")).toBeInTheDocument();
  });

  it("renders values when showValues is true", () => {
    render(<ComparisonBar segments={segments} showValues />);
    expect(screen.getByText("5,000")).toBeInTheDocument();
  });

  it("hides labels when showLabels is false", () => {
    render(<ComparisonBar segments={segments} showLabels={false} />);
    expect(screen.queryByText("Income")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<ComparisonBar segments={segments} className="w-full" />);
    expect(container.firstChild).toHaveClass("w-full");
  });
});
