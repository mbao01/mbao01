import { cva } from "../../../../libs";
import { createVariants } from "../../../../utilities";

export const getFieldClasses = cva("form-control w-full", {
  variants: createVariants({
    // Add variants if needed, e.g. layout direction
  }),
});

export const getFieldLabelClasses = cva("label", {
  variants: createVariants({
    required: {
      true: "after:content-['*'] after:ml-0.5 after:text-error",
    },
  }),
});

export const getFieldDescriptionClasses = cva("label-text-alt text-base-content/70 mt-1");

export const getFieldErrorClasses = cva("label-text-alt text-error mt-1");
