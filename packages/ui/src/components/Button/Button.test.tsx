import { describe, expect, it } from "vitest";
import { Button } from "./";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("has a label", () => {
    const { asFragment } = render(<Button label="Hello, World 🌍" />);

    expect(
      screen.getByRole("button", { name: "Hello, World 🌍" })
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("is disabled and cannot be clicked", async () => {
    const handleClick = vi.fn();
    render(<Button label="Button" onClick={handleClick} disabled />);

    const btnEl = screen.getByRole("button", { name: "Button" });
    expect(btnEl).toBeDisabled();

    await userEvent.click(btnEl);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("shows loader", async () => {
    const handleClick = vi.fn();
    render(<Button label="Button" onClick={handleClick} loading />);

    expect(screen.getByRole("button", { name: "Button" })).toBeInTheDocument();
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it.each([
    "default",
    "neutral",
    "primary",
    "secondary",
    "accent",
    "ghost",
    "link",
    "info",
    "success",
    "warning",
    "error",
  ] as const)("has %s variant", async (variant) => {
    const label = `${variant} button`;
    const { asFragment } = render(<Button label={label} variant={variant} />);

    expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    { size: "xs", name: "tiny" },
    { size: "sm", name: "small" },
    { size: "md", name: "base" },
    { size: "lg", name: "large" },
  ] as const)("has $name ($size) button", async ({ size, name }) => {
    const label = `${name} button`;
    const { asFragment } = render(<Button label={label} size={size} />);

    expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    ["has outline", true],
    ["has no outline", false],
  ] as const)("%s", async (description, outline) => {
    const label = `Button ${description}`;
    const { asFragment } = render(<Button label={label} outline={outline} />);

    expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    ["is wide", true],
    ["is not wide", false],
  ] as const)("%s", async (description, wide) => {
    const label = `Button ${description}`;
    const { asFragment } = render(<Button label={label} wide={wide} />);

    expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
