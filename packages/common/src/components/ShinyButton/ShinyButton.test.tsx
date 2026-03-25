import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ShinyButton } from "./";

describe("ShinyButton", () => {
  it("renders children", () => {
    render(<ShinyButton>Click me</ShinyButton>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<ShinyButton className="test-class">Button</ShinyButton>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("test-class");
  });

  it("passes through button props", () => {
    render(<ShinyButton disabled>Disabled</ShinyButton>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
