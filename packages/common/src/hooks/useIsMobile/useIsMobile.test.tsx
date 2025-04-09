import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useIsMobile } from "./useIsMobile";

describe("useIsMobile", () => {
  const originalInnerWidth = window.innerWidth;
  const originalMatchMedia = window.matchMedia;
  let mockMediaQueryList: MediaQueryList & {
    addEventListener: ReturnType<typeof vi.fn>;
    removeEventListener: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    // Reset window.innerWidth before each test
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });

    // Mock matchMedia
    mockMediaQueryList = {
      matches: false,
      media: "",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    } as MediaQueryList & {
      addEventListener: ReturnType<typeof vi.fn>;
      removeEventListener: ReturnType<typeof vi.fn>;
    };

    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      ...mockMediaQueryList,
      media: query,
    }));
  });

  afterEach(() => {
    // Restore original window.innerWidth
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });

    // Restore original matchMedia
    window.matchMedia = originalMatchMedia;
  });

  it("should return true when window width is less than mobile breakpoint", () => {
    // Set window width to mobile size
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 767,
    });

    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it("should return false when window width is greater than or equal to mobile breakpoint", () => {
    // Set window width to desktop size
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 768,
    });

    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("should update when window width changes", () => {
    // Initial desktop size
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });

    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    // Change to mobile size
    act(() => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 767,
      });

      // Get the change handler that was registered
      const changeHandler = mockMediaQueryList.addEventListener.mock.calls[0][1];
      // Call it with a mock event
      changeHandler({ matches: true });
    });

    expect(result.current).toBe(true);
  });

  it("should clean up event listeners on unmount", () => {
    const { unmount } = renderHook(() => useIsMobile());

    unmount();

    expect(mockMediaQueryList.removeEventListener).toHaveBeenCalled();
  });
});
