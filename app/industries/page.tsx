import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, MapPin, Store, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries | SentraRisk Systems",
  description:
    "Explore SentraRisk payment-risk monitoring for accounting practices, invoice-heavy SMEs, multi-location organisations, and motor dealerships.",
};

const industries = [
  {
    icon: Users,
    title: "Accounting practices",
    text: "Consistent payment-risk review across authorised client organisations, with clear ownership and reporting.",
    href: "/industries/accounting-practices",
  },
  {
    icon: Building2,
    title: "Invoice-heavy SMEs",
    text: "A clearer way to review duplicate risk, supplier-detail changes, unusual activity, and missing support.",
    href: "/industries/invoice-heavy-smes",
  },
  {
    icon: MapPin,
    title: "Multi-location businesses",
    text: "Central visibility where approvals, records, suppliers, and finance activity are spread across locations.",
    href: "/industries/multi-location-businesses",
  },
  {
    icon: Store,
    title: "Motor dealerships",
    text: "Focused workflows around customer deposits, payer details, refunds, applications, and review evidence.",
    href: "/industries/motor-dealerships",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <nav className="border-b border-white/10 bg-[#07131f] px-5 py-4 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-sm font-semibold">SentraRisk Systems</Link>
          <Link href="/trust" className="text-sm font-medium text-slate-300 hover:text-white">Trust Centre</Link>
        </div>
      </nav>
      <section className="bg-[#07131f] px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">Industries</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Payment oversight shaped around the way each team works.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            SentraRisk starts with the organisation’s existing finance process, data, responsibilities, and review
            needs rather than forcing every customer into the same workflow.
          </p>
        </div>
      </section>
      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <article key={industry.title} className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
                <Icon className="h-7 w-7 text-cyan-700" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-semibold">{industry.title}</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">{industry.text}</p>
                <Link
                  href={industry.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-800 hover:text-cyan-950"
                >
                  Explore this industry <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
