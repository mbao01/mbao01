import { createRef } from "react";
import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MultiSelectContext } from "../../MultiSelectContext";
import { type MultiSelectContextProps } from "../../types";
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
      onValueChange: () => {},
      items: [
        { value: "item1", label: "Item 1" },
        { value: "item2", label: "Item 2" },
      ],
      open: false,
      setOpen: () => {},
      inputValue: "",
      setInputValue: () => {},
      activeIndex: -1,
      setActiveIndex: () => {},
      ref: createRef<HTMLInputElement>(),
      handleSelect: () => {},
    };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MultiSelectContext.Provider value={mockContext}>{children}</MultiSelectContext.Provider>
    );

    const { result } = renderHook(() => useMultiSelect(), { wrapper });
    expect(result.current).toBe(mockContext);
  });
});
