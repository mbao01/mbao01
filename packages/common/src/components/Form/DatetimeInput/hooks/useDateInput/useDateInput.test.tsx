import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { DatetimeInputContextProps, TimeString } from "../../types";
import { DatetimeInputContext } from "../../DatetimeInputContext";
import { useDateInput } from "./useDateInput";

describe("useDateInput", () => {
  it("should throw an error when used outside of SmartDateInputProvider", () => {
    expect(() => {
      renderHook(() => useDateInput());
    }).toThrow("useDateInput must be used within SmartDateInputProvider");
  });

  it("should return the context value when used within SmartDateInputProvider", () => {
    const mockContext: DatetimeInputContextProps = {
      value: new Date(),
      onDateChange: vi.fn(),
      time: "12:00 PM" as TimeString,
      onTimeChange: vi.fn(),
    };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <DatetimeInputContext.Provider value={mockContext}>{children}</DatetimeInputContext.Provider>
    );

    const { result } = renderHook(() => useDateInput(), { wrapper });
    expect(result.current).toBe(mockContext);
  });
});
