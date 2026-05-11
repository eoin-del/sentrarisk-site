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
      "By creating an account, accessing the SentraRisk platform, using an API key, or using any SentraRisk Systems software or services, you accept these Terms of Service.",
      "If you use SentraRisk on behalf of a company or organisation, you confirm that you are authorised to accept these terms on behalf of that organisation.",
    ],
  },
  {
    title: "2. Use of the Software",
    body: [
      "SentraRisk provides fraud detection, transaction risk scoring, alert review, crypto monitoring, reporting, and API tooling for business use.",
      "Users must use the software lawfully, responsibly, and only for legitimate business, risk management, fraud prevention, compliance, or security purposes.",
    ],
  },
  {
    title: "3. Account Responsibilities",
    body: [
      "Each user is responsible for their own account activity, login credentials, and use of the platform.",
      "Users must not share credentials, misuse API keys, attempt unauthorised access, interfere with the service, or use SentraRisk to process data they are not authorised to handle.",
    ],
  },
  {
    title: "4. Administrator Responsibilities",
    body: [
      "Organisation administrators are responsible for creating, managing, and revoking user accounts and API keys for their organisation.",
      "Administrators are also responsible for assigning appropriate access levels, monitoring account activity, managing internal users, and ensuring that only authorised users can access the organisation workspace.",
    ],
  },
  {
    title: "5. Billing and Company Representative",
    body: [
      "The administrator or authorised company representative is responsible for billing, subscription selection, payment terms, and keeping payment information accurate.",
      "Where a user creates or manages an organisation account, that user may be treated as the company representative for account, billing, and administrative purposes unless another authorised representative is appointed.",
    ],
  },
  {
    title: "6. Cloud and Local Deployment",
    body: [
      "SentraRisk may operate through a mix of cloud-hosted services and software running locally or within a customer's own environment.",
      "Customers are responsible for the security, configuration, access controls, backups, and data handling practices within their own environment, devices, infrastructure, and local deployments.",
    ],
  },
  {
    title: "7. Risk Scoring and Decision Making",
    body: [
      "SentraRisk provides risk scores, alerts, indicators, reports, and decision-support information. These outputs are intended to support human review and business judgement.",
      "Customers remain responsible for final decisions, investigations, payment actions, account actions, compliance decisions, and any operational response taken as a result of using the software.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    body: [
      "Because SentraRisk may operate partly within a customer's own environment, SentraRisk Systems is not liable for data mishaps, loss, corruption, unauthorised access, misconfiguration, misuse, local storage issues, customer infrastructure failures, or customer-controlled security incidents.",
      "To the fullest extent permitted by law, SentraRisk Systems is not liable for indirect, incidental, consequential, special, or business losses arising from use of the software.",
    ],
  },
  {
    title: "9. Changes to the Terms",
    body: [
      "We may update these Terms of Service as the product develops. Continued use of SentraRisk after updated terms are published means you accept the updated terms.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      "If you have any questions about these Terms of Service, contact SentraRisk Systems at hello@sentrarisksystems.com.",
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
          <p className="mt-4 text-sm text-slate-500">Last updated: 11 May 2026</p>
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
