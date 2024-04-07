import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Range } from "./Range";

describe("Range", () => {
  it("renders with the correct initial state", () => {
    const { asFragment } = render(<Range name="risk-level" />);

    expect(screen.getByRole("slider")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("handles user input correctly", () => {
    const { asFragment } = render(<Range name="risk-level" />);
    const range = screen.getByRole("slider");

    fireEvent.change(range, { target: { value: 25 } });

    expect(range).toHaveValue("25");
    expect(asFragment()).toMatchSnapshot();
  });

  it("is in a disabled state", () => {
    const { asFragment } = render(
      <Range name="risk-level" defaultValue={10} disabled />
    );
    const range = screen.getByRole("slider");

    expect(range).toBeDisabled();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    "primary",
    "secondary",
    "accent",
    "success",
    "warning",
    "info",
    "error",
    "neutral",
  ] as const)("has %s variant", (variant) => {
    const { asFragment } = render(
      <Range name="risk-level" variant={variant} wide />
    );

    expect(screen.getByRole("slider")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    { size: "xs", name: "tiny" },
    { size: "sm", name: "small" },
    { size: "md", name: "base" },
    { size: "lg", name: "large" },
  ] as const)("has $name ($size)", ({ size, name }) => {
    const { asFragment } = render(<Range name={name} size={size} />);

    expect(screen.getByRole("slider")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
