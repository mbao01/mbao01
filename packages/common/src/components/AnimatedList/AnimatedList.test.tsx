import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AnimatedList } from "./";

describe("AnimatedList", () => {
  const items = [
    { id: "1", content: <span>Item 1</span> },
    { id: "2", content: <span>Item 2</span> },
    { id: "3", content: <span>Item 3</span> },
  ];

  it("renders all items", () => {
    render(<AnimatedList items={items} />);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("limits visible items with maxItems", () => {
    render(<AnimatedList items={items} maxItems={2} />);
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<AnimatedList items={items} className="my-class" />);
    expect(container.firstChild).toHaveClass("my-class");
  });
});
