import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRightIcon, EllipsisIcon } from "lucide-react";
import type {
  BreadcrumbEllipsisProps,
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
  BreadcrumbListProps,
  BreadcrumbPageProps,
  BreadcrumbProps,
  BreadcrumbSeparatorProps,
} from "./types";
import { cn } from "../../utilities";
import {
  getBreadcrumbEllipsisClasses,
  getBreadcrumbItemClasses,
  getBreadcrumbLinkClasses,
  getBreadcrumbListClasses,
  getBreadcrumbPageClasses,
  getBreadcrumbSeparatorClasses,
} from "./constants";

const Breadcrumb = ({ children, ...props }: BreadcrumbProps) => (
  <nav aria-label="breadcrumb" {...props}>
    {children}
  </nav>
);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className, ...props }, ref) => (
    <ol ref={ref} className={cn(getBreadcrumbListClasses(), className)} {...props} />
  )
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn(getBreadcrumbItemClasses(), className)} {...props} />
  )
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";

    return <Comp ref={ref} className={cn(getBreadcrumbLinkClasses(), className)} {...props} />;
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(getBreadcrumbPageClasses(), className)}
      {...props}
    />
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: BreadcrumbSeparatorProps) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn(getBreadcrumbSeparatorClasses(), className)}
    {...props}
  >
    {children ?? <ChevronRightIcon />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: BreadcrumbEllipsisProps) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn(getBreadcrumbEllipsisClasses(), className)}
    {...props}
  >
    <EllipsisIcon className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

Breadcrumb.List = BreadcrumbList;
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Link = BreadcrumbLink;
Breadcrumb.Page = BreadcrumbPage;
Breadcrumb.Separator = BreadcrumbSeparator;
Breadcrumb.Ellipsis = BreadcrumbEllipsis;

export { Breadcrumb };
