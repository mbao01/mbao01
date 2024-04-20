import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  const renderPagination = () =>
    render(
      <Pagination>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous href="#" />
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">1</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#" isActive>
              2
            </Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">3</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Ellipsis />
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Next href="#" />
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
    );

  it("renders pagination buttons", () => {
    const { asFragment } = renderPagination();

    expect(
      screen.getByRole("link", { name: "Go to previous page" })
    ).toBeEnabled();
    expect(screen.getByRole("link", { name: "Go to next page" })).toBeEnabled();

    ["1", "2", "3"].forEach((page) => {
      expect(screen.getByRole("link", { name: page })).toBeEnabled();
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
