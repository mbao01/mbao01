import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders with the correct initial state", () => {
    const { asFragment } = render(<Input name="username" defaultValue="John Doe" />);

    expect(screen.getByDisplayValue("John Doe")).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it("handles user input correctly", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(<Input name="username" defaultValue="John Doe" />);
    const input = screen.getByDisplayValue("John Doe");

    await user.clear(input);
    await user.type(input, "Ayomide B.");

    expect(input).toHaveValue("Ayomide B.");
    expect(asFragment()).toMatchSnapshot();
  });

  it("prevent user input when disabled", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(<Input name="username" defaultValue="John Doe" disabled />);
    const input = screen.getByDisplayValue("John Doe");

    await user.type(input, "Ayomide B.");

    expect(input).toHaveValue("John Doe");
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    "primary",
    "secondary",
    "accent",
    "ghost",
    "info",
    "success",
    "warning",
    "error",
  ] as const)("has %s variant", (variant) => {
    const value = `${variant} button`;
    const { asFragment } = render(<Input name="name" defaultValue={value} variant={variant} />);

    expect(screen.getByDisplayValue(value)).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    { size: "xs", name: "tiny" },
    { size: "sm", name: "small" },
    { size: "md", name: "base" },
    { size: "lg", name: "large" },
  ] as const)("has $name ($size) input", ({ size, name }) => {
    const value = `${name} input`;
    const { asFragment } = render(<Input name="name" defaultValue={value} size={size} />);

    expect(screen.getByDisplayValue(value)).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it("has a label", () => {
    const { asFragment } = render(<Input type="url" label="https://" placeholder="URL" />);

    expect(screen.getByLabelText("https://")).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it("has a prefix label", () => {
    const { asFragment } = render(<Input type="date" label="Publish date" labelPosition="start" />);

    expect(screen.getByLabelText("Publish date")).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it("has a suffix label", () => {
    const { asFragment } = render(
      <Input type="url" label=".com" labelPosition="end" placeholder="domain name" />
    );

    expect(screen.getByLabelText(".com")).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it("has a floating label", () => {
    const { asFragment } = render(
      <Input label="Your Email" labelPosition="floating" placeholder="mail@site.com" />
    );

    expect(screen.getByLabelText("Your Email")).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });
});
