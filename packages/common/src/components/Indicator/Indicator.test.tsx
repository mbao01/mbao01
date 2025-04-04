import { render, screen } from "@testing-library/react";
import { Indicator } from "./Indicator";

describe("Indicator", () => {
  it("renders a basic indicator", () => {
    const { asFragment } = render(
      <Indicator as="span">
        Main body text
        <Indicator.Item as="span">Indicator</Indicator.Item>
      </Indicator>
    );

    expect(screen.getByText("Main body text")).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });
});
