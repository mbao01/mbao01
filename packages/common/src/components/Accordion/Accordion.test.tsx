import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Accordion } from "./Accordion";
import { type AccordionProps } from "./types";

describe("Accordion", () => {
  const items = [
    {
      value: "item-1",
      trigger: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
      disabled: false,
    },
    {
      value: "item-2",
      trigger: "Is it styled?",
      content: "Yes. It comes with default styles that matches the other components aesthetic.",
      disabled: false,
    },
    {
      trigger: "Is it animated?",
      content: "Yes. It's animated by default, but you can disable it if you prefer.",
      value: "item-3",
      disabled: true,
    },
  ];
  const renderAccordion = (props: AccordionProps = { type: "single" }) => {
    return render(
      <Accordion {...props}>
        {items.map((item) => (
          <Accordion.Item value={item.value} key={item.value}>
            <Accordion.Trigger disabled={item.disabled}>{item.trigger}</Accordion.Trigger>
            <Accordion.Content>{item.content}</Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  };

  it("renders an accordion", () => {
    const { asFragment } = renderAccordion();

    items.forEach((item) => {
      expect(screen.getByRole("heading", { name: item.trigger })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: item.trigger })).toHaveAttribute(
        "aria-expanded",
        "false"
      );
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it("should expand and collapse an accordion item", async () => {
    const user = userEvent.setup();

    renderAccordion({
      type: "single",
      collapsible: true,
      defaultValue: "item-3",
    });

    expect(screen.getByRole("button", { name: items[0].trigger })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    expect(screen.getByRole("button", { name: items[1].trigger })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    expect(screen.getByRole("button", { name: items[2].trigger })).toHaveAttribute(
      "aria-expanded",
      "true"
    );

    await user.click(screen.getByRole("button", { name: items[1].trigger }));

    expect(screen.getByRole("button", { name: items[0].trigger })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    expect(screen.getByRole("button", { name: items[1].trigger })).toHaveAttribute(
      "aria-expanded",
      "true"
    );
    expect(screen.getByRole("button", { name: items[2].trigger })).toHaveAttribute(
      "aria-expanded",
      "false"
    );

    await user.click(screen.getByRole("button", { name: items[1].trigger }));

    expect(screen.getByRole("button", { name: items[0].trigger })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    expect(screen.getByRole("button", { name: items[1].trigger })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    expect(screen.getByRole("button", { name: items[2].trigger })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });
});
