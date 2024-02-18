import { render, screen } from "@testing-library/react";
import { Tooltip } from "./";
import { type TooltipProps } from "./types";

describe("Tooltip", () => {
  const renderTooltip = ({
    content,
    variant,
    children,
    position,
  }: TooltipProps) => {
    return render(
      <Tooltip content={content} variant={variant} position={position}>
        {children}
      </Tooltip>
    );
  };

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

  it.each(["top", "right", "bottom", "left"] as const)(
    "content is positioned %s",
    (position) => {
      const content = `tooltip content ${position}`;
      const trigger = `${position} tooltip`;
      const { asFragment } = render(
        <Tooltip content={content} position={position}>
          {trigger}
        </Tooltip>
      );

      const tooltipEl = screen.getByText(trigger);
      expect(tooltipEl).toHaveAttribute("data-tip", content);
      expect(asFragment()).toMatchSnapshot();
    }
  );

  it.each([
    "accent",
    "default",
    "error",
    "ghost",
    "info",
    "link",
    "neutral",
    "primary",
    "secondary",
    "success",
    "warning",
  ] as const)("has %s variant", (variant) => {
    const content = `${variant} tooltip content`;
    const trigger = `${variant} tooltip`;
    const { asFragment } = render(
      <Tooltip content={content} variant={variant}>
        {trigger}
      </Tooltip>
    );

    const tooltipEl = screen.getByText(trigger);
    expect(tooltipEl).toHaveAttribute("data-tip", content);
    expect(asFragment()).toMatchSnapshot();
  });
});
