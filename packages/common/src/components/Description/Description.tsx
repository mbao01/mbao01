import type { DescriptionDetailProps, DescriptionProps, DescriptionTermProps } from "./types";
import { cn } from "../../utilities";

const Description = (props: DescriptionProps) => {
  return <dl {...props} />;
};

const DescriptionTerm = ({ className, ...props }: DescriptionTermProps) => {
  return <dt className={cn("py-2 text-sm font-semibold", className)} {...props} />;
};

const DescriptionDetail = ({ className, ...props }: DescriptionDetailProps) => {
  return <dd className={cn("text-base not-last:mb-1", className)} {...props} />;
};

Description.Term = DescriptionTerm;
Description.Detail = DescriptionDetail;

export { Description };
