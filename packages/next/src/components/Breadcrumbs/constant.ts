export const getBreadcrumbs = (
  pathname: string,
  labels?: Record<string, string>
) => {
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`;
    return {
      href: { pathname: path },
      segment: labels?.[segment] || segment, // always fallback to segment if label is falsy
    };
  });

  return breadcrumbs;
};
