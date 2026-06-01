import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SentraRisk Systems | Real-Time Fraud Detection for SMEs",
  description:
    "SentraRisk Systems helps businesses detect fraud, score transaction risk, monitor crypto exposure, and manage alerts in real time.",
  openGraph: {
    title: "SentraRisk Systems",
    description:
      "Real-time fraud detection, transaction monitoring, crypto risk intelligence, and API scoring for growing businesses.",
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
