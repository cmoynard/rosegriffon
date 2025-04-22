"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";

const SIDEBAR_STATE_KEY = "sidebar_state";

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

export function SidebarStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // État par défaut (fermé)
  const defaultState = false;

  // État pour savoir si on est côté client
  const [isClient, setIsClient] = useState(false);

  // État pour stocker l'état de la sidebar
  const [isOpen, setIsOpenState] = useState<boolean | null>(null);

  // Effet pour initialiser l'état de la sidebar depuis localStorage
  useEffect(() => {
    setIsClient(true);

    try {
      const savedState = localStorage.getItem(SIDEBAR_STATE_KEY);
      // Si on a une valeur sauvegardée, on l'utilise, sinon on utilise l'état par défaut
      setIsOpenState(
        savedState !== null ? savedState === "true" : defaultState
      );
    } catch (error) {
      // En cas d'erreur (ex: localStorage désactivé), on utilise l'état par défaut
      setIsOpenState(defaultState);
    }
  }, []);

  // Fonction pour mettre à jour l'état de la sidebar
  const setIsOpen = (state: boolean) => {
    setIsOpenState(state);
    try {
      localStorage.setItem(SIDEBAR_STATE_KEY, String(state));
    } catch (error) {
      // Ignorer les erreurs si localStorage n'est pas disponible
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
