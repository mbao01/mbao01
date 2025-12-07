import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./";

describe("Button", () => {
  it("has a label", () => {
    const { asFragment } = render(<Button>Hello, World 🌍</Button>);

    expect(screen.getByRole("button", { name: "Hello, World 🌍" })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("is disabled and cannot be clicked", async () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Button
      </Button>
    );

    const btnEl = screen.getByRole("button", { name: "Button" });
    expect(btnEl).toBeDisabled();

    await userEvent.click(btnEl);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("shows loader", () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} isLoading>
        Button
      </Button>
    );

    expect(screen.getByRole("button", { name: "Button" })).toBeInTheDocument();
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it.each([
    { as: "a", name: "link" },
    { as: "span", name: "span" },
    { as: "p", name: "paragraph" },
  ] as const)("has a slot to render a $name tag", ({ as: Comp, name }) => {
    const label = `Button as ${name}`;
    const { asFragment } = render(
      <Button role="none" asChild>
        <Comp>{label}</Comp>
      </Button>
    );

    expect(screen.getByRole("none")).toHaveTextContent(label);
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    "default",
    "neutral",
    "primary",
    "secondary",
    "accent",
    "ghost",
    "info",
    "success",
    "warning",
    "error",
  ] as const)("has %s variant", (variant) => {
    const label = `${variant} button`;
    const { asFragment } = render(<Button variant={variant}>{label}</Button>);

    expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    { size: "xs", name: "tiny" },
    { size: "sm", name: "small" },
    { size: "md", name: "base" },
    { size: "lg", name: "large" },
  ] as const)("has $name ($size) button", ({ size, name }) => {
    const label = `${name} button`;
    const { asFragment } = render(<Button size={size}>{label}</Button>);

    expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    ["has outline", true],
    ["has no outline", false],
  ] as const)("%s", (description, outline) => {
    const label = `Button ${description}`;
    const { asFragment } = render(<Button outline={outline}>{label}</Button>);

    expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    ["is wide", true],
    ["is not wide", false],
  ] as const)("%s", (description, wide) => {
    const label = `Button ${description}`;
    const { asFragment } = render(<Button wide={wide}>{label}</Button>);

    expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
