import { useMemo } from "react";
import { cn } from "../../utilities";
import type { GreetingProps } from "./types";

const getTimeGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
};

const Greeting = ({
  name,
  className,
  subtitle,
  greeting: customGreeting,
  ...props
}: GreetingProps) => {
  const greeting = useMemo(() => customGreeting ?? getTimeGreeting(), [customGreeting]);

  const dateStr = useMemo(
    () =>
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    []
  );

  return (
    <div className={cn("flex flex-col gap-1", className)} {...props}>
      <h1 className="text-2xl font-bold tracking-tight">
        {greeting}, {name}
      </h1>
      <p className="text-sm text-base-content/60">
        {subtitle ?? dateStr}
      </p>
    </div>
  );
};

Greeting.displayName = "Greeting";

export { Greeting };
