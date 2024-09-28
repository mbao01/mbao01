import { forwardRef } from "react";
import type {
  TableBodyProps,
  TableCaptionProps,
  TableCellProps,
  TableFooterProps,
  TableHeaderProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
} from "./types";
import { cn } from "../../utilities";
import { getTableClasses, getTableHeaderClasses } from "./constants";

const Table = ({ className, caption, zebra, size, pinRow, pinColumn, ...props }: TableProps) => (
  <div className="relative w-full overflow-auto">
    <table
      className={cn(getTableClasses({ caption, zebra, size, pinRow, pinColumn }), className)}
      {...props}
    />
  </div>
);
Table.displayName = "Table";

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn(getTableHeaderClasses(), className)} {...props} />
  )
);
TableHeader.displayName = "TableHeader";

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>((props, ref) => (
  <tbody ref={ref} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>((props, ref) => (
  <tfoot ref={ref} {...props} />
));
TableFooter.displayName = "TableFooter";

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>((props, ref) => (
  <tr ref={ref} {...props} />
));
TableRow.displayName = "TableRow";

const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>((props, ref) => (
  <th ref={ref} {...props} />
));
TableHead.displayName = "TableHead";

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>((props, ref) => (
  <td ref={ref} {...props} />
));
TableCell.displayName = "TableCell";

const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>((props, ref) => (
  <caption ref={ref} {...props} />
));
TableCaption.displayName = "TableCaption";

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Footer = TableFooter;
Table.Head = TableHead;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Caption = TableCaption;

export { Table };
