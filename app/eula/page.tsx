import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "End-User Licence Agreement | SentraRisk Systems",
  description:
    "End-User Licence Agreement for SentraRisk Systems software, dashboards, integrations, APIs, and related business services.",
};

const sections = [
  {
    title: "1. Agreement",
    body: [
      "This End-User Licence Agreement explains the licence terms that apply when a user, customer, employee, contractor, administrator, accountant, advisor, or authorised representative accesses or uses SentraRisk Systems software, dashboards, integrations, APIs, reports, files, documentation, or related services.",
      "By creating an account, accepting terms during registration, connecting an accounting integration, using an API key, accessing a dashboard, or otherwise using SentraRisk, you agree to this EULA on behalf of yourself and, where applicable, the organisation you represent.",
      "If you do not agree to this EULA, you must not access or use SentraRisk.",
    ],
  },
  {
    title: "2. Business Use",
    body: [
      "SentraRisk is provided for legitimate business, finance, payment-risk, compliance, fraud-prevention, invoice-review, cashflow-review, supplier-review, audit-support, accounting-support, and operational-control purposes.",
      "SentraRisk is intended to support professional and business judgement. It is not intended to replace legal, accounting, tax, audit, regulatory, banking, insurance, investment, or financial advice.",
    ],
  },
  {
    title: "3. Licence Grant",
    body: [
      "Subject to this EULA, the Terms of Service, any applicable order form, subscription agreement, trial terms, and payment of applicable fees, SentraRisk grants the customer and its authorised users a limited, revocable, non-exclusive, non-transferable, non-sublicensable licence to access and use the SentraRisk software during the active subscription, trial, pilot, or authorised service period.",
      "This licence is only for the customer's internal business use or authorised client-service use, depending on the plan, written agreement, or account permissions in place.",
    ],
  },
  {
    title: "4. Accounts and Authorised Users",
    body: [
      "Customers are responsible for choosing authorised users, assigning appropriate permissions, managing administrators, keeping login details secure, removing access when no longer needed, and monitoring activity within their organisation account.",
      "Users must not share login credentials, misuse access, allow unauthorised people to use their account, bypass security controls, or use the service for any organisation or client they are not authorised to represent.",
    ],
  },
  {
    title: "5. Accounting Integrations",
    body: [
      "SentraRisk may support customer-authorised integrations with accounting, payment, finance, or business systems, including services such as QuickBooks Online, Xero, Sage, spreadsheets, APIs, and other supported tools.",
      "By connecting an integration, the customer confirms that it has authority to grant access to the relevant company, client, file, workspace, data, or account and that the connected data may be processed by SentraRisk to provide the service.",
      "Third-party platforms are controlled by their own providers. SentraRisk is not responsible for third-party outages, API changes, incorrect third-party data, third-party pricing, account restrictions, revoked permissions, or customer misconfiguration.",
    ],
  },
  {
    title: "6. Customer Data",
    body: [
      "Customers retain ownership of their customer data, including uploaded files, transaction records, invoice records, supplier records, client records, review notes, alerts, payment references, cashflow information, and authorised integration data.",
      "Customers are responsible for the accuracy, quality, legality, authority, and completeness of the data they upload, connect, import, review, or process through SentraRisk.",
      "SentraRisk does not sell customer transaction data and does not use customer transaction data for unrelated advertising.",
    ],
  },
  {
    title: "7. Risk Outputs and Human Review",
    body: [
      "SentraRisk may produce risk scores, alerts, review notes, reports, evidence summaries, control packs, decision memos, and other outputs designed to support human review.",
      "All outputs are decision-support information only. Customers remain responsible for final decisions, investigations, payment approvals, supplier actions, compliance decisions, client advice, operational responses, and any reliance placed on SentraRisk outputs.",
      "Users should review the underlying evidence and apply professional judgement before taking action.",
    ],
  },
  {
    title: "8. Restrictions",
    body: [
      "Users must not copy, modify, reverse engineer, decompile, disassemble, scrape, benchmark, resell, sublicense, rent, lease, lend, host for unauthorised third parties, or attempt to derive source code, algorithms, scoring logic, workflows, product methods, or confidential business information from SentraRisk.",
      "Users must not use SentraRisk to build, support, benchmark, train, or improve a competing product or service.",
      "Users must not upload unlawful data, access data without authority, interfere with the service, attempt unauthorised access, overload systems, bypass billing or security controls, misuse API keys, or use SentraRisk in a way that could harm SentraRisk, customers, providers, or third parties.",
    ],
  },
  {
    title: "9. Intellectual Property",
    body: [
      "SentraRisk Systems owns or licenses the software, source code, user interface, design, dashboards, workflows, scoring approach, templates, documentation, reports, brand assets, product methods, and related intellectual property.",
      "Except for the limited licence granted in this EULA, no ownership rights in SentraRisk are transferred to any user or customer.",
      "Feedback, suggestions, feature ideas, configuration requests, or improvement ideas may be used by SentraRisk without restriction or obligation, provided SentraRisk does not disclose customer confidential information except as permitted by the customer agreement.",
    ],
  },
  {
    title: "10. Confidentiality",
    body: [
      "Users and customers must keep non-public SentraRisk materials confidential, including private demos, product methods, screenshots of non-public workflows, technical information, pricing proposals, security information, API details, and confidential business information.",
      "SentraRisk will take reasonable steps to protect customer confidential information and customer data in line with the Terms of Service, Privacy Policy, Data Processing terms, and any written agreement.",
    ],
  },
  {
    title: "11. Updates and Availability",
    body: [
      "SentraRisk may update, improve, change, suspend, limit, or discontinue features from time to time for product development, security, legal, commercial, operational, or technical reasons.",
      "No online service can guarantee uninterrupted availability, error-free operation, absolute security, or compatibility with every customer system, browser, device, file, data source, or third-party platform.",
    ],
  },
  {
    title: "12. Suspension and Termination",
    body: [
      "SentraRisk may suspend, restrict, or terminate access where payment is overdue, the service is misused, security is at risk, legal obligations require it, third-party permissions are withdrawn, or this EULA, the Terms of Service, or another customer agreement is breached.",
      "When an account, subscription, pilot, trial, or service period ends, the licence granted under this EULA also ends. Users must stop accessing SentraRisk except for any limited access that SentraRisk provides for billing, export, legal, or account-closure purposes.",
    ],
  },
  {
    title: "13. Privacy and Data Processing",
    body: [
      "Use of SentraRisk is also governed by the Privacy Policy and, where SentraRisk processes personal data on behalf of a customer, the Data Processing terms.",
      "Customers remain responsible for their own notices, lawful basis, permissions, regulatory obligations, data subject requests, client instructions, and authority to connect or process data through SentraRisk.",
    ],
  },
  {
    title: "14. Liability",
    body: [
      "To the fullest extent permitted by Irish law, SentraRisk Systems is not liable for indirect, incidental, consequential, special, punitive, or business losses arising from use of the software, including loss of profits, revenue, goodwill, opportunity, anticipated savings, data, or business interruption.",
      "SentraRisk is not responsible for customer-controlled security incidents, incorrect or incomplete customer data, customer payment decisions, ignored alerts, unauthorised customer users, third-party platform issues, customer misconfiguration, or decisions made after reviewing SentraRisk outputs.",
      "Nothing in this EULA limits liability where it cannot lawfully be limited, including liability for fraud, fraudulent misrepresentation, or death or personal injury caused by negligence.",
    ],
  },
  {
    title: "15. Governing Law",
    body: [
      "This EULA is governed by the laws of Ireland. Subject to any mandatory legal rights that cannot be excluded, disputes relating to this EULA or the service will be dealt with by the Irish courts.",
    ],
  },
  {
    title: "16. Related Terms",
    body: [
      "This EULA should be read with the SentraRisk Terms of Service, Privacy Policy, Cookie Policy, Data Processing terms, Refund and Cancellation Policy, Security Statement, and any written order form or subscription agreement agreed with SentraRisk Systems.",
    ],
  },
  {
    title: "17. Contact",
    body: [
      "For questions about this EULA, contact SentraRisk Systems at support@sentrarisksystems.com.",
    ],
  },
];

const relatedLinks = [
  ["Terms of Service", "/terms-of-service"],
  ["Privacy Policy", "/privacy-policy"],
  ["Data Processing", "/data-processing"],
  ["Security Statement", "/security-statement"],
  ["Refund Policy", "/refund-policy"],
];

export default function EulaPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-slate-950 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-cyan-700 hover:text-cyan-900">
          Back to SentraRisk Systems
        </Link>
        <div className="mt-10 border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold uppercase text-cyan-700">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal md:text-5xl">
            End-User Licence Agreement
          </h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: 17 July 2026</p>
          <p className="mt-6 text-base leading-7 text-slate-600">
            This End-User Licence Agreement explains how authorised users and business customers may access and use SentraRisk Systems software, dashboards, integrations, APIs, reports, and related services.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5 text-sm leading-6 text-slate-700">
          SentraRisk is business decision-support software. Risk scores, reports, checks, and alerts are designed to support human review and do not replace professional judgement or advice.
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

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-950">Related legal pages</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {relatedLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-cyan-300 hover:text-cyan-800"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
