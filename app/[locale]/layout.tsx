import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";
import ProgressBar from "@/components/RoutingProgres/PrograsBar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "",
    template: "%s | Inventory.uz 2024",
  },
  icons: {
    icon: [
      {
        type: "image/ico",
        url: "/favicon.ico",
      },
    ],
  },
  description: "",
  openGraph: {
    title: {
      absolute: "",
      default: "Inventory.uz",
      template: "%s | Inventory.uz 2024",
    },
    description: "", // Open Graph description
    url: "http://inventory.uz/",
    siteName: "Inventory",
    images: [
      {
        url: "/ogImg.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang="en">
        <body>
          <Navbar />
          <ProgressBar />

          {children}
          <Analytics />
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
