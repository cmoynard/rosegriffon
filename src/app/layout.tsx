import "./globals.css";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Footer from "./_components/footer";
import GlobalBreadcrumb from "./_components/GlobalBreadcrumb";
import { Toaster } from "sonner";
import { Providers } from "@/lib/providers";
import { Metadata } from "next";
import SidebarNavigationHandler from "./_components/SidebarNavigationHandler";
import ScrollToTopButton from "./_components/ScrollToTopButton";
import { SwipeHandler } from "@/components/SwipeHandler";

export const metadata: Metadata = {
  title: "Rose Griffon | Association Inazuma Eleven France",
  description:
    "Site officiel de l'association Rose Griffon, rassemblant la communauté Inazuma Eleven en France. Découvrez nos événements, projets et rejoignez-nous !",
  keywords:
    "Rose Griffon, Inazuma Eleven, association, communauté, gaming, France, Azalée, Achilléa, Roy, Gaëlle, Inazuma Eleven France, Inazuma Eleven France Association, Inazuma Eleven France Association Rose Griffon",
  authors: [{ name: "Rose Griffon" }],
  creator: "Association Rose Griffon",
  publisher: "Association Rose Griffon",
  icons: {
    icon: "/RG_Logo_V2.5.png",
    shortcut: "/RG_Logo_V2.5.png",
    apple: "/RG_Logo_V2.5.png",
  },
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL("https://rosegriffon.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rose Griffon | Association Inazuma Eleven France",
    description:
      "Site officiel de l'association Rose Griffon, rassemblant la communauté Inazuma Eleven en France. Découvrez nos événements, projets et rejoignez-nous !",
    url: "https://rosegriffon.fr",
    siteName: "Rose Griffon",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rose Griffon | Association Inazuma Eleven France",
    description:
      "Site officiel de l'association Rose Griffon, rassemblant la communauté Inazuma Eleven en France",
    creator: "@rose_griffon",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <AppSidebar />
          <SidebarNavigationHandler />
          <SwipeHandler />
          <SidebarInset>
            <div className="flex flex-col min-h-screen w-full">
              <div className="sticky top-0 z-20 bg-slate-200 p-2 flex gap-2 items-center md:hidden">
                <SidebarTrigger />
                <GlobalBreadcrumb />
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-col p-2 gap-2 bg-slate-200 min-h-full w-full overflow-x-hidden">
                  <div className="hidden md:flex gap-2 items-center">
                    <GlobalBreadcrumb />
                  </div>
                  <div className="flex-1 w-full">{children}</div>
                </div>
              </div>
              <Footer />
              <ScrollToTopButton />
            </div>
          </SidebarInset>
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
