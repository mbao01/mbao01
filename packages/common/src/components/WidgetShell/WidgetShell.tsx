import { AlertCircleIcon, InboxIcon, RefreshCwIcon } from "lucide-react";
import type { WidgetShellProps } from "./types";
import { cn } from "../../utilities";
import { Button } from "../Button";

const WidgetShell = ({
  title,
  description,
  action,
  children,
  className,
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
      {(title || description || action) && (
        <div className="flex items-start justify-between border-b px-4 py-3">
          <div className="min-w-0">
            {title && <h3 className="text-sm font-semibold">{title}</h3>}
            {description && <p className="mt-0.5 text-xs text-base-content/60">{description}</p>}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}

      <div className="p-4">{children}</div>
    </div>
  );
};

WidgetShell.displayName = "WidgetShell";

const WidgetShellEmpty = ({ children }: { children?: React.ReactNode }) => {
  return (
    children ?? (
      <div className="flex flex-col items-center justify-center gap-3 py-6 text-center">
        <InboxIcon className="size-8 text-base-content/30" />
        <div>
          <p className="text-sm font-medium">No data</p>
          <p className="text-xs text-base-content/60">Nothing to display yet</p>
        </div>
      </div>
    )
  );
};

WidgetShellEmpty.displayName = "WidgetShellEmpty";

const WidgetShellError = ({
  children,
  onRetry,
}: {
  children?: React.ReactNode;
  onRetry?: () => void;
}) => {
  return (
    children ?? (
      <div className="flex flex-col items-center justify-center gap-3 py-6 text-center">
        <AlertCircleIcon className="size-8 text-error/60" />
        <div>
          <p className="text-sm font-medium">Something went wrong</p>
          <p className="text-xs text-base-content/60">Failed to load data</p>
        </div>
        {onRetry && (
          <Button
            type="button"
            onClick={onRetry}
            className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors duration-200 hover:bg-base-200"
          >
            <RefreshCwIcon className="size-3 shrink-0" />
            Retry
          </Button>
        )}
      </div>
    )
  );
};

WidgetShellError.displayName = "WidgetShellError";

const WidgetShellLoading = ({ lines = 4 }: { lines?: number }) => {
  return (
    <div className="flex flex-col gap-3" role="status" aria-label="Loading">
      {Array.from({ length: lines }, (_, i) => (
        <span key={i} className="skeleton h-4 rounded" style={{ width: `${100 - i * 15}%` }} />
      ))}
    </div>
  );
};

WidgetShellLoading.displayName = "WidgetShellLoading";

WidgetShell.Empty = WidgetShellEmpty;
WidgetShell.Error = WidgetShellError;
WidgetShell.Loading = WidgetShellLoading;

export { WidgetShell };
