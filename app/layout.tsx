import { Libre_Franklin } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import ResortInfoProvider from "./resort-info-provider";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-libre-franklin",
});

export const metadata: Metadata = {
  title: "Northeast Ski Areas",
  description:
    "Explore ski areas, compare mountains, and find your next ski day.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={libreFranklin.variable}>
        <ResortInfoProvider>{children}</ResortInfoProvider>
      </body>
    </html>
  );
}