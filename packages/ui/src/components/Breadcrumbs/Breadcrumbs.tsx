import type { BreadcrumbProps, BreadcrumbsProps } from "./types";

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <div className="breadcrumbs -ml-1 w-fit px-1 text-sm">
      <ul {...props} />
    </div>
  );
};

export const Breadcrumb = (props: BreadcrumbProps) => {
  return <li {...props} />;
};
