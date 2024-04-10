import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Slider } from "./Slider";

describe("Slider", () => {
  it("renders with the correct initial state", () => {
    const { asFragment } = render(<Slider name="risk-level" />);

    expect(screen.getByRole("slider")).toBeInTheDocument();
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
      <Slider name="risk-level" variant={variant} wide />
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
    const { asFragment } = render(<Slider name={name} size={size} />);

    expect(screen.getByRole("slider")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
