import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Image } from "./Image";

describe("Image", () => {
  it("renders correctly", () => {
    render(<Image src="test.jpg" alt="test" />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "test.jpg");
    expect(screen.getByRole("img")).toHaveAttribute("alt", "test");
  });

  it("applies fit classes", () => {
    render(<Image src="test.jpg" fit="contain" />);
    expect(screen.getByRole("img")).toHaveClass("object-contain");
  });

  it("applies radius classes", () => {
    render(<Image src="test.jpg" radius="full" />);
    expect(screen.getByRole("img")).toHaveClass("rounded-full");
  });

  it("uses fallback src on error", () => {
    render(<Image src="invalid.jpg" fallbackSrc="fallback.jpg" />);
    const img = screen.getByRole("img");
    fireEvent.error(img);
    expect(img).toHaveAttribute("src", "fallback.jpg");
  });

  it("calls onError prop", () => {
    const handleError = vi.fn();
    render(<Image src="invalid.jpg" onError={handleError} />);
    const img = screen.getByRole("img");
    fireEvent.error(img);
    expect(handleError).toHaveBeenCalled();
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Image ref={ref} src="test.jpg" />);
    expect(ref.current).toBeInstanceOf(HTMLImageElement);
  });
});
