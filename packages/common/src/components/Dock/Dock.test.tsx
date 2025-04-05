import { render, screen } from "@testing-library/react";
import { CogIcon, HomeIcon, InboxIcon } from "lucide-react";
import { Dock } from "./Dock";

describe("Dock", () => {
  it("renders a basic dock", () => {
    const { asFragment } = render(
      <Dock>
        <Dock.Button active>
          <Dock.Icon icon={HomeIcon} />
          <Dock.Label>Home</Dock.Label>
        </Dock.Button>

        <Dock.Button>
          <Dock.Icon icon={InboxIcon} />
          <Dock.Label>Inbox</Dock.Label>
        </Dock.Button>

        <Dock.Button>
          <Dock.Icon icon={CogIcon} />
          <Dock.Label>Setting</Dock.Label>
        </Dock.Button>
      </Dock>
    );

    const homeButton = screen.getByRole("button", { name: "Home" });
    const inboxButton = screen.getByRole("button", { name: "Inbox" });
    const settingButton = screen.getByRole("button", { name: "Setting" });

    expect(homeButton).toBeVisible();
    expect(inboxButton).toBeVisible();
    expect(settingButton).toBeVisible();

    expect(asFragment()).toMatchSnapshot();
  });
});
