import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Panel, PanelContent, PanelFooter, PanelHeader } from "./Panel";

describe("Panel", () => {
  it("renders children correctly", () => {
    render(
      <Panel data-testid="panel">
        <PanelHeader>Header</PanelHeader>
        <PanelContent>Content</PanelContent>
        <PanelFooter>Footer</PanelFooter>
      </Panel>
    );
    expect(screen.getByTestId("panel")).toBeInTheDocument();
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("applies width variant", () => {
    render(<Panel width="lg" data-testid="panel" />);
    expect(screen.getByTestId("panel")).toHaveClass("w-96");
  });

  it("applies collapsed variant", () => {
    render(<Panel collapsed data-testid="panel" />);
    expect(screen.getByTestId("panel")).toHaveClass("w-[70px]");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Panel ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
