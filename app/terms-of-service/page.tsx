import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | SentraRisk Systems",
  description:
    "Terms of Service for SentraRisk Systems, covering account responsibilities, admin controls, API keys, billing, and limitations of liability.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By creating an account, ticking the acceptance box during registration, accessing the SentraRisk platform, using an API key, or using any SentraRisk Systems software or services, you accept these Terms of Service.",
      "If you use SentraRisk on behalf of a company, partnership, sole trader, firm, or other organisation, you confirm that you are authorised to accept these Terms on behalf of that organisation.",
      "These Terms are intended for business use. SentraRisk is not currently offered as a consumer product.",
    ],
  },
  {
    title: "2. Contract Documents",
    body: [
      "These Terms should be read with the Privacy Policy, Data Processing terms, Refund and Cancellation Policy, Security Statement, and any written order form or subscription agreement agreed with SentraRisk Systems.",
      "If there is a conflict between an individually signed written agreement and these online Terms, the signed written agreement will apply to the extent of the conflict.",
    ],
  },
  {
    title: "3. Use of the Software",
    body: [
      "SentraRisk provides payment-risk monitoring, fraud-risk indicators, transaction scoring, alert review, reporting, integration tools, and API access for legitimate business use.",
      "Users must use the software lawfully, responsibly, and only for authorised business, risk management, fraud prevention, compliance, finance, audit, or security purposes.",
      "Customers must not misuse the service, attempt unauthorised access, interfere with the platform, reverse engineer protected parts of the software, share credentials, misuse API keys, upload unlawful data, or process data they are not authorised to handle.",
    ],
  },
  {
    title: "4. Account Responsibilities",
    body: [
      "Each user is responsible for their own account activity, login credentials, and use of the platform.",
      "Users must not share credentials, misuse API keys, attempt unauthorised access, interfere with the service, or use SentraRisk to process data they are not authorised to handle.",
    ],
  },
  {
    title: "5. Administrator Responsibilities",
    body: [
      "Organisation administrators are responsible for creating, managing, and revoking user accounts and API keys for their organisation.",
      "Administrators are also responsible for assigning appropriate access levels, monitoring account activity, managing internal users, and ensuring that only authorised users can access the organisation workspace.",
    ],
  },
  {
    title: "6. Billing, Trials, and Company Representative",
    body: [
      "The administrator or authorised company representative is responsible for billing, subscription selection, payment terms, and keeping payment information accurate.",
      "Where a user creates or manages an organisation account, that user may be treated as the company representative for account, billing, and administrative purposes unless another authorised representative is appointed.",
      "If payment fails, is cancelled, or is not received when due, SentraRisk may restrict product access while keeping billing access available so the organisation can restore payment.",
      "Trial access may be limited, suspended, or ended if the trial is misused, if billing setup is incomplete, or if the workspace appears to be created for unlawful or unauthorised purposes.",
    ],
  },
  {
    title: "7. Customer Data and Data Protection",
    body: [
      "Customers retain responsibility for the accuracy, legality, quality, and authority to use any data they upload, connect, import, or process through SentraRisk.",
      "Where SentraRisk processes personal data on behalf of a customer, the Data Processing terms apply. Customers remain responsible for their own internal notices, lawful basis, user permissions, and instructions to SentraRisk.",
      "Customers must not upload personal data, financial data, payroll data, supplier data, or transaction data unless they have the right to do so.",
    ],
  },
  {
    title: "8. Cloud, Integrations, and Local Deployment",
    body: [
      "SentraRisk may operate through cloud-hosted services, third-party integrations, APIs, and software running locally or within a customer's own environment.",
      "Customers are responsible for the security, configuration, access controls, backups, connected third-party permissions, and data handling practices within their own environment, devices, infrastructure, and local deployments.",
    ],
  },
  {
    title: "9. Risk Scoring and Decision Making",
    body: [
      "SentraRisk provides risk scores, alerts, indicators, reports, and decision-support information. These outputs are intended to support human review and business judgement.",
      "Customers remain responsible for final decisions, investigations, payment actions, account actions, compliance decisions, and any operational response taken as a result of using the software.",
      "SentraRisk does not provide legal, accounting, audit, tax, investment, banking, insurance, or regulatory advice. Customers should obtain professional advice where required.",
    ],
  },
  {
    title: "10. Intellectual Property",
    body: [
      "SentraRisk Systems owns or licenses the software, platform design, code, algorithms, workflows, documentation, reports templates, branding, and related intellectual property.",
      "Customers receive a limited, non-exclusive, non-transferable right to use the service during an active subscription or authorised trial, subject to these Terms.",
    ],
  },
  {
    title: "11. Limitation of Liability",
    body: [
      "To the fullest extent permitted by Irish law, SentraRisk Systems is not liable for indirect, incidental, consequential, special, punitive, or business losses arising from use of the software, including loss of profits, revenue, goodwill, opportunity, or anticipated savings.",
      "SentraRisk Systems is not responsible for customer-controlled security incidents, unauthorised user access caused by customer account management, third-party platform outages, customer misconfiguration, incorrect data, or decisions made by the customer after reviewing SentraRisk outputs.",
      "Nothing in these Terms limits liability where it cannot lawfully be limited, including liability for fraud, fraudulent misrepresentation, or death or personal injury caused by negligence.",
    ],
  },
  {
    title: "12. Suspension and Termination",
    body: [
      "SentraRisk may suspend or restrict access where payment is overdue, security is at risk, the service is misused, legal obligations require it, or these Terms are materially breached.",
      "Customers may stop using the service or cancel in line with the Refund and Cancellation Policy or any written subscription agreement.",
    ],
  },
  {
    title: "13. Changes to the Terms",
    body: [
      "We may update these Terms of Service as the product develops, to reflect legal changes, security improvements, product changes, or business requirements.",
      "Where changes are material, we will take reasonable steps to make the updated terms available. Continued use of SentraRisk after updated terms are published means you accept the updated terms.",
    ],
  },
  {
    title: "14. Governing Law",
    body: [
      "These Terms are governed by the laws of Ireland. Subject to any mandatory legal rights that cannot be excluded, disputes relating to these Terms or the service will be dealt with by the Irish courts.",
    ],
  },
  {
    title: "15. Contact",
    body: [
      "If you have any questions about these Terms of Service, contact SentraRisk Systems at support@sentrarisksystems.com.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-slate-950 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-cyan-700 hover:text-cyan-900">
          Back to SentraRisk Systems
        </Link>
        <div className="mt-10 border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold uppercase text-cyan-700">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal md:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: 5 July 2026</p>
          <p className="mt-6 text-base leading-7 text-slate-600">
            These Terms of Service explain the rules and responsibilities that apply when using SentraRisk Systems software, accounts, dashboards, and APIs.
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
