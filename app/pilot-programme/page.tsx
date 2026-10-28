import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, Gauge, Rocket, ShieldCheck } from "lucide-react";
import { pilotDeliverables, pilotTimeline } from "../marketing-content";

const PILOT_ENQUIRY_URL = "/#contact";

export const metadata: Metadata = {
  title: "SentraRisk Private Beta | Test Payment-Risk Monitoring",
  description:
    "Apply for the SentraRisk private beta with agreed success measures, guided setup, and a clear rollout decision.",
};

export default function PilotProgrammePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="premium-dark px-5 py-6 text-white md:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-wide text-white">
            SentraRisk Systems
          </Link>
          <Link href={PILOT_ENQUIRY_URL} className="rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
            Request beta access
          </Link>
        </nav>
        <div className="mx-auto grid max-w-7xl gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Guided private beta</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-normal md:text-6xl">
              Test SentraRisk against an agreed business need.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A structured beta for selected finance teams and accounting practices. Scope, suitable data, users,
              success measures, and any commercial terms are agreed before access is provided.
            </p>
            <Link
              href={PILOT_ENQUIRY_URL}
              className="mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cyan-300 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Apply for beta access <ArrowRight className="h-4 w-4" aria-hidden="true" />
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

      <section className="border-b border-slate-200 bg-white px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 md:grid-cols-3">
            {[
              {
                icon: FileCheck2,
                title: "Fixed scope",
                text: "The data, workflow, users, responsibilities, and boundaries are confirmed in writing.",
              },
              {
                icon: Gauge,
                title: "Measured outcome",
                text: "The beta is judged against agreed measures rather than a general product demonstration.",
              },
              {
                icon: ShieldCheck,
                title: "Controlled use",
                text: "Only authorised users and suitable business data are included in the agreed beta.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="bg-white p-6">
                  <Icon className="h-6 w-6 text-cyan-700" aria-hidden="true" />
                  <h2 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cyan-700">Beta process</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950">
              A practical path from setup to decision.
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

      <section className="border-y border-slate-200 bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Success measures</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950">
              Agree what “useful” means before starting.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Measures are selected for the organisation and recorded in the beta scope. No result is guaranteed,
              and a wider rollout is recommended only where the evidence supports it.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "The agreed data can be imported and reviewed reliably",
              "Relevant items are explained clearly enough for a reviewer to act",
              "Decisions, ownership, and supporting notes are recorded consistently",
              "The team can produce a useful review record for management",
              "Users can navigate the relevant workflow with reasonable support",
              "The commercial value justifies the proposed subscription",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 border-t border-slate-200 pt-4 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Best fit", "Accountants, virtual CFOs, SME finance teams, and compliance operators."],
            ["Focus", "Payment-risk prevention, management visibility, and finance-team confidence."],
            ["Commercial terms", "Any fee or future subscription is quoted and accepted before setup begins."],
            ["Output", "A clear recommendation to roll out, adjust the scope, or stop after the beta."],
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
              Start with a controlled beta and make the next decision from evidence.
            </h2>
          </div>
          <Link
            href={PILOT_ENQUIRY_URL}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cyan-300 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Apply for beta access <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
