import Link from "next/link";
import { CheckCircle2, Mail } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-20 text-white md:px-8">
      <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-cyan-300 text-slate-950">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </div>
        <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-cyan-200">Enquiry received</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-normal md:text-6xl">
          Thanks for requesting SentraRisk trial access.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Your details have been sent to Eoin. We will review your organisation details and come back with the right trial setup or demo next step.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-md bg-cyan-300 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Back to website
          </Link>
          <a
            href="mailto:eoin@sentrarisksystems.com"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Email Eoin <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
