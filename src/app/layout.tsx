import type { Metadata, Viewport } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-comfortaa",
  display: "swap",
});

const SITE_URL = "https://firsttrip.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "First Trip Mobility — Fleet operations, built for the road",
  description:
    "First Trip Mobility intends to run and grow the fleet across South Africa — built on operational discipline from the ground up.",
  openGraph: {
    title: "First Trip Mobility",
    description: "Fleet operations, built for the road.",
    url: SITE_URL,
    siteName: "First Trip Mobility",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "First Trip Mobility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "First Trip Mobility",
    description: "Fleet operations, built for the road.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10283B",
};

const JS_CLASS_SCRIPT = `document.documentElement.classList.add('js');`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={comfortaa.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_CLASS_SCRIPT }} />
      </head>
      <body className="font-sans antialiased bg-sand text-ink">
        {children}
      </body>
    </html>
  );
}