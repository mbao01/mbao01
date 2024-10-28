import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChevronRight,
  Command,
  File,
  Folder,
  Frame,
  GalleryVerticalEnd,
  Map,
  Minus,
  MoreHorizontal,
  PieChart,
  Plus,
  Settings2,
  Share,
  SquareTerminal,
  Trash2,
} from "lucide-react";
import { Collapsible } from "../../../../Collapsible";
import { DropdownMenu } from "../../../../Menu";
import { useSidebar } from "../../../hooks";
import { Sidebar } from "../../../Sidebar";
import { SidebarGroup } from "../../../SidebarGroup";
import { SidebarMenu } from "../../../SidebarMenu";
import { type SidebarProps } from "../../../types";
import { SearchForm } from "./SearchForm";
import { VersionSwitcher } from "./VersionSwitcher";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
          isActive: true,
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      isActive: false,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      isActive: false,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      isActive: false,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export const AppSidebar = (props: SidebarProps) => {
  return (
    <Sidebar {...props}>
      <Sidebar.Header>
        <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
        <SearchForm />
      </Sidebar.Header>
      <Sidebar.Content>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroup.Label>{item.title}</SidebarGroup.Label>
            <SidebarGroup.Content>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenu.Item key={item.title}>
                    <SidebarMenu.Button asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenu.Button>
                  </SidebarMenu.Item>
                ))}
              </SidebarMenu>
            </SidebarGroup.Content>
          </SidebarGroup>
        ))}
      </Sidebar.Content>
      <Sidebar.Rail />
    </Sidebar>
  );
};

export const AppSidebarWithCollapsibleGroup = (props: SidebarProps) => {
  return (
    <Sidebar {...props}>
      <Sidebar.Header>
        <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
        <SearchForm />
      </Sidebar.Header>
      <Sidebar.Content className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroup.Label
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <Collapsible.Trigger>
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </Collapsible.Trigger>
              </SidebarGroup.Label>
              <Collapsible.Content>
                <SidebarGroup.Content>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenu.Item key={item.title}>
                        <SidebarMenu.Button asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenu.Button>
                      </SidebarMenu.Item>
                    ))}
                  </SidebarMenu>
                </SidebarGroup.Content>
              </Collapsible.Content>
            </SidebarGroup>
          </Collapsible>
        ))}
      </Sidebar.Content>
      <Sidebar.Rail />
    </Sidebar>
  );
};

export const AppSidebarWithSubMenu = (props: SidebarProps) => {
  return (
    <Sidebar {...props}>
      <Sidebar.Header>
        <SidebarMenu>
          <SidebarMenu.Item>
            <SidebarMenu.Button size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Documentation</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenu.Button>
          </SidebarMenu.Item>
        </SidebarMenu>
      </Sidebar.Header>
      <Sidebar.Content>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenu.Item key={item.title}>
                  <Collapsible.Trigger asChild>
                    <SidebarMenu.Button tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <a href={item.url} className="font-medium">
                        {item.title}
                      </a>
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenu.Button>
                  </Collapsible.Trigger>
                  <Collapsible.Content>
                    {item.items?.length ? (
                      <SidebarMenu.Sub>
                        {item.items.map((item) => (
                          <SidebarMenu.SubItem key={item.title}>
                            <SidebarMenu.SubButton asChild isActive={item.isActive}>
                              <a href={item.url}>{item.title}</a>
                            </SidebarMenu.SubButton>
                          </SidebarMenu.SubItem>
                        ))}
                      </SidebarMenu.Sub>
                    ) : null}
                  </Collapsible.Content>
                </SidebarMenu.Item>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </Sidebar.Content>
      <Sidebar.Rail />
    </Sidebar>
  );
};

export const AppSidebarWithSecondaryNavigation = (props: SidebarProps) => {
  const { isMobile } = useSidebar();

  return (
    <Sidebar {...props}>
      <Sidebar.Header>
        <SidebarMenu>
          <SidebarMenu.Item>
            <SidebarMenu.Button size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Documentation</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenu.Button>
          </SidebarMenu.Item>
        </SidebarMenu>
      </Sidebar.Header>
      <Sidebar.Content>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenu.Item key={item.title}>
                  <Collapsible.Trigger asChild>
                    <SidebarMenu.Button tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <a href={item.url} className="font-medium">
                        {item.title}
                      </a>
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenu.Button>
                  </Collapsible.Trigger>
                  <Collapsible.Content>
                    {item.items?.length ? (
                      <SidebarMenu.Sub>
                        {item.items.map((item) => (
                          <SidebarMenu.SubItem key={item.title}>
                            <SidebarMenu.SubButton asChild isActive={item.isActive}>
                              <a href={item.url}>{item.title}</a>
                            </SidebarMenu.SubButton>
                          </SidebarMenu.SubItem>
                        ))}
                      </SidebarMenu.Sub>
                    ) : null}
                  </Collapsible.Content>
                </SidebarMenu.Item>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroup.Label>Projects</SidebarGroup.Label>
          <SidebarMenu>
            {data.projects.map((item) => (
              <SidebarMenu.Item key={item.name}>
                <SidebarMenu.Button asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.name}</span>
                  </a>
                </SidebarMenu.Button>
                <DropdownMenu>
                  <DropdownMenu.Trigger asChild>
                    <SidebarMenu.Action showOnHover>
                      <MoreHorizontal />
                      <span className="sr-only">More</span>
                    </SidebarMenu.Action>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content
                    className="w-48"
                    side={isMobile ? "bottom" : "right"}
                    align={isMobile ? "end" : "start"}
                  >
                    <DropdownMenu.Item>
                      <Folder className="text-muted-foreground" />
                      <span>View Project</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                      <Share className="text-muted-foreground" />
                      <span>Share Project</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>
                      <Trash2 className="text-muted-foreground" />
                      <span>Delete Project</span>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu>
              </SidebarMenu.Item>
            ))}
            <SidebarMenu.Item>
              <SidebarMenu.Button>
                <MoreHorizontal />
                <span>More</span>
              </SidebarMenu.Button>
            </SidebarMenu.Item>
          </SidebarMenu>
        </SidebarGroup>
      </Sidebar.Content>
      <Sidebar.Rail />
    </Sidebar>
  );
};

// This is sample data.
const treeData = {
  changes: [
    {
      file: "README.md",
      state: "M",
    },
    {
      file: "api/hello/route.ts",
      state: "U",
    },
    {
      file: "app/layout.tsx",
      state: "M",
    },
  ],
  tree: [
    ["app", ["api", ["hello", ["route.ts"]], "page.tsx", "layout.tsx", ["blog", ["page.tsx"]]]],
    ["components", ["ui", "button.tsx", "card.tsx"], "header.tsx", "footer.tsx"],
    ["lib", ["util.ts"]],
    ["public", "favicon.ico", "vercel.svg"],
    ".eslintrc.json",
    ".gitignore",
    "next.config.js",
    "tailwind.config.js",
    "package.json",
    "README.md",
  ],
};

type TreeType = string | TreeType[];
const Tree = ({ item }: { item: TreeType }) => {
  const [name, ...items] = Array.isArray(item) ? item : [item];

  if (!items.length) {
    return (
      <SidebarMenu.Button
        isActive={name === "button.tsx"}
        className="data-[active=true]:bg-transparent"
      >
        <File />
        {name}
      </SidebarMenu.Button>
    );
  }

  return (
    <SidebarMenu.Item>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen={name === "components" || name === "ui"}
      >
        <Collapsible.Trigger asChild>
          <SidebarMenu.Button>
            <ChevronRight className="transition-transform" />
            <Folder />
            {name}
          </SidebarMenu.Button>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <SidebarMenu.Sub>
            {items.map((subItem, index) => (
              <Tree key={index} item={subItem} />
            ))}
          </SidebarMenu.Sub>
        </Collapsible.Content>
      </Collapsible>
    </SidebarMenu.Item>
  );
};

export const AppSidebarCollapsibleTree = (props: SidebarProps) => {
  return (
    <Sidebar {...props}>
      <Sidebar.Content>
        <SidebarGroup>
          <SidebarGroup.Label>Changes</SidebarGroup.Label>
          <SidebarGroup.Content>
            <SidebarMenu>
              {treeData.changes.map((item, index) => (
                <SidebarMenu.Item key={index}>
                  <SidebarMenu.Button>
                    <File />
                    {item.file}
                  </SidebarMenu.Button>
                  <SidebarMenu.Badge>{item.state}</SidebarMenu.Badge>
                </SidebarMenu.Item>
              ))}
            </SidebarMenu>
          </SidebarGroup.Content>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroup.Label>Files</SidebarGroup.Label>
          <SidebarGroup.Content>
            <SidebarMenu>
              {treeData.tree.map((item, index) => (
                <Tree key={index} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroup.Content>
        </SidebarGroup>
      </Sidebar.Content>
      <Sidebar.Rail />
    </Sidebar>
  );
};
