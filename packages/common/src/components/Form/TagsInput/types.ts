import { type VariantProps } from "../../../libs";
import { getTagsClasses } from "./constants";

export type TagsInputProps = React.HTMLAttributes<HTMLDivElement> & {
  defaultTags?: string[];
  onChange?: (value: string[], inputValue: string) => void;
  placeholder?: string;
  maxItems?: number;
  minItems?: number;
} & VariantProps<typeof getTagsClasses>;
