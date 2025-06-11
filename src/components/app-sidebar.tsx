import {
  CalendarCheck2,
  Files,
  Heart,
  PencilLine,
  UserPlus,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import LogoRG from "../../public/logo-rg-vide-mais-blanc.png";

// Menu items.
const asso = [
  {
    title: "Notre équipe",
    url: "/notre-equipe",
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
    url: "/a-propos/contact",
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
              <Link href="/" className="block w-full">
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
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg overflow-hidden text-ellipsis whitespace-nowrap">
            L&apos;association
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {asso.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
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
                  <SidebarMenuButton asChild tooltip={item.title}>
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
