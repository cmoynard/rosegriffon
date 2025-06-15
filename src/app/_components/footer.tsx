import DiscordIcon from "@/shared/icons/discord";
import TiktokIcon from "@/shared/icons/tiktok";
import TwitterIcon from "@/shared/icons/twitter";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-white flex flex-col h-fit w-full items-center gap-2">
      <div className="flex w-full h-full items-center place-content-evenly p-2">
        <div className="flex flex-col">
          <Link href={"*"} className="hover:underline">
            Informations légales
          </Link>
          <Link href={"*"} className="hover:underline">
            Mentions légales et RGPD
          </Link>
          <Link
            href={
              "https://www.journal-officiel.gouv.fr/pages/associations-detail-annonce/?q.id=id:202400200922"
            }
            className="hover:underline"
          >
            Numéro RNA
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link href={"/a-propos/contact"} className="hover:underline">
            Nous contacter
          </Link>
          <Link href={"/a-propos/soutenir"} className="hover:underline rainbow">
            Nous Soutenir
          </Link>

          <div className="flex gap-2">
            <Link href={"https://www.tiktok.com/@rose_griffon"}>
              <TiktokIcon width={24} height={24} />
            </Link>
            <Link href={"https://x.com/rose_griffon"}>
              <TwitterIcon width={24} height={24} />
            </Link>
            <Link href={"https://discord.gg/TYzQvbByv4"}>
              <DiscordIcon width={24} height={24} />
            </Link>
            <Link href={"https://twitch.tv/rose_griffontv"}>
              <svg
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
              </svg>
            </Link>

            <Link href={"https://www.youtube.com/@RoseGriffon"}>
              <svg
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <span className="opacity-60 italic p-2">
        {" "}
        Rose Griffon, Tous Droits Réservés 2025
      </span>
    </div>
  );
}
