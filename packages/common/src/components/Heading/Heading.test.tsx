import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Heading } from "./Heading";

describe("Heading", () => {
  it("renders children correctly", () => {
    render(<Heading>Title</Heading>);
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("renders h2 by default", () => {
    const { container } = render(<Heading>Title</Heading>);
    expect(container.querySelector("h2")).toBeInTheDocument();
  });

  it("renders correct level element", () => {
    const { container } = render(<Heading level={1}>Title</Heading>);
    expect(container.querySelector("h1")).toBeInTheDocument();
  });

  it("applies level classes", () => {
    render(<Heading level={1}>Title</Heading>);
    expect(screen.getByRole("heading", { level: 1 })).toHaveClass("text-5xl");
  });

  it("applies weight classes", () => {
    render(<Heading weight="extrabold">Title</Heading>);
    expect(screen.getByRole("heading")).toHaveClass("font-extrabold");
  });

  it("supports polymorphic as prop", () => {
    const { container } = render(
      <Heading as="h3" level={1}>
        Title
      </Heading>
    );
    expect(container.querySelector("h3")).toBeInTheDocument();
    // Should still have level 1 styles
    expect(screen.getByRole("heading", { level: 3 })).toHaveClass("text-5xl");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Heading ref={ref}>Title</Heading>);
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
  });
});
