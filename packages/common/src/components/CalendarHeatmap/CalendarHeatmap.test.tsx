import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CalendarHeatmap } from "./";

describe("CalendarHeatmap", () => {
  const data = [
    { date: "2025-01-15", value: 5 },
    { date: "2025-02-20", value: 10 },
    { date: "2025-03-10", value: 3 },
  ];

  it("renders without crashing", () => {
    const { container } = render(
      <CalendarHeatmap
        data={data}
        startDate={new Date(2025, 0, 1)}
        endDate={new Date(2025, 3, 1)}
      />
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders cells with title tooltips", () => {
    const { container } = render(
      <CalendarHeatmap
        data={data}
        startDate={new Date(2025, 0, 1)}
        endDate={new Date(2025, 3, 1)}
      />
    );
    const cells = container.querySelectorAll("[title]");
    expect(cells.length).toBeGreaterThan(0);
  });

  it("applies custom className", () => {
    const { container } = render(
      <CalendarHeatmap data={data} className="my-class" />
    );
    expect(container.firstChild).toHaveClass("my-class");
  });
});
