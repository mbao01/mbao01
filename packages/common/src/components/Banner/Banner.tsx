import React from "react";
import { X } from "lucide-react";
import { cn } from "../../utilities";
import { getBannerClasses } from "./constants";
import { type BannerProps } from "./types";

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    { className, variant, border, icon, title, description, action, onClose, children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(getBannerClasses({ variant, border }), className)}
        {...props}
      >
        {icon && <div className="flex-none">{icon}</div>}
        <div className="flex-1">
          {title && <h3 className="font-bold">{title}</h3>}
          {description && <div className="text-xs">{description}</div>}
          {children}
        </div>
        {action && <div className="flex-none">{action}</div>}
        {onClose && (
          <button onClick={onClose} className="btn btn-sm btn-ghost btn-circle" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);

Banner.displayName = "Banner";
