import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StatCard } from "./StatCard";

describe("StatCard", () => {
  it("renders title and value", () => {
    render(<StatCard title="Monthly income" value="$16,281.48" />);
    expect(screen.getByText("Monthly income")).toBeInTheDocument();
    expect(screen.getByText("$16,281.48")).toBeInTheDocument();
  });

  it("renders icon in lifted badge", () => {
    render(
      <StatCard
        icon={<span data-testid="icon">💳</span>}
        title="Revenue"
        value="$10,000"
      />
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders positive trend", () => {
    render(
      <StatCard title="Income" value="$16,281" trend="+9.8%" trendLabel="compared to last month" />
    );
    const trend = screen.getByText("+9.8%");
    expect(trend).toHaveClass("text-success");
    expect(screen.getByText("compared to last month")).toBeInTheDocument();
  });

  it("renders negative trend", () => {
    render(<StatCard title="Returns" value="326" trend="-3.2%" trendLabel="vs last month" />);
    const trend = screen.getByText("-3.2%");
    expect(trend).toHaveClass("text-error");
  });

  it("renders description when no trend", () => {
    render(<StatCard title="Users" value="12,486" description="Active users this month" />);
    expect(screen.getByText("Active users this month")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <StatCard title="Test" value="100" className="w-full" />
    );
    expect(container.firstChild).toHaveClass("w-full");
  });
});
