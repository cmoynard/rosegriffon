import DiscordIcon from "@/shared/icons/discord";
import TiktokIcon from "@/shared/icons/tiktok";
import TwitterIcon from "@/shared/icons/twitter";
import { LucideTwitter, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

type FooterProps = {};

export default function Footer({}: FooterProps) {
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
          <Link href={"*"} className="hover:underline">
            Numéro RNA
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link href={"*"} className="hover:underline">
            Nous contacter
          </Link>
          <Link href={"*"} className="hover:underline rainbow">
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
          </div>
        </div>
      </div>
      <span className="opacity-60 italic p-2">
        {" "}
        Rose Griffon, Tous Droits Réservé 2023 - 2025
      </span>
    </div>
  );
}
