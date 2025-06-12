"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RejoindreRGPage() {
  const [showConditions, setShowConditions] = useState(false);
  const [showEngagements, setShowEngagements] = useState(false);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Rejoindre Rose Griffon</h1>

      {/* Section d'explication sur les conditions d'intégration */}
      <div className="prose max-w-none mb-12">
        <h2 className="text-2xl font-semibold mb-4">Rejoignez notre équipe</h2>
        <p className="mb-8">
          Rose Griffon est une association dynamique et passionnée qui recherche
          constamment de nouveaux talents pour renforcer son équipe. Nous
          offrons différentes possibilités d'engagement pour permettre à chacun
          de contribuer selon ses disponibilités et compétences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Conditions d'intégration */}
          <Card className="border-l-4 border-l-rose-500">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Conditions d'intégration
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p>
                Pour rejoindre notre équipe, nous recherchons des personnes :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Passionnées par notre mission et nos valeurs</li>
                <li>Motivées et prêtes à s'investir dans nos projets</li>
                <li>
                  Disposant de compétences pertinentes pour les postes
                  recherchés
                </li>
                <li>
                  Capables de travailler en équipe et de partager leurs
                  connaissances
                </li>
                <li>
                  Respectueuses de notre charte éthique et de nos engagements
                </li>
              </ul>
              <p className="mt-4">
                Le processus de recrutement comprend généralement un entretien
                avec l'équipe concernée, suivi d'une période d'intégration pour
                vous familiariser avec nos méthodes de travail.
              </p>
            </CardContent>
          </Card>

          {/* Types d'engagement */}
          <Card className="border-l-4 border-l-indigo-500">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Types d'engagement possibles
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="border-b pb-3">
                  <h3 className="font-medium mb-1">Temps plein</h3>
                  <p className="text-sm">
                    Pour ceux qui souhaitent s'investir pleinement dans nos
                    projets et contribuer quotidiennement à notre mission.
                  </p>
                </div>

                <div className="border-b pb-3">
                  <h3 className="font-medium mb-1">Bénévolat régulier</h3>
                  <p className="text-sm">
                    Engagement hebdomadaire ou mensuel sur des projets
                    spécifiques, avec des horaires flexibles.
                  </p>
                </div>

                <div className="border-b pb-3">
                  <h3 className="font-medium mb-1">Événementiel</h3>
                  <p className="text-sm">
                    Participation ponctuelle à nos événements (festivals,
                    expositions, ateliers, etc.).
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-1">Stage / Service civique</h3>
                  <p className="text-sm">
                    Pour les étudiants ou jeunes diplômés souhaitant acquérir
                    une expérience professionnelle enrichissante.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section "Nos recherches actuelles" */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Nos recherches actuelles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Chargé(e) de communication</CardTitle>
              <CardDescription>
                Temps plein ou bénévolat régulier
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Nous recherchons une personne créative pour gérer notre
                communication sur les réseaux sociaux, créer du contenu
                engageant et développer notre visibilité.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Développeur web</CardTitle>
              <CardDescription>
                Temps plein ou bénévolat régulier
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Pour maintenir et améliorer notre site web, développer de
                nouvelles fonctionnalités et assurer une expérience utilisateur
                optimale.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Coordinateur d'événements</CardTitle>
              <CardDescription>Temps plein ou événementiel</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Organisation et coordination de nos événements culturels,
                gestion des partenariats et des relations avec les artistes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Lien vers le formulaire de candidature */}
      <div className="border rounded-lg p-8 bg-card">
        <h2 className="text-2xl font-semibold mb-4">
          Formulaire de candidature
        </h2>
        <p className="mb-6">
          Vous souhaitez rejoindre notre équipe ? Remplissez notre formulaire de
          candidature en ligne pour nous faire part de votre motivation et de
          vos compétences.
        </p>

        <Button asChild size="lg" className="font-medium">
          <a
            href="https://docs.google.com/forms/d/1Z1e-vL7PhR9kxVDPhCwnfaO10egkVyP7UrMEf0epyFE/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
              <path d="M12 11v6" />
              <path d="M9 14h6" />
            </svg>
            Accéder au formulaire de candidature
          </a>
        </Button>
      </div>
    </div>
  );
}
