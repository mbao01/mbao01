import { type VariantProps } from "../../libs";
import { getStepClasses, getStepperClasses } from "./constants";

export type StepperProps = React.HTMLAttributes<HTMLUListElement> &
  VariantProps<typeof getStepperClasses>;

export type StepProps = React.LiHTMLAttributes<HTMLLIElement> &
  VariantProps<typeof getStepClasses> & {
    active?: boolean; // Convenience prop to apply primary color
  };
