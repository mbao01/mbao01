import { ComponentType, ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Theme } from "../../../utilities";
import { ChartContext } from "../ChartContext";
import { ChartTooltipContent } from "./ChartTooltip";

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

const TestWrapper = ({
  children,
  config = mockConfig,
}: {
  children: React.ReactNode;
  config?: Record<
    string,
    { label?: ReactNode; icon?: ComponentType | undefined } & (
      | { color?: string | undefined; theme?: undefined }
      | { color?: undefined; theme: Record<Theme, string> }
    )
  >;
}) => <ChartContext.Provider value={{ config }}>{children}</ChartContext.Provider>;

describe("ChartTooltipContent", () => {
  it("renders nothing when not active", () => {
    const { container } = render(
      <TestWrapper>
        <ChartTooltipContent active={false} payload={[]} />
      </TestWrapper>
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders nothing when payload is empty", () => {
    const { container } = render(
      <TestWrapper>
        <ChartTooltipContent active={true} payload={[]} />
      </TestWrapper>
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders tooltip content with single item", () => {
    const payload = [
      {
        dataKey: "desktop",
        name: "desktop",
        value: 186,
        color: "hsl(var(--chart-1))",
        payload: { fill: "hsl(var(--chart-1))" },
      },
    ];

    render(
      <TestWrapper>
        <ChartTooltipContent active={true} payload={payload} />
      </TestWrapper>
    );

    // Desktop appears twice when nestLabel is true (in label and in item)
    expect(screen.getAllByText("Desktop").length).toBeGreaterThan(0);
    expect(screen.getByText("186")).toBeInTheDocument();
  });

  it("renders tooltip content with multiple items", () => {
    const payload = [
      {
        dataKey: "desktop",
        name: "desktop",
        value: 186,
        color: "hsl(var(--chart-1))",
        payload: { fill: "hsl(var(--chart-1))" },
      },
      {
        dataKey: "mobile",
        name: "mobile",
        value: 80,
        color: "hsl(var(--chart-2))",
        payload: { fill: "hsl(var(--chart-2))" },
      },
    ];

    render(
      <TestWrapper>
        <ChartTooltipContent active={true} payload={payload} />
      </TestWrapper>
    );

    // Desktop appears in both the top label and in the item list
    expect(screen.getAllByText("Desktop").length).toBeGreaterThan(0);
    expect(screen.getByText("186")).toBeInTheDocument();
    expect(screen.getByText("Mobile")).toBeInTheDocument();
    expect(screen.getByText("80")).toBeInTheDocument();
  });

  it("hides label when hideLabel is true", () => {
    const payload = [
      {
        dataKey: "desktop",
        name: "desktop",
        value: 186,
        color: "hsl(var(--chart-1))",
        payload: { fill: "hsl(var(--chart-1))" },
      },
    ];

    render(
      <TestWrapper>
        <ChartTooltipContent active={true} payload={payload} hideLabel={true} label="Test Label" />
      </TestWrapper>
    );

    expect(screen.queryByText("Test Label")).not.toBeInTheDocument();
  });

  it("hides indicator when hideIndicator is true", () => {
    const payload = [
      {
        dataKey: "desktop",
        name: "desktop",
        value: 186,
        color: "hsl(var(--chart-1))",
        payload: { fill: "hsl(var(--chart-1))" },
      },
    ];

    const { container } = render(
      <TestWrapper>
        <ChartTooltipContent active={true} payload={payload} hideIndicator={true} />
      </TestWrapper>
    );

    // Indicator should not be rendered
    expect(container.querySelector("[style*='--color-bg']")).not.toBeInTheDocument();
  });

  it("uses custom labelFormatter", () => {
    const payload = [
      {
        dataKey: "desktop",
        name: "desktop",
        value: 186,
        color: "hsl(var(--chart-1))",
        payload: { fill: "hsl(var(--chart-1))" },
      },
    ];

    const labelFormatter = (value: string | number | (string | number)[]) => `Custom: ${value}`;

    render(
      <TestWrapper>
        <ChartTooltipContent
          active={true}
          payload={payload}
          label="Test"
          labelFormatter={labelFormatter}
        />
      </TestWrapper>
    );

    // labelFormatter is applied to the label value ("Test"), not the item name
    expect(screen.getByText("Custom: Test")).toBeInTheDocument();
  });

  it("uses custom formatter for values", () => {
    const payload = [
      {
        dataKey: "desktop",
        name: "desktop",
        value: 186,
        color: "hsl(var(--chart-1))",
        payload: { fill: "hsl(var(--chart-1))" },
      },
    ];

    const formatter = (value: string | number | (string | number)[]) => `$${value}`;

    render(
      <TestWrapper>
        <ChartTooltipContent active={true} payload={payload} formatter={formatter} />
      </TestWrapper>
    );

    expect(screen.getByText("$186")).toBeInTheDocument();
  });

  it("renders with dot indicator", () => {
    const payload = [
      {
        dataKey: "desktop",
        name: "desktop",
        value: 186,
        color: "hsl(var(--chart-1))",
        payload: { fill: "hsl(var(--chart-1))" },
      },
    ];

    render(
      <TestWrapper>
        <ChartTooltipContent active={true} payload={payload} indicator="dot" />
      </TestWrapper>
    );

    expect(screen.getAllByText("Desktop").length).toBeGreaterThan(0);
  });

  it("renders with line indicator", () => {
    const payload = [
      {
        dataKey: "desktop",
        name: "desktop",
        value: 186,
        color: "hsl(var(--chart-1))",
        payload: { fill: "hsl(var(--chart-1))" },
      },
      {
        dataKey: "mobile",
        name: "mobile",
        value: 80,
        color: "hsl(var(--chart-2))",
        payload: { fill: "hsl(var(--chart-2))" },
      },
    ];

    render(
      <TestWrapper>
        <ChartTooltipContent active={true} payload={payload} indicator="line" />
      </TestWrapper>
    );

    expect(screen.getAllByText("Desktop").length).toBeGreaterThan(0);
  });

  it("applies custom className", () => {
    const payload = [
      {
        dataKey: "desktop",
        name: "desktop",
        value: 186,
        color: "hsl(var(--chart-1))",
        payload: { fill: "hsl(var(--chart-1))" },
      },
    ];

    const { container } = render(
      <TestWrapper>
        <ChartTooltipContent active={true} payload={payload} className="custom-tooltip" />
      </TestWrapper>
    );

    expect(container.querySelector(".custom-tooltip")).toBeInTheDocument();
  });

  it("formats numbers with locale", () => {
    const payload = [
      {
        dataKey: "desktop",
        name: "desktop",
        value: 1000,
        color: "hsl(var(--chart-1))",
        payload: { fill: "hsl(var(--chart-1))" },
      },
    ];

    render(
      <TestWrapper>
        <ChartTooltipContent active={true} payload={payload} />
      </TestWrapper>
    );

    // Value should be formatted with toLocaleString
    expect(screen.getByText("1,000")).toBeInTheDocument();
  });

  it("uses nameKey for custom key extraction", () => {
    const payload = [
      {
        dataKey: "desktop",
        customName: "Desktop Computer",
        value: 186,
        color: "hsl(var(--chart-1))",
        payload: { fill: "hsl(var(--chart-1))" },
      },
    ];

    render(
      <TestWrapper>
        <ChartTooltipContent active={true} payload={payload} nameKey="customName" />
      </TestWrapper>
    );

    expect(screen.getByText("Desktop")).toBeInTheDocument();
  });

  it("handles custom color prop", () => {
    const payload = [
      {
        dataKey: "desktop",
        name: "desktop",
        value: 186,
        color: "hsl(var(--chart-1))",
        payload: { fill: "hsl(var(--chart-1))" },
      },
    ];

    const { container } = render(
      <TestWrapper>
        <ChartTooltipContent active={true} payload={payload} color="red" />
      </TestWrapper>
    );

    const indicator = container.querySelector("[style*='--color-bg']");
    expect(indicator).toHaveStyle({ "--color-bg": "red" });
  });
});
