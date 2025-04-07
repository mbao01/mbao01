import { render, screen } from "@testing-library/react";
import { Button } from "../Button";
import { Stat, Stats } from "./Stat";

const StatExample = (
  <Stat>
    <Stat.Title>Nike Shoe!</Stat.Title>
    <Stat.Value>$89,410</Stat.Value>
    <Stat.Description>↗︎ 400 (22%)</Stat.Description>
    <Stat.Actions className="gap-2">
      <Button size="xs" variant="success">
        Withdrawal
      </Button>{" "}
      <Button size="xs" name="hello" variant="secondary">
        Buy Now
      </Button>
    </Stat.Actions>
  </Stat>
);

describe("Stats", () => {
  it("renders a basic stats", () => {
    const { asFragment } = render(
      <Stats>
        {StatExample}
        {StatExample}
        {StatExample}
      </Stats>
    );

    const titles = screen.getAllByText("Nike Shoe!");
    titles.forEach((title) => {
      expect(title).toBeVisible();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
