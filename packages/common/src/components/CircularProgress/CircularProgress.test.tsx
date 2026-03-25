import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CircularProgress } from "./";

describe("CircularProgress", () => {
  it("renders with value label", () => {
    render(<CircularProgress value={75} />);
    expect(screen.getByText("75%")).toBeInTheDocument();
  });

  it("clamps value between 0 and 100", () => {
    const { container } = render(<CircularProgress value={150} />);
    const el = container.firstChild as HTMLElement;
    expect(el.getAttribute("aria-valuenow")).toBe("100");
    expect(screen.getByText("100%")).toBeInTheDocument();
  });

  it("hides label when showLabel is false", () => {
    render(<CircularProgress value={50} showLabel={false} />);
    expect(screen.queryByText("50%")).not.toBeInTheDocument();
  });

  it("renders custom label", () => {
    render(<CircularProgress value={50} label="$500" />);
    expect(screen.getByText("$500")).toBeInTheDocument();
  });

  it("applies variant color", () => {
    const { container } = render(<CircularProgress value={50} variant="success" />);
    expect(container.firstChild).toHaveClass("text-success");
  });

  it("has progressbar role with ARIA attributes", () => {
    render(<CircularProgress value={60} />);
    const el = screen.getByRole("progressbar");
    expect(el.getAttribute("aria-valuenow")).toBe("60");
    expect(el.getAttribute("aria-valuemin")).toBe("0");
    expect(el.getAttribute("aria-valuemax")).toBe("100");
  });

  it("applies custom size and thickness via style", () => {
    const { container } = render(<CircularProgress value={50} size="8rem" thickness="6px" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue("--size")).toBe("8rem");
    expect(el.style.getPropertyValue("--thickness")).toBe("6px");
  });
});
