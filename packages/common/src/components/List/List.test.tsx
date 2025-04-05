import { render, screen } from "@testing-library/react";
import { List } from "./List";

describe("List", () => {
  it("renders a basic list", () => {
    const { asFragment } = render(
      <List>
        <List.Item>
          <span>If a dog chews</span> shoes whose shoes does <span>he choose?</span>
        </List.Item>
      </List>
    );

    expect(screen.getByRole("list")).toBeVisible();
    expect(screen.getByRole("list")).toHaveTextContent(
      "If a dog chews shoes whose shoes does he choose?"
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
