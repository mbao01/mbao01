import { createRef } from "react";
import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { MultiSelectContextProps } from "../../types";
import { MultiSelectContext } from "../../MultiSelectContext";
import { useMultiSelect } from "./useMultiSelect";

describe("useMultiSelect", () => {
  it("should throw an error when used outside of MultiSelectProvider", () => {
    expect(() => {
      renderHook(() => useMultiSelect());
    }).toThrow("useMultiSelect must be used within MultiSelectProvider");
  });

  it("should return the context value when used within MultiSelectProvider", () => {
    const mockContext: MultiSelectContextProps = {
      values: ["item1", "item2"],
      onValueChange: vi.fn(),
      items: [
        { value: "item1", label: "Item 1" },
        { value: "item2", label: "Item 2" },
      ],
      open: false,
      setOpen: vi.fn(),
      inputValue: "",
      setInputValue: vi.fn(),
      activeIndex: -1,
      setActiveIndex: vi.fn(),
      ref: createRef<HTMLInputElement>(),
      handleSelect: vi.fn(),
    };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MultiSelectContext.Provider value={mockContext}>{children}</MultiSelectContext.Provider>
    );

    const { result } = renderHook(() => useMultiSelect(), { wrapper });
    expect(result.current).toBe(mockContext);
  });
});
