import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AspectRatio } from "./AspectRatio";

describe("AspectRatio", () => {
  it("renders children correctly", () => {
    render(
      <AspectRatio data-testid="ratio">
        <img src="test.jpg" alt="test" />
      </AspectRatio>
    );
    expect(screen.getByTestId("ratio")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("applies 16/9 ratio by default", () => {
    render(
      <AspectRatio data-testid="ratio">
        <div />
      </AspectRatio>
    );
    expect(screen.getByTestId("ratio")).toHaveClass("aspect-video");
  });

  it("applies specific ratio class", () => {
    render(
      <AspectRatio ratio="1/1" data-testid="ratio">
        <div />
      </AspectRatio>
    );
    expect(screen.getByTestId("ratio")).toHaveClass("aspect-square");
  });

  it("applies custom value style", () => {
    render(
      <AspectRatio value={2} data-testid="ratio">
        <div />
      </AspectRatio>
    );
    expect(screen.getByTestId("ratio")).toHaveStyle({ aspectRatio: "2" });
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(
      <AspectRatio ref={ref}>
        <div />
      </AspectRatio>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
