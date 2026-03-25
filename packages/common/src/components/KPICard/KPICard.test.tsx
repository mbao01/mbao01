import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { KPICard } from "./";

describe("KPICard", () => {
  it("renders title and value", () => {
    render(<KPICard title="Revenue" value="$12,450" />);
    expect(screen.getByText("Revenue")).toBeInTheDocument();
    expect(screen.getByText("$12,450")).toBeInTheDocument();
  });

  it("renders trend badge when change is provided", () => {
    render(<KPICard title="Revenue" value="$12,450" change={12.5} />);
    expect(screen.getByText("+12.5%")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<KPICard title="Revenue" value="$12,450" description="vs last month" />);
    expect(screen.getByText("vs last month")).toBeInTheDocument();
  });

  it("renders chart when provided", () => {
    const { container } = render(
      <KPICard title="Revenue" value="$12,450" chart={<svg data-testid="chart" />} />
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders loading state", () => {
    render(<KPICard title="Revenue" value="$12,450" loading />);
    expect(screen.queryByText("Revenue")).not.toBeInTheDocument();
    expect(screen.queryByText("$12,450")).not.toBeInTheDocument();
  });

  it("renders icon", () => {
    render(<KPICard title="Revenue" value="$12,450" icon={<span data-testid="icon">$</span>} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
