import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GradientText } from "./";

describe("GradientText", () => {
  it("renders children", () => {
    render(<GradientText>Hello World</GradientText>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("has gradient styling", () => {
    const { container } = render(<GradientText>Text</GradientText>);
    expect(container.firstChild).toHaveClass("bg-clip-text", "text-transparent");
  });

  it("applies animated class when animated", () => {
    const { container } = render(<GradientText animated>Text</GradientText>);
    expect(container.firstChild).toHaveClass("animate-gradient");
  });
});
