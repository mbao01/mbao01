import * as React from "react";
import { type AlertProps } from "./types";
import { cn } from "../../utilities";
import { getAlertClasses } from "./constants";

const Alert = ({ variant, outline, className, ...props }: AlertProps) => (
  <div
    role="alert"
    className={cn(getAlertClasses({ variant, outline }), className)}
    {...props}
  />
);

const AlertTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h5
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
);

const AlertDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
);

Alert.Title = AlertTitle;
Alert.Description = AlertDescription;

export { Alert };
