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

  it("renders with horizontal direction", () => {
    const { container } = render(
      <Stats direction="horizontal" data-testid="stats">
        {StatExample}
      </Stats>
    );
    expect(container.querySelector("[data-testid='stats']")).toBeInTheDocument();
  });

  it("renders with vertical direction", () => {
    const { container } = render(
      <Stats direction="vertical" data-testid="stats">
        {StatExample}
      </Stats>
    );
    expect(container.querySelector("[data-testid='stats']")).toBeInTheDocument();
  });
});

describe("Stat", () => {
  it("renders with position prop", () => {
    const { container } = render(
      <Stats>
        <Stat position="center" data-testid="stat">
          <Stat.Title>Centered Stat</Stat.Title>
        </Stat>
      </Stats>
    );
    expect(container.querySelector("[data-testid='stat']")).toBeInTheDocument();
  });

  it("renders StatFigure", () => {
    render(
      <Stats>
        <Stat>
          <Stat.Figure data-testid="stat-figure">
            <div>Figure content</div>
          </Stat.Figure>
          <Stat.Title>Title</Stat.Title>
        </Stat>
      </Stats>
    );
    expect(screen.getByTestId("stat-figure")).toBeInTheDocument();
  });

  it("renders all sub-components together", () => {
    render(
      <Stats>
        <Stat>
          <Stat.Figure>📊</Stat.Figure>
          <Stat.Title>Complete Stat</Stat.Title>
          <Stat.Value>1,234</Stat.Value>
          <Stat.Description>+10%</Stat.Description>
          <Stat.Actions>
            <button>Action</button>
          </Stat.Actions>
        </Stat>
      </Stats>
    );
    expect(screen.getByText("Complete Stat")).toBeInTheDocument();
    expect(screen.getByText("1,234")).toBeInTheDocument();
    expect(screen.getByText("+10%")).toBeInTheDocument();
  });
});
