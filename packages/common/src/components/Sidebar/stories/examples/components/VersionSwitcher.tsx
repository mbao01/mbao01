import { useState } from "react";
import { Check, ChevronsUpDown, GalleryVerticalEnd } from "lucide-react";
import { DropdownMenu } from "../../../../Menu";
import { SidebarMenu } from "../../../SidebarMenu";

export const VersionSwitcher = ({
  versions,
  defaultVersion,
}: {
  versions: string[];
  defaultVersion: string;
}) => {
  const [selectedVersion, setSelectedVersion] = useState(defaultVersion);

  return (
    <SidebarMenu>
      <SidebarMenu.Item>
        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <SidebarMenu.Button
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">Documentation</span>
                <span className="">v{selectedVersion}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenu.Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="w-[--radix-dropdown-menu-trigger-width]" align="start">
            {versions.map((version) => (
              <DropdownMenu.Item key={version} onSelect={() => setSelectedVersion(version)}>
                v{version} {version === selectedVersion && <Check className="ml-auto" />}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu>
      </SidebarMenu.Item>
    </SidebarMenu>
  );
};
