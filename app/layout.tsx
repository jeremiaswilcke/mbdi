import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
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
      <body className={`${inter.variable} ${outfit.variable} antialiased selection:bg-primary-light selection:text-primary-dark min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
