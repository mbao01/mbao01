import { render, screen } from "@testing-library/react";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("renders a skeleton", () => {
    const { asFragment } = render(<Skeleton data-testid="skeleton" />);

    expect(screen.getByTestId("skeleton")).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it("has a skeleton with pulse animation", () => {
    const { asFragment } = render(<Skeleton variant="pulse" data-testid="skeleton" />);

    expect(screen.getByTestId("skeleton")).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a round skeleton", () => {
    const { asFragment } = render(<Skeleton data-testid="skeleton" round />);
    const skeletonEl = screen.getByTestId("skeleton");

    expect(skeletonEl).toBeVisible();
    expect(skeletonEl).toHaveClass("rounded-full");
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([2, 64, "full"] as const)("renders a square skeleton (%s/sq)", (size) => {
    const { asFragment } = render(
      <Skeleton data-testid="skeleton" round width={size} height={size} />
    );
    const skeletonEl = screen.getByTestId("skeleton");

    expect(skeletonEl).toBeVisible();
    expect(skeletonEl).toHaveClass(`w-${size} h-${size}`);
    expect(asFragment()).toMatchSnapshot();
  });
});
