import { render, screen } from "@testing-library/react";
import { type TabsProps } from "./types";
import { Tabs } from "./";
import userEvent from "@testing-library/user-event";

describe("Tabs", () => {
  const renderTabs = (props?: TabsProps) => {
    return render(
      <Tabs className="w-[400px]" {...props}>
        <Tabs.List className="grid w-full grid-cols-2">
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
          <Tabs.Trigger value="secure" disabled>
            Secure
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">Account tab content</Tabs.Content>
        <Tabs.Content value="password">Password tab content</Tabs.Content>
        <Tabs.Content value="secure">Secure tab content</Tabs.Content>
      </Tabs>
    );
  };

  it("renders tab without a default tab", () => {
    const { asFragment } = renderTabs();
    const triggers = ["Account", "Password", "Secure"];
    const contents = triggers.map((trigger) => `${trigger} tab content`);

    triggers.forEach((trigger) => {
      expect(screen.getByRole("tab", { name: trigger })).toHaveAttribute(
        "data-state",
        "inactive"
      );
    });

    // no tab content shown
    contents.forEach((content) => {
      expect(screen.queryByText(content)).not.toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders tab without a default tab", () => {
    const { asFragment } = renderTabs({ defaultValue: "password" });
    const content = "Password tab content";

    expect(screen.getByRole("tab", { name: "Password" })).toHaveAttribute(
      "data-state",
      "active"
    );

    expect(screen.queryByText(content)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should switch between tabs", async () => {
    const user = userEvent.setup();
    const { asFragment } = renderTabs({ defaultValue: "secure" });

    expect(screen.getByRole("tab", { name: "Secure" })).toBeDisabled();
    expect(screen.getByText("Secure tab content")).toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: "Password" }));
    expect(screen.getByText("Password tab content")).toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: "Account" }));
    expect(screen.getByText("Account tab content")).toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: "Secure" }));
    // "secure" tab is disabled so can't switch to it.
    expect(screen.getByText("Account tab content")).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
