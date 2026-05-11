import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security Statement | SentraRisk Systems",
  description:
    "Security Statement for SentraRisk Systems, covering account controls, API keys, audit logs, local deployments, and customer responsibilities.",
};

const sections = [
  {
    title: "Account and Access Controls",
    body: "SentraRisk supports business account structures with administrative controls for managing users, roles, account access, and API keys. Administrators are responsible for creating and revoking access for their organisation.",
  },
  {
    title: "API Key Management",
    body: "Organisation administrators can create and revoke API keys used to connect SentraRisk to business systems. Customers should protect API keys, rotate them when needed, and revoke keys that are no longer required.",
  },
  {
    title: "Audit and Review History",
    body: "The platform includes audit logs, alert review status, reviewer notes, and transaction risk reports to support accountable decision-making and internal review.",
  },
  {
    title: "Local and Customer Environment Security",
    body: "SentraRisk may run through a mix of cloud services and local or customer-controlled environments. Customers are responsible for securing their own infrastructure, local profiles, devices, credentials, backups, network access, and data-handling procedures.",
  },
  {
    title: "Data Control",
    body: "SentraRisk is designed so customer transaction data can remain within the customer's controlled environment where applicable. Account, security, billing, and access-control data may be processed as needed to operate the service.",
  },
  {
    title: "Human-Led Decisions",
    body: "Risk scores, fraud indicators, and alerts are decision-support tools. Customers remain responsible for human review, investigations, and final business decisions.",
  },
];

export default function SecurityStatementPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-slate-950 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-cyan-700 hover:text-cyan-900">
          Back to SentraRisk Systems
        </Link>
        <div className="mt-10 border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold uppercase text-cyan-700">Trust</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal md:text-5xl">Security Statement</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: 11 May 2026</p>
          <p className="mt-6 text-base leading-7 text-slate-600">
            SentraRisk Systems is designed to help organisations review transaction risk with clear access controls, auditability, and customer-controlled data handling.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          {sections.map((section) => (
            <section key={section.title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">{section.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
