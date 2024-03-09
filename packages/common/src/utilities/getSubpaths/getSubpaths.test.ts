import { getSubpaths } from "./getSubpaths";

describe("getSubpaths", () => {
  it("returns empty list", () => {
    const result = getSubpaths("");
    expect(result).toStrictEqual([]);
  });

  describe("when it is the root path", () => {
    it("returns no list of subpaths", () => {
      const result = getSubpaths("/");
      expect(result).toStrictEqual([]);
    });

    it("returns one subpath which is the root path", () => {
      const result = getSubpaths("/", undefined, true);
      expect(result).toStrictEqual([{ href: { pathname: "/" }, label: "" }]);
    });

    it("returns root subpath with custom label", () => {
      const result = getSubpaths("/", { "/": "Home" }, true);
      expect(result).toStrictEqual([
        { href: { pathname: "/" }, label: "Home" },
      ]);
    });
  });

  it("returns list of subpaths with segment labels", () => {
    const result = getSubpaths("/hello/world");
    expect(result).toStrictEqual([
      { href: { pathname: "/hello" }, label: "hello" },
      { href: { pathname: "/hello/world" }, label: "world" },
    ]);
  });

  it("returns list of subpaths for a relative pathname", () => {
    const result = getSubpaths("hello/world");
    expect(result).toStrictEqual([
      { href: { pathname: "/hello" }, label: "hello" },
      { href: { pathname: "/hello/world" }, label: "world" },
    ]);
  });

  it("returns list of subpaths with custom and segment labels respectively", () => {
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

  it("returns list of subpaths including the root path", () => {
    const result = getSubpaths("/hello/world", undefined, true);
    expect(result).toStrictEqual([
      { href: { pathname: "/" }, label: "" },
      { href: { pathname: "/hello" }, label: "hello" },
      { href: { pathname: "/hello/world" }, label: "world" },
    ]);
  });
});
