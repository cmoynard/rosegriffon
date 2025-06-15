import "./globals.css";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Footer from "./_components/footer";
import GlobalBreadcrumb from "./_components/GlobalBreadcrumb";
import { Toaster } from "sonner";
import { Providers } from "@/lib/providers";
import { Metadata } from "next";
import SidebarNavigationHandler from "./_components/SidebarNavigationHandler";

export const metadata: Metadata = {
  title: "Rose Griffon",
  description: "Site officiel de l'association Rose Griffon",
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
          <SidebarInset>
            <div className="flex flex-col min-h-screen w-full">
              <div className="sticky top-0 z-20 bg-slate-200 p-2 flex gap-2 items-center md:hidden">
                <SidebarTrigger />
                <GlobalBreadcrumb />
              </div>
              <main className="flex-1 w-full">
                <div className="flex flex-col p-2 gap-2 bg-slate-200 min-h-full w-full overflow-x-hidden">
                  <div className="hidden md:flex gap-2 items-center">
                    <GlobalBreadcrumb />
                  </div>
                  <div className="flex-1 w-full">{children}</div>
                </div>
              </main>
              <Footer />
            </div>
          </SidebarInset>
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
