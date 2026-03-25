import type { HTMLAttributes, ReactNode } from "react";

export type DescriptionSize = "sm" | "md" | "lg";
export type DescriptionLayout = "vertical" | "horizontal" | "inline";
export type DescriptionVariant = "default" | "card" | "subtle";

export type DescriptionProps = HTMLAttributes<HTMLDListElement> & {
  /** Visual variant */
  variant?: DescriptionVariant;
  /** Layout direction */
  layout?: DescriptionLayout;
  /** Size preset */
  size?: DescriptionSize;
  /** Show dividers between items */
  dividers?: boolean;
  /** Alternate row shading */
  striped?: boolean;
};

export type DescriptionTermProps = HTMLAttributes<HTMLElement>;

export type DescriptionDetailProps = HTMLAttributes<HTMLElement>;

export type DescriptionGroupProps = HTMLAttributes<HTMLDivElement> & {
  /** Direction to stack descriptions */
  direction?: "row" | "column";
  /** Show dividers between descriptions */
  dividers?: boolean;
  /** Optional heading for the group */
  title?: ReactNode;
  /** Optional subheading */
  description?: ReactNode;
};
