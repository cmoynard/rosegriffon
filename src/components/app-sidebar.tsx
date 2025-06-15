import {
  CalendarCheck2,
  Files,
  Heart,
  PencilLine,
  UserPlus,
  Users,
  ChevronDown,
  Users2,
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarFooter,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import Link from "next/link";
import LogoRG from "../../public/RG_Logo_V2.5.png";

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
        title: "Les partenaires",
        url: "/notre-equipe/partenaires",
        icon: Handshake,
      },
    ],
  },
  {
    title: "Nos projets",
    collapsible: true,
    icon: Files,
    items: [
      // {
      //   title: "Azalée",
      //   url: "/projets/azalee",
      //   icon: Mailbox,
      // },
      // {
      //   title: "Achilléa",
      //   url: "/projets/achillea",
      //   icon: Crown,
      // },
      {
        title: "Communautaire",
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
  //{
  //  title: "Charte et engagement",
  //  url: "/",
  //  icon: ScrollText,
  //},
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
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
    color:
      "text-[#FFFFFF] hover:bg-[#5865F2] hover:text-[#FFFFFF] bg-[#5865F2]",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/Rose_Griffon",
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    color:
      "bg-[#1DA1F2] hover:bg-[#1DA1F2] text-[#FFFFFF] hover:text-[#FFFFFF]",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@rose_griffon",
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
    color: "text-white hover:text-white bg-[#000000] hover:bg-[#000000]",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@RoseGriffon",
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    ),
    color: "text-white hover:text-white bg-[#FF0000] hover:bg-[#FF0000]",
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv/rose_griffontv",
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
      </svg>
    ),
    color: "text-white hover:text-white bg-[#9146FF] hover:bg-[#9146FF]",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent className="overflow-y-auto overflow-x-hidden bg-red-950 text-white">
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

        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold overflow-hidden text-ellipsis whitespace-nowrap text-white">
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
                            <li key={subItem.title} className="w-full">
                              <SidebarMenuSubButton asChild>
                                <SidebarMenuSubItem>
                                  <SidebarMenuButton
                                    asChild
                                    tooltip={subItem.title}
                                  >
                                    <Link
                                      href={subItem.url || "/"}
                                      className="text-white"
                                    >
                                      <subItem.icon height={32} width={32} />
                                      <span>{subItem.title}</span>
                                    </Link>
                                  </SidebarMenuButton>
                                </SidebarMenuSubItem>
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

        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold overflow-hidden text-ellipsis whitespace-nowrap text-white">
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
        <SidebarFooter className="mt-auto">
          <SidebarGroup>
            <SidebarGroupLabel className="text-lg font-bold overflow-hidden text-ellipsis whitespace-nowrap text-white">
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
                        <social.icon />
                        <span>{social.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
