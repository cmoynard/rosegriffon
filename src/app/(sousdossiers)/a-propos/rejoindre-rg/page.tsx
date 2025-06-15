"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RejoindreRGPage() {
  return (
    <div className="container mx-auto py-4 px-4">
      <h1 className="text-5xl font-bold mb-6">Rejoindre Rose Griffon</h1>

      {/* Section d'explication sur les conditions d'intégration */}
      <div className="prose max-w-none mb-12">
        <h2 className="text-4xl font-semibold mb-4">Rejoignez notre équipe</h2>
        <p className="mb-8 text-lg">
          Rose Griffon est une association dynamique et passionnée qui recherche
          constamment de nouveaux talents pour renforcer son équipe. Nous
          offrons différentes possibilités d&apos;engagement pour permettre à
          chacun de contribuer selon ses disponibilités et compétences.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
          {/* Conditions d'intégration */}
          <Card className="border-l-4 border-l-rose-500">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-2xl">
                Conditions d&apos;intégration
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-lg border-b pb-3">
                Pour rejoindre l&apos;association, il faut être{" "}
                <span className="font-bold">légalement majeur</span>. Chaque
                membre doit fournir certaines informations personnelles (nom,
                prénom, date de naissance, ville et adresse e-mail) afin de
                garantir une organisation sérieuse et transparente.
              </p>
              <p className="text-lg border-b py-3">
                L&apos;engagement implique la{" "}
                <span className="font-bold">
                  capacité de se déplacer ponctuellement
                </span>{" "}
                dans sa région pour participer à des événements physiques (ex :
                tenue de stand en convention), ou de s&apos;
                <span className="font-bold">
                  impliquer dans des événements en ligne
                </span>{" "}
                (tournois, lives, projets collectifs). Les membres doivent faire
                preuve d&apos;
                <span className="font-bold">organisation</span>, de{" "}
                <span className="font-bold">sérieux</span>, et être capables
                d&apos;
                <span className="font-bold">assumer leurs responsabilités</span>
                , notamment en cas d&apos;erreur.
              </p>
              <p className="text-lg pt-3">
                Enfin, chacun doit pouvoir apporter une contribution concrète à
                l&apos;association, qu&apos;elle soit créative, logistique,
                technique ou humaine.
              </p>
            </CardContent>
          </Card>

          {/* Types d'engagement */}
          <Card className="border-l-4 border-l-indigo-500">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-2xl">
                Types d&apos;engagement possibles
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="border-b pb-3">
                  <h3 className="font-bold mb-1 text-lg">Bénévolat régulier</h3>
                  <p className="text-lg">
                    Engagement hebdomadaire ou mensuel sur des projets
                    spécifiques, avec des horaires flexibles.
                  </p>
                </div>

                <div className="border-b pb-3">
                  <h3 className="font-bold mb-1 text-lg">Événementiel</h3>
                  <p className="text-lg">
                    Participation ponctuelle à nos événements (festivals,
                    expositions, ateliers, etc.).
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-1 text-lg">Stage</h3>
                  <p className="text-lg">
                    Pour les étudiants ou jeunes diplômés souhaitant acquérir
                    une expérience enrichissante.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section "Nos recherches actuelles" */}
      {/* <div className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">
          Nos recherches actuelles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Chargé(e) de communication
              </CardTitle>
              <CardDescription className="text-lg">
                Temps plein ou bénévolat régulier
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Nous recherchons une personne créative pour gérer notre
                communication sur les réseaux sociaux, créer du contenu
                engageant et développer notre visibilité.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Développeur web</CardTitle>
              <CardDescription className="text-lg">
                Temps plein ou bénévolat régulier
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Pour maintenir et améliorer notre site web, développer de
                nouvelles fonctionnalités et assurer une expérience utilisateur
                optimale.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Coordinateur d&apos;événements
              </CardTitle>
              <CardDescription className="text-lg">
                Temps plein ou événementiel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Organisation et coordination de nos événements culturels,
                gestion des partenariats et des relations avec les artistes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div> */}

      {/* Lien vers le formulaire de candidature */}
      <div className="border-l-4 border-l-amber-500 rounded-lg p-8 bg-card">
        <h2 className="text-4xl font-semibold mb-4">
          Formulaire de candidature
        </h2>
        <p className="mb-6 text-lg">
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
            Formulaire de l&apos;association
          </a>
        </Button>
      </div>
    </div>
  );
}
