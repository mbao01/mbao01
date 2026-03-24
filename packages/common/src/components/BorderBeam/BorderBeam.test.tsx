import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BorderBeam } from "./";

describe("BorderBeam", () => {
  it("renders with default props", () => {
    const { asFragment, container } = render(<BorderBeam />);
    const el = container.firstChild as HTMLElement;
    expect(el).toBeInTheDocument();
    expect(el.style.getPropertyValue("--beam-size")).toBe("200px");
    expect(asFragment()).toMatchSnapshot();
  });

  it("applies custom size and duration", () => {
    const { container } = render(<BorderBeam size={100} duration={6} />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue("--beam-size")).toBe("100px");
  });

  it("applies custom colors", () => {
    const { container } = render(
      <BorderBeam colorFrom="red" colorTo="blue" />
    );
    const el = container.firstChild as HTMLElement;
    expect(el.style.getPropertyValue("--beam-color-from")).toBe("red");
    expect(el.style.getPropertyValue("--beam-color-to")).toBe("blue");
  });
});
