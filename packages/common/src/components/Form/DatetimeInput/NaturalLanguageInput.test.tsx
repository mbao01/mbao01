import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { DatetimeInputContext } from "./DatetimeInputContext";
import { NaturalLanguageInput } from "./NaturalLanguageInput";
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

describe("NaturalLanguageInput", () => {
  const user = userEvent.setup();

  it("renders with default placeholder", () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={undefined}
        time=""
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <NaturalLanguageInput />
      </TestWrapper>
    );

    expect(
      screen.getByPlaceholderText('e.g. "tomorrow at 5pm" or "in 2 hours"')
    ).toBeInTheDocument();
  });

  it("renders with custom placeholder", () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={undefined}
        time=""
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <NaturalLanguageInput placeholder="Enter a date" />
      </TestWrapper>
    );

    expect(screen.getByPlaceholderText("Enter a date")).toBeInTheDocument();
  });

  it("displays formatted date when value is provided", () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();
    const testDate = new Date("2024-01-15T14:30:00");

    render(
      <TestWrapper
        value={testDate}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <NaturalLanguageInput />
      </TestWrapper>
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("Jan 15, 2024, 2:30 PM");
  });

  it("parses natural language input on Enter key", async () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={undefined}
        time=""
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <NaturalLanguageInput />
      </TestWrapper>
    );

    const input = screen.getByRole("textbox");
    await user.type(input, "tomorrow at 3pm{Enter}");

    await waitFor(() => {
      expect(onDateChange).toHaveBeenCalled();
    });
  });

  it("parses natural language input on blur", async () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={undefined}
        time=""
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <NaturalLanguageInput />
      </TestWrapper>
    );

    const input = screen.getByRole("textbox");
    await user.type(input, "next monday at 9am");
    await user.tab();

    await waitFor(() => {
      expect(onDateChange).toHaveBeenCalled();
    });
  });

  it("clears date when input is cleared and blurred", async () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();
    const testDate = new Date("2024-01-15T14:30:00");

    render(
      <TestWrapper
        value={testDate}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <NaturalLanguageInput />
      </TestWrapper>
    );

    const input = screen.getByRole("textbox");
    await user.clear(input);
    await user.tab();

    await waitFor(() => {
      expect(onDateChange).toHaveBeenCalledWith(undefined);
      expect(onTimeChange).toHaveBeenCalledWith("");
    });
  });

  it("formats date according to locale", () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();
    const testDate = new Date("2024-01-15T14:30:00");

    render(
      <TestWrapper
        value={testDate}
        time="2:30 PM"
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <NaturalLanguageInput locale="en-GB" />
      </TestWrapper>
    );

    const input = screen.getByRole("textbox");
    // en-GB format: "15 Jan 2024, 2:30 pm"
    expect(input).toHaveValue("15 Jan 2024, 2:30 pm");
  });

  it("allows typing without immediate parsing", async () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={undefined}
        time=""
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <NaturalLanguageInput />
      </TestWrapper>
    );

    const input = screen.getByRole("textbox");
    await user.type(input, "tomorrow");

    // Should not parse until Enter or blur
    expect(onDateChange).not.toHaveBeenCalled();
    expect(input).toHaveValue("tomorrow");
  });

  it("handles invalid date input gracefully", async () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={undefined}
        time=""
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <NaturalLanguageInput />
      </TestWrapper>
    );

    const input = screen.getByRole("textbox");
    await user.type(input, "invalid date string{Enter}");

    // Should not crash or call onDateChange with invalid date
    expect(input).toHaveValue("invalid date string");
  });

  it.each(["xs", "sm", "md", "lg"] as const)("renders with %s size", (size) => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();

    render(
      <TestWrapper
        value={undefined}
        time=""
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <NaturalLanguageInput size={size} />
      </TestWrapper>
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const onDateChange = vi.fn();
    const onTimeChange = vi.fn();
    const ref = vi.fn();

    render(
      <TestWrapper
        value={undefined}
        time=""
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
      >
        <NaturalLanguageInput ref={ref} />
      </TestWrapper>
    );

    expect(ref).toHaveBeenCalled();
  });
});
