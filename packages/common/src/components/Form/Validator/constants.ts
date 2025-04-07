import { cva } from "../../../libs";

export const getValidatorClasses = cva("border-color-[unset] validator");

export const getValidatorHintClasses = cva("validator-hint", {
  variants: {
    visible: {
      true: "block",
      false: "hidden",
    },
  },
  compoundVariants: [
    {
      visible: undefined,
      className: "hidden",
    },
  ],
});
