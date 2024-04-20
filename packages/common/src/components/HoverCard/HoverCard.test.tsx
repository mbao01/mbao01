import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HoverCard } from "./HoverCard";
import { Button } from "../Button";

describe("HoverCard", () => {
  const renderHoverCard = () => {
    return render(
      <HoverCard>
        <HoverCard.Trigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCard.Trigger>
        <HoverCard.Content>Hover card content</HoverCard.Content>
      </HoverCard>
    );
  };

  it("renders hover card trigger with hidden content", () => {
    const { asFragment } = renderHoverCard();

    expect(screen.getByRole("button", { name: "@nextjs" })).toHaveAttribute(
      "data-state",
      "closed"
    );
    expect(screen.queryByText("Hover card content")).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should show and hide hover card content", async () => {
    const user = userEvent.setup();
    renderHoverCard();
    const button = screen.getByRole("button", { name: "@nextjs" });

    expect(button).toHaveAttribute("data-state", "closed");

    await user.hover(button);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "@nextjs" })).toHaveAttribute(
        "data-state",
        "open"
      );
      expect(screen.getByText("Hover card content")).toBeInTheDocument();
    });
  });
});
