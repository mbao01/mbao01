import { render, screen } from "@testing-library/react";
import { type ToasterProps } from "./types";
// import { Toaster } from "./Toaster";
import { Button } from "react-day-picker";
import userEvent from "@testing-library/user-event";

describe("Toaster", () => {
  const renderToaster = ({
    onClick,
    // ...props
  }: ToasterProps & { onClick: () => void }) =>
    render(
      <div>
        <Button onClick={onClick}>Show toast</Button>
        {/* <Toaster {...props} /> */}
      </div>
    );

  it("renders a basic toast", async () => {
    const user = userEvent.setup();
    renderToaster({ onClick: () => "A simple toast" });

    const button = screen.getByRole("button", { name: "Show toast" });

    await user.click(button);

    expect(screen.getByText("A simple toast")).toBeInTheDocument();
  });

  //   it.each([
  //     ["has outline", true],
  //     ["has no outline", false],
  //   ] as const)("%s", (description, outline) => {
  //     const heading = `Toaster ${description}`;
  //     const { asFragment } = renderAlert(heading, { outline });

  //     expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
  //     expect(asFragment()).toMatchSnapshot();
  //   });

  //   it.each([
  //     "neutral",
  //     "primary",
  //     "secondary",
  //     "accent",
  //     "ghost",
  //     "info",
  //     "success",
  //     "warning",
  //     "error",
  //   ] as const)("has %s variant", (variant) => {
  //     const heading = `Toaster ${variant}`;
  //     const { asFragment } = renderAlert(heading, { variant });

  //     expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
  //     expect(asFragment()).toMatchSnapshot();
  //   });
});
