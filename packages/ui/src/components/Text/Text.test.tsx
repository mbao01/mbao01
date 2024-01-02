import { describe, expect, it } from "vitest";
import { Text } from ".";
import { render, screen } from "@testing-library/react";

describe("Text", () => {
  it.each([
    ["a button", <button>🐠 pet me</button>],
    ["copy text", "🐶 puppy"],
  ])("default behavior is to allow any content (e.g %s)", (_, content) => {
    const { asFragment } = render(<Text>{content}</Text>);

    if (typeof content === "string") {
      expect(screen.getByText("🐶 puppy")).toBeInTheDocument();
    } else {
      expect(
        screen.getByRole("button", { name: "🐠 pet me" })
      ).toBeInTheDocument();
    }

    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    ["Heading 1", "h1", "heading"],
    ["Heading 2", "h2", "heading"],
    ["Heading 3", "h3", "heading"],
    ["Heading 4", "h4", "heading"],
    ["Heading 5", "h5", "heading"],
    ["Paragraph", "p", null],
    ["Span", "span", null],
  ] as const)(
    "can be a flow content element e.g (%s)",
    (description, as, role) => {
      const { asFragment } = render(<Text as={as}>{description}</Text>);

      if (role) {
        expect(
          screen.getByRole(role, { name: description })
        ).toBeInTheDocument();
      } else {
        expect(screen.getByText(description)).toBeInTheDocument();
      }
      expect(asFragment()).toMatchSnapshot();
    }
  );

  it.each([
    ["tiny", "xs"],
    ["small", "sm"],
    ["base", "base"],
    ["large", "lg"],
    ["extra large", "xl"],
    ["double extra large", "2xl"],
    ["triple extra large", "3xl"],
    ["quad extra large", "4xl"],
    ["quint extra large", "5xl"],
  ] as const)("has %s (%s) size", (description, size) => {
    const { asFragment } = render(<Text size={size}>{description}</Text>);

    expect(screen.getByText(description)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    "info",
    "error",
    "success",
    "warning",
    "primary",
    "secondary",
    "accent",
    "neutral",
  ] as const)("has %s variant", (variant) => {
    const content = `${variant} text`;
    const { asFragment } = render(<Text variant={variant}>{content}</Text>);

    expect(screen.getByText(content)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
