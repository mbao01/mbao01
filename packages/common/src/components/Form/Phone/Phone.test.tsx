import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Phone } from "./Phone";
import userEvent from "@testing-library/user-event";

describe("Phone", () => {
  it("should render a phone input", () => {
    const { asFragment } = render(<Phone name="mobile" />);

    expect(screen.getByRole("textbox")).toHaveValue("+231 ");
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should input phone number", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(
      <Phone name="mobile" label="Mobile number" />
    );

    const phoneInput = screen.getByRole("textbox");

    await user.type(phoneInput, "9876543210");

    expect(phoneInput).toHaveDisplayValue("+231 9876543210");
    expect(asFragment()).toMatchSnapshot();
  });
});
