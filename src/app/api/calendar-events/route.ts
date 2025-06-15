import { NextRequest, NextResponse } from "next/server";
import { google, calendar_v3 } from "googleapis";

// Configuration des scopes pour l'API Google Calendar
const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: NextRequest) {
  try {
    // Initialiser l'authentification avec Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        // client_id n'est pas nécessaire pour l'authentification du compte de service
      },
      scopes: SCOPES,
    });

    // Créer le client Google Calendar
    const calendar = google.calendar({ version: "v3", auth });

    // Récupérer l'ID du calendrier spécifique pour les Conventions
    // Si on demande une catégorie différente, on pourrait avoir d'autres IDs de calendrier
    const calendarId = process.env.GOOGLE_CALENDAR_ID || "primary";
    console.log("Utilisation du calendrier ID:", calendarId);

    // Paramètres de recherche pour les événements
    const now = new Date();
    const sixMonthsAgo = new Date(now);
    sixMonthsAgo.setMonth(now.getMonth() - 6);

    const oneYearFromNow = new Date(now);
    oneYearFromNow.setFullYear(now.getFullYear() + 1);

    console.log("Période de recherche:", {
      from: sixMonthsAgo.toISOString(),
      to: oneYearFromNow.toISOString(),
    });

    // Récupérer les événements du calendrier spécifique
    const response = await calendar.events.list({
      calendarId,
      timeMin: sixMonthsAgo.toISOString(),
      timeMax: oneYearFromNow.toISOString(),
      singleEvents: true,
      orderBy: "startTime",
      // On n'utilise plus le paramètre q pour filtrer car on utilise un calendrier dédié
    });

    // Vérifier le nombre d'événements récupérés
    console.log(
      `Nombre d'événements récupérés: ${response.data.items?.length || 0}`
    );

    if (response.data.items && response.data.items.length > 0) {
      // Afficher des informations sur chaque événement pour le débogage
      response.data.items.forEach((event, index) => {
        console.log(`Événement ${index + 1}:`, {
          id: event.id,
          summary: event.summary,
          start: event.start,
          end: event.end,
          description: event.description
            ? `${event.description.substring(0, 50)}...`
            : "Pas de description",
          location: event.location,
        });
      });
    }

    // Transformer les événements en format compatible avec notre application
    const events =
      response.data.items?.map((event: calendar_v3.Schema$Event) => {
        return {
          id: event.id,
          summary: event.summary,
          location: event.location,
          description: event.description,
          start: event.start,
          end: event.end,
          extendedProperties: event.extendedProperties,
        };
      }) || [];

    return NextResponse.json({ events }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la récupération des événements:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des événements" },
      { status: 500 }
    );
  }
}
