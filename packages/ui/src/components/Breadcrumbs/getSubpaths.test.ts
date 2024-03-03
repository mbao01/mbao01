import { getSubpaths } from "./getSubpaths";

describe("getSubpaths", () => {
  it("should return empty list", () => {
    const result = getSubpaths("");
    expect(result).toStrictEqual([]);
  });

  it("should returns list of breadcrumbs properties", () => {
    const result = getSubpaths("/");
    expect(result).toStrictEqual([]);
  });

  it("should returns list of breadcrumbs properties", () => {
    const result = getSubpaths("/", undefined, true);
    expect(result).toStrictEqual([{ href: { pathname: "/" }, label: "" }]);
  });

  it("should returns list of breadcrumbs properties", () => {
    const result = getSubpaths("/", { "/": "Home" }, true);
    expect(result).toStrictEqual([{ href: { pathname: "/" }, label: "Home" }]);
  });

  it("should returns list of breadcrumbs properties", () => {
    const result = getSubpaths("/hello/world");
    expect(result).toStrictEqual([
      { href: { pathname: "/hello" }, label: "hello" },
      { href: { pathname: "/hello/world" }, label: "world" },
    ]);
  });

  it("should returns list of breadcrumbs properties", () => {
    const result = getSubpaths("hello/world");
    expect(result).toStrictEqual([
      { href: { pathname: "/hello" }, label: "hello" },
      { href: { pathname: "/hello/world" }, label: "world" },
    ]);
  });

  it("should returns list of breadcrumbs properties", () => {
    const result = getSubpaths(
      "/hello/world/day",
      {
        "/": "Home",
        "/hello": "Hello",
        "/hello/world": "Hello World",
      },
      true
    );
    expect(result).toStrictEqual([
      { href: { pathname: "/" }, label: "Home" },
      { href: { pathname: "/hello" }, label: "Hello" },
      { href: { pathname: "/hello/world" }, label: "Hello World" },
      { href: { pathname: "/hello/world/day" }, label: "day" },
    ]);
  });

  it("should returns list of breadcrumbs properties", () => {
    const result = getSubpaths("/hello/world", undefined, true);
    expect(result).toStrictEqual([
      { href: { pathname: "/" }, label: "" },
      { href: { pathname: "/hello" }, label: "hello" },
      { href: { pathname: "/hello/world" }, label: "world" },
    ]);
  });
});
