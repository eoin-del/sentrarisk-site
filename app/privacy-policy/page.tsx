import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | SentraRisk Systems",
  description:
    "Privacy Policy for SentraRisk Systems, covering account sign-up data, company security information, local storage, and contact details.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "SentraRisk Systems collects information that users voluntarily provide when signing up for an account, requesting access, contacting us, or using the platform on behalf of their organisation.",
      "This may include a user's name, work email address, company name, role, account details, and information needed for company security, account administration, billing, access control, and API key management.",
    ],
  },
  {
    title: "2. Why We Collect Information",
    body: [
      "We use voluntarily provided information to create and manage accounts, support business access, maintain company security, provide customer support, manage billing, and operate the SentraRisk platform.",
      "We may also use contact details to respond to enquiries, provide product updates, and support requested demonstrations or integrations.",
    ],
  },
  {
    title: "3. Customer Data and Local Storage",
    body: [
      "SentraRisk is designed for a mixed cloud and customer-environment model. Where customer transaction or risk data is processed within a customer's own environment, that data is stored locally in the customer's profile or infrastructure.",
      "Customer-controlled data is intended to remain under the customer's control and may be protected using encryption or local security controls configured for that environment. SentraRisk does not intentionally store customer transaction datasets outside the agreed deployment or customer environment.",
    ],
  },
  {
    title: "4. Account and Security Data",
    body: [
      "We may store limited account, administrative, billing, security, and access-control information that is necessary to operate the service. This can include user roles, organisation details, API key records, audit activity, and subscription information.",
      "This information helps us protect accounts, support administrators, and maintain a reliable service.",
    ],
  },
  {
    title: "5. Sharing Information",
    body: [
      "We do not sell user or company data. We may share limited information only where needed to operate the service, comply with legal obligations, support billing, protect security, or respond to a customer request.",
    ],
  },
  {
    title: "6. Your Responsibilities",
    body: [
      "Customers and their administrators are responsible for managing who has access to their organisation account, for maintaining accurate user information, and for controlling any data stored in their own local environment.",
    ],
  },
  {
    title: "7. Contact",
    body: [
      "If you have any queries about this Privacy Policy or how SentraRisk handles data, please contact us by email at hello@sentrarisksystems.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-slate-950 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-cyan-700 hover:text-cyan-900">
          Back to SentraRisk Systems
        </Link>
        <div className="mt-10 border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold uppercase text-cyan-700">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: 11 May 2026</p>
          <p className="mt-6 text-base leading-7 text-slate-600">
            This Privacy Policy explains how SentraRisk Systems handles information provided by users, organisations, and customers using our fraud detection and risk intelligence software.
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
