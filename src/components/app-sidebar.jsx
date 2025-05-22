import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import AppHStack from "@/page-components/AppHStack";
import AppSelect from "@/page-components/AppSelect";
import AppAvatar from "@/page-components/AppAvatar";
import { SelectItem } from "./ui/select";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Articles",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Create Article",
          url: "/create-articles",
        },
        {
          title: "Generate Article",
          url: "/",
        },
        {
          title: "Keyword Projects",
          url: "#",
        },
      ],
    },
    {
      title: "Auto Blog",
      url: "#",
      icon: Bot,
    },
    {
      title: "Internal Links",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Help Center",
      url: "#",
      icon: BookOpen,
    },
  ],
};

export function AppSidebar({ ...props }) {
  const { open, isMobile } = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props}>
      <AppHStack
        className={`${
          open || isMobile ? "justify-end" : "justify-center"
        } bg-white`}
      >
        <SidebarTrigger />
      </AppHStack>
      {(open || isMobile) && (
        <SidebarHeader className={"bg-white"}>
          <p className="text-3xl text-center font-bold">Content</p>
        </SidebarHeader>
      )}
      <SidebarContent className={"bg-white"}>
        <AppHStack className="px-3 justify-center mt-2">
          {!open && !isMobile ? (
            <AppAvatar />
          ) : (
            <AppSelect
              list={[
                { label: "Amazon", id: "amazon" },
                { label: "Google", id: "google" },
              ]}
              defaultValue="amazon"
              customDropDown={[
                { label: "Amazon", id: "amazon" },
                { label: "Google", id: "google" },
              ].map((item) => {
                return (
                  <SelectItem value={item.id} key={item.id}>
                    <div className="flex items-center gap-2">
                      <div className="w-[25px] h-[25px] bg-black text-white rounded-2xl flex items-center justify-center">
                        {item.label[0]}
                      </div>
                      <div>{item.label}</div>
                    </div>
                  </SelectItem>
                );
              })}
            />
          )}
        </AppHStack>

        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
