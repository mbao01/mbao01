import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TagsInput } from "./TagsInput";

describe("TagsInput", () => {
  it("renders some default tags", () => {
    const { asFragment } = render(
      <TagsInput defaultTags={["Hello", "World"]} placeholder="Enter anything" />
    );

    expect(screen.getByRole("button", { name: "Remove Hello option" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Remove World option" })).toBeVisible();
    expect(screen.getByPlaceholderText("Enter anything")).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it("and the user enters a tag", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(<TagsInput aria-label="Enter anything" />);

    const tagsInput = screen.getByLabelText("Enter anything");

    await user.type(tagsInput, "Hello{Enter}");
    await user.type(tagsInput, "World{Enter}");

    expect(screen.getByRole("button", { name: "Remove Hello option" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Remove World option" })).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it("and the user can remove a tag", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(<TagsInput aria-label="Enter anything" />);

    const tagsInput = screen.getByLabelText("Enter anything");

    await user.type(tagsInput, "Hello{Enter}");

    const helloTag = screen.getByRole("button", { name: "Remove Hello option" });

    await user.click(helloTag);

    expect(screen.queryByRole("button", { name: "Remove World option" })).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("and by using the keyboard the user can remove a tag", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(<TagsInput aria-label="Enter anything" />);

    const tagsInput = screen.getByLabelText("Enter anything");

    await user.type(tagsInput, "Hello{Enter}");
    await user.type(tagsInput, "World{Enter}");
    await user.type(tagsInput, "Oh{Enter}");
    await user.type(tagsInput, "Little{Enter}");
    await user.type(tagsInput, "Dear{Enter}");

    await user.type(tagsInput, "{ArrowLeft}{Delete}");

    expect(screen.queryByRole("button", { name: "Remove Dear option" })).not.toBeInTheDocument();

    await user.type(tagsInput, "{Backspace}");

    expect(screen.queryByRole("button", { name: "Remove Little option" })).not.toBeInTheDocument();

    await user.type(tagsInput, "Hi{Backspace}{Backspace}{Backspace}");

    expect(screen.queryByRole("button", { name: "Remove Oh option" })).not.toBeInTheDocument();

    await user.type(
      tagsInput,
      "{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}{Delete}"
    );

    expect(screen.queryByRole("button", { name: "Remove Hello option" })).not.toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it("and the user can only enter a certain minimum or maximum number of tags", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(
      <TagsInput minItems={1} maxItems={2} aria-label="Enter anything" />
    );

    const tagsInput = screen.getByLabelText("Enter anything");

    await user.type(tagsInput, "Hello{Enter}");

    const helloTag = screen.getByRole("button", { name: "Remove Hello option" });

    expect(helloTag).toBeDisabled();

    await user.type(tagsInput, "World{Enter}");

    expect(helloTag).toBeEnabled();
    expect(tagsInput).toBeDisabled();

    await user.click(helloTag);

    const worldTag = screen.getByRole("button", { name: "Remove World option" });

    expect(tagsInput).toBeEnabled();
    expect(worldTag).toBeDisabled();
    expect(helloTag).not.toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    ["has outline", true],
    ["has no outline", false],
  ] as const)("%s", (description, outline) => {
    const placeholder = `TagsInput ${description}`;
    const { asFragment } = render(<TagsInput outline={outline} placeholder={placeholder} />);

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    ["tiny", "xs"],
    ["small", "sm"],
    ["medium", "md"],
    ["large", "lg"],
  ] as const)("has %s (%s) size", (description, size) => {
    const placeholder = `TagsInput ${description}`;
    const { asFragment } = render(<TagsInput size={size} placeholder={placeholder} />);

    expect(screen.getByPlaceholderText(placeholder)).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    "default",
    "primary",
    "secondary",
    "accent",
    "ghost",
    "info",
    "success",
    "warning",
    "error",
  ] as const)("has %s variant", (variant) => {
    const placeholder = `${variant} badge`;
    const { asFragment } = render(
      <TagsInput key={variant} variant={variant} placeholder={placeholder} />
    );

    expect(screen.getByPlaceholderText(placeholder)).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });
});
