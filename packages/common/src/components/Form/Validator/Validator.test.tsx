import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Validator } from "./Validator";

describe("Validator", () => {
  it("should show validation message/hint", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(
      <>
        <Validator as="input" required type="email" placeholder="mail@site.com" />
        <Validator.Hint>Please enter a valid email address</Validator.Hint>
      </>
    );

    const hint = screen.getByText("Please enter a valid email address");

    /**
     * NB: cannot test this as no attributes is changed when an input is invalid.
     * Need to visually test interactions with storybook `play` feature
     */
    // expect(hint).not.toBeVisible();

    const input = screen.getByRole("textbox");

    await user.type(input, "Ayomide B.");

    expect(hint).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });
});
