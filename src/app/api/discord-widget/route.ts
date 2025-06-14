"use server";

import { NextResponse } from "next/server";

// Types pour les données Discord
interface DiscordUser {
  id: string;
  username?: string;
  global_name?: string;
  avatar?: string;
}

interface DiscordMember {
  user: DiscordUser;
  roles: string[];
}

interface DiscordServerData {
  name: string;
  icon: string | null;
  banner: string | null;
  approximate_presence_count: number;
  approximate_member_count: number;
  vanity_url_code?: string;
}

// Type pour les membres formatés pour l'affichage
interface FormattedMember {
  id: string;
  username: string;
  avatar_url: string | null;
  status: "online" | "idle" | "dnd" | "offline";
  game: { name: string } | null;
}

export async function GET() {
  // ID du serveur Discord de Rose Griffon
  const serverId = "1072991720268111892";
  // ID du rôle @Equipe RG
  const staffRoleId = process.env.DISCORD_STAFF_ROLE_ID;

  // Token Discord Bot (requis pour accéder à l'API REST)
  // ATTENTION : Ceci devrait être dans une variable d'environnement
  const botToken = process.env.DISCORD_BOT_TOKEN;

  if (!botToken) {
    return NextResponse.json(
      { error: "DISCORD_BOT_TOKEN non configuré." },
      { status: 500 }
    );
  }

  if (!staffRoleId) {
    return NextResponse.json(
      { error: "DISCORD_STAFF_ROLE_ID non configuré." },
      { status: 500 }
    );
  }

  try {
    // Utiliser l'API Discord pour obtenir les infos du serveur
    const response = await fetch(
      `https://discord.com/api/guilds/${serverId}?with_counts=true`,
      {
        headers: {
          Authorization: `Bot ${botToken}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    // Si l'API répond correctement, traiter les données
    if (response.ok) {
      const data = (await response.json()) as DiscordServerData;

      // Récupérer tous les membres du serveur avec leurs rôles
      const membersResponse = await fetch(
        `https://discord.com/api/guilds/${serverId}/members?limit=1000`,
        {
          headers: {
            Authorization: `Bot ${botToken}`,
            "Content-Type": "application/json",
          },
          cache: "no-store",
        }
      );

      let staffMembers: FormattedMember[] = [];

      if (membersResponse.ok) {
        const membersData = (await membersResponse.json()) as DiscordMember[];

        // Filtrer les membres qui ont le rôle @Equipe RG
        staffMembers = membersData
          .filter((member: DiscordMember) => member.roles.includes(staffRoleId))
          .map((member: DiscordMember) => ({
            id: member.user.id,
            username: member.user.global_name || "Membre du staff",
            avatar_url: member.user.avatar
              ? `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png`
              : null,
            status: "online" as const, // Par défaut, on les considère en ligne
            game: null,
          }));
      }

      // Créer la structure de données pour notre widget
      const formattedData = {
        name: data.name,
        icon: data.icon
          ? `https://cdn.discordapp.com/icons/${serverId}/${data.icon}.png`
          : null,
        banner: data.banner
          ? `https://cdn.discordapp.com/banners/${serverId}/${data.banner}.png`
          : null,
        presence_count: data.approximate_presence_count,
        member_count: data.approximate_member_count,
        instant_invite: data.vanity_url_code
          ? `https://discord.gg/${data.vanity_url_code}`
          : "https://discord.gg/rosegriffon",
        members: staffMembers,
      };

      return NextResponse.json(formattedData);
    }

    // Si le serveur n'est pas accessible
    return NextResponse.json(
      { error: "Impossible d'accéder aux informations du serveur Discord." },
      { status: response.status }
    );
  } catch (error) {
    console.error("Erreur lors de la récupération des données Discord:", error);
    return NextResponse.json(
      { error: "Impossible de récupérer les données Discord." },
      { status: 500 }
    );
  }
}
