"use client";

import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useSidebar } from "@/components/ui/sidebar";

// Définir si on veut afficher l'indicateur de débogage
const SHOW_DEBUG_INDICATOR = false;

export function SwipeHandler() {
  const { isMobile, openMobile, setOpenMobile } = useSidebar();
  const [swipeZone, setSwipeZone] = useState<"left" | "right" | null>(null);
  const [isSwipping, setIsSwipping] = useState(false);
  const edgeSize = 50; // Taille en pixels de la zone de détection sur les bords

  // Configuration des gestionnaires de swipe
  const handlers = useSwipeable({
    onSwiping: () => {
      setIsSwipping(true);
    },
    onSwipedRight: (eventData) => {
      // Ouvrir la sidebar sur un swipe de gauche à droite depuis le bord gauche
      if (isMobile && !openMobile && swipeZone === "left") {
        setOpenMobile(true);
      }
      setIsSwipping(false);
    },
    onSwipedLeft: (eventData) => {
      // Fermer la sidebar sur un swipe de droite à gauche depuis le bord droit
      if (isMobile && openMobile) {
        setOpenMobile(false);
      }
      setIsSwipping(false);
    },
    onSwiped: () => {
      setIsSwipping(false);
    },
    // Configuration des options de swipe
    trackMouse: false, // Ne pas détecter les swipes à la souris, seulement au toucher
    trackTouch: true, // Détecter les swipes au toucher
    delta: 50, // Distance minimale pour considérer un swipe (en pixels)
    preventScrollOnSwipe: false, // Ne pas empêcher le scroll pendant le swipe
    swipeDuration: 500, // Durée maximale d'un swipe (en ms)
  });

  // Détecter le début d'un toucher pour déterminer la zone
  useEffect(() => {
    if (!isMobile) return;

    const handleTouchStart = (e: TouchEvent) => {
      const touchX = e.touches[0].clientX;
      const screenWidth = window.innerWidth;

      if (touchX < edgeSize) {
        // Toucher sur le bord gauche
        setSwipeZone("left");
      } else if (touchX > screenWidth - edgeSize) {
        // Toucher sur le bord droit
        setSwipeZone("right");
      } else {
        // Toucher ailleurs
        setSwipeZone(null);
      }
    };

    const handleTouchEnd = () => {
      setSwipeZone(null);
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobile]);

  // Appliquer les gestionnaires de swipe au document entier, mais uniquement sur mobile
  useEffect(() => {
    if (!isMobile) return;

    // Ajouter les événements de swipe au document
    const { ref } = handlers;
    ref(document.body);

    // Nettoyage
    return () => {
      ref(null);
    };
  }, [handlers, isMobile]);

  // Si le mode débogage est désactivé, ne rien afficher
  if (!SHOW_DEBUG_INDICATOR) return null;

  // Sinon, afficher un indicateur de débogage
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 9999,
        padding: "8px 12px",
        background:
          swipeZone === "left"
            ? "rgba(0, 255, 0, 0.7)"
            : swipeZone === "right"
            ? "rgba(255, 0, 0, 0.7)"
            : "rgba(0, 0, 0, 0.7)",
        color: "white",
        borderRadius: "4px",
        fontSize: "12px",
        opacity: isSwipping ? 1 : 0.5,
        transition: "opacity 0.3s, background 0.3s",
      }}
    >
      {isSwipping ? "Swipe en cours" : "Prêt"} - Zone: {swipeZone || "aucune"}
    </div>
  );
}
