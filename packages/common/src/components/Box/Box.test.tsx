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

  it("applies outlined style", () => {
    render(
      <Box style="outlined" data-testid="box">
        Content
      </Box>
    );
    expect(screen.getByTestId("box")).toHaveClass("border", "border-base-200");
  });

  it("applies bordered variant", () => {
    render(
      <Box style="bordered" data-testid="box">
        Content
      </Box>
    );
    expect(screen.getByTestId("box")).toHaveClass("border-double");
  });

  it("applies strip variant", () => {
    render(
      <Box style="strip" data-testid="box">
        Content
      </Box>
    );
    expect(screen.getByTestId("box")).toHaveClass("border", "border-base-300", "outline-base-300");
  });

  it("applies elevated variant", () => {
    render(
      <Box style="elevated" data-testid="box">
        Content
      </Box>
    );
    expect(screen.getByTestId("box")).toHaveClass("shadow-md", "border");
  });

  it("applies ghost variant", () => {
    render(
      <Box style="ghost" data-testid="box">
        Content
      </Box>
    );
    expect(screen.getByTestId("box")).toHaveClass("bg-base-200/40");
  });

  it("applies rounded variant", () => {
    render(
      <Box rounded="xl" data-testid="box">
        Content
      </Box>
    );
    expect(screen.getByTestId("box")).toHaveClass("rounded-xl");
  });

  it("applies padding variant", () => {
    render(
      <Box padding="lg" data-testid="box">
        Content
      </Box>
    );
    expect(screen.getByTestId("box")).toHaveClass("p-6");
  });

  it("applies shadow variant", () => {
    render(
      <Box shadow="lg" data-testid="box">
        Content
      </Box>
    );
    expect(screen.getByTestId("box")).toHaveClass("shadow-lg");
  });

  it("applies inset variant", () => {
    render(
      <Box style="inset" data-testid="box">
        Content
      </Box>
    );
    expect(screen.getByTestId("box")).toHaveClass("shadow-inner");
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

  it("combines multiple variants", () => {
    render(
      <Box style="outlined" rounded="xl" padding="lg" shadow="sm" data-testid="box">
        Content
      </Box>
    );
    const box = screen.getByTestId("box");
    expect(box).toHaveClass("border", "rounded-xl", "p-6", "shadow-sm");
  });
});
