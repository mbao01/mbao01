import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Description } from "./Description";
import { DescriptionGroup } from "./DescriptionGroup";

describe("Description", () => {
  it("renders term and detail", () => {
    render(
      <Description>
        <Description.Term>Name</Description.Term>
        <Description.Detail>Evelyn Gilts</Description.Detail>
      </Description>
    );

    expect(screen.getByRole("term")).toHaveTextContent("Name");
    expect(screen.getByRole("definition")).toHaveTextContent("Evelyn Gilts");
  });

  it("renders multiple terms and details", () => {
    render(
      <Description>
        <Description.Term>Name</Description.Term>
        <Description.Detail>Evelyn Gilts</Description.Detail>
        <Description.Term>Age</Description.Term>
        <Description.Detail>23</Description.Detail>
      </Description>
    );

    expect(screen.getAllByRole("term")).toHaveLength(2);
    expect(screen.getAllByRole("definition")).toHaveLength(2);
  });

  it("applies variant classes", () => {
    const { container } = render(
      <Description variant="card">
        <Description.Term>Key</Description.Term>
        <Description.Detail>Value</Description.Detail>
      </Description>
    );
    expect(container.firstChild).toHaveClass("rounded-lg", "border", "shadow-sm");
  });

  it("applies horizontal layout", () => {
    const { container } = render(
      <Description layout="horizontal">
        <Description.Term>Key</Description.Term>
        <Description.Detail>Value</Description.Detail>
      </Description>
    );
    expect(container.firstChild).toHaveClass("grid");
  });

  it("applies size variants", () => {
    render(
      <Description size="sm">
        <Description.Term>Key</Description.Term>
        <Description.Detail>Value</Description.Detail>
      </Description>
    );
    expect(screen.getByRole("term")).toHaveClass("text-xs");
  });

  it("applies dividers", () => {
    render(
      <Description dividers>
        <Description.Term>Key</Description.Term>
        <Description.Detail>Value</Description.Detail>
      </Description>
    );
    expect(screen.getByRole("definition")).toHaveClass("border-b");
  });

  it("renders Description.Pair wrapper", () => {
    render(
      <Description striped>
        <Description.Pair data-testid="pair">
          <Description.Term>Key</Description.Term>
          <Description.Detail>Value</Description.Detail>
        </Description.Pair>
      </Description>
    );
    expect(screen.getByTestId("pair")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Description className="w-full">
        <Description.Term>Key</Description.Term>
        <Description.Detail>Value</Description.Detail>
      </Description>
    );
    expect(container.firstChild).toHaveClass("w-full");
  });
});

describe("DescriptionGroup", () => {
  it("renders title and description", () => {
    render(
      <DescriptionGroup title="Settings" description="Your preferences">
        <Description>
          <Description.Term>Theme</Description.Term>
          <Description.Detail>Dark</Description.Detail>
        </Description>
      </DescriptionGroup>
    );

    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Your preferences")).toBeInTheDocument();
  });

  it("renders multiple descriptions", () => {
    render(
      <DescriptionGroup>
        <Description>
          <Description.Term>A</Description.Term>
          <Description.Detail>1</Description.Detail>
        </Description>
        <Description>
          <Description.Term>B</Description.Term>
          <Description.Detail>2</Description.Detail>
        </Description>
      </DescriptionGroup>
    );

    expect(screen.getAllByRole("term")).toHaveLength(2);
  });

  it("applies row direction", () => {
    const { container } = render(
      <DescriptionGroup direction="row">
        <Description>
          <Description.Term>A</Description.Term>
          <Description.Detail>1</Description.Detail>
        </Description>
      </DescriptionGroup>
    );

    const groupContainer = container.querySelector("[class*='flex-row']");
    expect(groupContainer).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <DescriptionGroup className="mt-4">
        <Description>
          <Description.Term>X</Description.Term>
          <Description.Detail>Y</Description.Detail>
        </Description>
      </DescriptionGroup>
    );
    expect(container.firstChild).toHaveClass("mt-4");
  });
});
