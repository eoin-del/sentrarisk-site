import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  ListChecks,
  ShieldCheck,
} from "lucide-react";

type IndustryPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  challenges: Array<{
    title: string;
    text: string;
  }>;
  workflow: string[];
  outcomes: string[];
  boundary: string;
};

export function IndustryLandingPage({
  eyebrow,
  title,
  description,
  icon: Icon,
  challenges,
  workflow,
  outcomes,
  boundary,
}: IndustryPageProps) {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <nav className="border-b border-white/10 bg-[#07131f] px-5 py-4 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold">SentraRisk Systems</Link>
          <div className="flex items-center gap-4">
            <Link href="/trust" className="hidden text-sm font-medium text-slate-300 hover:text-white sm:block">
              Trust Centre
            </Link>
            <Link
              href="/#contact"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-cyan-300 px-4 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
            >
              Request an assessment
            </Link>
          </div>
        </div>
      </nav>

      <section className="bg-[#07131f] px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">{eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
              >
                Discuss your process <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/pilot-programme"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/25 px-6 text-sm font-semibold text-white hover:bg-white/10"
              >
                View private beta
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-300 text-slate-950">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">Where SentraRisk fits</p>
            <p className="mt-4 text-xl font-semibold leading-8">
              An additional review layer around existing finance activity, approvals, and professional judgement.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-300">{boundary}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-800">Common pressure points</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              Start with the way the organisation already works.
            </h2>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 md:grid-cols-3">
            {challenges.map((challenge) => (
              <article key={challenge.title} className="bg-white p-6">
                <FileCheck2 className="h-6 w-6 text-cyan-700" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold">{challenge.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{challenge.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <ListChecks className="h-6 w-6 text-cyan-700" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-800">Practical workflow</p>
            </div>
            <h2 className="mt-5 text-3xl font-semibold">What the team can do.</h2>
            <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
              {workflow.map((item, index) => (
                <div key={item} className="grid grid-cols-[2rem_1fr] gap-3 py-4">
                  <span className="font-mono text-xs text-cyan-800">0{index + 1}</span>
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-cyan-700" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-800">Useful outcomes</p>
            </div>
            <h2 className="mt-5 text-3xl font-semibold">What better oversight looks like.</h2>
            <div className="mt-7 grid gap-3">
              {outcomes.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" aria-hidden="true" />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b2730] px-5 py-16 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">Start with fit</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold">
              Discuss the current process before deciding whether another system is needed.
            </h2>
          </div>
          <Link
            href="/#contact"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-slate-950 hover:bg-slate-100"
          >
            Request an assessment <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
