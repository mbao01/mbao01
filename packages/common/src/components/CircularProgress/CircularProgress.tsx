import type { CSSProperties } from "react";
import { cn } from "../../utilities";
import { getCircularProgressClasses, getCircularProgressLabelClasses } from "./constants";
import type { CircularProgressProps } from "./types";

const CircularProgress = ({
  value,
  className,
  size,
  thickness,
  variant,
  showLabel = true,
  label,
  preset = "md",
  ...props
}: CircularProgressProps) => {
  const clampedValue = Math.max(0, Math.min(100, value));

  const style: Record<string, string | number> = {
    "--value": clampedValue,
  };
  if (size) style["--size"] = size;
  if (thickness) style["--thickness"] = thickness;

  return (
    <div
      className={cn(getCircularProgressClasses({ variant, preset }), className)}
      style={style as CSSProperties}
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}
    >
      {showLabel && (
        <span className={getCircularProgressLabelClasses()}>
          {label ?? `${Math.round(clampedValue)}%`}
        </span>
      )}
    </div>
  );
};

CircularProgress.displayName = "CircularProgress";

export { CircularProgress };
