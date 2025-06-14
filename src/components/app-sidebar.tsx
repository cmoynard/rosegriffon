import {
  CalendarCheck2,
  Files,
  Heart,
  PencilLine,
  ScrollText,
  UserPlus,
  Users,
  ChevronDown,
  Users2,
  Crown,
  Mailbox,
  UserCircle,
  Building,
  Handshake,
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
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import Link from "next/link";
import LogoRG from "../../public/logo-rg-vide-mais-blanc.png";

// Menu items.
const asso = [
  {
    title: "Notre équipe",
    collapsible: true,
    icon: Users,
    items: [
      {
        title: "L'association",
        url: "/notre-equipe/association",
        icon: Building,
      },
      {
        title: "Le Staff RG",
        url: "/notre-equipe/staff",
        icon: UserCircle,
      },
      {
        title: "Les collaborateurs",
        url: "/notre-equipe/collaborateurs",
        icon: Handshake,
      },
    ],
  },
  {
    title: "Nos projets",
    collapsible: true,
    icon: Files,
    items: [
      {
        title: "Azalée",
        url: "/projets/azalee",
        icon: Mailbox,
      },
      {
        title: "Achilléa",
        url: "/projets/achillea",
        icon: Crown,
      },
      {
        title: "Projets communautaire",
        url: "/projets/community",
        icon: Users2,
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
const socialLinks = [
  {
    name: "Discord",
    url: "https://discord.gg/rosegriffon",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M18 9a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h4" />
        <circle cx="15" cy="12" r="1" />
        <circle cx="18" cy="10" r="1" />
        <circle cx="18" cy="14" r="1" />
        <circle cx="21" cy="12" r="1" />
      </svg>
    ),
    color:
      "text-[#FFFFFF] hover:bg-[#5865F2] hover:text-[#FFFFFF] bg-[#5865F2]",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/Rose_Griffon",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    color:
      "bg-[#1DA1F2] hover:bg-[#1DA1F2] text-[#FFFFFF] hover:text-[#FFFFFF]",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@rose_griffon",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
        <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        <path d="M15 2v14" />
        <path d="M9 16v-5" />
        <path d="M12 12h5" />
      </svg>
    ),
    color: "text-white hover:text-white bg-[#000000] hover:bg-[#000000]",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent className="overflow-y-auto overflow-x-hidden">
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

      <SidebarFooter className="mt-auto">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg overflow-hidden text-ellipsis whitespace-nowrap">
            Nous suivre
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialLinks.map((social) => (
                <SidebarMenuItem key={social.name}>
                  <SidebarMenuButton
                    asChild
                    tooltip={social.name}
                    className={social.color}
                  >
                    <Link href={social.url || "/"} className={social.color}>
                      <social.icon height={32} width={32} />
                      <span>{social.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
