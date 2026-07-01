import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Shield } from "lucide-react";

const REGISTER_URL = "https://app.sentrarisksystems.com/register";

type SeoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta?: string;
  points: string[];
  sections: Array<{
    title: string;
    text: string;
  }>;
  useCases: string[];
  proof: Array<{
    value: string;
    label: string;
  }>;
  icon?: LucideIcon;
};

export function SeoLandingPage({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta = "View platform",
  points,
  sections,
  useCases,
  proof,
  icon: Icon = Shield,
}: SeoPageProps) {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="premium-dark px-5 py-6 text-white md:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-wide text-white">
            SentraRisk Systems
          </Link>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-200">
            <Link href="/#pricing" className="hidden hover:text-white sm:inline">
              Pricing
            </Link>
            <Link href={REGISTER_URL} className="rounded-md bg-cyan-300 px-4 py-2 font-semibold text-slate-950 hover:bg-cyan-200">
              Request trial
            </Link>
          </div>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">{eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-normal md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={REGISTER_URL}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cyan-300 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                {primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/#platform"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {secondaryCta}
              </Link>
            </div>
          </div>

          <div className="rounded-md border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-cyan-300 text-slate-950">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-cyan-200">Built for review workflows</p>
            <div className="mt-5 space-y-4">
              {points.map((point) => (
                <div key={point} className="flex gap-3 rounded-md border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden="true" />
                  <p className="text-sm leading-6 text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {proof.map((item) => (
            <div key={item.label} className="rounded-md border border-slate-200 bg-slate-50 p-6">
              <p className="text-3xl font-semibold text-slate-950">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {sections.map((section) => (
            <article key={section.title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-normal text-slate-950">{section.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{section.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Use cases</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950">
              Practical risk review for real finance work.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              SentraRisk helps teams move from manual checks and spreadsheets into a structured review workflow with clear evidence.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {useCases.map((item) => (
              <div key={item} className="flex gap-3 rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" aria-hidden="true" />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Start with a trial enquiry</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal">
              See whether SentraRisk fits your workflow before committing to a plan.
            </h2>
          </div>
          <Link
            href={REGISTER_URL}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cyan-300 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Request trial access <Mail className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
