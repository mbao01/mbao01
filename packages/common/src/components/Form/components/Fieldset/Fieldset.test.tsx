import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Fieldset } from "./Fieldset";

describe("Fieldset", () => {
  it("can have a label and legend", () => {
    const { asFragment } = render(
      <Fieldset>
        <Fieldset.Legend>
          <b>Page title</b>
        </Fieldset.Legend>
        <Fieldset.Label htmlFor="username">Username</Fieldset.Label>
        <input id="username" name="username" className="input" />
        <Fieldset.Label as="p">You can edit username later on from settings</Fieldset.Label>
      </Fieldset>
    );

    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByText("You can edit username later on from settings")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
