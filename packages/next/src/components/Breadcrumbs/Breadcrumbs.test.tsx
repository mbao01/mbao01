import { render, screen, within } from "@testing-library/react";
import mockRouter from "next-router-mock";
import "../../mocks/mockRouter";

import { Breadcrumbs } from "./Breadcrumbs";
import { type BreadcrumbsProps } from "./types";

describe("Breadcrumbs", () => {
  const renderBreadcrumbs = (props?: BreadcrumbsProps) => {
    return render(<Breadcrumbs {...props} />);
  };

  afterEach(() => {
    mockRouter.replace(undefined!);
  });

  it("renders empty list", () => {
    mockRouter.push("/");
    const { asFragment } = renderBreadcrumbs();

    expect(screen.getByRole("list")).toBeEmptyDOMElement();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders root path", () => {
    mockRouter.push("/");
    const { asFragment } = renderBreadcrumbs({ root: "Home" });

    const listItemEl = within(screen.getByRole("listitem"));
    const anchorEl = listItemEl.getByRole("link", { name: "Home" });

    expect(anchorEl).toBeInTheDocument();
    expect(anchorEl).toHaveAttribute("href", "/");
    expect(asFragment()).toMatchSnapshot();
  });

  it("shows unlabeled paths", () => {
    mockRouter.push("/profile/edit");
    const { asFragment } = renderBreadcrumbs({ root: "dashboard" });

    [
      { name: "dashboard", href: "/" },
      { name: "profile", href: "/profile" },
      { name: "edit", href: "/profile/edit" },
    ].forEach(({ name, href }) => {
      const anchorEl = screen.getByRole("link", { name });

      expect(anchorEl).toBeInTheDocument();
      expect(anchorEl).toHaveAttribute("href", href);
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("shows labeled paths", () => {
    mockRouter.push("/profile/edit");
    const { asFragment } = renderBreadcrumbs({
      labels: { profile: "My Profile", edit: "Edit Profile" },
    });

    [
      { name: "My Profile", href: "/profile" },
      { name: "Edit Profile", href: "/profile/edit" },
    ].forEach(({ name, href }) => {
      const anchorEl = screen.getByRole("link", { name });

      expect(anchorEl).toBeInTheDocument();
      expect(anchorEl).toHaveAttribute("href", href);
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
