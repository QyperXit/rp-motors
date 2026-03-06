import { Inter } from "next/font/google";
import Script from "next/script";

import localData from "../public/schema/local-data.json";

import { SearchContextProvider } from "./components/context/search";
import "./globals.css";
import GoogleAnalytics from "./util/analytics/GoogleAnalytics";

import {
  DEFAULT_SOCIAL_IMAGE,
  GOOGLE_SITE_VERIFICATION,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "./util/site";

const inter = Inter({ subsets: ["latin"] });

/** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  keywords:
    "car repair birmingham, mot birmingham, vehicle servicing, brake repair, car maintenance b16, trusted mechanics birmingham",
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: SITE_TITLE,
    description:
      "Free car inspection, MOTs, and repairs in Birmingham City Centre.",
    url: "/",
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_SOCIAL_IMAGE,
        width: 512,
        height: 512,
        alt: `${SITE_NAME} logo`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_SOCIAL_IMAGE],
  },
};

const jsonLd = localData;

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        <SearchContextProvider>
          <GoogleAnalytics />
          <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </SearchContextProvider>
      </body>
    </html>
  );
}
