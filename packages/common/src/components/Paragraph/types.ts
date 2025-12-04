import { ComponentProps } from "react";
import { type VariantProps } from "../../libs";
import { Text } from "../Text";
import { getParagraphClasses } from "./constants";

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof getParagraphClasses> &
  Omit<ComponentProps<typeof Text>, "as">;
