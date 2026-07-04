import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Rocket } from "lucide-react";
import { pilotDeliverables, pilotTimeline } from "../marketing-content";

const REGISTER_URL = "https://app.sentrarisksystems.com/register";

export const metadata: Metadata = {
  title: "SentraRisk Pilot Programme | Fraud-Risk Trial Access",
  description:
    "Run a focused SentraRisk pilot for Xero supplier bill review, transaction risk scoring, compliance packs, and fraud-risk reporting.",
};

export default function PilotProgrammePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="premium-dark px-5 py-6 text-white md:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-wide text-white">
            SentraRisk Systems
          </Link>
          <Link href={REGISTER_URL} className="rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
            Request pilot
          </Link>
        </nav>
        <div className="mx-auto grid max-w-7xl gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Pilot programme</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-normal md:text-6xl">
              Prove SentraRisk with real workflows before a full rollout.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A focused pilot for accountants, virtual CFOs, SMEs, and finance teams that want to test risk scoring, Xero-supported imports, alert review, and report outputs.
            </p>
            <Link
              href={REGISTER_URL}
              className="mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cyan-300 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Request pilot access <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="rounded-md border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-cyan-300 text-slate-950">
              <Rocket className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-cyan-200">What is included</p>
            <div className="mt-5 space-y-4">
              {pilotDeliverables.map((item) => (
                <div key={item} className="flex gap-3 rounded-md border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden="true" />
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cyan-700">Pilot timeline</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950">
              A practical 14-day path from setup to decision.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pilotTimeline.map((step) => (
              <article key={step.phase} className="rounded-md border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-sm font-semibold text-cyan-700">{step.timing}</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">{step.phase}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ["Best fit", "Accountants, virtual CFOs, SME finance teams, and compliance operators."],
            ["Inputs", "Xero supplier bills, sample transaction files, dashboard review, or API scoring pathway."],
            ["Output", "A clear deployment recommendation, sample reports, pricing route, and next controls to activate."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Ready to test it?</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal">
              Start with a focused workflow and turn feedback into a production setup.
            </h2>
          </div>
          <Link
            href={REGISTER_URL}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cyan-300 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Request pilot access <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
