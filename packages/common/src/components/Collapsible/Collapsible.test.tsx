import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Collapsible } from "./Collapsible";
import { Button } from "../Button";

describe("Collapsible", () => {
  const renderCollapsible = () => {
    return render(
      <Collapsible>
        <Collapsible.Trigger asChild>
          <Button variant="ghost" size="sm">
            Toggle
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <div>@radix-ui/colors</div>
          <div>@stitches/react</div>
        </Collapsible.Content>
      </Collapsible>
    );
  };

  it("renders collapsible trigger with hidden content", () => {
    const { asFragment } = renderCollapsible();

    expect(screen.getByRole("button", { name: "Toggle" })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    expect(screen.queryByText("@radix-ui/colors")).not.toBeInTheDocument();
    expect(screen.queryByText("@stitches/react")).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should expand and collapse content", async () => {
    const user = userEvent.setup();
    const { asFragment } = renderCollapsible();
    const toggle = screen.getByRole("button", { name: "Toggle" });
    expect(toggle).toHaveAttribute("data-state", "closed");

    await user.click(toggle);

    expect(toggle).toHaveAttribute("data-state", "open");
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("@radix-ui/colors")).toBeInTheDocument();
    expect(screen.getByText("@stitches/react")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
