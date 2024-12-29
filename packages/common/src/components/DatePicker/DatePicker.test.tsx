import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { DatePicker } from "./DatePicker";

describe("DatePicker", () => {
  it("shows the current month", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(<DatePicker />);

    const button = screen.getByRole("button", { name: "Pick a date" });

    await user.click(button);

    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    expect(screen.getByText(`${month} ${year}`)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("shows a default/preselected month and date", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(
      <DatePicker defaultMonth={new Date("2022-03-01")} defaultDate={new Date("2022-03-15")} />
    );

    const button = screen.getByRole("button", { name: "March 15th, 2022" });

    await user.click(button);

    expect(screen.getByText("March 2022")).toBeInTheDocument();
    expect(screen.getByRole("gridcell", { name: "15" })).toHaveAttribute("aria-selected", "true");
    expect(
      screen.getByRole("button", { name: "Tuesday, March 15th, 2022, selected" })
    ).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it("shows calendar with specific month", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(<DatePicker defaultMonth={new Date("2022-03-01")} />);

    const button = screen.getByRole("button", { name: "Pick a date" });

    await user.click(button);

    expect(screen.getByText("March 2022")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("has a custom label", () => {
    const { asFragment } = render(<DatePicker label="Date of birth" />);

    expect(screen.getByRole("button", { name: "Date of birth" })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("is disabled", () => {
    const { asFragment } = render(<DatePicker disabled />);

    expect(screen.getByRole("button", { name: "Pick a date" })).toBeDisabled();
    expect(asFragment()).toMatchSnapshot();
  });
});
