import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Code } from "./Code";

describe("Code", () => {
  it("renders inline code", () => {
    render(<Code inline>const x = 1;</Code>);
    const element = screen.getByText("const x = 1;");
    expect(element.tagName).toBe("CODE");
  });

  it("renders block code when inline is false", () => {
    render(<Code inline={false}>const x = 1;</Code>);
    const element = screen.getByText("const x = 1;");
    expect(element.tagName).toBe("CODE");
    expect(element.closest("pre")).toBeInTheDocument();
  });

  it("renders skipped code when lines", () => {
    const { asFragment } = render(
      <Code skip>
        <span>const x = 1;</span>
        <span data-prefix="3">const y = 2;</span>
        <span>const z = x + y;</span>
      </Code>
    );
    const element = screen.getByText("const x = 1;");
    expect(element.tagName).toBe("SPAN");
    expect(element.closest("pre")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("applies color scheme", () => {
    render(<Code colorScheme="primary">code</Code>);
    // The wrapper component receives the class
    expect(screen.getByText("code").parentElement?.parentElement).toHaveClass("text-primary");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Code ref={ref}>code</Code>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
