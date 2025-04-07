import * as ResizablePrimitive from "react-resizable-panels";
import { type VariantProps } from "../../libs";
import { getResizableClasses, getResizableHandleClasses } from "./constants";

export type ResizableProps = React.ComponentProps<typeof ResizablePrimitive.PanelGroup> &
  VariantProps<typeof getResizableClasses>;

export type ResizableHandleProps = React.ComponentProps<
  typeof ResizablePrimitive.PanelResizeHandle
> &
  VariantProps<typeof getResizableHandleClasses> & {
    withHandle?: boolean;
  };
