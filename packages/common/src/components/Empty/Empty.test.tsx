import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Empty, EmptyActions, EmptyDescription, EmptyImage, EmptyTitle } from "./Empty";

describe("Empty", () => {
  it("renders children correctly", () => {
    render(
      <Empty data-testid="empty">
        <EmptyTitle>Title</EmptyTitle>
        <EmptyDescription>Description</EmptyDescription>
      </Empty>
    );
    expect(screen.getByTestId("empty")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("applies size variant", () => {
    render(
      <Empty size="lg" data-testid="empty">
        Content
      </Empty>
    );
    expect(screen.getByTestId("empty")).toHaveClass("p-12");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Empty ref={ref}>Content</Empty>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe("EmptyImage", () => {
  it("renders with children", () => {
    render(
      <Empty>
        <EmptyImage data-testid="empty-image">
          <img src="/placeholder.png" alt="Empty" />
        </EmptyImage>
      </Empty>
    );
    expect(screen.getByTestId("empty-image")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Empty>
        <EmptyImage className="custom-image" data-testid="empty-image">
          Content
        </EmptyImage>
      </Empty>
    );
    expect(screen.getByTestId("empty-image")).toHaveClass("custom-image");
  });
});

describe("EmptyActions", () => {
  it("renders with children", () => {
    render(
      <Empty>
        <EmptyActions>
          <button>Action 1</button>
          <button>Action 2</button>
        </EmptyActions>
      </Empty>
    );
    expect(screen.getByRole("button", { name: "Action 1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Action 2" })).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Empty>
        <EmptyActions className="custom-actions" data-testid="empty-actions">
          <button>Action</button>
        </EmptyActions>
      </Empty>
    );
    expect(screen.getByTestId("empty-actions")).toHaveClass("custom-actions");
  });
});
