import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TextShimmer } from "./";

describe("TextShimmer", () => {
  it("renders children", () => {
    const { asFragment } = render(<TextShimmer>Hello</TextShimmer>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("applies custom duration", () => {
    render(<TextShimmer duration={4}>Slow</TextShimmer>);
    const el = screen.getByText("Slow");
    expect(el.style.animationDuration).toBe("4s");
  });

  it("accepts custom className", () => {
    render(<TextShimmer className="text-4xl">Styled</TextShimmer>);
    const el = screen.getByText("Styled");
    expect(el.className).toContain("text-4xl");
  });
});
