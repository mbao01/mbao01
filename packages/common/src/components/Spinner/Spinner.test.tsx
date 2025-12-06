import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renders correctly", () => {
    render(<Spinner data-testid="spinner" />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("applies size classes", () => {
    render(<Spinner size="lg" data-testid="spinner" />);
    expect(screen.getByTestId("spinner")).toHaveClass("h-8 w-8");
  });

  it("applies variant classes", () => {
    render(<Spinner variant="primary" data-testid="spinner" />);
    expect(screen.getByTestId("spinner")).toHaveClass("text-primary");
  });

  it("contains sr-only text", () => {
    render(<Spinner />);
    expect(screen.getByText("Loading...")).toHaveClass("sr-only");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Spinner ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
