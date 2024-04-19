import type {
  CardActionsProps,
  CardContentProps,
  CardDescriptionProps,
  CardFooterProps,
  CardHeaderProps,
  CardImageProps,
  CardTitleProps,
  CardProps,
  CardBodyProps,
} from "./types";
import { cn } from "../../utilities";
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
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);

const CardTitle = ({ className, ...props }: CardTitleProps) => (
  <h3 className={cn("card-title", className)} {...props} />
);

const CardDescription = ({ className, ...props }: CardDescriptionProps) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);

const CardBody = ({ className, ...props }: CardBodyProps) => (
  <div className={cn("card-body", className)} {...props} />
);

const CardContent = ({ className, ...props }: CardContentProps) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);

const CardImage = ({ className, src, alt, ...props }: CardImageProps) => (
  <figure>
    <img className={className} src={src} alt={alt} {...props} />
  </figure>
);

const CardActions = ({ className, ...props }: CardActionsProps) => (
  <div className={cn("card-actions", className)} {...props} />
);

const CardFooter = ({ className, ...props }: CardFooterProps) => (
  <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
);

Card.Actions = CardActions;
Card.Body = CardBody;
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Content = CardContent;
Card.Description = CardDescription;
Card.Image = CardImage;
Card.Footer = CardFooter;

export { Card };
