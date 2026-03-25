import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NumberTicker } from "./";

describe("NumberTicker", () => {
  it("renders with initial value of 0", () => {
    render(<NumberTicker value={100} />);
    const el = screen.getByText("0");
    expect(el).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<NumberTicker value={50} className="text-4xl" />);
    const el = screen.getByText("0");
    expect(el.className).toContain("text-4xl");
    expect(el.className).toContain("tabular-nums");
  });

  it("respects decimal places", () => {
    render(<NumberTicker value={99.99} decimalPlaces={2} />);
    const el = screen.getByText("0.00");
    expect(el).toBeInTheDocument();
  });
});
