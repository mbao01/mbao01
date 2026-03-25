import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Sparkline } from "./";

describe("Sparkline", () => {
  it("renders SVG with valid data", () => {
    const { container } = render(<Sparkline data={[1, 3, 2, 5, 4]} />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("returns null with insufficient data", () => {
    const { container } = render(<Sparkline data={[1]} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders filled area when filled is true", () => {
    const { container } = render(<Sparkline data={[1, 3, 2, 5]} filled />);
    const paths = container.querySelectorAll("path");
    expect(paths.length).toBe(2); // area + line
  });

  it("applies custom dimensions", () => {
    const { container } = render(<Sparkline data={[1, 2, 3]} width={200} height={50} />);
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("width")).toBe("200");
    expect(svg?.getAttribute("height")).toBe("50");
  });

  it("applies custom className", () => {
    const { container } = render(<Sparkline data={[1, 2, 3]} className="my-class" />);
    expect(container.firstChild).toHaveClass("my-class");
  });
});
