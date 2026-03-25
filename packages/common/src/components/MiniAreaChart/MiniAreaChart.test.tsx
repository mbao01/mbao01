import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MiniAreaChart } from "./";

describe("MiniAreaChart", () => {
  it("renders SVG paths", () => {
    const { container } = render(<MiniAreaChart data={[1, 3, 2, 5, 4]} />);
    expect(container.querySelectorAll("path")).toHaveLength(2); // area + line
  });

  it("returns null for insufficient data", () => {
    const { container } = render(<MiniAreaChart data={[1]} />);
    expect(container.firstChild).toBeNull();
  });
});
