import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Grid, GridItem } from "./Grid";

describe("Grid", () => {
  it("renders children correctly", () => {
    render(<Grid data-testid="grid">Content</Grid>);
    expect(screen.getByTestId("grid")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies grid class by default", () => {
    render(<Grid data-testid="grid">Content</Grid>);
    expect(screen.getByTestId("grid")).toHaveClass("grid");
  });

  it("applies columns variant", () => {
    render(
      <Grid columns={3} data-testid="grid">
        Content
      </Grid>
    );
    expect(screen.getByTestId("grid")).toHaveClass("grid-cols-3");
  });

  it("applies gap variant", () => {
    render(
      <Grid gap={4} data-testid="grid">
        Content
      </Grid>
    );
    expect(screen.getByTestId("grid")).toHaveClass("gap-4");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Grid ref={ref}>Content</Grid>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe("GridItem", () => {
  it("renders children correctly", () => {
    render(<GridItem data-testid="grid-item">Content</GridItem>);
    expect(screen.getByTestId("grid-item")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies colSpan variant", () => {
    render(
      <GridItem colSpan={2} data-testid="grid-item">
        Content
      </GridItem>
    );
    expect(screen.getByTestId("grid-item")).toHaveClass("col-span-2");
  });

  it("applies rowSpan variant", () => {
    render(
      <GridItem rowSpan={2} data-testid="grid-item">
        Content
      </GridItem>
    );
    expect(screen.getByTestId("grid-item")).toHaveClass("row-span-2");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<GridItem ref={ref}>Content</GridItem>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
