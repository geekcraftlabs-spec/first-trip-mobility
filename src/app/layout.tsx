import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-comfortaa",
  display: "swap",
});

export const metadata: Metadata = {
  title: "First Trip Mobility — Fleet operations, built for the road",
  description:
    "First Trip Mobility runs and grows driver fleets across South Africa, built on operational discipline from the ground up.",
  openGraph: {
    title: "First Trip Mobility",
    description: "Fleet operations, built for the road.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={comfortaa.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-sand text-ink">
        {children}
      </body>
    </html>
  );
}