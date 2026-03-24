import { createContext, useContext } from "react";
import { cn } from "../../utilities";
import {
  getDescriptionClasses,
  getDescriptionDetailClasses,
  getDescriptionPairClasses,
  getDescriptionTermClasses,
} from "./constants";
import type {
  DescriptionDetailProps,
  DescriptionLayout,
  DescriptionProps,
  DescriptionSize,
  DescriptionTermProps,
} from "./types";

type DescriptionContextValue = {
  size: DescriptionSize;
  layout: DescriptionLayout;
  dividers: boolean;
  striped: boolean;
};

const DescriptionContext = createContext<DescriptionContextValue>({
  size: "md",
  layout: "vertical",
  dividers: false,
  striped: false,
});

const useDescriptionContext = () => useContext(DescriptionContext);

const Description = ({
  className,
  variant = "default",
  layout = "vertical",
  size = "md",
  dividers = false,
  striped = false,
  ...props
}: DescriptionProps) => {
  return (
    <DescriptionContext.Provider value={{ size, layout, dividers, striped }}>
      <dl
        className={cn(getDescriptionClasses({ variant, layout, size }), className)}
        {...props}
      />
    </DescriptionContext.Provider>
  );
};

const DescriptionTerm = ({ className, ...props }: DescriptionTermProps) => {
  const { size, layout } = useDescriptionContext();
  return (
    <dt className={cn(getDescriptionTermClasses({ size, layout }), className)} {...props} />
  );
};

const DescriptionDetail = ({ className, ...props }: DescriptionDetailProps) => {
  const { size, layout, dividers } = useDescriptionContext();
  return (
    <dd
      className={cn(getDescriptionDetailClasses({ size, layout, dividers }), className)}
      {...props}
    />
  );
};

const DescriptionPair = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { layout, striped } = useDescriptionContext();
  return <div className={cn(getDescriptionPairClasses({ layout, striped }), className)} {...props} />;
};

Description.Term = DescriptionTerm;
Description.Detail = DescriptionDetail;
Description.Pair = DescriptionPair;

export { Description };
