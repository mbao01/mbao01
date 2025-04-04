import { Slot } from "@radix-ui/react-slot";
import type { As, JoinItemProps, JoinProps } from "./types";
import { cn } from "../../utilities";
import { getJoinClasses, getJoinItemClasses } from "./constants";

const Join = <T extends As>({ as, className, children, ...props }: JoinProps<T>) => {
  const SlotChild = as;

  return (
    <Slot className={cn(getJoinClasses(), className)} {...props}>
      <SlotChild>{children}</SlotChild>
    </Slot>
  );
};

const JoinItem = <T extends As>({ as, className, children, ...props }: JoinItemProps<T>) => {
  const SlotChild = as;

  return (
    <Slot className={cn(getJoinItemClasses(), className)} {...props}>
      <SlotChild>{children}</SlotChild>
    </Slot>
  );
};

Join.Item = JoinItem;

export { Join };
