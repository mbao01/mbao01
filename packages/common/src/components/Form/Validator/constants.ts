import { cva } from "../../../libs";
import { createVariants } from "../../../utilities";

export const getValidatorClasses = cva("border-color-[unset] validator");

export const getValidatorHintClasses = cva("validator-hint", {
  variants: createVariants({
    visible: {
      true: "block",
      false: "hidden",
    },
  }),
  compoundVariants: [
    {
      visible: undefined,
      className: "hidden",
    },
  ],
});
