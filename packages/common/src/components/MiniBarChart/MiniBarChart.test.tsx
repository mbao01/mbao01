import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MiniBarChart } from "./";

describe("MiniBarChart", () => {
  it("renders bars as rects", () => {
    const { container } = render(<MiniBarChart data={[1, 2, 3, 4]} />);
    expect(container.querySelectorAll("rect")).toHaveLength(4);
  });

  it("returns null for empty data", () => {
    const { container } = render(<MiniBarChart data={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("applies custom className", () => {
    const { container } = render(<MiniBarChart data={[1, 2]} className="my-class" />);
    expect(container.firstChild).toHaveClass("my-class");
  });
});
