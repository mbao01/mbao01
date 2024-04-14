import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { Dialog } from "./Dialog";
import userEvent from "@testing-library/user-event";

describe("Dialog", () => {
  const renderDialog = () =>
    render(
      <Dialog>
        <Dialog.Trigger>Edit Profile</Dialog.Trigger>
        <Dialog.Content className="sm:max-w-[425px]">
          <Dialog.Header>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when you are done.
            </Dialog.Description>
          </Dialog.Header>
          Some content goes here!
          <Dialog.Footer>Footer section</Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    );

  it("renders a dialog trigger", () => {
    const { asFragment } = renderDialog();

    expect(
      screen.getByRole("button", { name: "Edit Profile" })
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a dialog", async () => {
    const user = userEvent.setup();
    const { asFragment } = renderDialog();

    const dialogTrigger = screen.getByRole("button", { name: "Edit Profile" });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(dialogTrigger);

    const dialog = screen.getByRole("dialog");

    // dialog heading
    expect(
      within(dialog).getByRole("heading", { name: "Edit profile" })
    ).toBeInTheDocument();

    // dialog description
    expect(
      within(dialog).getByText(
        "Make changes to your profile here. Click save when you are done."
      )
    ).toBeInTheDocument();

    // dialog content
    expect(
      within(dialog).getByText("Some content goes here!")
    ).toBeInTheDocument();

    // dialog footer
    expect(within(dialog).getByText("Footer section")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should open and close dialog", async () => {
    const user = userEvent.setup();
    const { asFragment } = renderDialog();
    const dialogTrigger = screen.getByRole("button", { name: "Edit Profile" });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(dialogTrigger);

    expect(screen.queryByRole("dialog")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Close" }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
