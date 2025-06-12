"use client";

import { useEffect, useRef } from "react";

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

// Données des événements (à terme, ces données pourraient venir d'une API ou d'un CMS)
const eventsData = [
  {
    name: "Festival de la BD",
    location: "Angoulême",
    date: "15-16 juin 2024",
    description:
      "Présentation de nos dernières créations et rencontres avec le public.",
    position: { lat: 45.6486, lng: 0.1556 },
    type: "upcoming",
  },
  {
    name: "Salon du livre jeunesse",
    location: "Paris",
    date: "22-24 juillet 2024",
    description: "Ateliers créatifs et dédicaces pour les enfants.",
    position: { lat: 48.8566, lng: 2.3522 },
    type: "upcoming",
  },
  {
    name: "Fête de la science",
    location: "Lyon",
    date: "10-12 septembre 2024",
    description: "Démonstrations et animations scientifiques.",
    position: { lat: 45.764, lng: 4.8357 },
    type: "upcoming",
  },
  {
    name: "Exposition artistique",
    location: "Marseille",
    date: "5-6 mars 2024",
    description: "Exposition de nos œuvres et rencontres avec les artistes.",
    position: { lat: 43.2965, lng: 5.3698 },
    type: "past",
  },
];

export default function GoogleMapEvents() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fonction pour charger l'API Google Maps
    const loadGoogleMapsApi = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=marker&v=weekly`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    // Fonction pour initialiser la carte
    const initMap = () => {
      if (!window.google || !mapRef.current) return;

      const mapOptions = {
        center: { lat: 46.603354, lng: 1.888334 }, // Centre de la France
        zoom: 5,
        mapId: "DEMO_MAP_ID",
      };

      const map = new window.google.maps.Map(mapRef.current, mapOptions);

      // Ajouter les marqueurs pour chaque événement
      eventsData.forEach((event) => {
        const markerColor = event.type === "upcoming" ? "#22c55e" : "#ef4444";

        // Créer un élément HTML personnalisé pour le marqueur
        const markerElement = document.createElement("div");
        markerElement.className = "marker-content";
        markerElement.innerHTML = `
          <div style="background-color: ${markerColor}; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
            <span style="font-size: 14px;">RG</span>
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
    };

    // Charger l'API Google Maps
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

  return <div ref={mapRef} className="w-full h-full rounded-md"></div>;
}
