import DiscordIcon from "@/shared/icons/discord";
import TiktokIcon from "@/shared/icons/tiktok";
import TwitterIcon from "@/shared/icons/twitter";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-white flex flex-col h-fit w-full items-center gap-2">
      <div className="flex flex-col md:flex-row w-full h-full items-center md:place-content-evenly md:items-start p-4 gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link href={"/charte-engagements"} className="hover:underline">
            Charte et engagements
          </Link>
          {/* <Link href={"/mentions-legales"} className="hover:underline">
            Mentions légales et RGPD
          </Link> */}
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

          <div className="flex gap-2 mt-2">
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
            <Link href={"https://www.instagram.com/rose_griffonfr"}>
              <svg
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
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
