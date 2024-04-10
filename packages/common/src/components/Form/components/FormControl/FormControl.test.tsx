import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormControl } from "./FormControl";

describe("FormControl", () => {
  it("can be a label form control element", () => {
    const { asFragment } = render(
      <FormControl as="label" htmlFor="username">
        Username
        <input id="username" name="username" />
      </FormControl>
    );

    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each(["div", "span"] as const)("can be a %s element", (as) => {
    const description = `${as} element`;
    const { asFragment } = render(
      <FormControl as={as}>{description}</FormControl>
    );

    expect(screen.getByText(description)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
