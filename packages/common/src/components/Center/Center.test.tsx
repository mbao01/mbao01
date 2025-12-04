import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Center } from "./Center";

describe("Center", () => {
  it("renders children correctly", () => {
    render(<Center data-testid="center">Content</Center>);
    expect(screen.getByTestId("center")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies flex class by default", () => {
    render(<Center data-testid="center">Content</Center>);
    expect(screen.getByTestId("center")).toHaveClass("flex");
  });

  it("centers both axis by default", () => {
    render(<Center data-testid="center">Content</Center>);
    expect(screen.getByTestId("center")).toHaveClass("justify-center");
    expect(screen.getByTestId("center")).toHaveClass("items-center");
  });

  it("applies inline flex", () => {
    render(
      <Center inline data-testid="center">
        Content
      </Center>
    );
    expect(screen.getByTestId("center")).toHaveClass("inline-flex");
  });

  it("centers only horizontally", () => {
    render(
      <Center axis="horizontal" data-testid="center">
        Content
      </Center>
    );
    expect(screen.getByTestId("center")).toHaveClass("justify-center");
    expect(screen.getByTestId("center")).not.toHaveClass("items-center");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Center ref={ref}>Content</Center>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
