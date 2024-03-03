import React from "react";
import { type VariantProps } from "../../libs";
import { getCardClasses } from "./constants";

export type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getCardClasses>;

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;
export type CardImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;
export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
