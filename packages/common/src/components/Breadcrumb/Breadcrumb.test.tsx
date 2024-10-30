import { render, screen, within } from "@testing-library/react";
import { Slash } from "lucide-react";
import { getSubpaths } from "../../utilities/getSubpaths";
import { Breadcrumb } from "./Breadcrumb";

describe("Breadcrumb", () => {
  const renderBreadcrumb = (
    pathname: string,
    labels?: Record<string, string>,
    includeRoot?: boolean
  ) => {
    const subpaths = getSubpaths(pathname, labels, includeRoot);
    return render(
      <Breadcrumb>
        <Breadcrumb.List>
          {subpaths.map(({ href, label }, index) => (
            <>
              <Breadcrumb.Item key={href.pathname}>
                <Breadcrumb.Link asChild>
                  <a href={href.pathname}>{label}</a>
                </Breadcrumb.Link>
              </Breadcrumb.Item>
              {subpaths.length > index + 1 ? (
                <Breadcrumb.Separator>
                  <Slash />
                </Breadcrumb.Separator>
              ) : null}
            </>
          ))}
        </Breadcrumb.List>
      </Breadcrumb>
    );
  };

  it("renders empty list", () => {
    const { asFragment } = renderBreadcrumb("");

    expect(screen.getByRole("list")).toBeEmptyDOMElement();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders root path", () => {
    const { asFragment } = renderBreadcrumb("/", { "/": "Home" }, true);

    const listItemEl = within(screen.getByRole("listitem"));
    const anchorEl = listItemEl.getByRole("link", { name: "Home" });

    expect(anchorEl).toBeInTheDocument();
    expect(anchorEl).toHaveAttribute("href", "/");
    expect(asFragment()).toMatchSnapshot();
  });

  it("shows unlabeled paths", () => {
    const { asFragment } = renderBreadcrumb("/profile/edit", { "/": "dashboard" }, true);

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
    const { asFragment } = renderBreadcrumb("/profile/edit", {
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
