import React from "react";

export type CardProps = {
  /**
   * applies smaller padding to the card.
   */
  compact?: boolean;
  /**
   * applies border to the card.
   */
  bordered?: boolean;
  /**
   * shows the card horizontally with image to the right or left of it.
   */
  horizontal?: boolean;
  /**
   * overlay is used to make the image full width with the content on top.
   */
  overlay?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;
export type CardImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;
export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
