import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders with the correct initial state", () => {
    const { asFragment } = render(<Checkbox name="username" defaultChecked />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("handles user input correctly", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(<Checkbox name="username" />);
    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(asFragment()).toMatchSnapshot();
  });

  it("prevent user input when disabled", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(<Checkbox name="username" disabled />);
    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);

    expect(checkbox).toBeDisabled();
    expect(checkbox).not.toBeChecked();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each(["primary", "secondary", "accent", "success", "warning", "info", "error"] as const)(
    "has %s variant",
    (variant) => {
      const { asFragment } = render(<Checkbox name="name" defaultChecked variant={variant} />);

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
    const { asFragment } = render(<Checkbox name={name} size={size} />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
