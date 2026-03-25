import { cn } from "../../utilities";
import { getDescriptionGroupClasses, getDescriptionGroupItemClasses } from "./constants";
import type { DescriptionGroupProps } from "./types";

const DescriptionGroup = ({
  className,
  children,
  direction = "column",
  dividers = false,
  title,
  description,
  ...props
}: DescriptionGroupProps) => {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {(title || description) && (
        <div className="mb-4">
          {title && <h3 className="text-base font-semibold text-base-content">{title}</h3>}
          {description && (
            <p className="mt-0.5 text-sm text-base-content/60">{description}</p>
          )}
        </div>
      )}
      <div className={getDescriptionGroupClasses({ direction, dividers })}>
        {Array.isArray(children)
          ? children.map((child, i) => (
              <div key={i} className={getDescriptionGroupItemClasses()}>
                {child}
              </div>
            ))
          : children}
      </div>
    </div>
  );
};

DescriptionGroup.displayName = "DescriptionGroup";

export { DescriptionGroup };
