import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { type DrawerProps } from "./types";
import { Drawer } from "./Drawer";
import { Button } from "../Button";

describe("Drawer", () => {
  const renderDrawer = (props?: DrawerProps) => {
    return render(
      <Drawer {...props}>
        <Drawer.Trigger asChild>
          <Button outline>Open drawer</Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Move Goal</Drawer.Title>
            <Drawer.Description>
              Set your daily activity goal.
            </Drawer.Description>
          </Drawer.Header>
          <div>Content of drawer</div>
          <Drawer.Footer>
            <Button>Submit</Button>
            <Drawer.Close asChild>
              <Button outline>Cancel</Button>
            </Drawer.Close>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer>
    );
  };

  beforeEach(() => {
    window.HTMLElement.prototype.setPointerCapture = vi.fn();
  });

  it("renders a drawer", async () => {
    const user = userEvent.setup();
    const { asFragment } = renderDrawer();

    const button = screen.getByRole("button", { name: "Open drawer" });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(button);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.skip("should close drawer with the cancel button", async () => {
    const user = userEvent.setup();
    const { asFragment } = renderDrawer();

    const button = screen.getByRole("button", { name: "Open drawer" });

    await user.click(button);

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Cancel" }));

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
