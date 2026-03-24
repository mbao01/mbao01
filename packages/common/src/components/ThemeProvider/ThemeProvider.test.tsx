import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "./";

describe("ThemeProvider", () => {
  it("renders children", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <p>Content</p>
      </ThemeProvider>
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("sets data-brand attribute when brand name is provided", () => {
    const { container } = render(
      <ThemeProvider brand={{ name: "acme" }}>
        <p>Branded</p>
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveAttribute("data-brand", "acme");
  });

  it("applies design token overrides as inline styles", () => {
    const { container } = render(
      <ThemeProvider
        brand={{
          name: "test",
          tokens: {
            "radius-md": "1rem",
            "--ds-custom": "blue",
          },
        }}
      >
        <p>Styled</p>
      </ThemeProvider>
    );

    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue("--ds-radius-md")).toBe("1rem");
    expect(el.style.getPropertyValue("--ds-custom")).toBe("blue");
  });

  it("renders without brand config", () => {
    const { container } = render(
      <ThemeProvider>
        <p>No brand</p>
      </ThemeProvider>
    );

    const el = container.firstChild as HTMLElement;
    expect(el).not.toHaveAttribute("data-brand");
    expect(el.getAttribute("style")).toBeNull();
  });
});
