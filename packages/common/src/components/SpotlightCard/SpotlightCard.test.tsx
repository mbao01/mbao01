import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SpotlightCard } from "./";

describe("SpotlightCard", () => {
  it("renders children", () => {
    const { asFragment } = render(
      <SpotlightCard>
        <p>Card content</p>
      </SpotlightCard>
    );
    expect(screen.getByText("Card content")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("accepts custom className", () => {
    const { container } = render(
      <SpotlightCard className="w-80">
        <p>Styled</p>
      </SpotlightCard>
    );
    expect(container.firstChild).toHaveClass("w-80");
  });
});
