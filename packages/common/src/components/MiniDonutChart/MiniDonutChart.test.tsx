import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MiniDonutChart } from "./";

describe("MiniDonutChart", () => {
  it("renders segments as paths", () => {
    const { container } = render(
      <MiniDonutChart segments={[{ value: 60 }, { value: 40 }]} />
    );
    expect(container.querySelectorAll("path")).toHaveLength(2);
  });

  it("renders center label", () => {
    render(<MiniDonutChart segments={[{ value: 75 }, { value: 25 }]} label="75%" />);
    expect(screen.getByText("75%")).toBeInTheDocument();
  });

  it("handles empty segments", () => {
    const { container } = render(<MiniDonutChart segments={[]} />);
    expect(container.querySelectorAll("path")).toHaveLength(0);
  });
});
