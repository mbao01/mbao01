import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FileUploaderContext } from "./FileUploaderContext";
import { useFileUpload } from "./useFileUpload";

describe("useFileUpload", () => {
  it("should throw an error when used outside of FileUploaderProvider", () => {
    expect(() => {
      renderHook(() => useFileUpload());
    }).toThrow("useFileUpload must be used within a FileUploaderProvider");
  });

  it("should return the context value when used within FileUploaderProvider", () => {
    const mockContext = {
      dropzoneState: {} as any,
      isLOF: false,
      isFileTooBig: false,
      removeFileFromSet: () => {},
      removeAll: () => {},
      activeIndex: -1,
      setActiveIndex: () => {},
      orientation: "horizontal" as const,
      direction: undefined,
      hiddenInputRef: { current: null },
    };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FileUploaderContext.Provider value={mockContext}>{children}</FileUploaderContext.Provider>
    );

    const { result } = renderHook(() => useFileUpload(), { wrapper });
    expect(result.current).toBe(mockContext);
  });
});
