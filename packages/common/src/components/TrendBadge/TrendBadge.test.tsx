import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TrendBadge } from "./";

describe("TrendBadge", () => {
  it("renders positive trend", () => {
    const { container } = render(<TrendBadge value={12.5} />);
    expect(screen.getByText("+12.5%")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("text-success");
  });

  it("renders negative trend", () => {
    const { container } = render(<TrendBadge value={-3.2} />);
    expect(screen.getByText("-3.2%")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("text-error");
  });

  it("renders neutral trend", () => {
    const { container } = render(<TrendBadge value={0} />);
    expect(container.firstChild).toHaveClass("text-base-content/60");
  });

  it("hides percent sign when showPercent is false", () => {
    render(<TrendBadge value={5} showPercent={false} />);
    expect(screen.getByText("+5.0")).toBeInTheDocument();
  });

  it("respects custom decimal places", () => {
    render(<TrendBadge value={12.456} decimalPlaces={2} />);
    expect(screen.getByText("+12.46%")).toBeInTheDocument();
  });

  it("allows trend override", () => {
    const { container } = render(<TrendBadge value={5} trend="down" />);
    expect(container.firstChild).toHaveClass("text-error");
  });

  it("applies custom className", () => {
    const { container } = render(<TrendBadge value={1} className="font-bold" />);
    expect(container.firstChild).toHaveClass("font-bold");
  });
});
