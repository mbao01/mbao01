import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Banner } from "./Banner";

describe("Banner", () => {
  it("renders correctly", () => {
    render(<Banner title="Title" description="Description" />);
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    render(<Banner variant="error" />);
    expect(screen.getByRole("alert")).toHaveClass("alert-error");
  });

  it("renders icon", () => {
    render(<Banner icon={<span data-testid="icon" />} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders action", () => {
    render(<Banner action={<button>Action</button>} />);
    expect(screen.getByText("Action")).toBeInTheDocument();
  });

  it("calls onClose when close button clicked", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(<Banner onClose={handleClose} />);
    await user.click(screen.getByLabelText("Close"));
    expect(handleClose).toHaveBeenCalled();
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Banner ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
