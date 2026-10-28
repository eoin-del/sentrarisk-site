import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Processing | SentraRisk Systems",
  description:
    "Data Processing information for SentraRisk Systems customers, covering roles, customer data, security controls, processors, retention, and GDPR-related requests.",
};

const sections = [
  {
    title: "1. Purpose",
    body: [
      "This Data Processing page explains how SentraRisk Systems approaches customer data when providing fraud-risk intelligence, transaction review, alert workflows, reporting, API access, customer-authorised accounting imports, and related services.",
      "It forms part of the online terms accepted during registration and is incorporated into the Terms of Service as a practical processor agreement for business customers.",
      "It should be reviewed alongside our Privacy Policy, Cookie Policy, Terms of Service, Refund and Cancellation Policy, and Security Statement.",
    ],
  },
  {
    title: "2. Customer and SentraRisk Roles",
    body: [
      "For customer transaction records, user-managed business data, uploaded files, and connected accounting data, the customer is generally the controller and SentraRisk Systems acts as a processor where it processes that data to provide the service.",
      "For account administration, billing, security, product analytics, support, and service communications, SentraRisk Systems may act as an independent controller for the limited information needed to operate the business and protect the service.",
    ],
  },
  {
    title: "3. Categories of Data",
    body: [
      "Customer data may include transaction details, supplier or counterparty references, payment amounts, account identifiers, reviewer notes, alert status, uploaded spreadsheet content, customer-authorised accounting import records, crypto wallet references, and review outputs.",
      "Account and operational data may include organisation name, user names, work email addresses, roles, login activity, audit activity, API key records, subscription status, and support messages.",
    ],
  },
  {
    title: "4. Subject Matter, Duration, and Purpose",
    body: [
      "The subject matter of processing is the provision, support, security, billing, and improvement of the SentraRisk platform and related services.",
      "The duration of processing is the period during which the customer uses SentraRisk, plus any reasonable retention period needed for backups, audit records, legal obligations, dispute handling, security, or agreed support.",
      "The purpose of processing is to provide payment-risk monitoring, transaction review, alert review, reporting, integration workflows, customer support, and related account administration.",
    ],
  },
  {
    title: "5. Processing Instructions",
    body: [
      "SentraRisk Systems processes customer data to provide, secure, support, operate and improve the contracted service, troubleshoot issues, respond to support requests, manage billing-related access, and comply with legal obligations.",
      "We do not sell customer data. We do not use customer transaction data for unrelated advertising.",
      "Customers are responsible for ensuring that their instructions are lawful and that they have appropriate notices, permissions, and lawful bases for data uploaded, connected, or processed through SentraRisk.",
      "If SentraRisk believes an instruction may breach data protection law, security requirements, platform rules, or third-party provider terms, SentraRisk may refuse, pause, or ask the customer to clarify the instruction.",
    ],
  },
  {
    title: "6. Security Measures",
    body: [
      "SentraRisk is designed with organisation-level data separation, role-based access controls, login protection, audit logs, API key controls, and payment-gated access for unpaid workspaces.",
      "Where technically available and configured, SentraRisk may use encryption, encrypted secrets storage, restricted support access, logging, and data minimisation controls.",
      "Customers remain responsible for managing their own users, uploaded data, local files, connected accounting permissions, devices, and internal approval processes.",
    ],
  },
  {
    title: "7. Confidentiality and Personnel",
    body: [
      "SentraRisk will take reasonable steps to ensure that personnel or providers who access customer data for support, security, or operations are subject to confidentiality obligations or equivalent duties.",
      "Support access should be limited to what is reasonably needed to investigate, secure, or support the service.",
    ],
  },
  {
    title: "8. Sub-processors",
    body: [
      "SentraRisk Systems may use trusted service providers for hosting, payment processing, email, analytics, infrastructure, and operational support. These providers are used only where needed to operate, secure, bill, or support the service.",
      "Examples may include AWS, Stripe, Google Workspace, HubSpot, Xero, Sage, blockchain data providers, and similar operational providers where needed for the service or customer-authorised integrations.",
      "Customers can contact support@sentrarisksystems.com for current information about core providers used for the service.",
      "Where required, SentraRisk will take reasonable steps to ensure sub-processors are subject to appropriate data protection obligations.",
    ],
  },
  {
    title: "9. International Transfers",
    body: [
      "Where customer data or personal data is transferred outside the European Economic Area, SentraRisk will use an appropriate lawful transfer mechanism where required by data protection law.",
    ],
  },
  {
    title: "10. Retention and Deletion",
    body: [
      "Customer data is retained for as long as needed to provide the service, meet legal or accounting requirements, resolve disputes, support security, or comply with customer instructions.",
      "On reasonable request, SentraRisk can assist with deletion or export of customer data, subject to technical limits, legal obligations, backup retention, and legitimate business record requirements.",
      "SentraRisk may retain limited account, billing, security, audit, backup and support records where needed for service operation, legal obligations, dispute handling, fraud prevention, accounting, or security.",
    ],
  },
  {
    title: "11. Data Subject and GDPR Requests",
    body: [
      "Where SentraRisk acts as processor, the customer is responsible for responding to data subject requests and regulatory enquiries. SentraRisk will provide reasonable assistance where required and technically possible.",
      "Requests relating to SentraRisk account, support, or billing information can be sent to support@sentrarisksystems.com.",
    ],
  },
  {
    title: "12. Personal Data Breaches",
    body: [
      "Where SentraRisk becomes aware of a personal data breach affecting customer data processed by SentraRisk as processor, we will take reasonable steps to notify the affected customer without undue delay after becoming aware of the breach.",
      "Customers remain responsible for assessing and making any required notifications to regulators or affected individuals where they are the controller.",
    ],
  },
  {
    title: "13. Audit and Assistance",
    body: [
      "SentraRisk will make reasonable information available to support customer due diligence, security review, and processor compliance requests, subject to confidentiality, security, commercial sensitivity, and reasonable limits.",
      "Any audit, security review, technical review, penetration test, or due diligence request must be scoped, proportionate, arranged in advance, and must not compromise other customers, the platform, confidential methods, source code, risk logic, or trade secrets.",
    ],
  },
  {
    title: "14. Review",
    body: [
      "These Data Processing terms are intended as practical online processor terms for business customers. Customers with specific legal, procurement, or regulatory requirements should contact us before onboarding production data.",
    ],
  },
];

export default function DataProcessingPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-slate-950 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-cyan-700 hover:text-cyan-900">
          Back to SentraRisk Systems
        </Link>
        <div className="mt-10 border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold uppercase text-cyan-700">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal md:text-5xl">Data Processing</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: 5 July 2026</p>
          <p className="mt-6 text-base leading-7 text-slate-600">
            This page explains how SentraRisk Systems handles customer data and GDPR-related responsibilities when providing the SentraRisk platform.
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
