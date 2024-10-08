import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Calendar } from "./Calendar";

describe("Calendar", () => {
  it("shows the current month", () => {
    render(<Calendar />);

    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    expect(screen.getByText(`${month} ${year}`)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Go to the Previous Month" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Go to the Next Month" })).toBeInTheDocument();
  });

  it("shows April, 2024 calendar", () => {
    const { asFragment } = render(
      <Calendar defaultMonth={new Date("2024-04-01")} today={new Date("2024-04-19")} />
    );

    expect(screen.getByText("April 2024")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("does not have navigation", () => {
    const { asFragment } = render(
      <Calendar
        captionLayout="label"
        defaultMonth={new Date("2024-04-01")}
        today={new Date("2024-04-19")}
        disableNavigation
        startMonth={new Date(2022, 0)}
        endMonth={new Date(2026, 11)}
      />
    );

    expect(screen.getByText("April 2024")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Go to previous month" })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Go to next month" })).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("has navigable months", () => {
    const { asFragment } = render(
      <Calendar
        captionLayout="dropdown"
        defaultMonth={new Date("2024-04-01")}
        today={new Date("2024-04-19")}
        startMonth={new Date(2022, 0)}
        endMonth={new Date(2026, 11)}
      />
    );

    expect(screen.getByDisplayValue("April")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2024")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
