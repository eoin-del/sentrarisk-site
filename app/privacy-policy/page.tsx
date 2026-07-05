import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | SentraRisk Systems",
  description:
    "Privacy Policy for SentraRisk Systems, covering account sign-up data, company security information, local storage, and contact details.",
};

const sections = [
  {
    title: "1. Who We Are",
    body: [
      "SentraRisk Systems is an Irish software provider offering fraud-risk, payment-risk, transaction monitoring, reporting, and related business software.",
      "For privacy questions, data requests, or security queries, contact support@sentrarisksystems.com.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "We collect information that users voluntarily provide when signing up for an account, requesting access, contacting us, using the platform, connecting integrations, or acting on behalf of an organisation.",
      "This may include name, work email address, company name, role, username, organisation details, billing details, support messages, API key records, audit activity, login and security information, connected integration identifiers, and product usage information.",
      "Customer data may include transaction details, supplier or counterparty references, payment amounts, payroll payment output information, account identifiers, reviewer notes, alert status, uploaded spreadsheet content, Xero or Sage-imported accounting records, crypto wallet references, and risk-scoring outputs.",
    ],
  },
  {
    title: "3. Why We Use Information",
    body: [
      "We use information to create and manage accounts, provide the platform, process transaction-risk checks, support integrations, produce reports, maintain security, manage billing, provide customer support, improve reliability, prevent misuse, and comply with legal obligations.",
      "We may use contact details to respond to enquiries, provide service updates, support requested demonstrations or integrations, and send relevant business communications. Users can ask us to stop non-essential marketing communications.",
    ],
  },
  {
    title: "4. Legal Basis",
    body: [
      "Where SentraRisk acts as a controller, we generally rely on contract necessity, legitimate interests, legal obligations, and, where appropriate, consent.",
      "Our legitimate interests include operating and securing the service, supporting business customers, preventing fraud or misuse, improving reliability, and communicating with business contacts about relevant service matters.",
    ],
  },
  {
    title: "5. Customer Data and Processor Role",
    body: [
      "For customer transaction records, uploaded files, connected accounting data, client records, and user-managed business data, the customer is generally the controller and SentraRisk Systems acts as a processor where it processes that data to provide the service.",
      "Where SentraRisk acts as processor, we process customer data in line with the customer's instructions, the Data Processing terms, and applicable data protection law.",
    ],
  },
  {
    title: "6. Sharing Information",
    body: [
      "We do not sell user, company, or customer transaction data.",
      "We may share limited information with trusted providers where needed for hosting, infrastructure, payment processing, email delivery, analytics, security, customer support, integrations, legal compliance, or customer-requested functionality.",
      "Examples of providers may include hosting providers, Stripe for payments, email providers, analytics or CRM tools, and integration providers such as accounting platforms where the customer connects them.",
    ],
  },
  {
    title: "7. International Transfers",
    body: [
      "Where information is transferred outside the European Economic Area, we will take reasonable steps designed to protect it, such as using appropriate contractual safeguards or relying on another lawful transfer mechanism.",
    ],
  },
  {
    title: "8. Retention",
    body: [
      "We keep personal data only for as long as reasonably needed for the purposes described in this Privacy Policy, including providing the service, maintaining security records, meeting accounting and legal obligations, resolving disputes, supporting customers, and preserving audit evidence.",
      "Customer data may be deleted, exported, retained, or backed up according to the customer's instructions, technical limits, legal obligations, backup cycles, and legitimate business record requirements.",
    ],
  },
  {
    title: "9. Security",
    body: [
      "SentraRisk uses technical and organisational measures designed to protect information, including organisation-level access controls, role-based permissions, login protection, audit logs, API key controls, encryption controls where configured, and restricted support access.",
      "No online service can guarantee absolute security. Customers are responsible for managing their own users, devices, passwords, connected integrations, internal permissions, and local environments.",
    ],
  },
  {
    title: "10. Automated Risk Scoring",
    body: [
      "SentraRisk may use automated rules, scoring logic, and risk indicators to help identify unusual or higher-risk activity. These outputs support human review and do not replace the customer's own decision-making.",
      "Customers remain responsible for payment decisions, investigations, compliance decisions, and operational actions.",
    ],
  },
  {
    title: "11. Your Rights",
    body: [
      "Individuals may have rights under data protection law, including rights of access, correction, erasure, restriction, objection, portability, and the right to complain to the Data Protection Commission in Ireland.",
      "Where SentraRisk acts as processor for a customer, requests relating to customer-controlled data should normally be directed to that customer. We will provide reasonable assistance where required and technically possible.",
    ],
  },
  {
    title: "12. Customer Responsibilities",
    body: [
      "Customers and their administrators are responsible for managing who has access to their organisation account, maintaining accurate user information, issuing appropriate privacy notices to their own users or clients, and ensuring they have authority to upload, connect, or process data through SentraRisk.",
    ],
  },
  {
    title: "13. Changes to this Policy",
    body: [
      "We may update this Privacy Policy as the product, law, or our operations develop. The latest version will be published on this website.",
    ],
  },
  {
    title: "14. Contact",
    body: [
      "If you have any queries about this Privacy Policy or how SentraRisk handles data, please contact us by email at support@sentrarisksystems.com. You may also contact the Irish Data Protection Commission if you have concerns about your data protection rights.",
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
          <p className="mt-4 text-sm text-slate-500">Last updated: 5 July 2026</p>
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
