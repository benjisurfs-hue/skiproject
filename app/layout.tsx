import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Vermont Ski Resorts",
  description: "Explore Vermont ski resorts, compare mountains, and find your next ski day.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
