import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { AlertDialog } from "./AlertDialog";
import userEvent from "@testing-library/user-event";

describe("AlertDialog", () => {
  const renderAlertDialog = () =>
    render(
      <AlertDialog>
        <AlertDialog.Trigger>Update profile</AlertDialog.Trigger>
        <AlertDialog.Content className="sm:max-w-[425px]">
          <AlertDialog.Header>
            <AlertDialog.Title>Update profile</AlertDialog.Title>
            <AlertDialog.Description>
              You are making changes to your profile here. Do you want to
              continue?
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel variant="link">Cancel</AlertDialog.Cancel>
            <AlertDialog.Action>Continue</AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    );

  it("renders a an dialog trigger", () => {
    const { asFragment } = renderAlertDialog();

    expect(
      screen.getByRole("button", { name: "Update profile" })
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a an alert dialog", async () => {
    const user = userEvent.setup();
    const { asFragment } = renderAlertDialog();

    const dialogTrigger = screen.getByRole("button", {
      name: "Update profile",
    });

    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();

    await user.click(dialogTrigger);

    const dialog = screen.getByRole("alertdialog");

    // dialog heading
    expect(
      within(dialog).getByRole("heading", { name: "Update profile" })
    ).toBeInTheDocument();

    // dialog description
    expect(
      within(dialog).getByText(
        "You are making changes to your profile here. Do you want to continue?"
      )
    ).toBeInTheDocument();

    // dialog footer
    expect(
      within(dialog).getByRole("button", { name: "Cancel" })
    ).toBeInTheDocument();
    expect(
      within(dialog).getByRole("button", { name: "Continue" })
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should open and close alert dialog", async () => {
    const user = userEvent.setup();
    const { asFragment } = renderAlertDialog();
    const dialogTrigger = screen.getByRole("button", {
      name: "Update profile",
    });

    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();

    await user.click(dialogTrigger);

    expect(screen.queryByRole("alertdialog")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Cancel" }));

    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should accept and close alert dialog", async () => {
    const user = userEvent.setup();
    const { asFragment } = renderAlertDialog();
    const dialogTrigger = screen.getByRole("button", {
      name: "Update profile",
    });

    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();

    await user.click(dialogTrigger);

    expect(screen.queryByRole("alertdialog")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Continue" }));

    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
