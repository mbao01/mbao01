import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { FileUploaderContextType } from "./types";
import { FileUploaderContext } from "./FileUploaderContext";
import { useFileUpload } from "./useFileUpload";

describe("useFileUpload", () => {
  it("should throw an error when used outside of FileUploaderProvider", () => {
    expect(() => {
      renderHook(() => useFileUpload());
    }).toThrow("useFileUpload must be used within a FileUploaderProvider");
  });

  it("should return the context value when used within FileUploaderProvider", () => {
    const mockContext: FileUploaderContextType = {
      dropzoneState: {
        isDragAccept: false,
        isDragReject: false,
        isDragActive: false,
        isFocused: false,
        isFileDialogActive: false,
        acceptedFiles: [],
        fileRejections: [],
        getRootProps: vi.fn(),
        getInputProps: vi.fn(),
        open: vi.fn(),
        rootRef: { current: document.createElement("div") },
        inputRef: { current: document.createElement("input") },
      },
      isLOF: false,
      isFileTooBig: false,
      removeFileFromSet: vi.fn(),
      removeAll: vi.fn(),
      activeIndex: -1,
      setActiveIndex: vi.fn(),
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
