import { render, screen } from "@testing-library/react";
import { Join } from "./Join";

describe("Join", () => {
  it("renders a basic join", () => {
    const { asFragment } = render(
      <Join as="span" data-testid="content">
        <Join.Item as="span">First</Join.Item>
        <Join.Item as="span">Second</Join.Item>
      </Join>
    );

    expect(screen.getByTestId("content")).toHaveTextContent("FirstSecond");
    expect(asFragment()).toMatchSnapshot();
  });
});
