import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Separator } from "./";

describe("Separator", () => {
  it("has horizontal orientation by default", () => {
    const { asFragment } = render(<Separator data-testid="separator" />);

    expect(screen.getByTestId("separator")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each(["horizontal", "vertical"] as const)("has %s orientation", (orientation) => {
    const { asFragment } = render(<Separator orientation={orientation} data-testid="separator" />);

    expect(screen.getByTestId("separator")).toHaveAttribute("data-orientation", orientation);
    expect(asFragment()).toMatchSnapshot();
  });

  it("is non presentational/decorative", () => {
    const { asFragment } = render(<Separator decorative={false} data-testid="separator" />);

    // separator has a role
    expect(screen.getByRole("separator")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
