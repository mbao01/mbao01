import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Confetti } from "./";

describe("Confetti", () => {
  it("renders nothing when not active", () => {
    const { container } = render(<Confetti active={false} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders confetti when active", () => {
    const { container } = render(<Confetti active count={10} />);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.querySelectorAll(".animate-confetti")).toHaveLength(10);
  });
});
