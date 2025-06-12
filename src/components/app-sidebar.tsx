import {
  CalendarCheck2,
  Files,
  Heart,
  PencilLine,
  ScrollText,
  UserPlus,
  Users,
  ChevronDown,
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
  SidebarMenuSub,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import Link from "next/link";
import LogoRG from "../../public/logo-rg-vide-mais-blanc.png";
import DiscordIcon from "@/shared/icons/discord";
import TwitterIcon from "@/shared/icons/twitter";
import TiktokIcon from "@/shared/icons/tiktok";

// Menu items.
const asso = [
  {
    title: "Notre équipe",
    url: "/notre-equipe",
    icon: Users,
  },
  {
    title: "Nos projets",
    collapsible: true,
    icon: Files,
    items: [
      {
        title: "Rose Griffon",
        url: "/projets/rose-griffon",
        icon: Files,
      },
      {
        title: "Autre projet",
        url: "/projets/autre-projet",
        icon: Files,
      },
    ],
  },
  {
    title: "Nos futures présences",
    url: "/presences",
    icon: CalendarCheck2,
  },
  {
    title: "Charte et engagement",
    url: "/",
    icon: ScrollText,
  },
];

const contact = [
  {
    title: "Nous rejoindre",
    url: "/a-propos/rejoindre-rg",
    icon: UserPlus,
  },
  {
    title: "Nous contacter",
    url: "/a-propos/contact",
    icon: PencilLine,
  },
  {
    title: "Nous soutenir",
    url: "/a-propos/soutenir",
    icon: Heart,
    className: "rainbow font-extrabold",
  },
];

// Réseaux sociaux
const socialMedia = [
  {
    title: "Discord",
    url: "https://discord.gg/TYzQvbByv4",
    icon: DiscordIcon,
    color: "bg-[#5865F2] hover:bg-[#4752C4]",
  },
  {
    title: "Twitter",
    url: "https://x.com/rose_griffon",
    icon: TwitterIcon,
    color: "bg-[#1DA1F2] hover:bg-[#1a8cd8]",
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/@rose_griffon",
    icon: TiktokIcon,
    color: "bg-[#000000] hover:bg-[#333333]",
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
                  {item.collapsible ? (
                    <Collapsible className="w-full group/collapsible">
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title}>
                          <item.icon />
                          <span>{item.title}</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem) => (
                            <li key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link href={subItem.url}>
                                  <subItem.icon />
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </li>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <Link href={item.url || "/"}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
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
                    <Link
                      href={item.url || "/"}
                      className={item.className ?? ""}
                    >
                      <item.icon height={32} width={32} />
                      <span>{item.title}</span>
                    </Link>
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
