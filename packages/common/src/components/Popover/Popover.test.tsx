import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Popover } from "./";

describe("Popover", () => {
  const renderPopover = () =>
    render(
      <Popover>
        <Popover.Trigger>Open popover</Popover.Trigger>
        <Popover.Content className="w-80">Here is some easter egg for you 🥚</Popover.Content>
      </Popover>
    );

  it("renders a popover", async () => {
    const user = userEvent.setup();
    const { asFragment } = renderPopover();

    const popoverTrigger = screen.getByRole("button", { name: "Open popover" });

    expect(screen.queryByText("Here is some easter egg for you 🥚")).not.toBeInTheDocument();

    await user.click(popoverTrigger);

    expect(screen.getByText("Here is some easter egg for you 🥚")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
