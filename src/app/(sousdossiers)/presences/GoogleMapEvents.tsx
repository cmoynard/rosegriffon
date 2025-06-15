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
    // Pour le singleton de chargement de l'API
    googleMapsApiLoading?: Promise<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
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
  startDate: Date;
  endDate: Date;
  startDateFormatted: string;
  endDateFormatted: string;
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

      const timeOptions: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };

      // Gestion des erreurs de formatage de date
      let formattedDate: string;
      let startDateFormatted: string;
      let endDateFormatted: string;

      try {
        formattedDate = eventStart.toLocaleDateString("fr-FR", dateOptions);

        // Formater les dates de début et de fin avec l'heure si disponible
        if (event.start.dateTime) {
          startDateFormatted = eventStart.toLocaleString("fr-FR", timeOptions);
        } else {
          startDateFormatted = eventStart.toLocaleDateString(
            "fr-FR",
            dateOptions
          );
        }

        if (event.end.dateTime) {
          endDateFormatted = eventEnd.toLocaleString("fr-FR", timeOptions);
        } else {
          endDateFormatted = eventEnd.toLocaleDateString("fr-FR", dateOptions);
        }

        // Vérifier si les dates sont valides
        if (formattedDate === "Invalid Date") {
          formattedDate = "Date non spécifiée";
          startDateFormatted = "Date non spécifiée";
          endDateFormatted = "Date non spécifiée";
        }
      } catch (error) {
        formattedDate = "Date non spécifiée";
        startDateFormatted = "Date non spécifiée";
        endDateFormatted = "Date non spécifiée";
        console.error("Erreur lors du formatage de la date:", error);
      }

      // Déterminer la catégorie à partir de la description
      const eventCategory = event.description
        ? getCategoryFromDescription(event.description)
        : "Conventions";

      return {
        name: event.summary || "Événement sans titre",
        location: event.location || "Lieu non précisé",
        date: formattedDate,
        startDate: eventStart,
        endDate: eventEnd,
        startDateFormatted,
        endDateFormatted,
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
  const [isGeocodingInProgress, setIsGeocodingInProgress] = useState(false);

  // Singleton pour gérer le chargement de l'API Google Maps
  const loadGoogleMapsApiSingleton = () => {
    // Utiliser une variable globale pour suivre l'état du chargement
    if (!window.googleMapsApiLoading) {
      window.googleMapsApiLoading = new Promise((resolve) => {
        // Si l'API est déjà chargée et disponible
        if (window.google && window.google.maps && window.google.maps.Map) {
          console.log("API Google Maps déjà chargée");
          resolve(window.google.maps);
          return;
        }

        // Vérifier si le script existe déjà
        const existingScript = document.querySelector(
          'script[src*="maps.googleapis.com/maps/api"]'
        );

        if (existingScript) {
          // Si le script existe déjà, attendre qu'il se charge
          console.log("Script Google Maps déjà présent, attente du chargement");
          if (window.google && window.google.maps && window.google.maps.Map) {
            resolve(window.google.maps);
          } else {
            // Attendre que l'API soit complètement chargée
            const checkGoogleMapsLoaded = () => {
              if (
                window.google &&
                window.google.maps &&
                window.google.maps.Map
              ) {
                console.log("API Google Maps chargée via script existant");
                resolve(window.google.maps);
              } else {
                setTimeout(checkGoogleMapsLoaded, 100);
              }
            };
            checkGoogleMapsLoaded();
          }
          return;
        }

        // Sinon, créer et ajouter le script
        console.log("Ajout d'un nouveau script Google Maps");
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=marker&v=weekly&loading=async`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
          // Vérifier que l'API est bien chargée
          const checkGoogleMapsLoaded = () => {
            if (window.google && window.google.maps && window.google.maps.Map) {
              console.log("API Google Maps chargée via nouveau script");
              resolve(window.google.maps);
            } else {
              setTimeout(checkGoogleMapsLoaded, 100);
            }
          };
          checkGoogleMapsLoaded();
        };

        document.head.appendChild(script);
      });
    }
    return window.googleMapsApiLoading;
  };

  // La variable googleMapsApiLoading est déjà déclarée dans l'interface Window

  useEffect(() => {
    loadGoogleMapsApiSingleton().then(() => {
      setMapsLoaded(true);
    });

    // Pas besoin de nettoyer le script car d'autres composants pourraient l'utiliser
  }, []);

  // Vérifier si le géocodage est en cours
  useEffect(() => {
    if (events.length > 0) {
      const hasEventsNeedingGeocoding = events.some(
        (event) => event.needsGeocoding
      );
      setIsGeocodingInProgress(hasEventsNeedingGeocoding);
    }
  }, [events]);

  // Effet pour initialiser la carte quand les événements sont chargés et l'API Maps est prête
  useEffect(() => {
    if (!mapsLoaded || !mapRef.current) return;

    // Vérifier que l'API Google Maps est bien chargée et disponible
    if (
      !window.google ||
      !window.google.maps ||
      typeof window.google.maps.Map !== "function"
    ) {
      console.error("L'API Google Maps n'est pas correctement chargée");
      return;
    }

    console.log("Initialisation de la carte avec", events.length, "événements");

    const mapOptions = {
      center: { lat: 46.603354, lng: 1.888334 }, // Centre de la France
      zoom: 5,
      mapId: "DEMO_MAP_ID",
    };

    try {
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
            <p style="color: #666; margin-bottom: 8px;">
              <strong>Période:</strong> ${event.startDateFormatted} - ${event.endDateFormatted}
            </p>
            <p style="color: #666; margin-bottom: 8px;">${event.location}</p>
            <p style="color: #4b5563; margin-bottom: 8px;"><strong>Type :</strong> ${event.category}</p>
            <p>${event.description}</p>
          </div>
        `;

        const infoWindow = new window.google.maps.InfoWindow({
          content: infoContent,
          ariaLabel: event.name,
        });

        // Ajouter l'événement de clic
        marker.addListener("gmp-click", () => {
          infoWindow.open({
            anchor: marker,
            map,
          });
        });
      });
    } catch (error) {
      console.error(
        "Erreur lors de l'initialisation de la carte Google Maps:",
        error
      );
    }
  }, [events, mapsLoaded]);

  const isMapLoading = isLoading || !mapsLoaded || isGeocodingInProgress;
  const loadingMessage = isLoading
    ? "Chargement des événements..."
    : !mapsLoaded
    ? "Chargement de la carte..."
    : isGeocodingInProgress
    ? "Localisation des adresses en cours..."
    : "Chargement...";

  return (
    <>
      {isMapLoading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-4 rounded-md shadow-md">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700"></div>
            <p className="ml-2">{loadingMessage}</p>
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
  const [isGeocodingLoading, setIsGeocodingLoading] = useState(false);

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
      const eventsToGeocode = events.filter((e) => e.needsGeocoding);

      if (eventsToGeocode.length > 0) {
        setIsGeocodingLoading(true);
        console.log(
          "Début du géocodage pour",
          eventsToGeocode.length,
          "événements"
        );
        console.log(
          "Événements à géocoder:",
          eventsToGeocode.map((e) => e.location)
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

          setIsGeocodingLoading(false);
        };

        geocodeEvents();
      }
    }
  }, [events, setEvents]);

  return { events, isLoading: isLoading || isGeocodingLoading };
}
