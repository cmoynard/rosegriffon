import type { Metadata } from "next";
import "./globals.css";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Footer from "./_components/footer";
import BackButton from "./_components/BackButton";

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
      <body className="min-h-screen flex flex-col">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-col min-h-screen">
              <main className="flex-1">
                <div className="flex flex-col p-2 gap-2 bg-slate-200 min-h-full">
                  <div className="flex gap-2">
                    <SidebarTrigger />
                    <BackButton />
                  </div>
                  <div className="flex-1">{children}</div>
                </div>
              </main>
              <Footer />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
