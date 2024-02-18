import { render, screen } from "@testing-library/react";
import { Tooltip } from "./";
import { type TooltipProps } from "./types";

describe("Tooltip", () => {
  const renderTooltip = ({
    content,
    variant,
    children,
    position,
  }: TooltipProps) =>
    render(
      <Tooltip content={content} variant={variant} position={position}>
        {children}
      </Tooltip>
    );
  it("shows tooltip with content", () => {
    const { asFragment } = renderTooltip({
      content: "I am the tooltip's content",
      children: "Tooltip trigger",
    });

    const tooltipEl = screen.getByText("Tooltip trigger");

    expect(tooltipEl).toBeVisible();
    expect(tooltipEl).toHaveClass("tooltip");
    expect(tooltipEl).toHaveAttribute("data-tip", "I am the tooltip's content");
    expect(asFragment()).toMatchSnapshot();
  });
});
