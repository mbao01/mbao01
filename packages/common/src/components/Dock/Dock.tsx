import type { DockButtonProps, DockIconProps, DockLabelProps, DockProps } from "./types";
import { cn } from "../../utilities";
import {
  getDockButtonClasses,
  getDockClasses,
  getDockIconClasses,
  getDockLabelClasses,
} from "./constants";

const Dock = ({ size, variant, outline, children, className, ...props }: DockProps) => (
  <div className={cn(getDockClasses({ size, variant, outline }), className)} {...props}>
    {children}
  </div>
);

const DockButton = ({ active, children, className, ...props }: DockButtonProps) => (
  <button className={cn(getDockButtonClasses({ active }), className)} {...props}>
    {children}
  </button>
);

const DockLabel = ({ className, children, ...props }: DockLabelProps) => (
  <span className={cn(getDockLabelClasses(), className)} {...props}>
    {children}
  </span>
);

const DockIcon = ({ icon, size, className, children, ...props }: DockIconProps) => {
  const Icon = icon;
  return (
    <Icon className={cn(getDockIconClasses({ size }), className)} {...props}>
      {children}
    </Icon>
  );
};

Dock.Button = DockButton;
Dock.Label = DockLabel;
Dock.Icon = DockIcon;

export { Dock };
