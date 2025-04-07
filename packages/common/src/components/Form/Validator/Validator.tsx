import { Slot } from "@radix-ui/react-slot";
import type { As, ValidatorHintProps, ValidatorProps } from "./types";
import { cn } from "../../../utilities";
import { Text } from "../../Text";
import { getValidatorClasses, getValidatorHintClasses } from "./constants";

const Validator = <T extends As>({ as, children, className, ...props }: ValidatorProps<T>) => {
  const SlotChild = as;

  return (
    <Slot className={cn(getValidatorClasses(), className)} {...props}>
      <SlotChild>{children}</SlotChild>
    </Slot>
  );
};

const ValidatorHint = ({ className, children, visible, ...props }: ValidatorHintProps) => {
  return (
    <Text className={cn(getValidatorHintClasses({ visible }), className)} {...props}>
      {children}
    </Text>
  );
};

Validator.Hint = ValidatorHint;

export { Validator };
