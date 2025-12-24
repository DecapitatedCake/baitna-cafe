import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Noto_Kufi_Arabic } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const arabic = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-ar" });

export const metadata: Metadata = {
  title: "Baitna Cafe | بيتنا كافيه",
  description: "Rooftop cafe in Sharjah — menu, location, hours, and merch.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${arabic.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
