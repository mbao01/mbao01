import { VariantProps } from "../../libs";
import { getButtonClasses } from "../Button/constants";

export type PaginationProps = React.ComponentProps<"nav">;

export type PaginationContentProps = React.ComponentProps<"ul">;

export type PaginationEllipsisProps = React.ComponentProps<"span">;

export type PaginationItemProps = React.ComponentProps<"li">;

export type PaginationLinkProps = React.ComponentProps<"a"> &
  VariantProps<typeof getButtonClasses> & {
    isActive?: boolean;
  };

export type PaginationPreviousProps = PaginationLinkProps;

export type PaginationNextProps = PaginationLinkProps;
