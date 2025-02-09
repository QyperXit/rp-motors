import { Inter } from "next/font/google";

import localData from "../public/schema/local-data.json";

import { SearchContextProvider } from "./components/context/search";
import "./globals.css";
import GoogleAnalytics from "./util/analytics/GoogleAnalytics";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL("https://www.rpmotorservices.co.uk"),
    title: "R P Motors | Birmingham's Trusted Car Repair & MOT Services",
    description: "Professional car servicing, MOTs, and repairs in Birmingham. Family-run garage at City Trading Estate with 35+ years experience. Open Mon-Fri 9am-5pm.",
    keywords: "car repair birmingham, mot birmingham, vehicle servicing, brake repair, car maintenance b16, trusted mechanics birmingham",
    authors: [{ name: "R P Motors" }],
    robots: "index, follow",
    openGraph: {
        title: "R P Motors | Birmingham Car Repair,Service & MOT Centre",
        description: "Free car inspection, MOTs, and repairs in Birmingham City Centre. ",
        url: "https://www.rpmotorservices.co.uk",
        siteName: "R P Motors",
        images: [
            {
                url: "https://ibb.co/album/pWSMqT",
                width: 1200,
                height: 630,
            }
        ],
        locale: "en_GB",
        type: "website",
    },
};

const jsonLd = localData

export default function RootLayout({ children }) {
    return (
        <SearchContextProvider>
            <html lang="en-GB">
            <head>
                <link rel="icon" href="/favicon.ico" type="image/ico" />
                <meta name="google-site-verification" content="JbYWedBRh-ZNXH90eIYUVD1RdVJPnN_IaJcKsHv6QWE"/>
                <title>R P Motors | Birmingham's Trusted Car Repair & MOT Services</title>
            </head>
            <body className={inter.className}>
            <GoogleAnalytics/>
            {/* Inject structured data for business details */}
            <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
            </body>
            </html>
        </SearchContextProvider>
    );
}