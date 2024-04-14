import { Toaster } from "sonner";
import { type VariantProps } from "../../libs";
import { getToastClasses } from "./constants";

export type ToasterProps = React.ComponentProps<typeof Toaster> &
  VariantProps<typeof getToastClasses>;
