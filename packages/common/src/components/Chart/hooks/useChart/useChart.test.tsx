import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { ChartContextProps } from "../../types";
import { ChartContext } from "../../ChartContext";
import { useChart } from "./useChart";

describe("useChart", () => {
  it("should throw an error when used outside of Chart component", () => {
    expect(() => {
      renderHook(() => useChart());
    }).toThrow("useChart must be used within a <Chart />");
  });

  it("should return the context value when used within Chart component", () => {
    const mockContext: ChartContextProps = {
      config: {
        series1: {
          label: "Series 1",
          color: "#000000",
        },
      },
    };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ChartContext.Provider value={mockContext}>{children}</ChartContext.Provider>
    );

    const { result } = renderHook(() => useChart(), { wrapper });
    expect(result.current).toBe(mockContext);
  });
});
