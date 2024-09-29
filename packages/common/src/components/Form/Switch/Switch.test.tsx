import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("renders with the correct initial state", () => {
    const { asFragment } = render(<Switch name="username" defaultChecked />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("handles user input correctly", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(<Switch name="username" />);
    const toggle = screen.getByRole("checkbox");

    await user.click(toggle);

    expect(toggle).toBeChecked();
    expect(asFragment()).toMatchSnapshot();
  });

  it("prevent user input when disabled", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(<Switch name="username" disabled />);
    const toggle = screen.getByRole("checkbox");

    await user.click(toggle);

    expect(toggle).toBeDisabled();
    expect(toggle).not.toBeChecked();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each(["primary", "secondary", "accent", "success", "warning", "info", "error"] as const)(
    "has %s variant",
    (variant) => {
      const { asFragment } = render(<Switch name="name" defaultChecked variant={variant} />);

      expect(screen.getByRole("checkbox")).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    }
  );

  it.each([
    { size: "xs", name: "tiny" },
    { size: "sm", name: "small" },
    { size: "md", name: "base" },
    { size: "lg", name: "large" },
  ] as const)("has $name ($size)", ({ size, name }) => {
    const { asFragment } = render(<Switch name={name} size={size} />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
