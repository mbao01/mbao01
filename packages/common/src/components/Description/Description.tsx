import c from "clsx";
import type {
  DescriptionProps,
  DescriptionTermProps,
  DescriptionDetailProps,
} from "./types";

const Description = (props: DescriptionProps) => {
  return <dl role="list" {...props} />;
};

Description.Term = (props: DescriptionTermProps) => {
  return (
    <dt
      {...props}
      role="listitem"
      className={c("mb-1 py-2 text-sm font-medium", props.className)}
    />
  );
};

Description.Detail = (props: DescriptionDetailProps) => {
  return <dd {...props} className={c("text-base", props.className)} />;
};

export { Description };
