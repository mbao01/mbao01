import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Paragraph } from "./Paragraph";

describe("Paragraph", () => {
  it("renders children correctly", () => {
    render(<Paragraph>Content</Paragraph>);
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Content").tagName).toBe("P");
  });

  it("applies size variant", () => {
    render(<Paragraph size="lg">Content</Paragraph>);
    expect(screen.getByText("Content")).toHaveClass("text-lg");
  });

  it("applies leading variant", () => {
    render(<Paragraph leading="loose">Content</Paragraph>);
    expect(screen.getByText("Content")).toHaveClass("leading-loose");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Paragraph ref={ref}>Content</Paragraph>);
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
  });
});
