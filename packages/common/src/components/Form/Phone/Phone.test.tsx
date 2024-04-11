import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Phone } from "./Phone";
import userEvent from "@testing-library/user-event";

describe("Phone", () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
    window.HTMLElement.prototype.hasPointerCapture = vi.fn();
    window.HTMLElement.prototype.releasePointerCapture = vi.fn();
  });

  it("should render a phone input", () => {
    const { asFragment } = render(<Phone name="mobile" />);

    expect(screen.getByRole("textbox")).toHaveValue("+231 ");
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should input phone number", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(<Phone name="mobile" />);

    const phoneInput = screen.getByRole("textbox");

    await user.type(phoneInput, "9876543210");

    expect(phoneInput).toHaveDisplayValue("+231 9876543210");
    expect(asFragment()).toMatchSnapshot();
  });

  it("should select country code by searching country name", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(<Phone name="mobile" />);

    const phoneInput = screen.getByRole("textbox");
    await user.type(phoneInput, "9876543210");

    expect(phoneInput).toHaveDisplayValue("+231 9876543210");

    // change country code
    const countryButton = screen.getByRole("combobox");
    await user.click(countryButton);

    const searchCountryInput = screen.getByPlaceholderText("Search country...");
    await user.type(searchCountryInput, "Nigeria");

    const countryOptions = screen.getAllByRole("option");

    expect(countryOptions).toHaveLength(1);
    expect(countryOptions[0]).toHaveTextContent("Nigeria");

    await user.click(countryOptions[0]);

    expect(phoneInput).toHaveDisplayValue("+234 ");

    await user.type(phoneInput, "9876543210");

    expect(phoneInput).toHaveDisplayValue("+234 9876543210");

    expect(asFragment()).toMatchSnapshot();
  });

  it("should select country code by searching country abbreviation", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(<Phone name="mobile" />);

    const phoneInput = screen.getByRole("textbox");

    expect(phoneInput).toHaveDisplayValue("+231 ");

    // change country code
    const countryButton = screen.getByRole("combobox");
    await user.click(countryButton);

    const searchCountryInput = screen.getByPlaceholderText("Search country...");
    await user.type(searchCountryInput, "gb");

    const countryOptions = screen.getAllByRole("option");

    expect(countryOptions).toHaveLength(9);
    expect(countryOptions[0]).toHaveTextContent("United Kingdom");

    await user.click(countryOptions[0]);

    expect(phoneInput).toHaveDisplayValue("+44 ");

    await user.type(phoneInput, "9876543210");

    expect(phoneInput).toHaveDisplayValue("+44 9876 543210");

    expect(asFragment()).toMatchSnapshot();
  });

  it("should select country code", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(<Phone name="mobile" />);

    const phoneInput = screen.getByRole("textbox");

    // default country code
    expect(phoneInput).toHaveDisplayValue("+231 ");

    // change country code
    await user.click(screen.getByRole("combobox"));

    const searchCountryInput = screen.getByPlaceholderText("Search country...");
    await user.type(searchCountryInput, "gb");

    let countryOptions = screen.getAllByRole("option");
    expect(countryOptions[0]).toHaveTextContent("United Kingdom");

    await user.click(countryOptions[0]);

    expect(phoneInput).toHaveDisplayValue("+44 ");

    await user.click(screen.getByRole("combobox"));
    countryOptions = screen.getAllByRole("option");

    expect(countryOptions[0]).toHaveTextContent("Afghanistan");

    await user.click(countryOptions[0]);

    expect(phoneInput).toHaveDisplayValue("+93 ");
    expect(asFragment()).toMatchSnapshot();
  });
});
