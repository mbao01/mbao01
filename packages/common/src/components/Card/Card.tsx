import type {
  CardContentProps,
  CardDescriptionProps,
  CardFooterProps,
  CardHeaderProps,
  CardImageProps,
  CardProps,
} from "./types";
import { cn } from "../../helpers";
import { getCardClasses } from "./constants";

const Card = ({
  compact,
  bordered,
  horizontal,
  overlay,
  className,
  ...props
}: CardProps) => (
  <div
    className={cn(
      getCardClasses({ bordered, compact, horizontal, overlay }),
      className
    )}
    {...props}
  />
);

const CardHeader = ({ className, ...props }: CardHeaderProps) => (
  <h3 className={cn("card-title", className)} {...props} />
);

const CardDescription = ({ className, ...props }: CardDescriptionProps) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);

const CardContent = ({ className, ...props }: CardContentProps) => (
  <div className={cn("card-body p-6 pt-0", className)} {...props} />
);

const CardImage = ({ className, src, alt, ...props }: CardImageProps) => (
  <figure>
    <img className={className} src={src} alt={alt} {...props} />
  </figure>
);

const CardFooter = ({ className, ...props }: CardFooterProps) => (
  <div className={cn("card-actions", className)} {...props} />
);

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Description = CardDescription;
Card.Image = CardImage;
Card.Footer = CardFooter;

export { Card };
