import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  FileKey2,
  History,
  KeyRound,
  LifeBuoy,
  LockKeyhole,
  ShieldCheck,
  Users,
} from "lucide-react";

const SUPPORT_EMAIL = "support@sentrarisksystems.com";

export const metadata: Metadata = {
  title: "Trust Centre | SentraRisk Systems",
  description:
    "Review SentraRisk security, privacy, data-processing, access-control, auditability, hosting, support, and procurement information.",
};

const trustAreas = [
  {
    icon: KeyRound,
    title: "Account and access controls",
    text: "Organisation administrators can manage authorised users, roles, protected access, and API keys within the available product controls.",
  },
  {
    icon: Users,
    title: "Organisation separation",
    text: "The platform is designed around organisation-level workspaces and permissions so authorised users see the areas relevant to their role.",
  },
  {
    icon: History,
    title: "Review history",
    text: "Review activity can include alert status, reviewer notes, decisions, exports, and audit events to support accountable follow-up.",
  },
  {
    icon: Database,
    title: "Data handling",
    text: "Customer data is processed to provide, secure, support, and operate the contracted service, subject to the published data-processing terms.",
  },
  {
    icon: LockKeyhole,
    title: "Hosting and protection",
    text: "SentraRisk may use cloud and customer-controlled environments with HTTPS, provider controls, restricted access, logging, and backup procedures where configured.",
  },
  {
    icon: LifeBuoy,
    title: "Support and due diligence",
    text: "Customers can request reasonable security and procurement information, subject to confidentiality and protection of other customers and platform methods.",
  },
];

const documents = [
  {
    title: "Security Statement",
    text: "Account controls, API keys, review history, hosting, backups, and customer responsibilities.",
    href: "/security-statement",
  },
  {
    title: "Data Processing",
    text: "Controller and processor roles, data categories, subprocessors, retention, and GDPR assistance.",
    href: "/data-processing",
  },
  {
    title: "Privacy Policy",
    text: "How SentraRisk handles personal information for the website, accounts, support, and service operation.",
    href: "/privacy-policy",
  },
  {
    title: "Terms of Service",
    text: "The principal commercial and usage terms that apply to the SentraRisk service.",
    href: "/terms-of-service",
  },
  {
    title: "End-User Licence Agreement",
    text: "The licence conditions applying to authorised users of the software and related materials.",
    href: "/eula",
  },
  {
    title: "Cookie Policy",
    text: "Information about essential and optional website cookies and available consent choices.",
    href: "/cookie-policy",
  },
];

export default function TrustCentrePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <nav className="border-b border-white/10 bg-[#07131f] px-5 py-4 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold">SentraRisk Systems</Link>
          <div className="flex items-center gap-4">
            <Link href="/industries" className="hidden text-sm font-medium text-slate-300 hover:text-white sm:block">
              Industries
            </Link>
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=SentraRisk%20security%20and%20procurement%20enquiry`}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-cyan-300 px-4 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
            >
              Contact us
            </a>
          </div>
        </div>
      </nav>

      <section className="bg-[#07131f] px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">Trust Centre</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Clear information for security, privacy, and procurement review.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              This centre brings together the published information organisations may need before sharing data,
              starting a pilot, or adopting SentraRisk.
            </p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-7">
            <ShieldCheck className="h-8 w-8 text-cyan-300" aria-hidden="true" />
            <p className="mt-5 text-xl font-semibold">Trust through clarity, controlled access, and accountable review.</p>
            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              {[
                "Security and data-processing information published",
                "Human responsibility remains central to decisions",
                "Due-diligence enquiries supported",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-800">Control overview</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              The areas customers usually ask about first.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              These summaries are designed for initial review. Contract terms and the detailed policy pages remain
              the authoritative source for a customer engagement.
            </p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {trustAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article key={area.title} className="bg-white p-6">
                  <Icon className="h-6 w-6 text-cyan-700" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold">{area.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{area.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-start gap-4">
            <FileKey2 className="mt-1 h-7 w-7 shrink-0 text-cyan-700" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-800">Published documents</p>
              <h2 className="mt-4 text-3xl font-semibold">Review the detail.</h2>
            </div>
          </div>
          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {documents.map((document) => (
              <Link
                key={document.title}
                href={document.href}
                className="grid gap-3 py-5 transition hover:bg-white sm:grid-cols-[14rem_1fr_auto] sm:items-center sm:px-4"
              >
                <h3 className="text-sm font-semibold text-slate-950">{document.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{document.text}</p>
                <ArrowRight className="h-4 w-4 text-cyan-700" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-800">Assurance position</p>
            <h2 className="mt-4 text-3xl font-semibold">Claims remain evidence-based.</h2>
          </div>
          <div className="border-l-2 border-cyan-600 pl-6">
            <p className="text-base leading-7 text-slate-700">
              SentraRisk only states certifications, independent assurance, integrations, or technical controls that
              have been formally completed and can be supported. This Trust Centre does not imply a certification or
              guarantee that is not expressly stated.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Customers with specific security questionnaires, procurement requirements, or contractual schedules
              should contact SentraRisk before onboarding production data.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=SentraRisk%20security%20and%20procurement%20enquiry`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-800 hover:text-cyan-950"
            >
              {SUPPORT_EMAIL} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
