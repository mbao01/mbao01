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

  it("renders with custom className", () => {
    const { container } = render(
      <List className="custom-list">
        <List.Item>Item 1</List.Item>
      </List>
    );
    expect(container.querySelector(".custom-list")).toBeInTheDocument();
  });

  it("renders multiple list items", () => {
    render(
      <List>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
        <List.Item>Item 3</List.Item>
      </List>
    );
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});

describe("ListItem", () => {
  it("renders with custom className", () => {
    const { container } = render(
      <List>
        <List.Item className="custom-item">Custom Item</List.Item>
      </List>
    );
    expect(container.querySelector(".custom-item")).toBeInTheDocument();
  });
});

describe("ListColumn", () => {
  it("renders with string children", () => {
    render(
      <List>
        <List.Item>
          <List.Column>String content</List.Column>
        </List.Item>
      </List>
    );
    expect(screen.getByText("String content")).toBeInTheDocument();
  });

  it("renders with number children", () => {
    render(
      <List>
        <List.Item>
          <List.Column>{42}</List.Column>
        </List.Item>
      </List>
    );
    expect(screen.getByText("42")).toBeInTheDocument();
  });

  it("renders with boolean children", () => {
    render(
      <List>
        <List.Item>
          <List.Column>{true}</List.Column>
        </List.Item>
      </List>
    );
    // Boolean true renders as empty in React
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  it("renders with element children", () => {
    render(
      <List>
        <List.Item>
          <List.Column>
            <div>Element content</div>
          </List.Column>
        </List.Item>
      </List>
    );
    expect(screen.getByText("Element content")).toBeInTheDocument();
  });

  it("renders with flex prop", () => {
    const { container } = render(
      <List>
        <List.Item>
          <List.Column flex="grow" className="flex-column">
            Flex content
          </List.Column>
        </List.Item>
      </List>
    );
    expect(container.querySelector(".flex-column")).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    const { container } = render(
      <List>
        <List.Item>
          <List.Column className="custom-column">Column content</List.Column>
        </List.Item>
      </List>
    );
    expect(container.querySelector(".custom-column")).toBeInTheDocument();
  });
});
