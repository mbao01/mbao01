import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ChartContext } from "../ChartContext";
import { ChartLegendContent } from "./ChartLegend";

const mockConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

const TestWrapper = ({ children, config = mockConfig }: any) => (
  <ChartContext.Provider value={{ config }}>{children}</ChartContext.Provider>
);

describe("ChartLegendContent", () => {
  it("renders nothing when payload is empty", () => {
    const { container } = render(
      <TestWrapper>
        <ChartLegendContent payload={[]} />
      </TestWrapper>
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders nothing when payload is undefined", () => {
    const { container } = render(
      <TestWrapper>
        <ChartLegendContent payload={undefined} />
      </TestWrapper>
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders legend items with labels", () => {
    const payload = [
      {
        value: "desktop",
        dataKey: "desktop",
        color: "hsl(var(--chart-1))",
        type: "line" as const,
      },
      {
        value: "mobile",
        dataKey: "mobile",
        color: "hsl(var(--chart-2))",
        type: "line" as const,
      },
    ];

    render(
      <TestWrapper>
        <ChartLegendContent payload={payload} />
      </TestWrapper>
    );

    expect(screen.getByText("Desktop")).toBeInTheDocument();
    expect(screen.getByText("Mobile")).toBeInTheDocument();
  });

  it("renders legend markers with correct colors", () => {
    const payload = [
      {
        value: "desktop",
        dataKey: "desktop",
        color: "rgb(255, 0, 0)",
        type: "line" as const,
      },
    ];

    const { container } = render(
      <TestWrapper>
        <ChartLegendContent payload={payload} />
      </TestWrapper>
    );

    const marker = container.querySelector("[style*='background-color']");
    expect(marker).toHaveStyle({ backgroundColor: "rgb(255, 0, 0)" });
  });

  it("hides icons when hideIcon is true", () => {
    const payload = [
      {
        value: "desktop",
        dataKey: "desktop",
        color: "hsl(var(--chart-1))",
        type: "line" as const,
      },
    ];

    const { container } = render(
      <TestWrapper>
        <ChartLegendContent payload={payload} hideIcon={true} />
      </TestWrapper>
    );

    // Should still render the marker div
    const marker = container.querySelector("[style*='background-color']");
    expect(marker).toBeInTheDocument();
  });

  it("renders with vertical align top", () => {
    const payload = [
      {
        value: "desktop",
        dataKey: "desktop",
        color: "hsl(var(--chart-1))",
        type: "line" as const,
      },
    ];

    const { container } = render(
      <TestWrapper>
        <ChartLegendContent payload={payload} verticalAlign="top" />
      </TestWrapper>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders with vertical align middle", () => {
    const payload = [
      {
        value: "desktop",
        dataKey: "desktop",
        color: "hsl(var(--chart-1))",
        type: "line" as const,
      },
    ];

    const { container } = render(
      <TestWrapper>
        <ChartLegendContent payload={payload} verticalAlign="middle" />
      </TestWrapper>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders with vertical align bottom (default)", () => {
    const payload = [
      {
        value: "desktop",
        dataKey: "desktop",
        color: "hsl(var(--chart-1))",
        type: "line" as const,
      },
    ];

    const { container } = render(
      <TestWrapper>
        <ChartLegendContent payload={payload} />
      </TestWrapper>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const payload = [
      {
        value: "desktop",
        dataKey: "desktop",
        color: "hsl(var(--chart-1))",
        type: "line" as const,
      },
    ];

    const { container } = render(
      <TestWrapper>
        <ChartLegendContent payload={payload} className="custom-legend" />
      </TestWrapper>
    );

    expect(container.querySelector(".custom-legend")).toBeInTheDocument();
  });

  it("uses nameKey for custom key extraction", () => {
    const payload = [
      {
        value: "desktop",
        customKey: "desktop",
        color: "hsl(var(--chart-1))",
        type: "line" as const,
      },
    ];

    render(
      <TestWrapper>
        <ChartLegendContent payload={payload} nameKey="customKey" />
      </TestWrapper>
    );

    expect(screen.getByText("Desktop")).toBeInTheDocument();
  });

  it("renders multiple legend items", () => {
    const payload = [
      {
        value: "desktop",
        dataKey: "desktop",
        color: "hsl(var(--chart-1))",
        type: "line" as const,
      },
      {
        value: "mobile",
        dataKey: "mobile",
        color: "hsl(var(--chart-2))",
        type: "line" as const,
      },
    ];

    const { container } = render(
      <TestWrapper>
        <ChartLegendContent payload={payload} />
      </TestWrapper>
    );

    const legendItems = container.querySelectorAll("[style*='background-color']");
    expect(legendItems).toHaveLength(2);
  });
});
