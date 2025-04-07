"use client";

import * as ResizablePrimitive from "react-resizable-panels";
import { GripVerticalIcon } from "lucide-react";
import type { ResizableHandleProps, ResizableProps } from "./types";
import { cn } from "../../utilities";
import {
  getResizableClasses,
  getResizableHandleClasses,
  getResizableHandleIconClasses,
  getResizableHandleIconWrapperClasses,
} from "./constants";

const Resizable = ({ className, ...props }: ResizableProps) => (
  <ResizablePrimitive.PanelGroup className={cn(getResizableClasses(), className)} {...props} />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({ withHandle, bordered, className, ...props }: ResizableHandleProps) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(getResizableHandleClasses({ bordered }), className)}
    {...props}
  >
    {withHandle && (
      <div className={getResizableHandleIconWrapperClasses()}>
        <GripVerticalIcon className={getResizableHandleIconClasses()} />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

Resizable.Panel = ResizablePanel;
Resizable.Handle = ResizableHandle;

export { Resizable };
