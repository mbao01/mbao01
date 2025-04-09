import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { InternalWidgetsContext } from "../../InternalWidgetsContext";
import { type Widget } from "../../types";
import { useWidget } from "./useWidget";

describe("useWidget", () => {
  it("should throw an error when used outside of WidgetsContext", () => {
    expect(() => {
      renderHook(() => useWidget("test-widget"));
    }).toThrow("useWidget must be used within a <WidgetsContext />");
  });

  it("should return the widget and deleteWidget function when widget exists", () => {
    const mockWidget: Widget = { id: "test-widget", type: "test" };
    const mockContext = {
      widgets: [mockWidget],
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

    const { result } = renderHook(() => useWidget("test-widget"), { wrapper });
    expect(result.current.widget).toBe(mockWidget);
    expect(typeof result.current.deleteWidget).toBe("function");
  });

  it("should return undefined widget when widget does not exist", () => {
    const mockContext = {
      widgets: [],
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

    const { result } = renderHook(() => useWidget("non-existent-widget"), { wrapper });
    expect(result.current.widget).toBeUndefined();
    expect(typeof result.current.deleteWidget).toBe("function");
  });

  it("should handle multiple widgets and find the correct one", () => {
    const mockWidgets: Widget[] = [
      { id: "widget1", type: "test" },
      { id: "widget2", type: "test" },
      { id: "widget3", type: "test" },
    ];
    const mockContext = {
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

    const { result } = renderHook(() => useWidget("widget2"), { wrapper });
    expect(result.current.widget).toBe(mockWidgets[1]);
    expect(typeof result.current.deleteWidget).toBe("function");
  });

  it("should call deleteWidget with the correct widget id", () => {
    const mockDeleteWidget = vi.fn();
    const mockWidget: Widget = { id: "test-widget", type: "test" };
    const mockContext = {
      widgets: [mockWidget],
      addWidget: vi.fn(),
      addWidgets: vi.fn(),
      deleteWidget: mockDeleteWidget,
      deleteWidgets: vi.fn(),
      resetWidgets: vi.fn(),
    };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <InternalWidgetsContext.Provider value={mockContext}>
        {children}
      </InternalWidgetsContext.Provider>
    );

    const { result } = renderHook(() => useWidget("test-widget"), { wrapper });
    result.current.deleteWidget();
    expect(mockDeleteWidget).toHaveBeenCalledWith(mockWidget);
  });
});
