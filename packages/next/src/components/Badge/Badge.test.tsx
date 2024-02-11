import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("is simple", () => {
    render(<Badge>Hey 👋</Badge>);

    expect(screen.getByText("Hey 👋")).toBeInTheDocument();
  });

  it.each([
    ["has outline", true],
    ["has no outline", false],
  ] as const)("%s", (description, outline) => {
    const label = `Badge ${description}`;
    const { asFragment } = render(<Badge outline={outline}>{label}</Badge>);

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    ["tiny", "xs"],
    ["small", "sm"],
    ["medium", "md"],
    ["large", "lg"],
  ] as const)("has %s (%s) size", (description, size) => {
    const { asFragment } = render(<Badge size={size}>{description}</Badge>);

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
  ] as const)("has %s variant", (variant) => {
    const content = `${variant} badge`;
    const { asFragment } = render(
      <Badge key={variant} variant={variant}>
        {content}
      </Badge>
    );

    expect(screen.getByText(content)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
