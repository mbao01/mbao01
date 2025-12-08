import { ReactNode } from "react";

export type BreadcrumbProps = React.HTMLAttributes<HTMLElement> & {
  separator?: ReactNode;
};

export type BreadcrumbListProps = React.HTMLAttributes<HTMLUListElement>;

export type BreadcrumbItemProps = React.HTMLAttributes<HTMLLIElement>;

export type BreadcrumbLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  asChild?: boolean;
};

export type BreadcrumbPageProps = React.HTMLAttributes<HTMLSpanElement>;

export type BreadcrumbSeparatorProps = React.HTMLAttributes<HTMLLIElement>;

export type BreadcrumbEllipsisProps = React.HTMLAttributes<HTMLSpanElement>;
