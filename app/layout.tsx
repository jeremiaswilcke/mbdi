import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { OrganizationSchema, ChurchSchema } from "./structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
      <body className={`${inter.variable} antialiased min-h-screen bg-white`}>
        <OrganizationSchema />
        <ChurchSchema />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
