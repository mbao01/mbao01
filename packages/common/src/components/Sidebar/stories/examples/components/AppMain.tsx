import { HTMLAttributes } from "react";
import { Breadcrumb } from "../../../../Breadcrumb";
import { Sidebar } from "../../../Sidebar";
import { type SidebarProps } from "../../../types";

export const AppMain = ({
  side,
  ...props
}: HTMLAttributes<HTMLDivElement> & Pick<SidebarProps, "side">) => {
  return (
    <Sidebar.Inset {...props}>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        {side !== "right" ? <Sidebar.Trigger className="-ml-1" /> : null}
        <Breadcrumb>
          <Breadcrumb.List>
            <Breadcrumb.Link asChild className="hidden md:block">
              <a href="#">Building Your Application</a>
            </Breadcrumb.Link>
            <Breadcrumb.Separator />
            <Breadcrumb.Page>Data Fetching</Breadcrumb.Page>
          </Breadcrumb.List>
        </Breadcrumb>
        {side === "right" ? <Sidebar.Trigger className="-mr-1 ml-auto rotate-180!" /> : null}
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-base-200/50" />
          <div className="aspect-video rounded-xl bg-base-200/50" />
          <div className="aspect-video rounded-xl bg-base-200/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-base-200/50 md:min-h-min" />
      </div>
    </Sidebar.Inset>
  );
};
