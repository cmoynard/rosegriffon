"use client";

import GoogleMapEvents, { EventData, useEvents } from "./GoogleMapEvents";
import { useState } from "react";

export default function PresencesPage() {
  const { events, isLoading } = useEvents();
  const [searchFilter, setSearchFilter] = useState("");

  // Filtrer par recherche (tous les événements)
  const filteredEvents = searchFilter
    ? events.filter((event) =>
        event.name.toLowerCase().includes(searchFilter.toLowerCase())
      )
    : events;

  // Filtrer uniquement les événements à venir parmi les événements filtrés
  const upcomingFilteredEvents = filteredEvents.filter(
    (event) => event.type === "upcoming" || event.type === "today"
  );

  const pastFilteredEvents = filteredEvents.filter(
    (event) => event.type === "past"
  );

  // Fonction pour réinitialiser le filtre
  const resetFilter = () => setSearchFilter("");

  return (
    <div className="container mx-auto py-4 px-4">
      <h1 className="text-4xl lg:text-5xl font-bold mb-6">Nos présences</h1>

      <div className="flex flex-col gap-4 prose max-w-none mb-8">
        <p className="text-lg lg:text-xl">
          Retrouvez Rose Griffon lors de différents événements tout au long de
          l&apos;année. Notre association participe à de nombreux évènements
          pour promouvoir nos activités et rencontrer notre public.
        </p>
        <p className="text-lg lg:text-xl hidden sm:block">
          La carte ci-dessous vous permet de visualiser nos prochaines
          présences. Cliquez sur un marqueur pour obtenir plus
          d&apos;informations sur l&apos;événement.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-l-blue-600 hidden md:block">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-semibold">Carte des événements</h2>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Rechercher..."
              className="px-3 py-2 border rounded-md"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
            {searchFilter && (
              <button
                onClick={resetFilter}
                className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                Réinitialiser
              </button>
            )}
          </div>
        </div>
        <div
          id="map-container"
          className="w-full h-[600px] bg-gray-100 rounded-md relative"
        >
          <GoogleMapEvents filteredEvents={filteredEvents} />
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border-l-4 border-l-red-600">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <h2 className="text-3xl lg:text-4xl font-semibold">
            Liste des prochains événements
          </h2>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Rechercher..."
              className="px-3 py-2 border rounded-md flex-grow md:flex-grow-0"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
            {searchFilter && (
              <button
                onClick={resetFilter}
                className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                Réinitialiser
              </button>
            )}
          </div>
        </div>
        <EventsList events={upcomingFilteredEvents} isLoading={isLoading} />
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border-l-4 border-l-red-600">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <h2 className="text-3xl lg:text-4xl font-semibold">
            Liste des événements passés
          </h2>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Rechercher..."
              className="px-3 py-2 border rounded-md flex-grow md:flex-grow-0"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
            {searchFilter && (
              <button
                onClick={resetFilter}
                className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                Réinitialiser
              </button>
            )}
          </div>
        </div>
        <EventsList events={pastFilteredEvents} isLoading={isLoading} />
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
        <p className="text-gray-600">
          Aucun événement trouvé, pensez à réinitialiser le filtre.
        </p>
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
          className={`border-l-4 rounded-l-sm ${
            event.type === "today"
              ? "border-blue-500"
              : event.type === "upcoming"
              ? "border-green-500"
              : "border-red-500"
          } pl-4 py-2`}
        >
          <h3 className="text-xl font-medium">{event.name}</h3>
          <div className="text-gray-600">
            <p>
              <span className="font-medium underline">Début:</span>{" "}
              {event.startDateFormatted}
            </p>
            <p>
              <span className="font-medium underline">Fin:</span>{" "}
              {event.endDateFormatted}
            </p>
            <p>
              <span className="font-medium underline">Localisation:</span>{" "}
              {event.location}
            </p>
          </div>
          <p className="text-gray-600">
            <span className="font-medium underline">Type :</span>{" "}
            {event.category}
          </p>
          <p className="mt-1">{event.description}</p>
        </div>
      ))}
    </div>
  );
}
