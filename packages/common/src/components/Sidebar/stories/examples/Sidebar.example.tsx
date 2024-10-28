import { useState } from "react";
import { Button } from "../../../Button";
import { Dialog } from "../../../Dialog";
import { Sidebar } from "../../Sidebar";
import { SidebarProps } from "../../types";
import { AppMain } from "./components/AppMain";
import {
  AppSidebar,
  AppSidebarCollapsibleTree,
  AppSidebarWithCollapsibleGroup,
  AppSidebarWithSecondaryNavigation,
  AppSidebarWithSubMenu,
} from "./components/AppSidebar";

/**
 * Here's the basic style setup. In your css file e.g tailwind.css, add
 * 
```css
\@layer base {
    :root {
      --sidebar-background: 0 0% 98%;
      --sidebar-foreground: 240 5.3% 26.1%;
      --sidebar-primary: 240 5.9% 10%;
      --sidebar-primary-foreground: 0 0% 98%;
      --sidebar-accent: 240 4.8% 95.9%;
      --sidebar-accent-foreground: 240 5.9% 10%;
      --sidebar-border: 220 13% 91%;
      --sidebar-ring: 217.2 91.2% 59.8%;
    }
 
    .dark {
      --sidebar-background: 240 5.9% 10%;
      --sidebar-foreground: 240 4.8% 95.9%;
      --sidebar-primary: 224.3 76.3% 48%;
      --sidebar-primary-foreground: 0 0% 100%;
      --sidebar-accent: 240 3.7% 15.9%;
      --sidebar-accent-foreground: 240 4.8% 95.9%;
      --sidebar-border: 240 3.7% 15.9%;
      --sidebar-ring: 217.2 91.2% 59.8%;
    }
}
```
 * 
 * then add this config in tailwind.config.ts
 * 
```js
{
    sidebar: {
      DEFAULT: 'hsl(var(--sidebar-background))',
      foreground: 'hsl(var(--sidebar-foreground))',
      primary: 'hsl(var(--sidebar-primary))',
      'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
      accent: 'hsl(var(--sidebar-accent))',
      'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
      border: 'hsl(var(--sidebar-border))',
      ring: 'hsl(var(--sidebar-ring))',
    }
}
```
 * @param props
 * @returns
 */
export const SidebarExample = (props: SidebarProps) => {
  return (
    <Sidebar.Provider>
      <AppSidebar {...props} />

      <AppMain side={props.side} />
    </Sidebar.Provider>
  );
};

export const SidebarWithCollapsibleGroupExample = (props: SidebarProps) => {
  return (
    <Sidebar.Provider>
      <AppSidebarWithCollapsibleGroup {...props} />

      <AppMain side={props.side} />
    </Sidebar.Provider>
  );
};

export const SidebarWithSubMenuExample = (props: SidebarProps) => {
  return (
    <Sidebar.Provider>
      <AppSidebarWithSubMenu {...props} />

      <AppMain side={props.side} />
    </Sidebar.Provider>
  );
};

export const SidebarWithSecondaryNavigationExample = (props: SidebarProps) => {
  return (
    <Sidebar.Provider>
      <AppSidebarWithSecondaryNavigation {...props} />

      <AppMain side={props.side} />
    </Sidebar.Provider>
  );
};

export const SidebarWithCollapsibleTreeExample = (props: SidebarProps) => {
  return (
    <Sidebar.Provider>
      <AppSidebarCollapsibleTree {...props} />

      <AppMain side={props.side} />
    </Sidebar.Provider>
  );
};

export const SidebarInADialogExample = (props: SidebarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button size="sm">Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content className="overflow-hidden p-0 md:max-h-[500px] md:max-w-[700px] lg:max-w-[800px]">
        <Dialog.Title className="sr-only">Settings</Dialog.Title>
        <Dialog.Description className="sr-only">Customize your settings here.</Dialog.Description>

        <Sidebar.Provider>
          <AppSidebarWithSubMenu {...props} />

          <AppMain side={props.side} />
        </Sidebar.Provider>
      </Dialog.Content>
    </Dialog>
  );
};

export const SidebarOnTheRightExample = (props: SidebarProps) => {
  return (
    <Sidebar.Provider>
      <AppMain side={props.side} />

      <AppSidebarWithCollapsibleGroup {...props} />
    </Sidebar.Provider>
  );
};

export const SidebarLeftAndRightExample = (props: SidebarProps) => {
  return (
    <Sidebar.Provider>
      <AppSidebar {...props} />

      <AppMain side={props.side} />

      <AppSidebarCollapsibleTree collapsible="none" side="right" />
    </Sidebar.Provider>
  );
};
