import { render, screen } from "@testing-library/react";
import { Card } from "./";

describe("Card", () => {
  it("renders a basic card", () => {
    const { asFragment } = render(
      <Card>
        <Card.Body>If a dog chews shoes whose shoes does he choose?</Card.Body>
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
        <Card.Body>
          <Card.Title>Nike Shoe!</Card.Title>
          Real cool shoe
        </Card.Body>
      </Card>
    );

    expect(screen.getByRole("heading", { name: "Nike Shoe!", level: 3 })).toBeInTheDocument();
    expect(screen.getByText("Real cool shoe")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a card with title and actions", () => {
    const { asFragment } = render(
      <Card>
        <Card.Body>
          <Card.Title>Nike Shoe!</Card.Title>
          Real cool shoe
          <Card.Actions>Some actions content</Card.Actions>
        </Card.Body>
      </Card>
    );

    expect(screen.getByRole("heading", { name: "Nike Shoe!", level: 3 })).toBeInTheDocument();
    expect(screen.getByText("Real cool shoe")).toBeInTheDocument();
    expect(screen.getByText("Some actions content")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a card with header and footer", () => {
    const { asFragment } = render(
      <Card>
        <Card.Header>Nike Shoe!</Card.Header>
        <Card.Content>Real cool shoe</Card.Content>
        <Card.Footer>Some footer content</Card.Footer>
      </Card>
    );

    expect(screen.getByText("Nike Shoe!")).toBeInTheDocument();
    expect(screen.getByText("Real cool shoe")).toBeInTheDocument();
    expect(screen.getByText("Some footer content")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a card with a description", () => {
    const { asFragment } = render(
      <Card>
        <Card.Body>
          <Card.Title>Nike Shoe!</Card.Title>
          <Card.Description>Some real cool shoe</Card.Description>
        </Card.Body>
      </Card>
    );

    expect(screen.getByRole("heading", { name: "Nike Shoe!", level: 3 })).toBeInTheDocument();
    expect(screen.getByText("Some real cool shoe")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a card with image", () => {
    const { asFragment } = render(
      <Card>
        <Card.Body>Real cool shoe</Card.Body>
        <Card.Image src="image.jpg" alt="my image" />
      </Card>
    );

    expect(screen.getByText("Real cool shoe")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "my image" })).toHaveAttribute("src", "image.jpg");
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a card with border", () => {
    const { asFragment } = render(
      <Card border="solid">
        <Card.Body>Real cool shoe</Card.Body>
      </Card>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a card with overlay", () => {
    const { asFragment } = render(
      <Card border="dash">
        <Card.Body>Real cool shoe</Card.Body>
        <Card.Image src="image.jpg" alt="my image" />
      </Card>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a horizontal card with image on the left", () => {
    const { asFragment } = render(
      <Card horizontal>
        <Card.Body>Real cool shoe</Card.Body>
        <Card.Image src="image.jpg" alt="my image" />
      </Card>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    ["tiny", "xs"],
    ["small", "sm"],
    ["medium", "md"],
    ["large", "lg"],
    ["extra large", "xl"],
  ] as const)("renders a %s (%s) card", (desc, size) => {
    const description = `Real cool ${desc} shoe`;
    const { asFragment } = render(
      <Card size={size}>
        <Card.Body>{description}</Card.Body>
      </Card>
    );

    expect(screen.getByText(description)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
