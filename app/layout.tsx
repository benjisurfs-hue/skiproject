import type { Metadata } from "next";
import "./globals.css";
import ResortInfoProvider from "./resort-info-provider";
export const metadata: Metadata = {
  title: "Vermont Ski Resorts",
  description: "Explore Vermont ski resorts, compare mountains, and find your next ski day.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><ResortInfoProvider>{children}</ResortInfoProvider></body></html>;
}
