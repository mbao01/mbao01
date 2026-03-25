import { CircleIcon } from "lucide-react";
import { cn } from "../../utilities";
import {
  getActivityFeedClasses,
  getActivityItemClasses,
  getActivityIconClasses,
  getActivityLineClasses,
  getActivityContentClasses,
  getActivityTimestampClasses,
} from "./constants";
import type { ActivityFeedProps } from "./types";

const ActivityFeed = ({
  items,
  className,
  maxItems,
  showLine = true,
  ...props
}: ActivityFeedProps) => {
  const displayItems = maxItems ? items.slice(0, maxItems) : items;

  return (
    <div className={cn(getActivityFeedClasses(), className)} {...props}>
      {displayItems.map((item, index) => {
        const isLast = index === displayItems.length - 1;

        return (
          <div key={item.id} className={getActivityItemClasses()}>
            <div className={getActivityIconClasses()}>
              {item.icon ?? <CircleIcon className="size-3" />}
            </div>
            {showLine && !isLast && <div className={getActivityLineClasses()} />}
            <div className={getActivityContentClasses()}>
              <div className="flex items-start justify-between gap-2">
                <div className="text-sm">{item.content}</div>
                {item.meta && <div className="shrink-0">{item.meta}</div>}
              </div>
              {item.timestamp && (
                <span className={getActivityTimestampClasses()}>{item.timestamp}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

ActivityFeed.displayName = "ActivityFeed";

export { ActivityFeed };
