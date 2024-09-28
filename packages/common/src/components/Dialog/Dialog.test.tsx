import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Dialog } from "./Dialog";
import { type DialogContentProps } from "./types";

describe("Dialog", () => {
  const renderDialog = (contentProps?: DialogContentProps) =>
    render(
      <Dialog>
        <Dialog.Trigger>Edit Profile</Dialog.Trigger>
        <Dialog.Content className="sm:max-w-[425px]" {...contentProps}>
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

    expect(screen.getByRole("button", { name: "Edit Profile" })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    { variant: "dialog", description: "dialog" },
    { variant: "sheet", description: "sheet" },
    { variant: "sheet", side: "left", description: "sheet on the left" },
    { variant: "sheet", side: "right", description: "sheet on the left" },
    { variant: "sheet", side: "top", description: "sheet on top" },
    { variant: "sheet", side: "bottom", description: "sheet on bottom" },
  ] as const)("renders a $description", async ({ variant, side }) => {
    const user = userEvent.setup();
    const { asFragment } = renderDialog({ variant, side });

    const dialogTrigger = screen.getByRole("button", { name: "Edit Profile" });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(dialogTrigger);

    const dialog = screen.getByRole("dialog");

    // dialog heading
    expect(within(dialog).getByRole("heading", { name: "Edit profile" })).toBeInTheDocument();

    // dialog description
    expect(
      within(dialog).getByText("Make changes to your profile here. Click save when you are done.")
    ).toBeInTheDocument();

    // dialog content
    expect(within(dialog).getByText("Some content goes here!")).toBeInTheDocument();

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
