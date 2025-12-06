import { type VariantProps } from "../../libs";
import { getPanelClasses } from "./constants";

export type PanelProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getPanelClasses> & {
    onToggle?: () => void;
  };

export type PanelHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export type PanelContentProps = React.HTMLAttributes<HTMLDivElement>;
export type PanelFooterProps = React.HTMLAttributes<HTMLDivElement>;
