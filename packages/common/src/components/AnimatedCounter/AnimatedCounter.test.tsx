import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AnimatedCounter } from "./";

describe("AnimatedCounter", () => {
  it("renders the value", () => {
    const { container } = render(<AnimatedCounter value={42} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders prefix and suffix", () => {
    const { container } = render(<AnimatedCounter value={100} prefix="$" suffix="+" />);
    const text = container.textContent;
    expect(text).toContain("$");
    expect(text).toContain("+");
  });

  it("applies custom className", () => {
    const { container } = render(<AnimatedCounter value={42} className="text-4xl" />);
    expect(container.firstChild).toHaveClass("text-4xl");
  });
});
