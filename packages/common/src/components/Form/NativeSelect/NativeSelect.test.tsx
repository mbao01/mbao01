import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NativeSelect } from "./NativeSelect";

describe("NativeSelect", () => {
  it("renders correctly", () => {
    render(
      <NativeSelect data-testid="select">
        <option>Option 1</option>
      </NativeSelect>
    );
    expect(screen.getByTestId("select")).toBeInTheDocument();
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  it("applies size classes", () => {
    render(
      <NativeSelect size="lg" data-testid="select">
        <option>Option 1</option>
      </NativeSelect>
    );
    expect(screen.getByTestId("select")).toHaveClass("select-lg");
  });

  it("applies color classes", () => {
    render(
      <NativeSelect color="primary" data-testid="select">
        <option>Option 1</option>
      </NativeSelect>
    );
    expect(screen.getByTestId("select")).toHaveClass("select-primary");
  });

  it("applies error class", () => {
    render(
      <NativeSelect variant="error" data-testid="select">
        <option>Option 1</option>
      </NativeSelect>
    );
    expect(screen.getByTestId("select")).toHaveClass("select-error");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(
      <NativeSelect ref={ref}>
        <option>Option 1</option>
      </NativeSelect>
    );
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });
});
