import { render, screen } from "@testing-library/react";
import { type ToasterProps } from "./types";
import { Toaster, toast } from "./";
import { Button } from "../Button";
import userEvent from "@testing-library/user-event";

describe("Toaster", () => {
  const renderToaster = ({
    onClick,
    ...props
  }: ToasterProps & { onClick: () => void }) =>
    render(
      <div>
        <Button onClick={onClick}>Show toast</Button>
        <Toaster {...props} />
      </div>
    );

  it("renders a basic toast", async () => {
    const user = userEvent.setup();
    const { asFragment } = renderToaster({
      onClick: () => toast("A simple toast"),
    });

    const button = screen.getByRole("button", { name: "Show toast" });

    await user.click(button);

    expect(screen.getByText("A simple toast")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    ["has outline", true],
    ["has no outline", false],
  ] as const)("%s", async (description, outline) => {
    const user = userEvent.setup();
    const { asFragment } = renderToaster({
      outline,
      onClick: () => toast.success("Sent successfully!", { description }),
    });

    const button = screen.getByRole("button", { name: "Show toast" });

    await user.click(button);

    expect(screen.getByText("Sent successfully!")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    "neutral",
    "primary",
    "secondary",
    "accent",
    "ghost",
    "info",
    "success",
    "warning",
    "error",
  ] as const)("has %s variant", async (variant) => {
    const heading = `Toaster ${variant}`;
    const user = userEvent.setup();
    const { asFragment } = renderToaster({
      variant,
      onClick: () =>
        toast(heading, {
          description: "This is a basic toast",
        }),
    });

    const button = screen.getByRole("button", { name: "Show toast" });

    await user.click(button);

    expect(screen.getByText(heading)).toBeInTheDocument();
    expect(screen.getByText("This is a basic toast")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
