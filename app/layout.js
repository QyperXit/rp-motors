import { Inter } from "next/font/google";
import { SearchContextProvider } from "./components/context/search";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "R P Motors",
  description: "Built by QyperXit",
};

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SearchContextProvider>
  );
}
