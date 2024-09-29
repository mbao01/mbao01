import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../Button";
import { toast, Toaster } from "./";
import { type ToasterProps } from "./types";

describe("Toaster", () => {
  const renderToaster = ({ onClick, ...props }: ToasterProps & { onClick: () => void }) =>
    render(
      <div>
        <Button onClick={onClick}>Show toast</Button>
        <Toaster {...props} />
      </div>
    );

  it("renders a basic toast", async () => {
    const user = userEvent.setup();
    renderToaster({
      onClick: () => toast("A simple toast"),
    });

    const button = screen.getByRole("button", { name: "Show toast" });

    await user.click(button);

    expect(screen.getByText("A simple toast")).toBeInTheDocument();
  });

  it.each([
    ["has outline", true],
    ["has no outline", false],
  ] as const)("%s", async (description, outline) => {
    const user = userEvent.setup();
    renderToaster({
      outline,
      onClick: () => toast.success("Sent successfully!", { description }),
    });

    const button = screen.getByRole("button", { name: "Show toast" });

    await user.click(button);

    expect(screen.getByText("Sent successfully!")).toBeInTheDocument();
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
    renderToaster({
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
  });
});
