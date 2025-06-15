"use client";

import { useEffect, useRef, useState } from "react";

// Déclaration des types pour Google Maps
declare global {
  interface Window {
    google: {
      maps: {
        Map: new (element: HTMLElement, options: any) => any; // eslint-disable-line @typescript-eslint/no-explicit-any
        InfoWindow: new (options: any) => any; // eslint-disable-line @typescript-eslint/no-explicit-any
        marker: {
          AdvancedMarkerElement: new (options: any) => any; // eslint-disable-line @typescript-eslint/no-explicit-any
        };
      };
    };
  }
}

// Types d'événements
export type EventType = "upcoming" | "past" | "today";
export type EventCategory =
  | "Meet-up"
  | "Stand artiste RG"
  | "Stand associatif"
  | "Conventions";

// Interface pour les données d'événement
export interface EventData {
  name: string;
  location: string;
  date: string;
  description: string;
  position: { lat: number; lng: number };
  type: EventType;
  category: EventCategory;
  needsGeocoding?: boolean;
}

// Interface pour les événements Google Calendar
interface GoogleCalendarEvent {
  id: string;
  summary: string;
  location: string;
  description: string;
  start: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  extendedProperties?: {
    private?: {
      category?: string;
    };
    shared?: {
      category?: string;
    };
  };
}

// Fonction pour déterminer la catégorie d'un événement à partir de sa description
function getCategoryFromDescription(description: string): EventCategory {
  const lowerDesc = description.toLowerCase();

  if (lowerDesc.includes("meet-up") || lowerDesc.includes("meetup")) {
    return "Meet-up";
  } else if (
    lowerDesc.includes("stand artiste") ||
    lowerDesc.includes("artiste rg")
  ) {
    return "Stand artiste RG";
  } else if (lowerDesc.includes("stand associatif")) {
    return "Stand associatif";
  } else {
    return "Conventions";
  }
}

// Fonction pour récupérer les événements depuis Google Calendar
async function fetchGoogleCalendarEvents(): Promise<EventData[]> {
  try {
    // Appel à l'API route qui gérera l'authentification et l'appel à Google Calendar API
    const response = await fetch("/api/calendar-events");

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des événements");
    }

    const data = await response.json();

    // Transformer les données Google Calendar en format EventData
    return data.events.map((event: GoogleCalendarEvent) => {
      // Extraire les coordonnées de la description ou utiliser des valeurs par défaut
      // Format attendu dans la description: "lat:48.8566,lng:2.3522"
      let lat = 46.603354; // Centre de la France par défaut
      let lng = 1.888334;
      let coordsFound = false;

      if (event.description) {
        const coordsMatch = event.description.match(
          /lat:([\d.]+),lng:([\d.]+)/
        );
        if (coordsMatch && coordsMatch.length >= 3) {
          lat = parseFloat(coordsMatch[1]);
          lng = parseFloat(coordsMatch[2]);
          coordsFound = true;
        }
      }

      // Déterminer le type d'événement basé sur la date
      const now = new Date();

      // Gestion des dates (format dateTime ou date)
      let eventStart: Date;
      let eventEnd: Date;

      if (event.start.dateTime) {
        eventStart = new Date(event.start.dateTime);
      } else if (event.start.date) {
        eventStart = new Date(event.start.date);
      } else {
        eventStart = new Date(); // Fallback au cas où
      }

      if (event.end.dateTime) {
        eventEnd = new Date(event.end.dateTime);
      } else if (event.end.date) {
        eventEnd = new Date(event.end.date);
      } else {
        eventEnd = new Date(); // Fallback au cas où
      }

      let type: EventType = "upcoming";
      if (eventEnd < now) {
        type = "past";
      } else if (eventStart <= now && eventEnd >= now) {
        type = "today";
      }

      // Formater la date pour l'affichage
      const dateOptions: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
      };

      // Gestion des erreurs de formatage de date
      let formattedDate: string;
      try {
        formattedDate = eventStart.toLocaleDateString("fr-FR", dateOptions);
        // Vérifier si la date est valide
        if (formattedDate === "Invalid Date") {
          formattedDate = "Date non spécifiée";
        }
      } catch (error) {
        formattedDate = "Date non spécifiée";
      }

      // Déterminer la catégorie à partir de la description
      const eventCategory = event.description
        ? getCategoryFromDescription(event.description)
        : "Conventions";

      return {
        name: event.summary || "Événement sans titre",
        location: event.location || "Lieu non précisé",
        date: formattedDate,
        description: event.description || "Pas de description disponible",
        position: { lat, lng },
        type,
        category: eventCategory,
        needsGeocoding:
          !coordsFound && event.location && event.location.trim() !== "",
      };
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des événements:", error);
    return []; // Retourner un tableau vide en cas d'erreur
  }
}

// Fonction pour géocoder une adresse avec Nominatim (OpenStreetMap)
async function geocodeWithNominatim(
  address: string
): Promise<{ lat: number; lng: number } | null> {
  try {
    // Encodage de l'adresse pour l'URL
    const encodedAddress = encodeURIComponent(address);

    // Appel à l'API Nominatim
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json&limit=1&countrycodes=fr`,
      {
        headers: {
          // Ajout d'un User-Agent comme demandé par les conditions d'utilisation de Nominatim
          "User-Agent": "RoseGriffon-Website/1.0",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Erreur lors du géocodage: ${response.status}`);
    }

    const data = await response.json();

    // Vérifier si des résultats ont été trouvés
    if (data && data.length > 0) {
      const result = data[0];
      return {
        lat: parseFloat(result.lat),
        lng: parseFloat(result.lon),
      };
    }

    return null;
  } catch (error) {
    console.error(`Erreur lors du géocodage avec Nominatim: ${error}`);
    return null;
  }
}

export default function GoogleMapEvents() {
  const mapRef = useRef<HTMLDivElement>(null);
  const { events, isLoading } = useEvents();
  const [mapsLoaded, setMapsLoaded] = useState(false);

  useEffect(() => {
    // Fonction pour charger l'API Google Maps (uniquement pour l'affichage de la carte)
    const loadGoogleMapsApi = () => {
      if (!window.google || !window.google.maps) {
        const script = document.createElement("script");
        // Nous n'avons plus besoin de la bibliothèque de géocodage
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=marker&v=weekly`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          setMapsLoaded(true);
        };
        document.head.appendChild(script);
      } else {
        setMapsLoaded(true);
      }
    };

    loadGoogleMapsApi();

    // Nettoyage
    return () => {
      // Supprimer le script si nécessaire
      const script = document.querySelector(
        'script[src*="maps.googleapis.com/maps/api"]'
      );
      if (script) {
        script.remove();
      }
    };
  }, []);

  // Effet pour initialiser la carte quand les événements sont chargés et l'API Maps est prête
  useEffect(() => {
    if (!mapsLoaded || !window.google || !window.google.maps || !mapRef.current)
      return;

    console.log("Initialisation de la carte avec", events.length, "événements");

    const mapOptions = {
      center: { lat: 46.603354, lng: 1.888334 }, // Centre de la France
      zoom: 5,
      mapId: "DEMO_MAP_ID",
    };

    const map = new window.google.maps.Map(mapRef.current, mapOptions);

    // Ajouter les marqueurs pour chaque événement
    events.forEach((event) => {
      const markerColor =
        event.type === "upcoming"
          ? "#22c55e"
          : event.type === "today"
          ? "#3b82f6"
          : "#ef4444";

      // Déterminer l'icône en fonction de la catégorie
      let icon = "RG";
      if (event.category === "Meet-up") {
        icon = "M";
      } else if (event.category === "Stand artiste RG") {
        icon = "A";
      } else if (event.category === "Stand associatif") {
        icon = "S";
      } else if (event.category === "Conventions") {
        icon = "C";
      }

      // Créer un élément HTML personnalisé pour le marqueur
      const markerElement = document.createElement("div");
      markerElement.className = "marker-content";
      markerElement.innerHTML = `
        <div style="background-color: ${markerColor}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
          <span style="font-size: 14px;">${icon}</span>
        </div>
      `;

      // Créer le marqueur avancé
      const marker = new window.google.maps.marker.AdvancedMarkerElement({
        map,
        position: event.position,
        content: markerElement,
        title: event.name,
      });

      // Créer la fenêtre d'info
      const infoContent = `
        <div style="padding: 10px; max-width: 300px;">
          <h3 style="font-size: 18px; margin-bottom: 5px;">${event.name}</h3>
          <p style="color: #666; margin-bottom: 8px;">${event.date} • ${event.location}</p>
          <p style="color: #4b5563; margin-bottom: 8px;"><strong>Type :</strong> ${event.category}</p>
          <p>${event.description}</p>
        </div>
      `;

      const infoWindow = new window.google.maps.InfoWindow({
        content: infoContent,
        ariaLabel: event.name,
      });

      // Ajouter l'événement de clic
      marker.addListener("click", () => {
        infoWindow.open({
          anchor: marker,
          map,
        });
      });
    });
  }, [events, mapsLoaded]);

  return (
    <>
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-4 rounded-md shadow-md">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700"></div>
            <p className="ml-2">Chargement des événements...</p>
          </div>
        </div>
      )}
      <div ref={mapRef} className="w-full h-full rounded-md"></div>
    </>
  );
}

// Hook pour exposer les événements à d'autres composants
export function useEvents() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Effet pour charger les événements
  useEffect(() => {
    const getEvents = async () => {
      setIsLoading(true);
      try {
        const conventionEvents = await fetchGoogleCalendarEvents();
        setEvents(conventionEvents);
      } catch (error) {
        console.error("Erreur lors de la récupération des événements:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getEvents();
  }, []);

  // Effet pour géocoder les adresses après le chargement des événements
  useEffect(() => {
    if (events.length > 0) {
      console.log("Début du géocodage pour", events.length, "événements");
      console.log(
        "Événements à géocoder:",
        events.filter((e) => e.needsGeocoding).map((e) => e.location)
      );

      const geocodeEvents = async () => {
        const updatedEvents = [...events];
        let hasChanges = false;

        for (let i = 0; i < updatedEvents.length; i++) {
          const event = updatedEvents[i];
          if (event.needsGeocoding) {
            console.log(`Tentative de géocodage pour: "${event.location}"`);

            // Attendre 1 seconde entre chaque requête pour respecter les limites de Nominatim
            if (i > 0) {
              await new Promise((resolve) => setTimeout(resolve, 1000));
            }

            try {
              const coordinates = await geocodeWithNominatim(event.location);

              if (coordinates) {
                updatedEvents[i] = {
                  ...event,
                  position: coordinates,
                  needsGeocoding: false,
                };
                hasChanges = true;
                console.log(
                  `✅ Géocodage réussi pour "${event.location}": lat=${coordinates.lat}, lng=${coordinates.lng}`
                );
              } else {
                console.warn(
                  `⚠️ Aucun résultat trouvé pour "${event.location}"`
                );
              }
            } catch (error) {
              console.error(
                `❌ Erreur de géocodage pour "${event.location}":`,
                error
              );
            }
          }
        }

        if (hasChanges) {
          console.log(
            "Mise à jour des événements avec les nouvelles coordonnées"
          );
          setEvents(updatedEvents);
        } else {
          console.log("Aucun changement après géocodage");
        }
      };

      geocodeEvents();
    }
  }, [events, setEvents]);

  return { events, isLoading };
}
