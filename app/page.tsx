"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  FileCheck2,
  Landmark,
  Mail,
  MapPin,
  SearchCheck,
  ShieldCheck,
  Store,
  Users,
} from "lucide-react";

const APP_URL = "https://app.sentrarisksystems.com";
const CONTACT_EMAIL = "support@sentrarisksystems.com";
const LINKEDIN_URL = "https://www.linkedin.com/company/sentrarisk-systems/";

const reviewAreas = [
  {
    icon: FileCheck2,
    title: "Duplicate payment risk",
    text: "Bring possible duplicate invoices and payments to the team’s attention before approval.",
  },
  {
    icon: Landmark,
    title: "Supplier detail changes",
    text: "Make changed payment details and new beneficiaries easier to review before funds are released.",
  },
  {
    icon: CircleGauge,
    title: "Unusual payment activity",
    text: "Focus attention on transactions that do not look consistent with normal business activity.",
  },
  {
    icon: SearchCheck,
    title: "Missing support",
    text: "Identify payments that may need clearer invoices, approvals, ownership, or supporting records.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Bring in finance data",
    text: "Use supported accounting exports, structured files, or a guided setup route.",
  },
  {
    number: "02",
    title: "Review what needs attention",
    text: "SentraRisk organises potential payment risks into a clear review queue.",
  },
  {
    number: "03",
    title: "Make the decision",
    text: "Your team checks the context, records its decision, and keeps control of the outcome.",
  },
  {
    number: "04",
    title: "Keep a reliable record",
    text: "Export a clear record of the review for management, clients, or internal assurance.",
  },
];

const solutions = [
  {
    icon: Building2,
    title: "Invoice-heavy SMEs",
    text: "For invoice-heavy SMEs that want clearer payment oversight without replacing their accounting system.",
    href: "/industries/invoice-heavy-smes",
    link: "Explore SME use",
  },
  {
    icon: Users,
    title: "Accounting practices",
    text: "For firms that need a consistent way to review payment risk across multiple client organisations.",
    href: "/industries/accounting-practices",
    link: "Explore practice use",
  },
  {
    icon: MapPin,
    title: "Multi-location businesses",
    text: "For central teams managing finance records, approvals, suppliers, and operational input across several sites.",
    href: "/industries/multi-location-businesses",
    link: "Explore multi-site use",
  },
  {
    icon: Store,
    title: "Motor dealerships",
    text: "A focused workflow for customer deposits, payer details, refund decisions, and supporting records.",
    href: "/industries/motor-dealerships",
    link: "Explore dealer use",
  },
];

const coreOffers = [
  {
    icon: CircleGauge,
    title: "Payment-risk monitoring",
    price: "From €450/month",
    text: "Ongoing review of payment and invoice activity, with clear priorities, ownership, review history, and management reporting.",
  },
  {
    icon: Users,
    title: "Accounting practice oversight",
    price: "From €1,750/month",
    text: "A consistent review process across multiple client organisations, with controlled access, clear ownership, and audit-trail exports.",
  },
  {
    icon: FileCheck2,
    title: "Once-off payment control review",
    price: "From €349",
    text: "A defined review of payment controls, supplier setup, approval evidence, duplicate risk, and areas that may need attention.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "€450",
    cadence: "/month",
    audience: "Small finance teams",
    difference: "Establish one controlled review process",
    capacity: ["1", "3", "5,000/mo"],
    description: "For one business that needs a clear place to identify, review, and record payment exceptions.",
    features: [
      "Structured file and accounting-data imports",
      "Prioritised payment-risk review queue",
      "Recorded decisions and standard reports",
      "Guided onboarding for one team",
    ],
    href: "#contact",
    featured: false,
  },
  {
    name: "Growth",
    price: "€950",
    cadence: "/month",
    audience: "Growing finance teams",
    difference: "Coordinate several teams and report to management",
    capacity: ["5", "5", "12,000/mo"],
    description: "For an established SME that needs wider oversight, alerts, and management-ready evidence.",
    features: [
      "Everything in Starter",
      "Email risk alerts",
      "Client control packs",
      "Multi-workspace supplier oversight",
      "Management-ready exports",
    ],
    href: "#contact",
    featured: true,
  },
  {
    name: "Practice",
    price: "From €1,750",
    cadence: "/month",
    audience: "Accountants and advisers",
    difference: "Operate a consistent review service across clients",
    capacity: ["5 included", "10", "25,000/mo"],
    description: "For accounting and advisory teams applying one controlled process across client organisations.",
    features: [
      "Everything in Growth",
      "Five active client workspaces included",
      "Additional client workspaces available",
      "API access",
      "Transaction audit-trail PDFs",
      "Practice-level controls and onboarding",
    ],
    href: "#contact",
    featured: false,
  },
  {
    name: "Enterprise",
    price: "Enquire now",
    cadence: "",
    audience: "Complex or high-volume teams",
    difference: "Design capacity, controls, and rollout around your operation",
    capacity: ["Custom", "Custom", "100k+/mo"],
    description: "For organisations processing more than 100,000 records per month or requiring a tailored setup.",
    features: [
      "Everything in Practice",
      "Capacity designed around your operation",
      "Tailored implementation",
      "Advanced access controls",
      "Custom reporting requirements",
      "Priority onboarding and support",
    ],
    href: "#contact",
    featured: false,
  },
];

const faqs = [
  {
    question: "Does SentraRisk replace our accounting software?",
    answer:
      "No. SentraRisk adds a payment-risk review layer around existing finance activity. It is designed to work alongside accounting tools and established approval processes.",
  },
  {
    question: "Does SentraRisk make payment decisions?",
    answer:
      "No. SentraRisk helps your team identify and organise items that may need attention. Authorised people remain responsible for reviewing the context and deciding what happens next.",
  },
  {
    question: "What accounting data can we use?",
    answer:
      "Teams can begin with supported exports and structured files from Xero, Sage, QuickBooks, and spreadsheets. The appropriate setup depends on your organisation and the data available.",
  },
  {
    question: "Can we test it before committing?",
    answer:
      "Yes. SentraRisk is accepting a limited number of private beta organisations. Suitable data, authorised users, boundaries, success measures, and any commercial terms are agreed before a workspace is created.",
  },
];

const interests = [
  "Private beta access",
  "Starter plan - €450/month",
  "Growth plan - €950/month",
  "Practice plan - from €1,750/month",
  "Enterprise plan - enquire now",
  "Payment-risk monitoring",
  "Accounting practice solution",
  "Once-off payment review",
  "KYC verification",
  "Invoice and cashflow follow-up",
  "Dealership deposit controls",
  "Scam text and email check",
];

function Logo() {
  return (
    <span className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200">
        <Image
          src="/sentrarisk-logo.svg"
          alt=""
          width={36}
          height={36}
          className="h-9 w-9 rounded-lg"
          priority
        />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-semibold text-slate-950">SentraRisk</span>
        <span className="block text-[11px] font-semibold uppercase text-cyan-800">Systems</span>
      </span>
    </span>
  );
}

function SectionHeading({
  label,
  title,
  text,
  light = false,
}: {
  label: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${light ? "text-cyan-300" : "text-cyan-800"}`}>
        {label}
      </p>
      <h2 className={`mt-4 text-3xl font-semibold leading-tight md:text-4xl ${light ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 max-w-2xl text-base leading-7 ${light ? "text-slate-300" : "text-slate-600"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = React.useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = React.useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const field = (name: string) => String(form.get(name) || "").trim();

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: field("name"),
          email: field("email"),
          company: field("company"),
          role: field("role"),
          organization_size: field("organisation_size"),
          main_interest: field("main_interest"),
          message: field("message"),
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "The enquiry could not be sent.");
      }

      router.push("/thank-you");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "The enquiry could not be sent.");
      setStatus("error");
    }
  }

  const inputClass =
    "h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10";

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="flex items-start gap-3">
        <Mail className="mt-0.5 h-5 w-5 text-cyan-700" aria-hidden="true" />
        <div>
          <h3 className="text-lg font-semibold text-slate-950">Contact SentraRisk</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Tell us which plan or payment process you would like to discuss. We will respond with a suitable scope and next step.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Full name
          <input required name="name" className={inputClass} placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Work email
          <input required type="email" name="email" className={inputClass} placeholder="name@company.com" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Company
          <input required name="company" className={inputClass} placeholder="Company name" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Role
          <input name="role" className={inputClass} placeholder="Finance manager, owner..." />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Organisation size
          <select name="organisation_size" defaultValue="" className={inputClass}>
            <option value="">Select size</option>
            <option value="1-10">1-10 people</option>
            <option value="11-50">11-50 people</option>
            <option value="51-250">51-250 people</option>
            <option value="250+">250+ people</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Plan or service
          <select name="main_interest" defaultValue={interests[0]} className={inputClass}>
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-medium text-slate-700">
        What would you like to discuss?
        <textarea
          name="message"
          className="min-h-24 rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
          placeholder="A brief outline of your current payment review process."
        />
      </label>

      <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-slate-600">
        <input required type="checkbox" name="privacy_acknowledgement" className="mt-1 h-4 w-4 shrink-0 accent-cyan-700" />
        <span>
          I agree that SentraRisk may use these details to respond to my enquiry in accordance with the{" "}
          <Link href="/privacy-policy" className="font-semibold text-cyan-800 hover:text-cyan-950">
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {error ? (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Send enquiry"}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 px-5 backdrop-blur md:px-8">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4">
          <a href="#" aria-label="SentraRisk Systems home">
            <Logo />
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            <a href="#product" className="transition hover:text-slate-950">Product</a>
            <Link href="/industries" className="transition hover:text-slate-950">Industries</Link>
            <Link href="/services" className="transition hover:text-slate-950">Services</Link>
            <a href="#pricing" className="transition hover:text-slate-950">Pricing</a>
            <Link href="/trust" className="transition hover:text-slate-950">Trust</Link>
            <a href="#contact" className="transition hover:text-slate-950">Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit SentraRisk Systems on LinkedIn"
              title="SentraRisk Systems on LinkedIn"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-[#0a66c2] hover:bg-slate-50 hover:text-[#0a66c2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a66c2]"
            >
              <span className="text-sm font-bold leading-none" aria-hidden="true">in</span>
            </a>
            <a href={APP_URL} className="hidden px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 sm:block">
              Log in
            </a>
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Request beta access
            </a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-[720px] overflow-hidden bg-[#07131f] text-white md:min-h-[760px]">
        <Image
          src="/sentrarisk-payment-control-hero.png"
          alt="Payment and invoice signals passing through a secure review checkpoint"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#07131f_0%,rgba(7,19,31,0.98)_42%,rgba(7,19,31,0.68)_68%,rgba(7,19,31,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,19,31,0.12)_0%,rgba(7,19,31,0)_55%,rgba(7,19,31,0.72)_100%)]" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 py-20 md:min-h-[760px] md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border-l-2 border-cyan-300 pl-3 text-sm font-semibold text-cyan-200">
              Private beta for invoice-heavy finance teams
            </div>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              Catch payment risks before money leaves.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
              SentraRisk helps finance teams identify possible duplicate payments, supplier-detail changes,
              unusual activity, and missing support before funds are released. Use structured data exported
              from the finance tools your team already knows.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Apply for beta access <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#product"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/30 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See how it works
              </a>
            </div>

            <div className="mt-10 grid max-w-3xl gap-3 text-sm text-slate-300 sm:flex sm:items-center sm:justify-between sm:gap-8">
              {["Built in Ireland", "People stay in control", "Works with your finance software"].map((item) => (
                <div key={item} className="flex items-center gap-2 whitespace-nowrap">
                  <Check className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-cyan-900/15 bg-cyan-50 px-5 py-5 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-950">Now onboarding a limited number of private beta organisations.</p>
            <p className="mt-1 text-sm text-slate-600">Every workspace begins with a fit discussion, agreed test scope, and guided onboarding. There is no self-service checkout.</p>
          </div>
          <a href="#contact" className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white hover:bg-slate-800">Request access <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-800">Supports familiar finance data</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Begin with supported exports and structured files without replacing the tools your team already knows.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:justify-end">
            <span className="text-xl font-semibold text-[#13b5ea]">Xero</span>
            <span className="text-xl font-semibold text-[#00a376]">Sage</span>
            <span className="text-xl font-semibold text-[#2ca01c]">QuickBooks</span>
          </div>
        </div>
      </section>

      <section id="product" className="border-b border-slate-200 bg-slate-50 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <SectionHeading
              label="The product"
              title="See the risks. Review the context. Keep the decision."
              text="SentraRisk gives authorised teams one place to review payment concerns and record what happened. It supports professional judgement instead of trying to replace it."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Clear priorities instead of another spreadsheet",
                "A reliable record of reviews and decisions",
                "Visibility across invoices and transactions",
                "Management-ready reporting",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 border-t border-slate-300 pt-3 text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 md:grid-cols-3">
            {[
              ["Review", "Bring potential payment concerns into one controlled queue."],
              ["Decide", "Keep authorised people responsible for the outcome."],
              ["Record", "Retain a clear history of the review and decision."],
            ].map(([title, text]) => (
              <div key={title} className="bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-800">{title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="What it highlights"
            title="The payment concerns that deserve a closer look."
            text="SentraRisk applies more than 50 transaction checks to organise potential concerns. Public descriptions stay intentionally high-level so the control logic remains protected."
          />

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
            {reviewAreas.map((area) => {
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

      <section className="bg-[#0b2730] px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="How it works"
            title="A straightforward review process."
            text="The public workflow explains what your team does without exposing the underlying detection logic, internal controls, or technical methods."
            light
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item) => (
              <div key={item.number} className="border-t border-white/20 pt-5">
                <span className="font-mono text-sm text-cyan-300">{item.number}</span>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="border-b border-slate-200 bg-white px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-800">Why SentraRisk</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
              Accounting software records activity. SentraRisk adds another opportunity to question it.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
              SentraRisk sits beside existing finance processes and helps teams focus on payment risks that can be
              difficult to see during routine administration.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              The review process helps teams organise attention around transactions that need a closer look. Authorised
              people verify the context and remain accountable for every outcome.
            </p>
          </div>
          <div className="border-l-2 border-cyan-600 pl-6 md:pl-8">
            <ShieldCheck className="h-8 w-8 text-cyan-700" aria-hidden="true" />
            <p className="mt-5 text-xl font-semibold leading-8 text-slate-950">
              An additional control layer before payment, with a clear record after review.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-600">
              {[
                "Designed for authorised organisational access",
                "Privacy, security, and data-processing information published",
                "Human review remains part of the process",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
            <Link href="/trust" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-800 hover:text-cyan-950">
              Visit the Trust Centre <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-slate-200 bg-slate-50 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#07131f]">
                <Image
                  src="/sentrarisk-logo.svg"
                  alt="SentraRisk Systems"
                  width={52}
                  height={52}
                  className="h-12 w-12"
                />
              </span>
              <div>
                <p className="text-lg font-semibold text-slate-950">Eoin Carey</p>
                <p className="mt-1 text-sm text-cyan-800">Founder, SentraRisk Systems</p>
              </div>
            </div>
            <div className="mt-7 border-t border-slate-200 pt-5">
              <p className="text-sm leading-6 text-slate-600">
                Based in Ireland and building practical payment oversight for growing businesses.
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-800">The company</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
              Built around a straightforward belief: important payments deserve a clear second look.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600">
              SentraRisk Systems was founded by Eoin Carey to make stronger payment oversight more accessible to
              growing businesses and accounting practices without forcing them to replace familiar finance software.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
              Product direction has been shaped through conversations with people working across finance,
              accounting, audit, quality assurance, and operational management. The goal is practical: help
              authorised teams ask better questions before payment and keep a dependable record of the decision.
            </p>
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-slate-50 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Solutions"
            title="Built around teams that handle real payment pressure."
            text="The core platform is designed for finance teams and accounting practices. Focused services are available where a narrower review is needed."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <article key={solution.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <Icon className="h-6 w-6 text-cyan-700" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold">{solution.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{solution.text}</p>
                  <Link href={solution.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-800 hover:text-cyan-950">
                    {solution.link} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            label="Illustrative review scenario"
            title="A familiar payment can still deserve a second look."
            text="This example shows the type of review workflow SentraRisk supports. It is illustrative and does not disclose the underlying detection logic."
          />
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            {[
              ["Signal", "Two supplier payments appear closely related, but the beneficiary details and references are not fully consistent."],
              ["Review", "The finance team checks the supporting invoice, supplier record, approval history, and payment context."],
              ["Decision", "An authorised reviewer records whether the payment should proceed, be held for clarification, or be escalated."],
              ["Evidence", "The organisation keeps a clear record of what was reviewed, who made the decision, and why."],
            ].map(([title, text], index) => (
              <div key={title} className="grid gap-3 border-b border-slate-200 p-6 last:border-b-0 sm:grid-cols-[7rem_1fr]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-cyan-800">0{index + 1}</span>
                  <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-slate-200 bg-white px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              label="Core services"
              title="Three clear ways to begin."
              text="Start with ongoing monitoring, a multi-client practice setup, or a defined once-off review. Specialist services are listed separately so the core product remains clear."
            />
            <Link
              href="/services"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              View all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 md:grid-cols-3">
            {coreOffers.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="bg-white p-6">
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-6 w-6 shrink-0 text-cyan-700" aria-hidden="true" />
                    <span className="text-xs font-semibold text-cyan-900">{service.price}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
                </article>
              );
            })}
          </div>

          <p className="mt-5 max-w-3xl text-xs leading-5 text-slate-500">
            Specialist KYC, cashflow follow-up, dealership, and suspicious-message services remain available on the full Services page. Scope and final pricing are agreed before work begins.
          </p>
        </div>
      </section>

      <section id="pricing" className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              label="Commercial model"
              title="Beta access is scoped before onboarding."
              text="The levels below show the intended fit after beta. Access, data volume, users, success measures, and commercial terms are confirmed with each organisation before activation."
            />
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-800 hover:text-cyan-950">
              Discuss beta access <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-lg border p-6 ${
                  plan.featured
                    ? "border-slate-950 bg-slate-950 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)]"
                    : "border-slate-200 bg-white"
                }`}
              >
                {plan.featured ? (
                  <span className="absolute right-4 top-4 rounded bg-cyan-300 px-2 py-1 text-xs font-semibold text-slate-950">
                    Most popular
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className={`mt-1 text-xs font-semibold uppercase ${plan.featured ? "text-cyan-300" : "text-cyan-800"}`}>{plan.audience}</p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="text-3xl font-semibold">{plan.price}</span>
                  <span className={`pb-1 text-sm ${plan.featured ? "text-slate-300" : "text-slate-500"}`}>{plan.cadence}</span>
                </div>
                <p className={`mt-4 min-h-20 text-sm leading-6 ${plan.featured ? "text-slate-300" : "text-slate-600"}`}>
                  {plan.description}
                </p>
                <div className={`rounded-lg border p-3 ${plan.featured ? "border-white/15 bg-white/[0.06]" : "border-slate-200 bg-slate-50"}`}>
                  <div className={`text-xs font-semibold uppercase ${plan.featured ? "text-cyan-300" : "text-cyan-800"}`}>What this tier adds</div>
                  <div className={`mt-1 text-sm font-semibold leading-5 ${plan.featured ? "text-white" : "text-slate-950"}`}>{plan.difference}</div>
                </div>
                <dl className={`mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-lg border text-center ${plan.featured ? "border-white/15 bg-white/15" : "border-slate-200 bg-slate-200"}`}>
                  {plan.capacity.map((item, index) => (
                    <div key={`${plan.name}-${index}-${item}`} className={`px-1.5 py-2.5 ${plan.featured ? "bg-slate-950" : "bg-white"}`}>
                      <dt className={`text-[10px] font-semibold uppercase ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>{["Workspaces", "Users", "Volume"][index]}</dt>
                      <dd className={`mt-1 text-xs font-semibold leading-4 ${plan.featured ? "text-white" : "text-slate-950"}`}>{item}</dd>
                    </div>
                  ))}
                </dl>
                <div className={`my-5 h-px ${plan.featured ? "bg-white/15" : "bg-slate-200"}`} />
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-5">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-cyan-300" : "text-cyan-700"}`} aria-hidden="true" />
                      <span className={plan.featured ? "text-slate-200" : "text-slate-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  className={`mt-7 inline-flex h-11 w-full items-center justify-center rounded-lg text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-white text-slate-950 hover:bg-slate-100"
                      : "bg-slate-950 text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Enquire now" : "Discuss beta access"}
                </a>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-slate-500">
            Indicative prices exclude VAT where applicable. No online purchase is taken: beta scope, final limits, onboarding, and support arrangements are confirmed in writing before activation.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHeading
            label="Questions"
            title="What teams ask before starting."
            text="A focused payment-risk assessment is the quickest way to see whether SentraRisk fits your current process."
          />
          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {faqs.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-950">
                  {item.question}
                  <span className="text-xl font-normal text-cyan-800 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              label="Private beta"
              title="Apply with the payment process you already have."
              text="Tell us about your finance workflow, review volume, and the risks you want to reduce. We will confirm whether SentraRisk is a suitable beta fit before creating a workspace."
            />
            <div className="mt-8 space-y-4">
              {[
                "A focused discussion of your current payment-review needs",
                "A controlled beta scope using suitable business data",
                "A clear recommendation on fit, onboarding, and next steps",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
              <p>Prefer email?</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 inline-block font-semibold text-cyan-800 hover:text-cyan-950">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#07131f] px-5 py-10 text-slate-300 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <div>
              <div className="inline-flex rounded-lg bg-white p-2">
                <Logo />
              </div>
              <p className="mt-4 max-w-sm text-sm leading-6">
                Payment-risk monitoring that helps finance teams act before money leaves.
              </p>
            </div>
            <div className="flex max-w-2xl flex-wrap gap-x-5 gap-y-3 text-sm">
              <Link href="/pilot-programme" className="hover:text-white">Private beta</Link>
              <Link href="/services" className="hover:text-white">Services</Link>
              <Link href="/industries" className="hover:text-white">Industries</Link>
              <Link href="/trust" className="hover:text-white">Trust Centre</Link>
              <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
              <Link href="/cookie-policy" className="hover:text-white">Cookies</Link>
              <Link href="/terms-of-service" className="hover:text-white">Terms</Link>
              <Link href="/eula" className="hover:text-white">EULA</Link>
              <Link href="/data-processing" className="hover:text-white">Data processing</Link>
              <Link href="/refund-policy" className="hover:text-white">Refunds</Link>
              <Link href="/security-statement" className="hover:text-white">Security</Link>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
          <div className="mt-8 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
            <p>© 2026 SentraRisk Systems. All rights reserved.</p>
            <p>Built in Ireland.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
