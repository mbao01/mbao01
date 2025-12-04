import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Flex } from "./Flex";

describe("Flex", () => {
  it("renders children correctly", () => {
    render(<Flex data-testid="flex">Content</Flex>);
    expect(screen.getByTestId("flex")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies flex class by default", () => {
    render(<Flex data-testid="flex">Content</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("flex");
  });

  it("applies direction variant", () => {
    render(
      <Flex direction="col" data-testid="flex">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex")).toHaveClass("flex-col");
  });

  it("applies align variant", () => {
    render(
      <Flex align="center" data-testid="flex">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex")).toHaveClass("items-center");
  });

  it("applies justify variant", () => {
    render(
      <Flex justify="between" data-testid="flex">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex")).toHaveClass("justify-between");
  });

  it("applies gap variant", () => {
    render(
      <Flex gap={4} data-testid="flex">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex")).toHaveClass("gap-4");
  });

  it("merges custom className", () => {
    render(
      <Flex className="custom-class" data-testid="flex">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex")).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Flex ref={ref}>Content</Flex>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
