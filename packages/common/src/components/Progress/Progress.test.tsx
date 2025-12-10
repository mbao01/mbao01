import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Progress } from "./Progress";

describe("Progress", () => {
  it("renders a progress bar", () => {
    const { asFragment } = render(<Progress value={77} />);

    const progressbar = screen.getByRole("progressbar");

    expect(progressbar).toHaveAttribute("aria-valuemax", "100");
    expect(progressbar).toHaveAttribute("aria-valuemin", "0");
    expect(progressbar).toHaveAttribute("aria-valuenow", "77");
    expect(progressbar).toHaveAttribute("aria-valuetext", "77%");
    expect(progressbar).toHaveAttribute("data-state", "loading");
    expect(asFragment()).toMatchSnapshot();
  });

  it("has a value label", () => {
    render(<Progress value={50} max={80} getValueLabel={(value, max) => `${value} of ${max}`} />);

    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuetext", "50 of 80");
  });

  it.each([
    "accent",
    "default",
    "error",
    "ghost",
    "info",
    "neutral",
    "primary",
    "secondary",
    "success",
    "warning",
  ] as const)("has %s variant", (variant) => {
    const label = `${variant} progress bar`;
    const { asFragment } = render(
      <Progress value={50} variant={variant} getValueLabel={() => label} />
    );

    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuetext", label);
    expect(asFragment()).toMatchSnapshot();
  });
});
