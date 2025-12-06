import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Blockquote } from "./Blockquote";

describe("Blockquote", () => {
  it("renders children correctly", () => {
    render(<Blockquote>Quote</Blockquote>);
    expect(screen.getByText("Quote")).toBeInTheDocument();
    expect(screen.getByText("Quote").tagName).toBe("BLOCKQUOTE");
  });

  it("renders cite attribute", () => {
    render(<Blockquote cite="Author">Quote</Blockquote>);
    expect(screen.getByText("Quote")).toHaveAttribute("cite", "Author");
  });

  it("applies variant classes", () => {
    render(<Blockquote variant="primary">Quote</Blockquote>);
    expect(screen.getByText("Quote")).toHaveClass("border-primary");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Blockquote ref={ref}>Quote</Blockquote>);
    expect(ref.current).toBeInstanceOf(HTMLQuoteElement);
  });
});
