"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Composant qui gère la fermeture de la sidebar lors des changements de route
export default function SidebarNavigationHandler() {
  const { setOpenMobile } = useSidebar();
  const pathname = usePathname();

  useEffect(() => {
    // Ferme la sidebar mobile lors des changements de route
    setOpenMobile(false);
  }, [pathname, setOpenMobile]);

  return null;
}
