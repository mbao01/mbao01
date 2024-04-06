import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

describe("Label", () => {
  it("can be a label form control element", () => {
    const { asFragment } = render(
      <Label htmlFor="username">
        Username
        <input id="username" name="username" />
      </Label>
    );

    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
