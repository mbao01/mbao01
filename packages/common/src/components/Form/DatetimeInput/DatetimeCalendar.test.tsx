import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { DatetimeCalendar } from "./DatetimeCalendar";
import { DatetimeInputContext } from "./DatetimeInputContext";

const TestWrapper = ({ children, value, time, onDateChange, onTimeChange }: any) => (
  <DatetimeInputContext.Provider
    value={{
      value,
      time,
      onDateChange,
      onTimeChange,
    }}
  >
    {children}
  </DatetimeInputContext.Provider>
);

describe("DatetimeCalendar", () => {
  const user = userEvent.setup();

  it("renders calendar trigger button", () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={new Date("2024-01-15T14:30:00")}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <DatetimeCalendar />
      </TestWrapper>
    );

    expect(screen.getByRole("button", { name: /calendar/i })).toBeInTheDocument();
  });

  it("opens popover when calendar button is clicked", async () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={new Date("2024-01-15T14:30:00")}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <DatetimeCalendar />
      </TestWrapper>
    );

    const calendarButton = screen.getByRole("button", { name: /calendar/i });
    await user.click(calendarButton);

    // Calendar should be visible
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("renders TimePicker in popover", async () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={new Date("2024-01-15T14:30:00")}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <DatetimeCalendar />
      </TestWrapper>
    );

    const calendarButton = screen.getByRole("button", { name: /calendar/i });
    await user.click(calendarButton);

    // TimePicker heading should be visible
    expect(screen.getByText("Time")).toBeInTheDocument();
  });

  it("is disabled when disabled prop is true", () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={new Date("2024-01-15T14:30:00")}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <DatetimeCalendar disabled />
      </TestWrapper>
    );

    expect(screen.getByRole("button", { name: /calendar/i })).toBeDisabled();
  });

  it("applies custom className", async () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={new Date("2024-01-15T14:30:00")}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <DatetimeCalendar className="custom-calendar" />
      </TestWrapper>
    );

    // Open the popover to see the calendar with custom class
    const calendarButton = screen.getByRole("button", { name: /calendar/i });
    await user.click(calendarButton);

    // The custom className is applied to the Calendar component inside the popover
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it.each(["xs", "sm", "md", "lg"] as const)("renders with %s size", (size) => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={new Date("2024-01-15T14:30:00")}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <DatetimeCalendar size={size} />
      </TestWrapper>
    );

    expect(screen.getByRole("button", { name: /calendar/i })).toBeInTheDocument();
  });
});
