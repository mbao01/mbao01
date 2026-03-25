import { AlertCircleIcon, InboxIcon, RefreshCwIcon } from "lucide-react";
import { cn } from "../../utilities";
import type { WidgetShellProps } from "./types";

const WidgetShell = ({
  state = "ready",
  title,
  description,
  children,
  className,
  errorContent,
  emptyContent,
  skeletonLines = 3,
  onRetry,
  ...props
}: WidgetShellProps) => {
  return (
    <div
      className={cn(
        "rounded-lg border bg-base-100 shadow-sm transition-shadow duration-300",
        className
      )}
      {...props}
    >
      {(title || description) && (
        <div className="border-b px-4 py-3">
          {title && (
            <h3 className="text-sm font-semibold">
              {state === "loading" ? (
                <span className="skeleton inline-block h-4 w-32 rounded" />
              ) : (
                title
              )}
            </h3>
          )}
          {description && (
            <p className="mt-0.5 text-xs text-base-content/60">
              {state === "loading" ? (
                <span className="skeleton inline-block h-3 w-48 rounded" />
              ) : (
                description
              )}
            </p>
          )}
        </div>
      )}

      <div className="p-4">
        {state === "loading" && (
          <div className="flex flex-col gap-3" role="status" aria-label="Loading">
            {Array.from({ length: skeletonLines }, (_, i) => (
              <span
                key={i}
                className="skeleton h-4 rounded"
                style={{ width: `${100 - i * 15}%` }}
              />
            ))}
          </div>
        )}

        {state === "error" &&
          (errorContent ?? (
            <div className="flex flex-col items-center justify-center gap-3 py-6 text-center">
              <AlertCircleIcon className="size-8 text-error/60" />
              <div>
                <p className="text-sm font-medium">Something went wrong</p>
                <p className="text-xs text-base-content/60">Failed to load data</p>
              </div>
              {onRetry && (
                <button
                  type="button"
                  onClick={onRetry}
                  className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors duration-200 hover:bg-base-200"
                >
                  <RefreshCwIcon className="size-3" />
                  Retry
                </button>
              )}
            </div>
          ))}

        {state === "empty" &&
          (emptyContent ?? (
            <div className="flex flex-col items-center justify-center gap-3 py-6 text-center">
              <InboxIcon className="size-8 text-base-content/30" />
              <div>
                <p className="text-sm font-medium">No data</p>
                <p className="text-xs text-base-content/60">Nothing to display yet</p>
              </div>
            </div>
          ))}

        {state === "ready" && children}
      </div>
    </div>
  );
};

WidgetShell.displayName = "WidgetShell";

export { WidgetShell };
