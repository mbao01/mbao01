import { render, screen, within } from "@testing-library/react";
import { Breadcrumb, Breadcrumbs } from "./Breadcrumbs";
import { getSubpaths } from "../../utilities/getSubpaths";

describe("Breadcrumbs", () => {
  const renderBreadcrumbs = (
    pathname: string,
    labels?: Record<string, string>,
    includeRoot?: boolean
  ) => {
    return render(
      <Breadcrumbs>
        {getSubpaths(pathname, labels, includeRoot).map(({ href, label }) => (
          <Breadcrumb>
            <a href={href.pathname}>{label}</a>
          </Breadcrumb>
        ))}
      </Breadcrumbs>
    );
  };

  it("renders empty list", () => {
    const { asFragment } = renderBreadcrumbs("");

    expect(screen.getByRole("list")).toBeEmptyDOMElement();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders root path", () => {
    const { asFragment } = renderBreadcrumbs("/", { "/": "Home" }, true);

    const listItemEl = within(screen.getByRole("listitem"));
    const anchorEl = listItemEl.getByRole("link", { name: "Home" });

    expect(anchorEl).toBeInTheDocument();
    expect(anchorEl).toHaveAttribute("href", "/");
    expect(asFragment()).toMatchSnapshot();
  });

  it("shows unlabeled paths", () => {
    const { asFragment } = renderBreadcrumbs(
      "/profile/edit",
      { "/": "dashboard" },
      true
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
    const { asFragment } = renderBreadcrumbs("/profile/edit", {
      "/profile": "My Profile",
      "/profile/edit": "Edit Profile",
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
