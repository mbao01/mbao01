const PATH_SEPARATOR = "/";

const createPathObject = (
  segment: string,
  pathname: string,
  pathLabels?: Record<string, string>
) => ({
  href: { pathname },
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  label: pathLabels?.[pathname] || segment, // always fallback to segment if label does not exist
});

export const getSubpaths = (
  pathname: string,
  pathLabels?: Record<string, string> | undefined,
  includeRoot?: boolean
) => {
  const segments = pathname?.split(PATH_SEPARATOR).filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const path = `${PATH_SEPARATOR}${segments
      .slice(0, index + 1)
      .join(PATH_SEPARATOR)}`;

    return createPathObject(segment, path, pathLabels);
  });

  if (includeRoot) {
    const ROOT_PATH = PATH_SEPARATOR;
    breadcrumbs.unshift(createPathObject("", ROOT_PATH, pathLabels));
  }

  return breadcrumbs;
};
