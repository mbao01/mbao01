import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { InternalWidgetsContextProps, Widget } from "../../types";
import { InternalWidgetsContext } from "../../InternalWidgetsContext";
import { useWidgets } from "./useWidgets";

describe("useWidgets", () => {
  it("should throw an error when used outside of WidgetsContext", () => {
    expect(() => {
      renderHook(() => useWidgets());
    }).toThrow("useWidgets must be used within a <WidgetsContext />");
  });

  it("should return the context value when used within WidgetsContext", () => {
    const mockWidgets: Widget[] = [
      { id: "widget1", type: "test" },
      { id: "widget2", type: "test" },
    ];
    const mockContext: InternalWidgetsContextProps = {
      widgets: mockWidgets,
      addWidget: vi.fn(),
      addWidgets: vi.fn(),
      deleteWidget: vi.fn(),
      deleteWidgets: vi.fn(),
      resetWidgets: vi.fn(),
    };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <InternalWidgetsContext.Provider value={mockContext}>
        {children}
      </InternalWidgetsContext.Provider>
    );

    const { result } = renderHook(() => useWidgets(), { wrapper });
    expect(result.current).toBe(mockContext);
  });
});
