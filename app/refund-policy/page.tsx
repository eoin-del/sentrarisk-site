import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund and Cancellation Policy | SentraRisk Systems",
  description:
    "Refund and Cancellation Policy for SentraRisk Systems subscriptions, trials, payment failures, cancellations, and support contact.",
};

const sections = [
  {
    title: "1. Subscriptions",
    body: [
      "SentraRisk Systems is provided as a subscription service for business customers. Subscription access, billing periods, and plan limits are based on the plan selected during checkout or agreed with SentraRisk Systems.",
      "Unless otherwise agreed in writing, subscriptions renew automatically until cancelled.",
    ],
  },
  {
    title: "2. Trials",
    body: [
      "New workspaces may receive a trial period. During a trial, access may be provided without an active paid subscription.",
      "When the trial ends, continued access may require a paid subscription. If payment is not active, the workspace may be restricted to billing access until payment is completed.",
    ],
  },
  {
    title: "3. Payment Failures",
    body: [
      "If a subscription payment fails, is disputed, is cancelled, or is not received when due, SentraRisk may restrict product access for the affected workspace.",
      "Billing access remains available where possible so an administrator can update payment details, choose a plan, or restore access through Stripe checkout.",
    ],
  },
  {
    title: "4. Cancellations",
    body: [
      "Customers may cancel their subscription by contacting support@sentrarisksystems.com or through any self-service cancellation flow made available in the product or billing portal.",
      "Cancellation normally takes effect at the end of the current billing period unless otherwise stated or agreed.",
    ],
  },
  {
    title: "5. Refunds",
    body: [
      "Subscription fees are generally non-refundable once a billing period has started, except where required by law or where SentraRisk Systems agrees otherwise in writing.",
      "If a billing mistake occurs, contact us promptly at support@sentrarisksystems.com and include the organisation name, billing email, invoice or payment reference, and a short explanation.",
    ],
  },
  {
    title: "6. Plan Changes",
    body: [
      "Plan upgrades, downgrades, and user-limit changes may affect pricing and access. Any proration, credit, or billing adjustment depends on the checkout or billing system used and any written agreement with SentraRisk Systems.",
    ],
  },
  {
    title: "7. Data After Cancellation",
    body: [
      "After cancellation or prolonged non-payment, SentraRisk may retain account, billing, security, and customer data for a limited period where needed for service operation, legal obligations, dispute handling, backup retention, or customer reactivation.",
      "Customers should export any required reports or records before cancelling where possible.",
    ],
  },
  {
    title: "8. Contact",
    body: [
      "For billing, cancellation, refund, or payment questions, contact support@sentrarisksystems.com.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-slate-950 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-cyan-700 hover:text-cyan-900">
          Back to SentraRisk Systems
        </Link>
        <div className="mt-10 border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold uppercase text-cyan-700">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal md:text-5xl">Refund and Cancellation Policy</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: 3 June 2026</p>
          <p className="mt-6 text-base leading-7 text-slate-600">
            This policy explains how SentraRisk Systems handles subscription billing, payment failures, cancellations, and refund requests.
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
