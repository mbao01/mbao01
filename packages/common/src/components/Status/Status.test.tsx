import { render, screen } from "@testing-library/react";
import { Status } from "./Status";

describe("Status", () => {
  it("renders a basic status", () => {
    const { asFragment } = render(<Status />);

    expect(screen.getByText("K")).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    { size: "xs", name: "tiny" },
    { size: "sm", name: "small" },
    { size: "md", name: "base" },
    { size: "lg", name: "large" },
  ] as const)("has $name ($size) button", ({ size, name }) => {
    const title = `Status ${name}`;
    const { asFragment } = render(
      <span data-testid="content">
        {title}: <Status size={size} />
      </span>
    );

    expect(screen.getByTestId("content")).toHaveTextContent(title);
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
    const title = `Status ${variant}`;
    const { asFragment } = render(
      <span data-testid="content">
        {title}: <Status variant={variant} />
      </span>
    );

    expect(screen.getByTestId("content")).toHaveTextContent(`${title}: B`);
    expect(asFragment()).toMatchSnapshot();
  });
});
