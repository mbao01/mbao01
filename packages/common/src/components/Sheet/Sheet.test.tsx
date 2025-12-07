import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Sheet, SheetTitle } from "./Sheet";

describe("Sheet", () => {
  it("renders correctly when open", () => {
    render(
      <Sheet open>
        <SheetTitle>Title</SheetTitle>
      </Sheet>
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("does not render content when closed (visually hidden or translated)", () => {
    render(
      <Sheet open={false}>
        <SheetTitle>Title</SheetTitle>
      </Sheet>
    );
    // It's still in the DOM but invisible
    expect(screen.getByRole("dialog", { hidden: true })).toHaveClass("invisible");
  });

  it("calls onClose when close button clicked", () => {
    const handleClose = vi.fn();
    render(<Sheet open onClose={handleClose} />);
    fireEvent.click(screen.getByLabelText("Close"));
    expect(handleClose).toHaveBeenCalled();
  });

  it("calls onClose when overlay clicked", () => {
    const handleClose = vi.fn();
    render(<Sheet open onClose={handleClose} />);
    // Overlay is the first div in the portal
    const overlay = document.querySelector(".fixed.inset-0");
    fireEvent.click(overlay!);
    expect(handleClose).toHaveBeenCalled();
  });

  it("calls onClose when Escape pressed", () => {
    const handleClose = vi.fn();
    render(<Sheet open onClose={handleClose} />);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(handleClose).toHaveBeenCalled();
  });
});
