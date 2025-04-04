import { render, screen } from "@testing-library/react";
import { Stack } from "./Stack";

describe("Stack", () => {
  it("renders a stack", () => {
    const { asFragment } = render(
      <Stack data-testid="content">
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </Stack>
    );

    expect(screen.getByTestId("content")).toHaveTextContent("ABC");
    expect(asFragment()).toMatchSnapshot();
  });
});
