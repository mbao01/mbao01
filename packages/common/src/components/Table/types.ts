import { VariantProps } from "../../libs";
import { getTableClasses } from "./constants";

export type TableProps = React.HTMLAttributes<HTMLTableElement> &
  VariantProps<typeof getTableClasses>;

export type TableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement>;

export type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;

export type TableFooterProps = React.HTMLAttributes<HTMLTableSectionElement>;

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;

export type TableHeadProps = React.ThHTMLAttributes<HTMLTableCellElement>;

export type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>;

export type TableCaptionProps = React.HTMLAttributes<HTMLTableCaptionElement>;
