import { cn } from "../../utilities";
import { getIconContainerClasses, getIconRaisedContainerClasses } from "./constants";
import { type IconContainerProps } from "./types";

export const IconContainer = ({
  variant,
  size,
  shape,
  shadow,
  outline,
  soft,
  raised,
  className,
  children,
  ...props
}: IconContainerProps) => {
  const content = raised ? (
    <div className={getIconRaisedContainerClasses({ size, variant, shadow, raised })}>
      {children}
    </div>
  ) : (
    children
  );

  return (
    <div
      className={cn(
        getIconContainerClasses({
          size,
          soft,
          shape,
          variant,
          outline,
          raised,
          shadow: raised ? "none" : shadow,
        }),
        className
      )}
      {...props}
    >
      {content}
    </div>
  );
};
