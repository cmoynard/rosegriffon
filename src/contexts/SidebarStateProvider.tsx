"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";

const SIDEBAR_STATE_KEY = "sidebar_state";
const SIDEBAR_COOKIE_NAME = "sidebar_state"; // Même nom que dans sidebar.tsx

type SidebarStateContextProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const SidebarStateContext = createContext<SidebarStateContextProps | undefined>(
  undefined
);

export function useSidebarState() {
  const context = useContext(SidebarStateContext);
  if (!context) {
    throw new Error(
      "useSidebarState doit être utilisé à l'intérieur d'un SidebarStateProvider"
    );
  }
  return context;
}

// Fonction utilitaire pour lire un cookie
function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

export function SidebarStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // État par défaut (fermé)
  const defaultState = false;

  // État pour stocker l'état de la sidebar
  const [isOpen, setIsOpenState] = useState<boolean | null>(null);

  // Effet pour initialiser l'état de la sidebar depuis le cookie
  useEffect(() => {
    try {
      // On lit d'abord depuis le cookie (prioritaire car utilisé par SidebarProvider)
      const cookieState = getCookie(SIDEBAR_COOKIE_NAME);

      if (cookieState !== null) {
        // Si on a un cookie, on l'utilise
        setIsOpenState(cookieState === "true");
      } else {
        // Sinon on essaie de lire depuis localStorage comme fallback
        const savedState = localStorage.getItem(SIDEBAR_STATE_KEY);
        setIsOpenState(
          savedState !== null ? savedState === "true" : defaultState
        );
      }
    } catch (error) {
      // En cas d'erreur, on utilise l'état par défaut
      setIsOpenState(defaultState);
      console.error("Impossible de charger l'état de la sidebar:", error);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Fonction pour mettre à jour l'état de la sidebar
  const setIsOpen = (state: boolean) => {
    setIsOpenState(state);

    // Le cookie sera géré par SidebarProvider, on n'a pas besoin de le définir ici
    // car onOpenChange sera appelé, ce qui mettra à jour le cookie

    // On met quand même à jour localStorage comme fallback
    try {
      localStorage.setItem(SIDEBAR_STATE_KEY, String(state));
    } catch (error) {
      console.warn("Impossible de sauvegarder l'état de la sidebar:", error);
    }
  };

  // Style pour cacher la sidebar jusqu'à ce que l'état initial soit chargé
  const hiddenUntilLoaded =
    isOpen === null ? { visibility: "hidden" as const } : {};

  return (
    <SidebarStateContext.Provider
      value={{ isOpen: isOpen ?? defaultState, setIsOpen }}
    >
      <div style={hiddenUntilLoaded}>
        <SidebarProvider open={isOpen ?? defaultState} onOpenChange={setIsOpen}>
          {children}
        </SidebarProvider>
      </div>
    </SidebarStateContext.Provider>
  );
}
