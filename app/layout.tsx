import type { Metadata } from "next";
import "./globals.css";
import { TrackingScripts } from "./tracking-scripts";
import { CookieConsent } from "./cookie-consent";

export const metadata: Metadata = {
  title: "SentraRisk Systems | Catch Payment Risks Before Money Leaves",
  description:
    "SentraRisk helps finance teams identify possible duplicate payments, supplier-detail changes, unusual activity, and missing support before funds are released.",
  openGraph: {
    title: "SentraRisk Systems | Catch Payment Risks Before Money Leaves",
    description:
      "Payment-risk monitoring for finance teams, accountants, and invoice-heavy SMEs.",
    url: "https://www.sentrarisksystems.com",
    siteName: "SentraRisk Systems",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/sentrarisk-logo.svg?v=3", type: "image/svg+xml" },
      { url: "/icon.svg?v=3", type: "image/svg+xml" },
      { url: "/favicon.ico?v=3", sizes: "any" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: "/apple-icon.svg?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <TrackingScripts />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
