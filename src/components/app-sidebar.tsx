import {
  Calendar,
  CalendarCheck2,
  Files,
  Heart,
  Home,
  Inbox,
  PencilLine,
  Search,
  Settings,
  UserPlus,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Image from "next/image";
import LogoRG from "../../public/logo-rg-vide-mais-blanc.png";

// Menu items.
const asso = [
  {
    title: "Notre équipe",
    url: "#",
    icon: Users,
  },
  {
    title: "Nos projets",
    url: "#",
    icon: Files,
  },
  {
    title: "Nos prochaines présences",
    url: "#",
    icon: CalendarCheck2,
  },
];

const contact = [
  {
    title: "Nous rejoindre",
    url: "#",
    icon: UserPlus,
  },
  {
    title: "Nous contacter",
    url: "#",
    icon: PencilLine,
  },
  {
    title: "Nous soutenir",
    url: "#",
    icon: Heart,
    className: "rainbow font-extrabold",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="flex items-center gap-2">
                <Image
                  src={LogoRG}
                  width={64}
                  height={64}
                  alt="Rose Griffon Logo"
                />
                <span className="font-black text-lg overflow-hidden text-ellipsis whitespace-nowrap">
                  Rose Griffon
                </span>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg overflow-hidden text-ellipsis whitespace-nowrap">
            L'association
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {asso.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg overflow-hidden text-ellipsis whitespace-nowrap">
            Nous concernant
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {contact.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className={item.className ?? ""}>
                      <item.icon height={32} width={32} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
