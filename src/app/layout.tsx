import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

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
    <html lang="fr" suppressHydrationWarning>
      <body>
        <div className="flex h-[100dvh]">
          <div className="relative flex flex-col flex-1 overflow-y-scroll overflow-x-hidden">
            <Navbar />
            <main className="grow [&>*:first-child]:scroll-mt-16 p-4 bg-amber-200">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
