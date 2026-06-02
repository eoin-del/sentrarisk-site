import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Download, FileText } from "lucide-react";
import { sampleReports } from "../marketing-content";

export const metadata: Metadata = {
  title: "Sample Fraud-Risk Reports | SentraRisk Systems",
  description:
    "View sample SentraRisk board summaries, compliance packs, and transaction risk reports for fraud-risk review and SME finance teams.",
};

export default function SampleReportsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="premium-dark px-5 py-6 text-white md:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-wide text-white">
            SentraRisk Systems
          </Link>
          <Link href="/#demo" className="rounded-md bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-200">
            Request trial
          </Link>
        </nav>
        <div className="mx-auto max-w-7xl py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Sample reports</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-normal md:text-6xl">
            Show decision-ready fraud-risk evidence before the first demo.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Download sample SentraRisk outputs for board review, compliance evidence, and transaction-level investigation.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {sampleReports.map((report) => (
            <article key={report.title} className="rounded-md border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
                <FileText className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase text-cyan-700">{report.label}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal text-slate-950">{report.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{report.description}</p>
              <div className="mt-6 space-y-3">
                {report.stats.map((stat) => (
                  <div key={stat} className="flex gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" aria-hidden="true" />
                    {stat}
                  </div>
                ))}
              </div>
              <a
                href={report.href}
                className="mt-7 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Download PDF <Download className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-5 py-20 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Next step</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-normal text-slate-950">
              Want these reports generated from your own workflow?
            </h2>
          </div>
          <Link
            href="/#demo"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Request trial access <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
