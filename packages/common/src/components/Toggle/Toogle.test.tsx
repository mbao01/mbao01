import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Toggle } from "./Toggle";

describe("Toggle", () => {
  it("renders a toggle", () => {
    const { asFragment } = render(<Toggle>Toggle button</Toggle>);

    expect(
      screen.getByRole("button", { name: "Toggle button" })
    ).toHaveAttribute("data-state", "off");
    expect(asFragment()).toMatchSnapshot();
  });

  it("should toggle button state", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(<Toggle>Toggle</Toggle>);
    const toggle = screen.getByRole("button", { name: "Toggle" });
    expect(toggle).toHaveAttribute("data-state", "off");

    await user.click(toggle);

    expect(toggle).toHaveAttribute("data-state", "on");

    expect(asFragment()).toMatchSnapshot();
  });
});
