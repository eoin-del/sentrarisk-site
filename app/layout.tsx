import type { Metadata } from "next";
import "./globals.css";
import { TrackingScripts } from "./tracking-scripts";

export const metadata: Metadata = {
  title: "SentraRisk Systems | Irish FinTech RegTech SaaS for Payment Risk",
  description:
    "SentraRisk Systems helps accountants, bookkeepers, virtual CFOs, and finance teams identify payment risks before they become financial losses.",
  openGraph: {
    title: "SentraRisk Systems",
    description:
      "Irish fintech/regtech SaaS for duplicate-payment checks, supplier anomalies, unusual transaction review, and human-led payment-risk decisions.",
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
      </body>
    </html>
  );
}
