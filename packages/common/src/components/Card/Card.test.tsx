import { render, screen } from "@testing-library/react";
import { Card } from "./";

describe("Card", () => {
  it("renders a basic card", () => {
    const { asFragment } = render(
      <Card>
        <Card.Content>
          If a dog chews shoes whose shoes does he choose?
        </Card.Content>
      </Card>
    );

    expect(
      screen.getByText("If a dog chews shoes whose shoes does he choose?")
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a card with a header", () => {
    const { asFragment } = render(
      <Card>
        <Card.Content>
          <Card.Header>Nike Shoe!</Card.Header>
          Real cool shoe
        </Card.Content>
      </Card>
    );

    expect(
      screen.getByRole("heading", { name: "Nike Shoe!", level: 3 })
    ).toBeInTheDocument();
    expect(screen.getByText("Real cool shoe")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a card with header and footer", () => {
    const { asFragment } = render(
      <Card>
        <Card.Content>
          <Card.Header>Nike Shoe!</Card.Header>
          Real cool shoe
          <Card.Footer>Some footer content</Card.Footer>
        </Card.Content>
      </Card>
    );

    expect(
      screen.getByRole("heading", { name: "Nike Shoe!", level: 3 })
    ).toBeInTheDocument();
    expect(screen.getByText("Real cool shoe")).toBeInTheDocument();
    expect(screen.getByText("Some footer content")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a card with a description", () => {
    const { asFragment } = render(
      <Card>
        <Card.Content>
          <Card.Header>Nike Shoe!</Card.Header>
          <Card.Description>Some real cool shoe</Card.Description>
        </Card.Content>
      </Card>
    );

    expect(
      screen.getByRole("heading", { name: "Nike Shoe!", level: 3 })
    ).toBeInTheDocument();
    expect(screen.getByText("Some real cool shoe")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a card with image", () => {
    const { asFragment } = render(
      <Card>
        <Card.Content>Real cool shoe</Card.Content>
        <Card.Image src="image.jpg" alt="my image" />
      </Card>
    );

    expect(screen.getByText("Real cool shoe")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "my image" })).toHaveAttribute(
      "src",
      "image.jpg"
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a card with border", () => {
    const { asFragment } = render(
      <Card bordered>
        <Card.Content>Real cool shoe</Card.Content>
      </Card>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a card with overlay", () => {
    const { asFragment } = render(
      <Card bordered>
        <Card.Content>Real cool shoe</Card.Content>
        <Card.Image src="image.jpg" alt="my image" />
      </Card>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a horizontal card with image on the left", () => {
    const { asFragment } = render(
      <Card horizontal>
        <Card.Content>Real cool shoe</Card.Content>
        <Card.Image src="image.jpg" alt="my image" />
      </Card>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a compact card", () => {
    const { asFragment } = render(
      <Card compact>
        <Card.Content>Real cool shoe</Card.Content>
      </Card>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
