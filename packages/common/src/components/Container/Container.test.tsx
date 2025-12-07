import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Container } from "./Container";

describe("Container", () => {
  it("renders children correctly", () => {
    render(<Container data-testid="container">Content</Container>);
    expect(screen.getByTestId("container")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies center class by default", () => {
    render(<Container data-testid="container">Content</Container>);
    expect(screen.getByTestId("container")).toHaveClass("mx-auto");
  });

  it("applies size variant", () => {
    render(
      <Container size="lg" data-testid="container">
        Content
      </Container>
    );
    expect(screen.getByTestId("container")).toHaveClass("max-w-lg");
  });

  it("applies padding by default", () => {
    render(<Container data-testid="container">Content</Container>);
    expect(screen.getByTestId("container")).toHaveClass("px-4");
  });

  it("can disable padding", () => {
    render(
      <Container padding={false} data-testid="container">
        Content
      </Container>
    );
    expect(screen.getByTestId("container")).not.toHaveClass("px-4");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Container ref={ref}>Content</Container>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
