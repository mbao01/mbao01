import React from "react";
import { cn } from "../../utilities";
import { getHeaderClasses } from "./constants";
import { type HeaderProps } from "./types";

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, position, children, ...props }, ref) => {
    return (
      <header ref={ref} className={cn(getHeaderClasses({ position }), className)} {...props}>
        {children}
      </header>
    );
  }
);

Header.displayName = "Header";

export const HeaderStart = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("navbar-start", className)} {...props}>
        {children}
      </div>
    );
  }
);
HeaderStart.displayName = "HeaderStart";

export const HeaderCenter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("navbar-center", className)} {...props}>
        {children}
      </div>
    );
  }
);
HeaderCenter.displayName = "HeaderCenter";

export const HeaderEnd = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("navbar-end", className)} {...props}>
        {children}
      </div>
    );
  }
);
HeaderEnd.displayName = "HeaderEnd";
