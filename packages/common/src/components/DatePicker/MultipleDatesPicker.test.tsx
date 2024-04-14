import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MultipleDatesPicker } from "./MultipleDatesPicker";

describe("MultipleDatesPicker", () => {
  it("shows the current month", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(<MultipleDatesPicker />);

    const button = screen.getByRole("button", {
      name: "Pick one or more dates",
    });

    await user.click(button);

    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    expect(screen.getByText(`${month} ${year}`)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("shows default/preselected dates", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(
      <MultipleDatesPicker
        defaultMonth={new Date("2022-03-01")}
        defaultDates={[new Date("2022-03-01"), new Date("2022-03-15")]}
      />
    );

    const button = screen.getByRole("button", {
      name: "Mar 01, 2022 and Mar 15, 2022",
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
      <MultipleDatesPicker
        numberOfMonths={2}
        defaultMonth={new Date("2022-03-01")}
      />
    );

    const button = screen.getByRole("button", {
      name: "Pick one or more dates",
    });

    await user.click(button);

    expect(screen.getByText("March 2022")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("has a custom label", () => {
    const { asFragment } = render(
      <MultipleDatesPicker label="When will you be visiting?" />
    );

    expect(
      screen.getByRole("button", { name: "When will you be visiting?" })
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("is disabled", () => {
    const { asFragment } = render(<MultipleDatesPicker disabled />);

    expect(
      screen.getByRole("button", { name: "Pick one or more dates" })
    ).toBeDisabled();
    expect(asFragment()).toMatchSnapshot();
  });
});
