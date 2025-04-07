import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Resizable } from "./Resizable";

describe("Resizable", () => {
  const renderResizable = () =>
    render(
      <Resizable direction="horizontal">
        <Resizable.Panel defaultSize={25}>One</Resizable.Panel>
        <Resizable.Handle />
        <Resizable.Panel defaultSize={75}>
          <Resizable direction="vertical">
            <Resizable.Panel defaultSize={50}>Two</Resizable.Panel>
            <Resizable.Handle withHandle />
            <Resizable.Panel defaultSize={50}>Three</Resizable.Panel>
          </Resizable>
        </Resizable.Panel>
      </Resizable>
    );

  it("renders a resizable panel groups", async () => {
    const { asFragment } = renderResizable();

    const separators = screen.getAllByRole("separator");

    separators.forEach((separator) => {
      expect(separator).toBeVisible();
    });
    expect(separators).toHaveLength(2);

    expect(screen.getByText("One")).toBeVisible();
    expect(screen.getByText("Two")).toBeVisible();
    expect(screen.getByText("Three")).toBeVisible();

    expect(asFragment()).toMatchSnapshot();
  });
});
