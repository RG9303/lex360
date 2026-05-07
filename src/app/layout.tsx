import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lex-360 | Soluciones Legales Integrales",
  description: "Despacho jurídico líder en México. Justicia soportada por IA y visión estratégica 360°.",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'white', zIndex: 999999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: 'black', fontSize: '2rem', textAlign: 'center', padding: '2rem' }}>El sitio web no está disponible por el momento.</h1>
        </div>
        {children}
      </body>
    </html>
  );
}
