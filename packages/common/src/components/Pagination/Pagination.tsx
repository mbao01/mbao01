import { forwardRef } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  PaginationContentProps,
  PaginationEllipsisProps,
  PaginationItemProps,
  PaginationLinkProps,
  PaginationNextProps,
  PaginationPreviousProps,
  type PaginationProps,
} from "./types";
import { cn } from "../../utilities";
import {
  getPaginationClasses,
  getPaginationContentClasses,
  getPaginationEllipsisClasses,
  getPaginationNextClasses,
  getPaginationPreviousClasses,
} from "./constants";

import { getButtonClasses } from "../Button/constants";

const Pagination = ({ className, ...props }: PaginationProps) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn(getPaginationClasses(), className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = forwardRef<HTMLUListElement, PaginationContentProps>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(getPaginationContentClasses(), className)}
      {...props}
    />
  )
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = forwardRef<HTMLLIElement, PaginationItemProps>(
  (props, ref) => <li ref={ref} {...props} />
);
PaginationItem.displayName = "PaginationItem";

const PaginationLink = ({
  className,
  size,
  wide,
  outline,
  variant = "ghost",
  isActive,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      getButtonClasses({
        size,
        wide,
        outline: outline ?? isActive,
        variant,
      }),
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  children,
  ...props
}: PaginationPreviousProps) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn(getPaginationPreviousClasses(), className)}
    {...props}
  >
    <ChevronLeftIcon className="h-4 w-4" />
    {children && <span>{children}</span>}
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  children,
  ...props
}: PaginationNextProps) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn(getPaginationNextClasses(), className)}
    {...props}
  >
    {children && <span>{children}</span>}
    <ChevronRightIcon className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: PaginationEllipsisProps) => (
  <span
    aria-hidden
    className={cn(getPaginationEllipsisClasses(), className)}
    {...props}
  >
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

Pagination.Content = PaginationContent;
Pagination.Link = PaginationLink;
Pagination.Item = PaginationItem;
Pagination.Previous = PaginationPrevious;
Pagination.Next = PaginationNext;
Pagination.Ellipsis = PaginationEllipsis;

export { Pagination };
