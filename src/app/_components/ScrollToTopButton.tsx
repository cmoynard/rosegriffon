"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Fonction pour vérifier la position du scroll et calculer la progression
  const toggleVisibility = () => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTop / scrollHeight;

    setScrollProgress(Math.min(progress, 1));

    if (window.scrollY > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Calcul des propriétés du cercle SVG
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * (1 - scrollProgress);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 40 40">
              {/* Cercle de fond */}
              <circle
                cx="20"
                cy="20"
                r={radius}
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="3"
              />
              {/* Cercle de progression */}
              <circle
                cx="20"
                cy="20"
                r={radius}
                fill="none"
                stroke="#60a5fa"
                strokeWidth="3"
                strokeDasharray={circumference}
                strokeDashoffset={dashoffset}
                strokeLinecap="round"
              />
            </svg>

            {/* Bouton central */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                onClick={scrollToTop}
                className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-slate-700 hover:bg-slate-800 shadow-lg"
                aria-label="Retour en haut"
                size="icon"
              >
                <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
