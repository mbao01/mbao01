import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, type MemoryRouterProps } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";
import { type BreadcrumbsProps } from "./types";

describe("Breadcrumbs", () => {
  const renderBreadcrumbs = (
    props?: BreadcrumbsProps,
    memoryRouterProps?: MemoryRouterProps
  ) => {
    return render(
      <MemoryRouter {...memoryRouterProps}>
        <Breadcrumbs {...props} />
      </MemoryRouter>
    );
  };

  it("renders empty list", () => {
    const { asFragment } = renderBreadcrumbs();

    expect(screen.getByRole("list")).toBeEmptyDOMElement();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders root path", () => {
    const { asFragment } = renderBreadcrumbs({ root: "Home" });

    const listItemEl = within(screen.getByRole("listitem"));
    const anchorEl = listItemEl.getByRole("link", { name: "Home" });

    expect(anchorEl).toBeInTheDocument();
    expect(anchorEl).toHaveAttribute("href", "/");
    expect(asFragment()).toMatchSnapshot();
  });

  it("shows unlabeled paths", () => {
    const { asFragment } = renderBreadcrumbs(
      { root: "dashboard" },
      { initialEntries: ["/profile/edit"] }
    );

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
    const { asFragment } = renderBreadcrumbs(
      { labels: { profile: "My Profile", edit: "Edit Profile" } },
      { initialEntries: ["/profile/edit"] }
    );

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
