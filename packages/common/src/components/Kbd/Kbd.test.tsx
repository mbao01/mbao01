import { render, screen } from "@testing-library/react";
import { Kbd } from "./Kbd";

describe("Kbd", () => {
  it("renders a basic Kbd", () => {
    const { asFragment } = render(<Kbd>K</Kbd>);

    expect(screen.getByText("K")).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    ["has outline", true],
    ["has no outline", false],
  ] as const)("%s", (description, outline) => {
    const title = `Kbd ${description}`;
    const { asFragment } = render(
      <span data-testid="content">
        {title}:{" "}
        <Kbd outline={outline} variant="neutral">
          S
        </Kbd>
      </span>
    );

    expect(screen.getByTestId("content")).toHaveTextContent(`${title}: S`);
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    { size: "xs", name: "tiny" },
    { size: "sm", name: "small" },
    { size: "md", name: "base" },
    { size: "lg", name: "large" },
  ] as const)("has $name ($size) button", ({ size, name }) => {
    const title = `Kbd ${name}`;
    const { asFragment } = render(
      <span data-testid="content">
        {title}:{" "}
        <Kbd size={size} variant="neutral">
          S
        </Kbd>
      </span>
    );

    expect(screen.getByTestId("content")).toHaveTextContent(`${title}: S`);
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
    const title = `Kbd ${variant}`;
    const { asFragment } = render(
      <span data-testid="content">
        {title}: <Kbd variant={variant}>B</Kbd>
      </span>
    );

    expect(screen.getByTestId("content")).toHaveTextContent(`${title}: B`);
    expect(asFragment()).toMatchSnapshot();
  });
});
