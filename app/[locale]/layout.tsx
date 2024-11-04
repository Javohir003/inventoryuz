import type { Metadata } from "next";
import "./globals.css";
import ProgressBar from "@/components/RoutingProgres/PrograsBar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import ClientLayout from "./ClientLayout";



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
  params,
}: {
  children: React.ReactNode,
  params: {locale: string}

}) {
  const {locale} = params;
  const messages = await getMessages();
  

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={locale}>
        <body>
          <ProgressBar />
          <ClientLayout>{children}</ClientLayout>
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-0418TY7GN1`}
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-0418TY7GN1');
              `}
          </Script>
          <Analytics />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
