import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rose Griffon",
  description: "Page principale de Rose Griffon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="flex flex-col bg-green-300 h-screen">
        <div className="bg-white flex h-1/8 items-center place-content-start p-2">
          NAVBAR
        </div>
        <div className="bg-red-100 p-2 flex flex-col h-1/4">{children}</div>
      </body>
    </html>
  );
}
