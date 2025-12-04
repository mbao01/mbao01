import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Code } from "./Code";

describe("Code", () => {
  it("renders inline code by default", () => {
    render(<Code>const x = 1;</Code>);
    const element = screen.getByText("const x = 1;");
    expect(element.tagName).toBe("CODE");
    expect(element.parentElement?.tagName).toBe("CODE"); // Wrapper is also code for inline
  });

  it("renders block code when inline is false", () => {
    render(<Code inline={false}>const x = 1;</Code>);
    const element = screen.getByText("const x = 1;");
    expect(element.tagName).toBe("CODE");
    expect(element.closest("pre")).toBeInTheDocument();
  });

  it("applies color scheme", () => {
    render(<Code colorScheme="primary">code</Code>);
    // The wrapper component receives the class
    expect(screen.getByText("code").parentElement).toHaveClass("text-primary");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Code ref={ref}>code</Code>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
