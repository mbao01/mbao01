import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Radio } from "./Radio";

describe("Radio", () => {
  it("renders with the correct initial state", () => {
    const { asFragment } = render(<Radio name="username" defaultChecked />);

    expect(screen.getByRole("radio")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("handles user input correctly", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(<Radio name="username" />);
    const radio = screen.getByRole("radio");

    await user.click(radio);

    expect(radio).toBeChecked();
    expect(asFragment()).toMatchSnapshot();
  });

  it("prevent user input when disabled", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(<Radio name="username" disabled />);
    const radio = screen.getByRole("radio");

    await user.click(radio);

    expect(radio).toBeDisabled();
    expect(radio).not.toBeChecked();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each(["primary", "secondary", "accent", "success", "warning", "info", "error"] as const)(
    "has %s variant",
    (variant) => {
      const { asFragment } = render(<Radio name="name" defaultChecked variant={variant} />);

      expect(screen.getByRole("radio")).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    }
  );

  it.each([
    { size: "xs", name: "tiny" },
    { size: "sm", name: "small" },
    { size: "md", name: "base" },
    { size: "lg", name: "large" },
  ] as const)("has $name ($size)", ({ size, name }) => {
    const { asFragment } = render(<Radio name={name} size={size} />);

    expect(screen.getByRole("radio")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
