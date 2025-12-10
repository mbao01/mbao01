import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Box } from "./Box";

describe("Box", () => {
  it("renders children correctly", () => {
    render(<Box data-testid="box">Hello World</Box>);
    expect(screen.getByTestId("box")).toBeInTheDocument();
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("applies display variant", () => {
    render(
      <Box display="flex" data-testid="box">
        Content
      </Box>
    );
    expect(screen.getByTestId("box")).toHaveClass("flex");
  });

  it("applies position variant", () => {
    render(
      <Box position="absolute" data-testid="box">
        Content
      </Box>
    );
    expect(screen.getByTestId("box")).toHaveClass("absolute");
  });

  it("applies overflow variant", () => {
    render(
      <Box overflow="hidden" data-testid="box">
        Content
      </Box>
    );
    expect(screen.getByTestId("box")).toHaveClass("overflow-hidden");
  });

  it("merges custom className", () => {
    render(
      <Box className="custom-class" data-testid="box">
        Content
      </Box>
    );
    expect(screen.getByTestId("box")).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Box ref={ref}>Content</Box>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
