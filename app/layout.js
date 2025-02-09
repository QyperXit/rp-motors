import { Inter } from "next/font/google";
import { SearchContextProvider } from "./components/context/search";
import "./globals.css";
import GoogleAnalytics from "./util/analytics/GoogleAnalytics";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL("https://www.rpmotorservices.co.uk"),
    title: "R P Motors | Birmingham's Trusted Car Repair & MOT Services",
    description: "Professional car servicing, MOTs, and repairs in Birmingham. Family-run garage at City Trading Estate with 25+ years experience. Open Mon-Fri 9am-5pm.",
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
                url: "https://www.rpmotorservices.co.uk/_next/image?url=%2Ficons%2Frp.png&w=256&q=75",
                width: 1200,
                height: 630,
            }
        ],
        locale: "en_GB",
        type: "website",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "R P Motors",
    "description":
        "Expert car repair, maintenance, and service at R P Motors, located at 3, City Trading Estate, Icknield Square, Birmingham.",
    "url": "https://www.rpmotorservices.co.uk/",
    telephone: '(0121) 454-6590',
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "3, City Trading Estate, Icknield Square",
        "addressLocality": "Birmingham",
        "postalCode": "B16 0PP",
        "addressCountry": "GB"
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 52.4753,
        longitude: -1.9214
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
    }
};

export default function RootLayout({ children }) {
    return (
        <SearchContextProvider>
            <html lang="en-GB">
            <body className={inter.className}>
            <GoogleAnalytics />
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