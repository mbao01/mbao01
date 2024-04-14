import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DateRangePicker } from "./DateRangePicker";

describe("DateRangePicker", () => {
  it("shows the current month", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(<DateRangePicker />);

    const button = screen.getByRole("button", { name: "Pick a range" });

    await user.click(button);

    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    expect(screen.getByText(`${month} ${year}`)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("shows a default/preselected month and range", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(
      <DateRangePicker
        defaultMonth={new Date("2022-03-01")}
        defaultRange={{
          from: new Date("2022-03-01"),
          to: new Date("2022-03-15"),
        }}
      />
    );

    const button = screen.getByRole("button", {
      name: "Mar 01, 2022 - Mar 15, 2022",
    });

    await user.click(button);

    expect(screen.getByText("March 2022")).toBeInTheDocument();
    expect(screen.getByRole("gridcell", { name: "15" })).toHaveAttribute(
      "aria-selected",
      "true"
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("shows calendar with specific month", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(
      <DateRangePicker defaultMonth={new Date("2022-03-01")} />
    );

    const button = screen.getByRole("button", { name: "Pick a range" });

    await user.click(button);

    expect(screen.getByText("March 2022")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("has a custom label", async () => {
    const { asFragment } = render(
      <DateRangePicker label="How long will you be staying?" />
    );

    expect(
      screen.getByRole("button", { name: "How long will you be staying?" })
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("is disabled", async () => {
    const { asFragment } = render(<DateRangePicker disabled />);

    expect(screen.getByRole("button", { name: "Pick a range" })).toBeDisabled();
    expect(asFragment()).toMatchSnapshot();
  });
});
