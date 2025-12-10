import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer, FooterTitle } from "./Footer";

describe("Footer", () => {
  it("renders children correctly", () => {
    render(
      <Footer data-testid="footer">
        <FooterTitle>Title</FooterTitle>
        <a href="#">Link</a>
      </Footer>
    );
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Link")).toBeInTheDocument();
  });

  it("applies footer class", () => {
    render(<Footer data-testid="footer" />);
    expect(screen.getByTestId("footer")).toHaveClass("footer");
  });

  it("applies center variant", () => {
    render(<Footer center data-testid="footer" />);
    expect(screen.getByTestId("footer")).toHaveClass("footer-center");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Footer ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
