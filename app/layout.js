import { Inter } from "next/font/google";
import { SearchContextProvider } from "./components/context/search";
import "./globals.css";
import GoogleAnalytics from "./util/analytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "R P Motors",
    description: "Built by QyperXit",
};

export default function RootLayout({ children }) {
    const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

    return (
        <SearchContextProvider>
            <html lang="en">
            <body className={inter.className}>
            {gaId ? (
                <GoogleAnalytics GA_MEASUREMENT_ID={gaId} />
            ) : (
                // Optional: console warning for development
                process.env.NODE_ENV === 'development' &&
                console.warn('Google Analytics ID is not defined')
            )}
            {children}
            </body>
            </html>
        </SearchContextProvider>
    );
}