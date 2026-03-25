import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Meteors } from "./";

describe("Meteors", () => {
  it("renders with default props", () => {
    const { container } = render(<Meteors />);
    const el = container.firstChild as HTMLElement;
    expect(el).toBeInTheDocument();
    expect(el.children).toHaveLength(20);
  });

  it("renders custom count of meteors", () => {
    const { container } = render(<Meteors count={5} />);
    const el = container.firstChild as HTMLElement;
    expect(el.children).toHaveLength(5);
  });

  it("applies custom className", () => {
    const { container } = render(<Meteors className="test-class" />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain("test-class");
  });
});
