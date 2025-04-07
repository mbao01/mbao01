import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders with the correct initial state", () => {
    const { asFragment } = render(<Textarea name="username" defaultValue="John Doe" />);

    expect(screen.getByDisplayValue("John Doe")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("handles user textarea correctly", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(<Textarea name="username" defaultValue="John Doe" />);
    const textarea = screen.getByDisplayValue("John Doe");

    await user.clear(textarea);
    await user.type(textarea, "Ayomide B.");

    expect(textarea).toHaveValue("Ayomide B.");
    expect(asFragment()).toMatchSnapshot();
  });

  it("prevent user textarea when disabled", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(<Textarea name="username" defaultValue="John Doe" disabled />);
    const textarea = screen.getByDisplayValue("John Doe");

    await user.type(textarea, "Ayomide B.");

    expect(textarea).toHaveValue("John Doe");
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
    const { asFragment } = render(<Textarea name="name" defaultValue={value} variant={variant} />);

    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    { size: "xs", name: "tiny" },
    { size: "sm", name: "small" },
    { size: "md", name: "base" },
    { size: "lg", name: "large" },
  ] as const)("has $name ($size) textarea", ({ size, name }) => {
    const value = `${name} textarea`;
    const { asFragment } = render(<Textarea name="name" defaultValue={value} size={size} />);

    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("has a floating label", () => {
    const { asFragment } = render(<Textarea label="Your work experience" />);

    expect(screen.getByLabelText("Your work experience")).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });
});
