"use client";

import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BackButton() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <button
      onClick={() => window.history.back()}
      className="flex items-center gap-2 px-2 h-7 bg-transparent hover:bg-white rounded-md transition-colors"
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="text-sm">Retour</span>
    </button>
  );
}
