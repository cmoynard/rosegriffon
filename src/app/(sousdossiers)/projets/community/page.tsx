import Link from "next/link";
import React from "react";

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-6">Projets communautaires</h1>

      <div className="flex flex-col gap-4 prose max-w-none mb-8">
        <p className="text-lg">
          <strong className="text-2xl">
            Rose Griffon valorise et encourage la créativité collective à
            travers une série d&apos;initiatives pensées pour faire vivre
            l&apos;imaginaire des fans.
          </strong>{" "}
          <br />
          <br />
          Nos deux <span className="font-bold">Murals communautaires</span>{" "}
          rassemblent des dizaines de créations originales et d&apos;histoires
          développées autour des personnages inventés par la communauté (OC),
          formant un véritable univers alternatif d&apos;Inazuma Eleven. Cette
          dynamique est enrichie par nos concours réguliers —{" "}
          <span className="font-bold">InazumaRG</span>,{" "}
          <span className="font-bold">InazumaSona</span> ou encore{" "}
          <span className="font-bold">La Route du Sacre</span> — qui invitent
          chacun à inventer, scénariser ou illustrer leur propre vision
          d&apos;Inazuma. Enfin, via l&apos;onglet{" "}
          <span className="font-bold">Vitrine Projet</span> sur notre{" "}
          <Link
            href="https://discord.gg/rosegriffon"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Discord
          </Link>
          , chaque membre peut proposer son projet personnel, partager ses
          avancées et bénéficier du soutien actif de la communauté pour le faire
          évoluer.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Mural Communautaire 1</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://app.mural.co/embed/20adc136-9ad0-4acb-ad47-591629b1718a"
            width="100%"
            height="480px"
            style={{
              minWidth: "640px",
              minHeight: "480px",
              backgroundColor: "#f4f4f4",
              border: "1px solid #efefef",
            }}
            sandbox="allow-same-origin allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Mural Communautaire 2</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://app.mural.co/embed/189394dd-92ad-44e5-8d9f-58eb522ec765"
            width="100%"
            height="480px"
            style={{
              minWidth: "640px",
              minHeight: "480px",
              backgroundColor: "#f4f4f4",
              border: "1px solid #efefef",
            }}
            sandbox="allow-same-origin allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      </div>
    </div>
  );
}
