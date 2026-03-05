import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MouseTrail } from "@/components/MouseTrail";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mariabrunn Digital",
  description: "Die Medien und Streams der Pfarre Mariabrunn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased selection:bg-[#6DC0D2]/30 selection:text-[#155277] min-h-screen bg-white`}>
        <MouseTrail />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
