import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Page", () => {
  it("renders", () => {
    render(<Home />);
    expect(screen.getByText("hey 👋")).toBeInTheDocument();
  });
});
