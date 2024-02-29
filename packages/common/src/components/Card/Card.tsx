import c from "clsx";
import {
  CardContentProps,
  CardDescriptionProps,
  CardFooterProps,
  CardHeaderProps,
  CardImageProps,
  CardProps,
} from "./types";

const Card = ({
  compact,
  bordered,
  horizontal,
  overlay,
  className,
  ...props
}: CardProps) => (
  <div
    className={c(
      "card",
      {
        "card-bordered": bordered,
        "card-compact": compact,
        "card-normal": !compact,
        "image-full": overlay,
        "card-side": horizontal,
      },
      className
    )}
    {...props}
  />
);

const CardHeader = ({ className, ...props }: CardHeaderProps) => (
  <h3 className={c("card-title", className)} {...props} />
);

const CardDescription = ({ className, ...props }: CardDescriptionProps) => (
  <p className={c("text-sm text-muted-foreground", className)} {...props} />
);

const CardContent = ({ className, ...props }: CardContentProps) => (
  <div className={c("card-body p-6 pt-0", className)} {...props} />
);

const CardImage = ({ className, src, alt, ...props }: CardImageProps) => (
  <figure>
    <img className={className} src={src} alt={alt} {...props} />
  </figure>
);

const CardFooter = ({ className, ...props }: CardFooterProps) => (
  <div className={c("card-actions", className)} {...props} />
);

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Description = CardDescription;
Card.Image = CardImage;
Card.Footer = CardFooter;

export { Card };
