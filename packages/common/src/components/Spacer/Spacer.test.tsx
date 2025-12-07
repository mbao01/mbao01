import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Spacer } from "./Spacer";

describe("Spacer", () => {
  it("renders correctly", () => {
    render(<Spacer data-testid="spacer" />);
    expect(screen.getByTestId("spacer")).toBeInTheDocument();
  });

  it("has aria-hidden attribute", () => {
    render(<Spacer data-testid="spacer" />);
    expect(screen.getByTestId("spacer")).toHaveAttribute("aria-hidden", "true");
  });

  it("applies vertical gap by default", () => {
    render(<Spacer gap={4} data-testid="spacer" />);
    expect(screen.getByTestId("spacer")).toHaveClass("h-4");
  });

  it("applies horizontal gap", () => {
    render(<Spacer axis="horizontal" gap={8} data-testid="spacer" />);
    expect(screen.getByTestId("spacer")).toHaveClass("w-8");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Spacer ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
