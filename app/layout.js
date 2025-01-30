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
  return (
    <SearchContextProvider>
      <html lang="en">
        <body className={inter.className}>
        <GoogleAnalytics />

        {children}</body>
      </html>
    </SearchContextProvider>
  );
}
