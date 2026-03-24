import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MiniStackedBar } from "./";

describe("MiniStackedBar", () => {
  const segments = [
    { value: 60, label: "Income" },
    { value: 40, label: "Expenses" },
  ];

  it("renders segments", () => {
    const { container } = render(<MiniStackedBar segments={segments} />);
    const bars = container.querySelectorAll("[title]");
    expect(bars).toHaveLength(2);
  });

  it("shows labels when enabled", () => {
    render(<MiniStackedBar segments={segments} showLabels />);
    expect(screen.getByText("Income")).toBeInTheDocument();
    expect(screen.getByText("Expenses")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<MiniStackedBar segments={segments} className="w-full" />);
    expect(container.firstChild).toHaveClass("w-full");
  });
});
