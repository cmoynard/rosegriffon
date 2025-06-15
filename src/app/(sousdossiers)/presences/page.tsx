"use client";

import GoogleMapEvents, { EventData, useEvents } from "./GoogleMapEvents";

export default function PresencesPage() {
  const { events, isLoading } = useEvents();

  // Filtrer uniquement les événements à venir
  const upcomingEvents = events.filter(
    (event) => event.type === "upcoming" || event.type === "today"
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-5xl font-bold mb-6">Nos présences</h1>

      <div className="flex flex-col gap-4 prose max-w-none mb-8">
        <p className="text-lg">
          Retrouvez Rose Griffon lors de différents événements tout au long de
          l&apos;année. Notre association participe à de nombreuses
          manifestations pour promouvoir nos activités et rencontrer notre
          public.
        </p>
        <p className="text-lg">
          La carte ci-dessous vous permet de visualiser nos prochaines
          présences. Cliquez sur un marqueur pour obtenir plus
          d&apos;informations sur l&apos;événement.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-l-blue-600">
        <h2 className="text-4xl font-semibold mb-4">Carte des événements</h2>
        <div
          id="map-container"
          className="w-full h-[600px] bg-gray-100 rounded-md relative"
        >
          <GoogleMapEvents />
          <div className="absolute top-4 left-4 bg-white p-3 rounded-md shadow-md z-10">
            <h3 className="text-sm font-medium mb-2">Légende</h3>
            <div className="flex flex-col gap-2">
              <div className="border-b pb-2">
                <h4 className="text-xs font-medium mb-1">Statut</h4>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <span className="text-sm">Événements passés</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span className="text-sm">Événements à venir</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <span className="text-sm">Événement du jour</span>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-medium mb-1">
                  Type d&apos;événement
                </h4>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-bold">
                    M
                  </div>
                  <span className="text-sm">Meet-up</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-bold">
                    A
                  </div>
                  <span className="text-sm">Stand artiste RG</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-bold">
                    S
                  </div>
                  <span className="text-sm">Stand associatif</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border-l-4 border-l-red-600">
        <h2 className="text-4xl font-semibold mb-4">
          Liste des prochains événements
        </h2>
        <EventsList events={upcomingEvents} isLoading={isLoading} />
      </div>
    </div>
  );
}

// Composant pour la liste des événements
function EventsList({
  events,
  isLoading,
}: {
  events: EventData[];
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-700 mr-2"></div>
        <p>Chargement des événements...</p>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-600">Aucun événement à venir pour le moment.</p>
      </div>
    );
  }

  // Trier les événements par type (aujourd'hui en premier) puis par date
  const sortedEvents = [...events].sort((a, b) => {
    // Mettre les événements du jour en premier
    if (a.type === "today" && b.type !== "today") return -1;
    if (a.type !== "today" && b.type === "today") return 1;

    // Si les deux dates sont "Date non spécifiée", ne pas changer l'ordre
    if (a.date === "Date non spécifiée" && b.date === "Date non spécifiée")
      return 0;

    // Mettre les dates non spécifiées à la fin
    if (a.date === "Date non spécifiée") return 1;
    if (b.date === "Date non spécifiée") return -1;

    // Pour les dates valides, essayer de les comparer
    try {
      // Extraire les parties de la date (jour, mois, année)
      const aParts = a.date.split(" ");
      const bParts = b.date.split(" ");

      // Créer des objets Date pour comparaison
      const aDate = new Date(
        `${aParts[2]}-${getMonthNumber(aParts[1])}-${aParts[0]}`
      );
      const bDate = new Date(
        `${bParts[2]}-${getMonthNumber(bParts[1])}-${bParts[0]}`
      );

      // Vérifier si les dates sont valides
      if (isNaN(aDate.getTime()) || isNaN(bDate.getTime())) {
        return 0; // Conserver l'ordre existant si l'une des dates est invalide
      }

      return aDate.getTime() - bDate.getTime();
    } catch (error) {
      console.error("Erreur lors du tri des événements:", error);
      return 0; // En cas d'erreur, conserver l'ordre existant
    }
  });

  return (
    <div className="space-y-4">
      {sortedEvents.map((event, index) => (
        <div
          key={index}
          className={`border-l-4 ${
            event.type === "today" ? "border-blue-500" : "border-green-500"
          } pl-4 py-2`}
        >
          <h3 className="text-xl font-medium">{event.name}</h3>
          <p className="text-gray-600">
            {event.date} • {event.location}
          </p>
          <p className="text-gray-600 text-sm">Type : {event.category}</p>
          <p className="mt-1">{event.description}</p>
        </div>
      ))}
    </div>
  );
}

// Fonction utilitaire pour convertir le nom du mois en français en numéro
function getMonthNumber(monthName: string): string {
  const months: Record<string, string> = {
    janvier: "01",
    février: "02",
    mars: "03",
    avril: "04",
    mai: "05",
    juin: "06",
    juillet: "07",
    août: "08",
    septembre: "09",
    octobre: "10",
    novembre: "11",
    décembre: "12",
  };

  return months[monthName.toLowerCase()] || "01";
}
