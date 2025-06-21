// import { BugIcon, HelpCircleIcon } from "lucide-react";

// import { GithubIcon, TwitterIcon } from "@/components/ui/icons";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const generalNavItems: any[] = [
  // {
  //   name: "Report Issue",
  //   url: "https://github.com/10xuio/Hawkify/issues",
  //   icon: BugIcon,
  // },
  // {
  //   name: "Call Founder",
  //   url: "https://cal.com/chaitanyya/Hawkify",
  //   icon: HelpCircleIcon,
  // },
  // {
  //   name: "10xuio/Hawkify",
  //   url: "https://github.com/10xuio/Hawkify",
  //   icon: GithubIcon,
  // },
  // {
  //   name: "Hawkify_so",
  //   url: "https://x.com/Hawkify_so",
  //   icon: TwitterIcon,
  // },
];

export function NavGeneral() {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>General</SidebarGroupLabel>
      <SidebarMenu>
        {generalNavItems.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
