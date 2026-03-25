import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Pulse } from "./";

describe("Pulse", () => {
  it("renders with default variant", () => {
    const { container } = render(<Pulse />);
    expect(container.querySelector(".bg-success")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(<Pulse label="Live" />);
    expect(screen.getByText("Live")).toBeInTheDocument();
  });

  it("renders without animation", () => {
    const { container } = render(<Pulse animated={false} />);
    expect(container.querySelector(".animate-ping")).not.toBeInTheDocument();
  });

  it("applies variant", () => {
    const { container } = render(<Pulse variant="error" />);
    expect(container.querySelector(".bg-error")).toBeInTheDocument();
  });
});
