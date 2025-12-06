import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Empty, EmptyDescription, EmptyTitle } from "./Empty";

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
