import { render, screen } from "@testing-library/react";
import { Tooltip } from "./";
import { type TooltipContentProps } from "./types";
import { ReactNode } from "react";
import userEvent from "@testing-library/user-event";

describe("Tooltip", () => {
  const renderTooltip = (
    trigger: ReactNode,
    { side, variant, children, ...props }: TooltipContentProps
  ) => {
    return render(
      <Tooltip.Provider delayDuration={0}>
        <Tooltip>
          <Tooltip.Trigger>{trigger}</Tooltip.Trigger>
          <Tooltip.Content side={side} variant={variant} {...props}>
            {children}
            {variant && <Tooltip.Arrow variant={variant} />}
          </Tooltip.Content>
        </Tooltip>
      </Tooltip.Provider>
    );
  };

  const user = userEvent.setup();

  it("shows tooltip with content", async () => {
    const { asFragment } = renderTooltip("Tooltip trigger", {
      children: "I am the tooltip's content",
    });

    const tooltipEl = screen.getByText("Tooltip trigger");
    await user.hover(tooltipEl);

    expect(
      await screen.findByRole("tooltip", { name: "I am the tooltip's content" })
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each(["top", "right", "bottom", "left"] as const)(
    "content is positioned %s",
    async (side) => {
      const children = `tooltip content ${side}`;
      const trigger = `${side} tooltip`;
      const { asFragment } = renderTooltip(trigger, { side, children });

      const tooltipEl = screen.getByText(trigger);
      await user.hover(tooltipEl);

      expect(
        await screen.findByRole("tooltip", { name: children })
      ).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    }
  );

  it.each([
    "primary",
    "secondary",
    "accent",
    "neutral",
    "info",
    "success",
    "warning",
    "error",
  ] as const)("has %s variant", async (variant) => {
    const children = `${variant} tooltip content`;
    const trigger = `${variant} tooltip`;
    const { asFragment } = renderTooltip(trigger, { children, variant });

    const tooltipEl = screen.getByText(trigger);
    await user.hover(tooltipEl);

    expect(
      await screen.findByRole("tooltip", { name: children })
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
