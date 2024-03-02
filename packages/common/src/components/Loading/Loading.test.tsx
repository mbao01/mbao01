import { describe, expect, it, vi } from "vitest";
import { Loading } from "./";
import { render, screen } from "@testing-library/react";

describe("Loading", () => {
  it.only("shows a tiny colored spinner", () => {
    const { asFragment } = render(
      <Loading
        color="primary"
        size="xs"
        variant="spinner"
        data-testid="loading"
      />
    );

    expect(screen.getByTestId("loading")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each(["spinner", "dots", "ring", "ball", "bars", "infinity"] as const)(
    "has %s variant",
    (variant) => {
      const { asFragment } = render(
        <Loading variant={variant} data-testid="loading" />
      );

      expect(screen.getByTestId("loading")).toHaveClass(`loading-${variant}`);
      expect(asFragment()).toMatchSnapshot();
    }
  );

  it.each([
    { size: "xs", name: "tiny" },
    { size: "sm", name: "small" },
    { size: "md", name: "base" },
    { size: "lg", name: "large" },
  ] as const)("has $name ($size) loading", ({ size }) => {
    const { asFragment } = render(
      <Loading size={size} data-testid="loading" />
    );

    expect(screen.getByTestId("loading")).toHaveClass(`loading-${size}`);
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    "primary",
    "secondary",
    "accent",
    "neutral",
    "info",
    "success",
    "warning",
    "error",
  ] as const)("has %s color", (color) => {
    const { asFragment } = render(
      <Loading color={color} data-testid="loading" />
    );

    expect(screen.getByTestId("loading")).toHaveClass(`text-${color}`);
    expect(asFragment()).toMatchSnapshot();
  });
});
