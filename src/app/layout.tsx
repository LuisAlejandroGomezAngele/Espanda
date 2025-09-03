import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://expandasoftware.com/"),
  title: "Expanda | ERP con Facturación CFDI, Inventarios y POS para PYMES en México",
  description:
    "Impulsa tu negocio con Expanda ERP: facturación electrónica CFDI 4.0, inventarios, compras, cuentas por cobrar y pagar, y punto de venta. Implementación rápida y soporte cercano para PYMES mexicanas.",
  icons: {
    icon: "/Expanda_Isotipo.png",         // clásico
    shortcut: "/Expanda_Isotipo.png",
    apple: "/Expanda_Isotipo.png",
  },
  keywords: [
    "ERP México",
    "ERP PYMES",
    "ERP con CFDI",
    "sistema de inventarios",
    "punto de venta POS",
    "cuentas por cobrar",
    "cuentas por pagar",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://expandasoftware.com/",
    title: "Expanda | ERP para PYMES en México",
    description:
      "ERP moderno para PYMES con CFDI, inventarios, compras, CxC, CxP y POS.",
    siteName: "Expanda",
    images: [
      {
        url: "/images/og-image.png", // crea una imagen de 1200x630px en /public/images
        width: 1200,
        height: 630,
        alt: "Expanda ERP para PYMES en México",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@expanda", // cámbialo si registras Twitter
    title: "Expanda ERP",
    description:
      "Facturación CFDI, inventarios, compras, CxC, CxP y POS para PYMES en México.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://expandasoftware.com/",
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
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
