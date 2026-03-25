import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Marquee } from "./";

describe("Marquee", () => {
  it("renders children twice (original + duplicate)", () => {
    render(<Marquee><span>AAPL</span></Marquee>);
    const items = screen.getAllByText("AAPL");
    expect(items).toHaveLength(2);
  });

  it("marks duplicate as aria-hidden", () => {
    const { container } = render(<Marquee><span>BTC</span></Marquee>);
    const tracks = container.querySelectorAll(".marquee-track");
    expect(tracks[1]?.getAttribute("aria-hidden")).toBe("true");
  });

  it("applies custom className", () => {
    const { container } = render(<Marquee className="my-class"><span>X</span></Marquee>);
    expect(container.firstChild).toHaveClass("my-class");
  });
});
