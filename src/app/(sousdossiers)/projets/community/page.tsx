import Link from "next/link";
import React from "react";
import Image from "next/image";
import Mural1 from "../../../../../public/mural1.png";
import Mural2 from "../../../../../public/mural2.png";

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl lg:text-5xl font-bold mb-6">
        Projets communautaires
      </h1>

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
        <h2 className="text-2xl font-semibold mb-4">
          Mural Communautaire 1 - Cliquez sur l&apos;image !
        </h2>
        <div className="aspect-w-16 aspect-h-9">
          <a
            href="https://app.mural.co/t/test07988/m/test07988/1697613494251/021f27cb0d01ff0ef10d8dd9a1d15104bf592c07"
            target="_blank"
          >
            <Image src={Mural1} alt="Mural Communautaire 1" />
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Mural Communautaire 2 - Cliquez sur l&apos;image !
        </h2>
        <div className="aspect-w-16 aspect-h-9">
          <a
            href="https://app.mural.co/t/rosegriffon0367/m/rosegriffon0367/1699660105968/d8ed3bf55dc33d4b7bf288fcdbed4bb1ff5bf992"
            target="_blank"
          >
            <Image src={Mural2} alt="Mural Communautaire 2" />
          </a>
        </div>
      </div>
    </div>
  );
}
