import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Greeting } from "./";

describe("Greeting", () => {
  it("renders name", () => {
    render(<Greeting name="John" />);
    expect(screen.getByText(/John/)).toBeInTheDocument();
  });

  it("renders custom greeting", () => {
    render(<Greeting name="Jane" greeting="Welcome back" />);
    expect(screen.getByText("Welcome back, Jane")).toBeInTheDocument();
  });

  it("renders subtitle", () => {
    render(<Greeting name="John" subtitle="Here's your daily summary" />);
    expect(screen.getByText("Here's your daily summary")).toBeInTheDocument();
  });

  it("renders time-based greeting by default", () => {
    render(<Greeting name="John" />);
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toMatch(/Good (morning|afternoon|evening), John/);
  });
});
