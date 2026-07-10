import type { Metadata } from "next";
import "./globals.css";
import { TrackingScripts } from "./tracking-scripts";

export const metadata: Metadata = {
  title: "SentraRisk Systems | Transaction-Risk Intelligence for Finance Teams",
  description:
    "SentraRisk Systems helps finance teams and advisors monitor transaction risk, score payment activity, review payment files, and produce evidence-ready reports.",
  openGraph: {
    title: "SentraRisk Systems",
    description:
      "Explainable transaction-risk monitoring, payment-file review, crypto risk intelligence, and API scoring for finance professionals.",
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
