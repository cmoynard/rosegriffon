import type { Metadata } from "next";
import "./globals.css";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
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
      <body className="min-h-screen flex flex-col">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-col flex-1">
              <main className="flex-1">
                <div className="flex flex-col p-2 gap-2 bg-slate-200">
                  <SidebarTrigger />
                  <div className="flex flex-col justify-items-center h-dvh w-full ">
                    {children}
                  </div>
                </div>
                <Footer />
              </main>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
