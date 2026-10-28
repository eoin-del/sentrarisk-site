import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CircleGauge,
  FileCheck2,
  Landmark,
  SearchCheck,
  ShieldCheck,
  Store,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | SentraRisk Systems",
  description:
    "Explore SentraRisk payment-risk monitoring and focused services for payment controls, KYC, cashflow follow-up, dealerships, and suspicious messages.",
};

const services = [
  {
    icon: CircleGauge,
    title: "Payment-risk monitoring",
    price: "From €450/month",
    text: "Ongoing review of payment and invoice activity, with clear priorities, ownership, review history, and management reporting.",
    bestFor: "Finance teams and invoice-heavy SMEs",
  },
  {
    icon: FileCheck2,
    title: "Total Compliance Payment Risk Review",
    price: "From €349",
    text: "A once-off review of payment controls, supplier setup, approval evidence, duplicate risk, and areas that may need attention.",
    bestFor: "Businesses seeking a defined starting assessment",
  },
  {
    icon: ShieldCheck,
    title: "KYC verification",
    price: "€49 per check",
    text: "A practical verification check for a client, supplier, contractor, or other business counterparty, within the agreed scope and available sources.",
    bestFor: "Focused counterparty checks",
  },
  {
    icon: Landmark,
    title: "Invoice and cashflow follow-up",
    price: "Scoped service",
    text: "Bring overdue invoices, missing records, amounts due, and follow-up ownership into a clearer finance process.",
    bestFor: "Teams spending too much time chasing records and payment",
  },
  {
    icon: Store,
    title: "Dealership deposit controls",
    price: "Pilot pricing available",
    text: "A specialist workflow for customer deposits, payer details, refund decisions, and supporting dealership records.",
    bestFor: "Motor retailers and dealer groups",
  },
  {
    icon: SearchCheck,
    title: "Scam text and email check",
    price: "From €5",
    text: "A quick second look at a suspicious message, link, invoice request, or payment instruction before someone responds or pays.",
    bestFor: "One-off suspicious communications",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <nav className="border-b border-white/10 bg-[#07131f] px-5 py-4 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold">SentraRisk Systems</Link>
          <Link
            href="/#contact"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-cyan-300 px-4 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
          >
            Discuss your requirements
          </Link>
        </div>
      </nav>

      <section className="bg-[#07131f] px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">SentraRisk services</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Start with the business need, then choose the right level of support.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Payment-risk monitoring is the core SentraRisk service. Focused reviews and specialist workflows are
            available where an organisation needs a narrower starting point.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="bg-white p-6">
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-6 w-6 shrink-0 text-cyan-700" aria-hidden="true" />
                    <span className="text-xs font-semibold text-cyan-900">{service.price}</span>
                  </div>
                  <h2 className="mt-5 text-xl font-semibold">{service.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Best suited to</p>
                    <p className="mt-2 text-sm text-slate-700">{service.bestFor}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-slate-200 pt-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Not sure which service fits?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Begin with a short discussion about the current process. SentraRisk will recommend a suitable scope
                rather than adding a service that the organisation does not need.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Discuss your requirements <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#07131f] px-5 py-8 text-slate-300 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm sm:flex-row sm:items-center">
          <p>© 2026 SentraRisk Systems. Built in Ireland.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/trust" className="hover:text-white">Trust Centre</Link>
            <Link href="/industries" className="hover:text-white">Industries</Link>
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms</Link>
            <Link href="/" className="hover:text-white">Home</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
