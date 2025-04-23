"use server";

import { NextResponse } from "next/server";

export async function GET() {
  // ID du serveur Discord de Rose Griffon
  const serverId = "1072991720268111892";

  // Token Discord Bot (requis pour accéder à l'API REST)
  // ATTENTION : Ceci devrait être dans une variable d'environnement
  const botToken = process.env.DISCORD_BOT_TOKEN;

  if (!botToken) {
    return NextResponse.json(
      { error: "DISCORD_BOT_TOKEN non configuré." },
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
      const data = await response.json();

      // Tenter de récupérer également les membres connectés via l'API du widget
      let members = [];
      try {
        const widgetResponse = await fetch(
          `https://discord.com/api/guilds/${serverId}/widget.json`
        );
        if (widgetResponse.ok) {
          const widgetData = await widgetResponse.json();
          members = widgetData.members || [];
        }
      } catch (error) {
        console.warn(
          "Impossible de récupérer les membres via le widget:",
          error
        );
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
        members: members,
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
