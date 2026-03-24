import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GlowCard } from "./";

describe("GlowCard", () => {
  it("renders children", () => {
    render(<GlowCard>Card content</GlowCard>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<GlowCard className="w-80">Content</GlowCard>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain("w-80");
  });

  it("renders gradient backgrounds", () => {
    const { container } = render(
      <GlowCard gradientFrom="red" gradientTo="blue">Content</GlowCard>
    );
    const gradients = container.querySelectorAll("[aria-hidden]");
    expect(gradients).toHaveLength(2);
  });
});
