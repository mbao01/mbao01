import { Drawer as DrawerPrimitive } from "vaul";

export type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Root>;

export type DrawerContentProps = React.ComponentProps<typeof DrawerPrimitive.Content> & {
  showClose?: boolean;
  closeProps?: React.ComponentProps<typeof DrawerPrimitive.Close>;
};
