import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, ShieldCheck } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#f7faf9] px-5 py-10 text-slate-950 md:px-8">
      <section className="mx-auto flex min-h-[82vh] max-w-5xl flex-col justify-center">
        <div className="w-fit rounded-full border border-cyan-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-800">
          Enquiry received
        </div>
        <div className="mt-7 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-slate-950 text-cyan-200">
              <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-normal text-slate-950 md:text-6xl">
              Thanks, your SentraRisk enquiry is now with us.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              We have received your details and sent a confirmation email. We will review your organisation, interest area, and message before coming back with the most relevant next step.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#services"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View services <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="mailto:support@sentrarisksystems.com"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-950 transition hover:border-slate-400"
              >
                Email support <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-cyan-50 text-cyan-800">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-slate-950">What happens next</h2>
                <p className="mt-1 text-sm text-slate-500">A simple review before any sensitive data is requested.</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {[
                "We review your enquiry and the service area you selected.",
                "If there is a fit, we suggest a short discovery or demo call.",
                "Any next step is agreed before client, payment, or accounting data is shared.",
              ].map((item, index) => (
                <div key={item} className="flex gap-3 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
