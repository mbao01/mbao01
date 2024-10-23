import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BarChartExample } from "./stories/examples/BarChart";

describe("Chart", () => {
  const renderChart = () => render(<BarChartExample />);

  it("renders a bar chart", () => {
    const { asFragment } = renderChart();

    expect(asFragment()).toMatchSnapshot();
  });
});
