import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Amount } from "./";

describe("Amount", () => {
  it("formats a plain number", () => {
    render(<Amount value={1234567.89} />);
    expect(screen.getByText("1,234,567.89")).toBeInTheDocument();
  });

  it("formats as currency", () => {
    render(<Amount value={1234.56} currency="USD" />);
    expect(screen.getByText("$1,234.56")).toBeInTheDocument();
  });

  it("formats with compact notation", () => {
    render(<Amount value={1500000} notation="compact" />);
    expect(screen.getByText("1.5M")).toBeInTheDocument();
  });

  it("applies success color for positive colored values", () => {
    const { container } = render(<Amount value={100} colored />);
    expect(container.firstChild).toHaveClass("text-success");
  });

  it("applies error color for negative colored values", () => {
    const { container } = render(<Amount value={-50} colored />);
    expect(container.firstChild).toHaveClass("text-error");
  });

  it("has tabular-nums class", () => {
    const { container } = render(<Amount value={42} />);
    expect(container.firstChild).toHaveClass("tabular-nums");
  });

  it("respects fraction digits", () => {
    render(<Amount value={42} minimumFractionDigits={2} maximumFractionDigits={2} />);
    expect(screen.getByText("42.00")).toBeInTheDocument();
  });

  it("shows sign for positive with signDisplay always", () => {
    render(<Amount value={100} signDisplay="always" />);
    expect(screen.getByText("+100")).toBeInTheDocument();
  });
});
