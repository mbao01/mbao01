import type {
  DescriptionProps,
  DescriptionTermProps,
  DescriptionDetailProps,
} from "./types";
import { cn } from "../../helpers";

const Description = (props: DescriptionProps) => {
  return <dl role="list" {...props} />;
};

const DescriptionTerm = ({ className, ...props }: DescriptionTermProps) => {
  return (
    <dt
      role="listitem"
      className={cn("py-2 text-sm font-semibold", className)}
      {...props}
    />
  );
};

const DescriptionDetail = ({ className, ...props }: DescriptionDetailProps) => {
  return (
    <dd
      className={cn("text-base [&:not(:last-child)]:mb-1", className)}
      {...props}
    />
  );
};

Description.Term = DescriptionTerm;
Description.Detail = DescriptionDetail;

export { Description };
