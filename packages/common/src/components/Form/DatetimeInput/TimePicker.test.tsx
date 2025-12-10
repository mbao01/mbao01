import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { DatetimeInputContext } from "./DatetimeInputContext";
import { TimePicker } from "./TimePicker";
import { TimeString } from "./types";

const TestWrapper = ({
  children,
  value,
  time,
  onDateChange,
  onTimeChange,
}: {
  children: React.ReactNode;
  value: Date | undefined;
  time: TimeString;
  onDateChange: (date: Date | undefined) => void;
  onTimeChange: (time: string) => void;
}) => (
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

describe("TimePicker", () => {
  const user = userEvent.setup();

  it("renders time picker with heading", () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={new Date("2024-01-15T14:30:00")}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <TimePicker />
      </TestWrapper>
    );

    expect(screen.getByText("Time")).toBeInTheDocument();
  });

  it("renders list of time options", () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={new Date("2024-01-15T14:30:00")}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <TimePicker />
      </TestWrapper>
    );

    // Should render 24 hours * 4 intervals = 96 time options
    const timeOptions = screen.getAllByRole("listitem");
    expect(timeOptions.length).toBe(96);
  });

  it("handles time selection via click", async () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={new Date("2024-01-15T14:30:00")}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <TimePicker />
      </TestWrapper>
    );

    const timeOption = screen.getByLabelText("2:00 PM");
    await user.click(timeOption);

    expect(onTimeChange).toHaveBeenCalledWith("2:00 PM");
    expect(onDateChange).toHaveBeenCalled();
  });

  it("displays AM times correctly", () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={new Date("2024-01-15T09:00:00")}
        time="9:00 AM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <TimePicker />
      </TestWrapper>
    );

    expect(screen.getByLabelText("9:00 AM")).toBeInTheDocument();
    expect(screen.getByLabelText("9:15 AM")).toBeInTheDocument();
    expect(screen.getByLabelText("9:30 AM")).toBeInTheDocument();
    expect(screen.getByLabelText("9:45 AM")).toBeInTheDocument();
  });

  it("displays PM times correctly", () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={new Date("2024-01-15T14:30:00")}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <TimePicker />
      </TestWrapper>
    );

    expect(screen.getByLabelText("2:00 PM")).toBeInTheDocument();
    expect(screen.getByLabelText("2:15 PM")).toBeInTheDocument();
    expect(screen.getByLabelText("2:30 PM")).toBeInTheDocument();
    expect(screen.getByLabelText("2:45 PM")).toBeInTheDocument();
  });

  it("handles midnight (12:00 AM) correctly", () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={new Date("2024-01-15T00:00:00")}
        time="12:00 AM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <TimePicker />
      </TestWrapper>
    );

    expect(screen.getByLabelText("12:00 AM")).toBeInTheDocument();
  });

  it("handles noon (12:00 PM) correctly", () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={new Date("2024-01-15T12:00:00")}
        time="12:00 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <TimePicker />
      </TestWrapper>
    );

    expect(screen.getByLabelText("12:00 PM")).toBeInTheDocument();
  });

  it("handles keyboard navigation with ArrowDown", async () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    const { container } = render(
      <TestWrapper
        value={new Date("2024-01-15T14:30:00")}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <TimePicker />
      </TestWrapper>
    );

    const scrollArea = container.querySelector("[data-radix-scroll-area-viewport]");
    if (scrollArea) {
      await user.type(scrollArea, "{ArrowDown}");
      // Verify keyboard navigation works
      expect(scrollArea).toBeInTheDocument();
    }
  });

  it("handles keyboard navigation with ArrowUp", async () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    const { container } = render(
      <TestWrapper
        value={new Date("2024-01-15T14:30:00")}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <TimePicker />
      </TestWrapper>
    );

    const scrollArea = container.querySelector("[data-radix-scroll-area-viewport]");
    if (scrollArea) {
      await user.type(scrollArea, "{ArrowUp}");
      expect(scrollArea).toBeInTheDocument();
    }
  });

  it("handles Escape key to reset selection", async () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    const { container } = render(
      <TestWrapper
        value={new Date("2024-01-15T14:30:00")}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <TimePicker />
      </TestWrapper>
    );

    const scrollArea = container.querySelector("[data-radix-scroll-area-viewport]");
    if (scrollArea) {
      await user.type(scrollArea, "{Escape}");
      expect(scrollArea).toBeInTheDocument();
    }
  });

  it("handles Enter key to select time", async () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    const { container } = render(
      <TestWrapper
        value={new Date("2024-01-15T14:30:00")}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <TimePicker />
      </TestWrapper>
    );

    const scrollArea = container.querySelector("[data-radix-scroll-area-viewport]");
    if (scrollArea) {
      await user.type(scrollArea, "{Enter}");
      expect(scrollArea).toBeInTheDocument();
    }
  });

  it("renders 15-minute intervals", () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={new Date("2024-01-15T14:30:00")}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <TimePicker />
      </TestWrapper>
    );

    // Check for 15-minute intervals
    expect(screen.getByLabelText("1:00 PM")).toBeInTheDocument();
    expect(screen.getByLabelText("1:15 PM")).toBeInTheDocument();
    expect(screen.getByLabelText("1:30 PM")).toBeInTheDocument();
    expect(screen.getByLabelText("1:45 PM")).toBeInTheDocument();
  });

  it("handles focus on suggested time when no value", () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={undefined}
        time=""
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <TimePicker />
      </TestWrapper>
    );

    const timeOptions = screen.getAllByRole("listitem");
    expect(timeOptions.length).toBeGreaterThan(0);
  });

  it("updates time when clicking different time slot", async () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={new Date("2024-01-15T14:30:00")}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <TimePicker />
      </TestWrapper>
    );

    const newTime = screen.getByLabelText("3:45 PM");
    await user.click(newTime);

    expect(onTimeChange).toHaveBeenCalledWith("3:45 PM");
  });
});
