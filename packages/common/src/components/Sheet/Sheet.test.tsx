import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "./Sheet";

describe("Sheet", () => {
  const user = userEvent.setup();

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

  it("calls onClose when close button clicked", async () => {
    const handleClose = vi.fn();
    render(<Sheet open onClose={handleClose} />);
    await user.click(screen.getByLabelText("Close"));
    expect(handleClose).toHaveBeenCalled();
  });

  it("calls onClose when overlay clicked", async () => {
    const handleClose = vi.fn();
    render(<Sheet open onClose={handleClose} />);
    // Overlay is the first div in the portal
    const overlay = document.querySelector(".fixed.inset-0");
    await user.click(overlay!);
    expect(handleClose).toHaveBeenCalled();
  });

  it("calls onClose when Escape pressed", async () => {
    const handleClose = vi.fn();
    const { container } = render(<Sheet open onClose={handleClose} />);
    await user.type(container, "{Escape}");
    expect(handleClose).toHaveBeenCalled();
  });
});

describe("SheetHeader", () => {
  it("renders with children", () => {
    render(
      <Sheet open>
        <SheetHeader>
          <SheetTitle>Header Title</SheetTitle>
        </SheetHeader>
      </Sheet>
    );
    expect(screen.getByText("Header Title")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Sheet open>
        <SheetHeader className="custom-header" data-testid="sheet-header">
          Content
        </SheetHeader>
      </Sheet>
    );
    const header = screen.getByTestId("sheet-header");
    expect(header).toHaveClass("custom-header", "flex", "flex-col", "space-y-2", "p-6");
  });
});

describe("SheetDescription", () => {
  it("renders with children", () => {
    render(
      <Sheet open>
        <SheetDescription>This is a description</SheetDescription>
      </Sheet>
    );
    expect(screen.getByText("This is a description")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Sheet open>
        <SheetDescription className="custom-description" data-testid="sheet-description">
          Description text
        </SheetDescription>
      </Sheet>
    );
    const description = screen.getByTestId("sheet-description");
    expect(description).toHaveClass("custom-description", "text-sm");
  });
});

describe("SheetContent", () => {
  it("renders with children", () => {
    render(
      <Sheet open>
        <SheetContent>Content goes here</SheetContent>
      </Sheet>
    );
    expect(screen.getByText("Content goes here")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Sheet open>
        <SheetContent className="custom-content" data-testid="sheet-content">
          Content
        </SheetContent>
      </Sheet>
    );
    const content = screen.getByTestId("sheet-content");
    expect(content).toHaveClass("custom-content", "p-6", "pt-0");
  });
});

describe("SheetFooter", () => {
  it("renders with children", () => {
    render(
      <Sheet open>
        <SheetFooter>
          <button>Cancel</button>
          <button>Submit</button>
        </SheetFooter>
      </Sheet>
    );
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Sheet open>
        <SheetFooter className="custom-footer" data-testid="sheet-footer">
          Footer content
        </SheetFooter>
      </Sheet>
    );
    const footer = screen.getByTestId("sheet-footer");
    expect(footer).toHaveClass("custom-footer", "flex", "flex-col-reverse", "p-6");
  });
});
