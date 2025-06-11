"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";

export default function GlobalBreadcrumb() {
  const pathname = usePathname();

  // Si nous sommes sur la page d'accueil, ne pas afficher le fil d'Ariane
  if (pathname === "/") {
    return null;
  }

  // Diviser le chemin en segments
  const segments = pathname.split("/").filter(Boolean);

  // Créer les liens pour chaque segment
  const breadcrumbItems = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const isLast = index === segments.length - 1;

    // Formater le segment pour l'affichage (première lettre en majuscule, remplacer les tirets par des espaces)
    const displayName = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return (
      <BreadcrumbItem key={href}>
        {isLast ? (
          <BreadcrumbPage>{displayName}</BreadcrumbPage>
        ) : (
          <BreadcrumbLink href={href}>{displayName}</BreadcrumbLink>
        )}
        {!isLast && <BreadcrumbSeparator />}
      </BreadcrumbItem>
    );
  });

  // Ajouter le lien vers la page d'accueil
  const homeItem = (
    <BreadcrumbItem key="/">
      <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
      <BreadcrumbSeparator />
    </BreadcrumbItem>
  );

  // Gérer l'affichage avec ellipsis si nécessaire
  let displayItems = [homeItem, ...breadcrumbItems];

  // Si nous avons plus de 3 segments (accueil + 2 ou plus), ajouter des ellipsis
  if (segments.length > 2) {
    displayItems = [
      homeItem,
      <BreadcrumbItem key="ellipsis">
        <BreadcrumbEllipsis />
        <BreadcrumbSeparator />
      </BreadcrumbItem>,
      breadcrumbItems[breadcrumbItems.length - 1],
    ];
  }

  return (
    <Breadcrumb className="h-7 flex items-center">
      <BreadcrumbList>{displayItems}</BreadcrumbList>
    </Breadcrumb>
  );
}
