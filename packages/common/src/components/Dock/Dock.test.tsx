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

  it("renders with small size", () => {
    const { container } = render(
      <Dock size="sm">
        <Dock.Button>
          <Dock.Icon icon={HomeIcon} size="sm" />
          <Dock.Label>Home</Dock.Label>
        </Dock.Button>
      </Dock>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders with medium size", () => {
    const { container } = render(
      <Dock size="md">
        <Dock.Button>
          <Dock.Icon icon={HomeIcon} size="md" />
          <Dock.Label>Home</Dock.Label>
        </Dock.Button>
      </Dock>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders with large size", () => {
    const { container } = render(
      <Dock size="lg">
        <Dock.Button>
          <Dock.Icon icon={HomeIcon} size="lg" />
          <Dock.Label>Home</Dock.Label>
        </Dock.Button>
      </Dock>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders with primary variant", () => {
    const { container } = render(
      <Dock variant="primary">
        <Dock.Button>
          <Dock.Icon icon={HomeIcon} />
          <Dock.Label>Home</Dock.Label>
        </Dock.Button>
      </Dock>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders with secondary variant", () => {
    const { container } = render(
      <Dock variant="secondary">
        <Dock.Button>
          <Dock.Icon icon={HomeIcon} />
          <Dock.Label>Home</Dock.Label>
        </Dock.Button>
      </Dock>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders with outline", () => {
    const { container } = render(
      <Dock outline>
        <Dock.Button>
          <Dock.Icon icon={HomeIcon} />
          <Dock.Label>Home</Dock.Label>
        </Dock.Button>
      </Dock>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    const { container } = render(
      <Dock className="custom-dock">
        <Dock.Button>
          <Dock.Icon icon={HomeIcon} />
          <Dock.Label>Home</Dock.Label>
        </Dock.Button>
      </Dock>
    );
    expect(container.querySelector(".custom-dock")).toBeInTheDocument();
  });
});

describe("DockButton", () => {
  it("renders with active state", () => {
    render(
      <Dock>
        <Dock.Button active>
          <Dock.Label>Active Button</Dock.Label>
        </Dock.Button>
      </Dock>
    );
    expect(screen.getByRole("button", { name: "Active Button" })).toBeInTheDocument();
  });

  it("renders without active state", () => {
    render(
      <Dock>
        <Dock.Button active={false}>
          <Dock.Label>Inactive Button</Dock.Label>
        </Dock.Button>
      </Dock>
    );
    expect(screen.getByRole("button", { name: "Inactive Button" })).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    const { container } = render(
      <Dock>
        <Dock.Button className="custom-button">
          <Dock.Label>Custom</Dock.Label>
        </Dock.Button>
      </Dock>
    );
    expect(container.querySelector(".custom-button")).toBeInTheDocument();
  });
});

describe("DockLabel", () => {
  it("renders with text", () => {
    render(
      <Dock>
        <Dock.Button>
          <Dock.Label>Label Text</Dock.Label>
        </Dock.Button>
      </Dock>
    );
    expect(screen.getByText("Label Text")).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    const { container } = render(
      <Dock>
        <Dock.Button>
          <Dock.Label className="custom-label">Custom Label</Dock.Label>
        </Dock.Button>
      </Dock>
    );
    expect(container.querySelector(".custom-label")).toBeInTheDocument();
  });
});

describe("DockIcon", () => {
  it("renders with icon component", () => {
    const { container } = render(
      <Dock>
        <Dock.Button>
          <Dock.Icon icon={HomeIcon} />
        </Dock.Button>
      </Dock>
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders with small size", () => {
    const { container } = render(
      <Dock>
        <Dock.Button>
          <Dock.Icon icon={HomeIcon} size="sm" />
        </Dock.Button>
      </Dock>
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders with medium size", () => {
    const { container } = render(
      <Dock>
        <Dock.Button>
          <Dock.Icon icon={HomeIcon} size="md" />
        </Dock.Button>
      </Dock>
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders with large size", () => {
    const { container } = render(
      <Dock>
        <Dock.Button>
          <Dock.Icon icon={HomeIcon} size="lg" />
        </Dock.Button>
      </Dock>
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    const { container } = render(
      <Dock>
        <Dock.Button>
          <Dock.Icon icon={HomeIcon} className="custom-icon" />
        </Dock.Button>
      </Dock>
    );
    expect(container.querySelector(".custom-icon")).toBeInTheDocument();
  });

  it("renders with children", () => {
    render(
      <Dock>
        <Dock.Button>
          <Dock.Icon icon={HomeIcon}>
            <span>Child content</span>
          </Dock.Icon>
        </Dock.Button>
      </Dock>
    );
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });
});
