import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header, HeaderCenter, HeaderEnd, HeaderStart } from "./Header";

describe("Header", () => {
  it("renders children correctly", () => {
    render(
      <Header data-testid="header">
        <HeaderStart>Start</HeaderStart>
        <HeaderCenter>Center</HeaderCenter>
        <HeaderEnd>End</HeaderEnd>
      </Header>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByText("Start")).toBeInTheDocument();
    expect(screen.getByText("Center")).toBeInTheDocument();
    expect(screen.getByText("End")).toBeInTheDocument();
  });

  it("applies navbar class", () => {
    render(<Header data-testid="header" />);
    expect(screen.getByTestId("header")).toHaveClass("navbar");
  });

  it("applies position variant", () => {
    render(<Header position="fixed" data-testid="header" />);
    expect(screen.getByTestId("header")).toHaveClass("fixed");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Header ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
