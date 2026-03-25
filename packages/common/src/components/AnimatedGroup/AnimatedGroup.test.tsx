import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AnimatedGroup } from "./";

describe("AnimatedGroup", () => {
  it("renders children", () => {
    const { asFragment } = render(
      <AnimatedGroup>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </AnimatedGroup>
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("accepts preset prop", () => {
    render(
      <AnimatedGroup preset="slide">
        <p>Slide item</p>
      </AnimatedGroup>
    );
    expect(screen.getByText("Slide item")).toBeInTheDocument();
  });
});
