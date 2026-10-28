import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | SentraRisk Systems",
  description:
    "Cookie Policy for SentraRisk Systems, covering essential cookies, analytics, CRM forms, HubSpot, and user choices.",
};

const sections = [
  {
    title: "1. Purpose",
    body: [
      "This Cookie Policy explains how SentraRisk Systems may use cookies and similar technologies on our website and platform.",
      "Cookies are small files or similar identifiers stored on a device or browser. They can help a website work, remember preferences, support security, measure usage, or connect forms and CRM tools.",
    ],
  },
  {
    title: "2. Essential Cookies",
    body: [
      "We may use essential cookies or similar technologies where needed for website operation, account access, security, form submission, session management, fraud prevention, and service reliability.",
      "Essential cookies are required for core functionality and cannot always be switched off without affecting the service.",
    ],
  },
  {
    title: "3. Analytics, CRM, and Forms",
    body: [
      "Where enabled, SentraRisk may use tools such as HubSpot or similar providers to understand business enquiries, process contact forms, support customer relationship management, and measure website engagement.",
      "These tools may set cookies or similar identifiers when visitors interact with our website, forms, or marketing pages.",
    ],
  },
  {
    title: "4. Third-Party Services",
    body: [
      "Some cookies or identifiers may be set by service providers used for forms, analytics, embedded scripts, payment flows, security, hosting, or integrations.",
      "Third-party providers process information according to their own terms and privacy documentation as well as any agreement they have with SentraRisk.",
    ],
  },
  {
    title: "5. Your Choices",
    body: [
      "You can usually manage or block cookies through your browser settings. Blocking some cookies may affect website or platform functionality.",
      "Where a consent banner, preference tool, or unsubscribe option is provided, you can use it to manage non-essential marketing or analytics preferences.",
    ],
  },
  {
    title: "6. Changes",
    body: [
      "We may update this Cookie Policy as our website, platform, legal obligations, or service providers change. The latest version will be published on this website.",
    ],
  },
  {
    title: "7. Contact",
    body: [
      "For privacy or cookie questions, contact SentraRisk Systems at support@sentrarisksystems.com.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-slate-950 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-cyan-700 hover:text-cyan-900">
          Back to SentraRisk Systems
        </Link>
        <div className="mt-10 border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold uppercase text-cyan-700">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal md:text-5xl">Cookie Policy</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: 15 July 2026</p>
          <p className="mt-6 text-base leading-7 text-slate-600">
            This policy explains how SentraRisk Systems uses cookies and similar technologies across our website and platform.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-slate-950">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-7 text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
