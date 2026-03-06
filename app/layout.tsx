import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { OrganizationSchema, ChurchSchema } from "./structured-data";

export const metadata: Metadata = {
  title: {
    default: "Mariabrunn Digital",
    template: "%s | Mariabrunn Digital",
  },
  description: "Die digitale Medienplattform der Pfarre Mariabrunn. Livestreams, Videos, Bibelprojekte und mehr.",
  metadataBase: new URL("https://mariabrunn-digital.at"),
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Mariabrunn Digital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased min-h-screen bg-white text-foreground">
        <OrganizationSchema />
        <ChurchSchema />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
