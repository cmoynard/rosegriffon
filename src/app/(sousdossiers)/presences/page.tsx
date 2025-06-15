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
        <p className="text-lg hidden sm:block">
          La carte ci-dessous vous permet de visualiser nos prochaines
          présences. Cliquez sur un marqueur pour obtenir plus
          d&apos;informations sur l&apos;événement.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-l-blue-600 hidden md:block">
        <h2 className="text-4xl font-semibold mb-4">Carte des événements</h2>
        <div
          id="map-container"
          className="w-full h-[600px] bg-gray-100 rounded-md relative"
        >
          <GoogleMapEvents />
          <div className="absolute bottom-8 left-4 bg-white p-3 rounded-md shadow-md z-10">
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
                  <span className="text-sm">Événement en cours</span>
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
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-bold">
                    C
                  </div>
                  <span className="text-sm">Conventions</span>
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
        <p>Chargement des événements et localisation en cours...</p>
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

    // Comparer les dates de début
    try {
      // Vérifier si les dates sont valides
      const aTime = a.startDate.getTime();
      const bTime = b.startDate.getTime();

      if (isNaN(aTime) && isNaN(bTime)) return 0;
      if (isNaN(aTime)) return 1;
      if (isNaN(bTime)) return -1;

      return aTime - bTime;
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
          <div className="text-gray-600">
            <p>
              <span className="font-medium">Début:</span>{" "}
              {event.startDateFormatted}
            </p>
            <p>
              <span className="font-medium">Fin:</span> {event.endDateFormatted}
            </p>
            <p>{event.location}</p>
          </div>
          <p className="text-gray-600 text-sm">Type : {event.category}</p>
          <p className="mt-1">{event.description}</p>
        </div>
      ))}
    </div>
  );
}
