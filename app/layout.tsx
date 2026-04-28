import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BABA Oualid | Engineering Portfolio",
  description: "Portfolio de BABA Oualid, eleve ingenieur en informatique a l'ENSA Marrakech.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
