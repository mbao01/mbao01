import { render, screen } from "@testing-library/react";
import { IconContainer } from "./IconContainer";

describe("IconContainer", () => {
  it("renders children", () => {
    render(<IconContainer data-testid="container">icon</IconContainer>);

    expect(screen.getByTestId("container")).toBeInTheDocument();
    expect(screen.getByText("icon")).toBeInTheDocument();
  });

  it.each([
    ["has soft", true],
    ["has no soft", false],
  ] as const)("%s", (description, soft) => {
    const { asFragment } = render(
      <IconContainer soft={soft}>{description}</IconContainer>
    );

    expect(screen.getByText(description)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    ["has outline", true],
    ["has no outline", false],
  ] as const)("%s", (description, outline) => {
    const { asFragment } = render(
      <IconContainer outline={outline}>{description}</IconContainer>
    );

    expect(screen.getByText(description)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    ["tiny", "xs"],
    ["small", "sm"],
    ["medium", "md"],
    ["large", "lg"],
    ["extra large", "xl"],
  ] as const)("has %s (%s) size", (description, size) => {
    const { asFragment } = render(
      <IconContainer size={size}>{description}</IconContainer>
    );

    expect(screen.getByText(description)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    "neutral",
    "primary",
    "secondary",
    "accent",
    "ghost",
    "info",
    "success",
    "warning",
    "error",
    "default",
  ] as const)("has %s variant", (variant) => {
    const content = `${variant} icon`;
    const { asFragment } = render(
      <IconContainer variant={variant}>{content}</IconContainer>
    );

    expect(screen.getByText(content)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each(["circle", "square", "rounded"] as const)(
    "has %s shape",
    (shape) => {
      const content = `${shape} shape`;
      const { asFragment } = render(
        <IconContainer shape={shape}>{content}</IconContainer>
      );

      expect(screen.getByText(content)).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    }
  );

  it.each(["none", "sm", "md", "lg", "xl"] as const)(
    "has %s shadow",
    (shadow) => {
      const content = `${shadow} shadow`;
      const { asFragment } = render(
        <IconContainer shadow={shadow}>{content}</IconContainer>
      );

      expect(screen.getByText(content)).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    }
  );

  it.each([
    ["is raised", true],
    ["is not raised", false],
  ] as const)("%s", (description, raised) => {
    const { asFragment } = render(
      <IconContainer raised={raised}>{description}</IconContainer>
    );

    expect(screen.getByText(description)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
