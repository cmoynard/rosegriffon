import GoogleMapEvents from "./GoogleMapEvents";

export default function PresencesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-5xl font-bold mb-6">Nos présences</h1>

      <div className="flex flex-col gap-4 prose max-w-none mb-8">
        <p className="text-lg">
          Retrouvez Rose Griffon lors de différents événements tout au long de
          l&apos;année. Notre association participe à de nombreuses
          manifestations pour promouvoir nos activités et rencontrer notre
          public.
        </p>
        <p className="text-lg">
          La carte ci-dessous vous permet de visualiser nos prochaines
          présences. Cliquez sur un marqueur pour obtenir plus
          d&apos;informations sur l&apos;événement.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-l-blue-600">
        <h2 className="text-4xl font-semibold mb-4">Carte des événements</h2>
        <div
          id="map-container"
          className="w-full h-[600px] bg-gray-100 rounded-md relative"
        >
          <GoogleMapEvents />
          <div className="absolute top-4 right-4 bg-white p-3 rounded-md shadow-md z-10">
            <h3 className="text-sm font-medium mb-2">Légende</h3>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span className="text-sm">Événements passés</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span className="text-sm">Événements à venir</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <span className="text-sm">Événement du jour</span>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 bg-white p-3 rounded-md shadow-md z-10">
            <p className="text-xs text-gray-500">
              Note: Pour utiliser cette carte en production, veuillez remplacer
              &apos;YOUR_API_KEY&apos; par une clé API Google Maps valide.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border-l-4 border-l-red-600">
        <h2 className="text-4xl font-semibold mb-4">
          Liste des prochains événements
        </h2>
        <EventsList />
      </div>
    </div>
  );
}

// Composant pour la liste des événements
function EventsList() {
  return (
    <div className="space-y-4">
      {/* Cette section sera remplacée par des données dynamiques */}
      <div className="border-l-4 border-green-500 pl-4 py-2">
        <h3 className="text-xl font-medium">Festival de la BD</h3>
        <p className="text-gray-600">15-16 juin 2024 • Angoulême</p>
        <p className="mt-1">
          Présentation de nos dernières créations et rencontres avec le public.
        </p>
      </div>
      <div className="border-l-4 border-green-500 pl-4 py-2">
        <h3 className="text-xl font-medium">Salon du livre jeunesse</h3>
        <p className="text-gray-600">22-24 juillet 2024 • Paris</p>
        <p className="mt-1">Ateliers créatifs et dédicaces pour les enfants.</p>
      </div>
      <div className="border-l-4 border-green-500 pl-4 py-2">
        <h3 className="text-xl font-medium">Fête de la science</h3>
        <p className="text-gray-600">10-12 septembre 2024 • Lyon</p>
        <p className="mt-1">Démonstrations et animations scientifiques.</p>
      </div>
    </div>
  );
}
