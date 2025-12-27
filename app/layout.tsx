import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baitna Cafe | بيتنا كافيه",
  description: "Baitna Cafe — Famous rooftop cafe in Sharjah. Menu, merch, timings, and location.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
