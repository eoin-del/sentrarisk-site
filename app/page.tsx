"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  CircleCheckBig,
  Code2,
  Cloud,
  Gauge,
  Landmark,
  LockKeyhole,
  Mail,
  Rocket,
  Shield,
  Siren,
  Store,
  ClipboardCheck,
  Users,
} from "lucide-react";

const APP_URL = "https://app.sentrarisksystems.com";
const CONTACT_EMAIL = "support@sentrarisksystems.com";
const LINKEDIN_URL = "https://www.linkedin.com/company/sentrarisk-systems/";
const REGISTER_URL = `${APP_URL}/register`;
const TRIAL_ENQUIRY_URL = REGISTER_URL;

const capabilities = [
  {
    icon: Gauge,
    title: "Payment-risk review",
    text: "Review duplicate-looking payments, new suppliers, repeated large payments, same-day exposure, and threshold patterns with clear reasons.",
  },
  {
    icon: Siren,
    title: "Structured review workflow",
    text: "Route flagged transactions into a practical workflow with status, ownership, reviewer notes, and a decision trail.",
  },
  {
    icon: ClipboardCheck,
    title: "Client Control Pack",
    text: "Turn monthly review work into a clear client pack with findings, recommended actions, review coverage, and exportable evidence.",
  },
  {
    icon: Cloud,
    title: "Client-level Xero imports",
    text: "Connect Xero by client, import supplier bills, refresh existing records, and keep client workflows separate.",
  },
  {
    icon: Users,
    title: "Staff payment file review",
    text: "Review uploaded staff payment files for duplicate-looking payments, unusual beneficiaries, abnormal amounts, and evidence-ready decision notes.",
  },
  {
    icon: Code2,
    title: "Spreadsheet and API routes",
    text: "Start with Xero, uploaded files, or API-based scoring, then connect review outputs to internal workflows when needed.",
  },
];

const metrics = [
  ["Irish-built", "Focused on SMEs and advisors"],
  ["Evidence-led", "Notes, reports, and review trails"],
  ["Human-led", "Final judgement stays with the user"],
];

const premiumStats = [
  ["Import", "Client-level supplier and payment data"],
  ["Review", "Clear risk reasons and evidence"],
  ["Record", "Reviewer notes and decision ownership"],
  ["Report", "Client-ready control packs"],
];

const comparisonRows = [
  {
    without: "Manual spreadsheet checks across bills, payments, and client files.",
    with: "Centralised transaction review with clear scoring, reasons, and status.",
  },
  {
    without: "Duplicate-looking payments and supplier changes can be missed until after payment.",
    with: "Duplicate indicators, new beneficiaries, unusual amounts, and threshold patterns are surfaced earlier.",
  },
  {
    without: "Review notes, evidence, and follow-up actions sit across emails or separate files.",
    with: "Reviewer notes, ownership, archive history, and Client Control Packs stay together.",
  },
  {
    without: "Difficult to show clients or leadership what was reviewed and why it mattered.",
    with: "Audit-ready reports explain risk drivers, outcomes, and recommended next controls.",
  },
];

const enterpriseProof = [
  ["Built around payment control", "Supplier bills, uploaded records, staff payment files, and API-scored transactions reviewed in one operating layer."],
  ["Evidence from the start", "Alert ownership, decision notes, archive history, review status, and control-pack exports built into the process."],
  ["Designed for lean finance teams", "Clear visibility without requiring an enterprise compliance department."],
];

const operatingPrinciples = [
  "Explainable scoring before opaque automation",
  "Human approval at the centre of every decision",
  "Client and organisation-level separation",
  "Evidence outputs designed for review meetings",
];

const integrationProof = [
  "Client-level Xero supplier bills",
  "Uploaded staff payment file review",
  "Excel transaction files",
  "Duplicate and threshold-pattern checks",
  "Client Control Pack PDF exports",
  "Reviewer notes and decision trail",
];

const workflow = [
  "Create a client account and connect the right Xero organisation, upload transaction files, or add data through the API.",
  "SentraRisk scores payment activity and explains the strongest indicators behind each alert.",
  "Review the findings, record decisions, and export a Client Control Pack for the client or internal management team.",
];

const howItWorks = [
  {
    title: "Connect Xero or upload transactions",
    text: "Start with client-level Xero supplier bills, spreadsheet files, staff payment files, or transaction data from an internal workflow.",
  },
  {
    title: "Review the strongest risk signals",
    text: "SentraRisk flags duplicate-looking payments, unusual supplier changes, repeated large payments, and threshold-style patterns.",
  },
  {
    title: "Export a Client Control Pack",
    text: "Keep the final judgement human, record the decision, and produce a clear monthly output for the client or management team.",
  },
];

const audienceSegments = [
  {
    icon: Landmark,
    title: "Accountants and bookkeepers",
    text: "For practices that want to offer monthly payment-risk reviews and client-ready control packs without heavy manual work.",
  },
  {
    icon: Store,
    title: "SME finance teams",
    text: "For growing businesses that need practical checks on suppliers, bills, duplicates, and unusual payment activity.",
  },
  {
    icon: Code2,
    title: "Advisory and finance operations",
    text: "For virtual CFOs, outsourced finance teams, and operators who need clear evidence for review meetings.",
  },
];

const useCases = [
  {
    title: "Supplier and invoice fraud review",
    text: "Import supplier bills from Xero or file upload, then flag unusual amounts, new beneficiaries, duplicate-looking bills, timing anomalies, and payment patterns before review.",
    href: "/supplier-fraud-detection",
  },
  {
    title: "Client Control Packs",
    text: "Give each client a simple monthly review output covering risk grade, key findings, recommended actions, and evidence from the review.",
    href: "/accountants",
  },
  {
    title: "Payment pattern monitoring",
    text: "Escalate repeated large transactions, same-day threshold patterns, sudden supplier changes, and unusual account activity.",
    href: "#demo",
  },
  {
    title: "Staff payment file review",
    text: "Review uploaded staff payment files for duplicate-looking payments, unusual beneficiaries, abnormal amount changes, and timing issues while keeping payment processing outside SentraRisk.",
    href: "#platform",
  },
  {
    title: "Board and audit reporting",
    text: "Turn operational reviews into decision memos, control packs, and concise evidence for leadership or client meetings.",
    href: "/accountants",
  },
];

const seoLandingPages = [
  {
    title: "Xero fraud detection",
    text: "For teams that want to import Xero supplier bills and review fraud-risk indicators before payment.",
    href: "/xero-fraud-detection",
  },
  {
    title: "Supplier fraud detection",
    text: "For finance teams reviewing invoices, new suppliers, unusual payment patterns, and transaction anomalies.",
    href: "/supplier-fraud-detection",
  },
  {
    title: "Accountants and virtual CFOs",
    text: "For advisors who want client-ready payment-risk reviews, board summaries, and control pack exports.",
    href: "/accountants",
  },
];

const accountantOutcomes = [
  {
    title: "Add a monthly review service",
    text: "Use SentraRisk to give SME clients a clearer payment-risk review without manually rebuilding checks in spreadsheets every month.",
  },
  {
    title: "Show value beyond bookkeeping",
    text: "Turn Xero bills, uploaded payment files, and transaction data into findings, control scores, recommended actions, and client-ready PDFs.",
  },
  {
    title: "Keep the judgement human",
    text: "SentraRisk highlights risk indicators and evidence, while the accountant, bookkeeper, or finance lead keeps control of the final decision.",
  },
];

const trustSignals = [
  "Irish software company focused on SMEs, accountants, bookkeepers, and finance teams.",
  "Human review stays central: SentraRisk supports decisions with clearer signals and evidence.",
  "Uploaded staff payment files can be reviewed for payment-risk indicators without replacing payroll platforms.",
  "Built around organisation-level access, reviewer notes, audit-ready exports, and controlled onboarding.",
  "Designed for lean teams that need practical payment-risk visibility without enterprise complexity.",
];

const pilotSteps = [
  "Set up one practice, company, or client workflow using Xero, uploaded files, spreadsheet data, or sample transactions.",
  "Run a focused review period covering alerts, risk reasons, duplicate checks, and Client Control Pack quality.",
  "Leave with a clear view of fit, pricing, and the first controls worth activating.",
];

const faqs = [
  {
    question: "Who is SentraRisk built for?",
    answer:
      "SentraRisk is built for accountants, bookkeepers, SME finance teams, virtual CFOs, and operators who need a practical way to review payment risk and create evidence around fraud controls.",
  },
  {
    question: "Do we need engineers to get started?",
    answer:
      "No. Teams can begin with dashboard access, client accounts, Xero-supported imports, uploaded file review, and reporting. API access is available when you want to connect scoring directly to internal systems.",
  },
  {
    question: "Does SentraRisk support Xero?",
    answer:
      "Yes. SentraRisk supports Xero supplier bill imports and can separate imports by client account, so one client's Xero connection does not mix into another client's review workflow.",
  },
  {
    question: "Does SentraRisk process payroll?",
    answer:
      "No. SentraRisk does not run payroll, calculate payslips, manage employee payroll records, or connect directly to payroll providers. It can review uploaded payment files for duplicate-looking payments, unusual beneficiaries, abnormal amounts, and review evidence.",
  },
  {
    question: "What is a Client Control Pack?",
    answer:
      "It is a client-ready review output that summarises the control score, key payment-risk findings, recommended actions, review coverage, and supporting evidence from the period reviewed.",
  },
  {
    question: "Will every transaction become an alert?",
    answer:
      "No. The risk engine is designed to prioritise stronger indicators such as duplicate-looking payments, repeated large payments, new supplier details, threshold patterns, and unusual timing.",
  },
  {
    question: "Is the output suitable for audits or internal review?",
    answer:
      "Yes. The platform is designed around decision notes, alert ownership, risk reports, and exportable evidence for accountable review.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "€199",
    cadence: "/month",
    description: "For small companies that want supplier-risk review, basic reporting, and practical payment controls.",
    features: [
      "1 organisation",
      "3 users",
      "Xero-supported imports",
      "Uploaded file review",
      "Excel upload",
      "Transaction risk scoring",
      "Basic alerts and control packs",
      "Up to 10,000 transactions/month",
    ],
    cta: "Start 14-day trial",
    href: TRIAL_ENQUIRY_URL,
    highlighted: false,
  },
  {
    name: "Compliance",
    price: "€499",
    cadence: "/month",
    description: "For accountants, bookkeepers, virtual CFOs, and operators who need client-ready control packs.",
    features: [
      "5 users",
      "Xero supplier bill imports",
      "Uploaded payment file review",
      "Client Control Pack exports",
      "Board summary PDF",
      "Risk notes and ownership",
      "Email alerts",
      "Up to 20,000 transactions/month",
    ],
    cta: "Start 14-day trial",
    href: TRIAL_ENQUIRY_URL,
    highlighted: true,
  },
  {
    name: "Practice",
    price: "€999",
    cadence: "/month",
    description: "For accounting practices, bookkeeping firms, and advisory teams managing multiple client workflows.",
    features: [
      "10 users",
      "API keys",
      "Xero supplier bill imports",
      "Uploaded payment file review",
      "Client workflow management",
      "Bulk upload",
      "Custom review workflows",
      "Email alerts",
      "Audit trail export",
      "Up to 30,000 transactions/month",
    ],
    cta: "Start 14-day trial",
    href: TRIAL_ENQUIRY_URL,
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    cadence: "",
    description: "For tailored business needs, larger teams, regulated workflows, or custom deployment requirements.",
    features: [
      "25+ users",
      "Custom transaction limits",
      "Custom risk rules",
      "Payment-control review workflows",
      "Tailored reporting and review workflows",
      "Local/customer environment deployment",
      "Dedicated onboarding",
      "Priority support",
      "Security review support",
    ],
    cta: "Contact us",
    href: "#demo",
    highlighted: false,
  },
];

const interestOptions = [
  "Client Control Packs",
  "Xero client imports",
  "Uploaded payment file review",
  "Payment-risk review",
  "Accountant practice workflow",
  "Xero integration",
  "API or custom setup",
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-slate-200">
        <Image
          src="/sentrarisk-logo.svg"
          alt="SentraRisk Systems"
          width={36}
          height={36}
          className="h-9 w-9 rounded-md"
          priority
        />
      </span>
      <div className="leading-tight">
        <span className="block text-sm font-semibold text-slate-950">SentraRisk</span>
        <span className="block text-[11px] font-medium uppercase text-cyan-800">Systems</span>
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.08em] text-cyan-800">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-normal text-slate-950 md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-7 text-slate-600">{text}</p> : null}
    </div>
  );
}

function LinkedinMark({ size = "normal" }: { size?: "small" | "normal" }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-sm bg-[#0a66c2] font-bold leading-none text-white ${
        size === "small" ? "h-4 w-4 text-[9px]" : "h-5 w-5 text-[11px]"
      }`}
    >
      in
    </span>
  );
}

function CheckLine({ text }: { text: string }) {
  return (
    <div className="mb-3 flex gap-3 last:mb-0">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" aria-hidden="true" />
      <p className="text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function DemoForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const field = (name: string) => String(form.get(name) || "").trim();
    const subject = encodeURIComponent("SentraRisk enquiry");
    const body = encodeURIComponent(
      [
        "New SentraRisk enquiry",
        "",
        `Full name: ${field("name")}`,
        `Work email: ${field("email")}`,
        `Company: ${field("company")}`,
        `Role: ${field("role") || "Not provided"}`,
        `Organisation size: ${field("organisation_size") || "Not provided"}`,
        `Main interest: ${field("main_interest") || "Not provided"}`,
        "",
        "Message:",
        field("message") || "Not provided",
      ].join("\n"),
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="fluid-card rounded-[1.5rem] p-6"
    >
      <div className="flex items-start gap-3">
        <Users className="mt-0.5 h-6 w-6 text-cyan-700" aria-hidden="true" />
        <div>
          <p className="text-lg font-semibold text-slate-950">Send an enquiry</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Tell us a little about your organisation and we will come back to you with the right next step.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Full name
          <input
            required
            name="name"
            className="h-11 rounded-xl border border-slate-300 bg-white/90 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Work email
          <input
            required
            type="email"
            name="email"
            className="h-11 rounded-xl border border-slate-300 bg-white/90 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
            placeholder="name@company.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Company
          <input
            required
            name="company"
            className="h-11 rounded-xl border border-slate-300 bg-white/90 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
            placeholder="Company name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Role
          <input
            name="role"
            className="h-11 rounded-xl border border-slate-300 bg-white/90 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
            placeholder="Founder, compliance, finance..."
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Organisation size
          <select
            name="organisation_size"
            defaultValue=""
            className="h-11 rounded-xl border border-slate-300 bg-white/90 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
          >
            <option value="">Select size</option>
            <option value="1-10">1-10 people</option>
            <option value="11-50">11-50 people</option>
            <option value="51-250">51-250 people</option>
            <option value="250+">250+ people</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Main interest
          <select
            name="main_interest"
            defaultValue={interestOptions[0]}
            className="h-11 rounded-xl border border-slate-300 bg-white/90 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
          >
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-medium text-slate-700">
        What would you like to discuss?
        <textarea
          name="message"
          className="min-h-28 rounded-xl border border-slate-300 bg-white/90 px-3 py-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
          placeholder="Tell us about your payment-risk review, Xero workflow, uploaded file review, client control, or reporting requirements."
        />
      </label>

      <button
        type="submit"
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-800"
      >
        Send Enquiry Email <Mail className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}

function HubSpotNewsletterForm() {
  return (
    <div className="fluid-card rounded-[1.5rem] p-6">
      <p className="text-lg font-semibold text-slate-950">Join the monthly risk letter</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Practical notes for accountants, finance teams, and SMEs on supplier fraud, duplicate payments, payment-file review, and control evidence.
      </p>
      <div className="mt-6">
        <Script src="https://js-eu1.hsforms.net/forms/embed/148356926.js" strategy="afterInteractive" />
        <div
          className="hs-form-frame"
          data-region="eu1"
          data-form-id="82e9cccc-29ac-4153-9260-7fe4c1c70dd3"
          data-portal-id="148356926"
        />
      </div>
    </div>
  );
}

export default function SentraRiskLandingPage() {
  return (
    <main className="fluid-shell min-h-screen text-slate-950">
      <section className="hero-stage relative min-h-[92vh] overflow-hidden">
        {/* Hero intentionally has no mock dashboard or product preview. */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(0deg,#f7faf9_0%,rgba(247,250,249,0)_100%)]" />
        <nav className="relative z-10 mx-auto mt-4 flex max-w-7xl items-center justify-between gap-3 rounded-xl border border-white/70 bg-white/90 px-4 py-3 shadow-[0_18px_55px_rgba(15,23,42,0.07)] backdrop-blur-xl md:px-5">
          <a href="#" className="shrink-0">
            <LogoMark />
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#platform" className="hover:text-slate-950">Platform</a>
            <a href="#how-it-works" className="hover:text-slate-950">How it works</a>
            <a href="#who" className="hover:text-slate-950">Who it&apos;s for</a>
            <a href="#use-cases" className="hover:text-slate-950">Use cases</a>
            <a href="#pricing" className="hover:text-slate-950">Pricing</a>
            <a href={REGISTER_URL} className="hover:text-slate-950">Trial</a>
            <a href="#newsletter" className="hover:text-slate-950">Newsletter</a>
            <a href="#demo" className="hover:text-slate-950">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit SentraRisk Systems on LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-950 shadow-sm transition hover:border-cyan-700"
            >
              in
            </a>
            <a
              href="#pricing"
              className="hidden h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-950 shadow-sm transition hover:border-cyan-700 sm:inline-flex"
            >
              Pricing
            </a>
            <a
              href={APP_URL}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Login
            </a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(92vh-88px)] max-w-7xl items-center px-5 pb-16 pt-10 md:px-8">
          <div className="hero-copy-panel max-w-[760px] rounded-2xl p-6 md:p-8">
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-200 bg-white/90 px-4 py-2 text-sm font-semibold text-cyan-900 shadow-[0_10px_24px_rgba(14,124,134,0.07)] backdrop-blur">
              Irish-built payment-risk software
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-normal text-slate-950 md:text-5xl">
              Stop duplicate payments and supplier-risk issues before they become expensive problems.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
              SentraRisk helps accountants, bookkeepers, and growing finance teams review supplier bills, duplicate-looking payments, uploaded payment files, and unusual transaction patterns with clear evidence and human judgement.
            </p>
            <div className="mt-5 grid max-w-2xl gap-2 sm:grid-cols-2">
              {["Client-level Xero imports", "Client-ready control packs", "Human-led review workflow", "Built for Irish SMEs and advisors"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-cyan-700" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={TRIAL_ENQUIRY_URL}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Start 14-day trial <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#demo"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white/90 px-7 text-sm font-semibold text-slate-950 shadow-[0_14px_30px_rgba(15,23,42,0.08)] backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-700"
              >
                Contact us <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-8 flex max-w-3xl flex-col gap-3 border-t border-slate-200 pt-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:gap-6">
              {metrics.map(([value, label]) => (
                <div key={value} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-700" />
                  <p>
                    <span className="font-semibold text-slate-950">{value}</span>
                    <span className="text-slate-500"> · {label}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="proof-rail border-y border-white/70 px-5 py-8 backdrop-blur md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {premiumStats.map(([value, label]) => (
            <div key={value} className="border-l border-cyan-700/25 pl-5">
              <span className="text-xl font-semibold text-slate-950">{value}</span>
              <p className="mt-1 max-w-48 text-sm font-medium leading-5 text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="fluid-section px-5 py-24 md:px-8">
        <div className="fluid-inner mx-auto max-w-7xl">
          <div className="editorial-panel grid gap-10 rounded-2xl p-6 md:p-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">Why it matters</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                Replace scattered checks with a review process your team can stand over.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                Finance teams already know fraud risk matters. The harder part is finding the warning signs early, documenting the review, and keeping the final decision accountable.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200/70 bg-white/72 p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase text-slate-500">Without SentraRisk</p>
                <div className="mt-5 space-y-4">
                  {comparisonRows.map((row) => (
                    <div key={row.without} className="rounded-lg border border-slate-200/80 bg-white/82 p-4 text-sm leading-6 text-slate-600">
                      {row.without}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-cyan-200/80 bg-[#f3fbfb]/82 p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase text-cyan-700">With SentraRisk</p>
                <div className="mt-5 space-y-4">
                  {comparisonRows.map((row) => (
                    <div key={row.with} className="flex gap-3 rounded-lg border border-cyan-100 bg-white/88 p-4 text-sm leading-6 text-slate-700">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-700" aria-hidden="true" />
                      <span>{row.with}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-6 md:px-8">
        <div className="statement-band mx-auto grid max-w-7xl gap-8 rounded-2xl px-7 py-10 text-white lg:grid-cols-3 lg:px-10">
          {enterpriseProof.map(([title, text]) => (
            <div key={title} className="border-l border-[#8de0d7]/35 pl-6">
              <p className="text-sm font-semibold uppercase text-[#8de0d7]">{title}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="fluid-section px-5 py-24 md:px-8">
        <div className="fluid-inner mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">How it works</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                From client data to a useful review output.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                SentraRisk is designed around a simple review flow that accountants, bookkeepers, and SME finance teams can run without building a full compliance operation.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {howItWorks.map((item, index) => (
                <article key={item.title} className="fluid-card rounded-[1.5rem] p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="fluid-section px-5 py-24 md:px-8">
        <div className="fluid-inner mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">Platform</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                Built for accountable risk review, not another noisy dashboard.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                SentraRisk brings client-level Xero imports, uploaded payment-file review, transaction scoring, alert handling, reporting, API keys, and account controls into one operating layer for accountants, bookkeepers, and SME finance teams.
              </p>
              <div className="mt-8 grid gap-2">
                {integrationProof.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/86 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur">
                    <CheckCircle2 className="h-4 w-4 text-cyan-700" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="fluid-card group rounded-[1.5rem] p-6 transition hover:-translate-y-1 hover:border-cyan-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8">
        <div className="editorial-panel mx-auto grid max-w-7xl gap-10 rounded-2xl p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Built with control in mind</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Automation for the review work. Human judgement for the decision.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              SentraRisk was created to make payment-risk review more accessible for SMEs that do not have enterprise compliance teams. The platform helps teams spot risk indicators, but keeps the final decision with the people responsible for the business.
            </p>
            <div className="mt-8">
              <Link
                href="/accountants"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                See Accountant Workflows <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="grid gap-3">
            {trustSignals.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-white/70 bg-white/74 p-4 shadow-sm">
                <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" aria-hidden="true" />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-2xl bg-slate-950 px-6 py-10 text-white shadow-[0_28px_90px_rgba(7,19,31,0.18)] md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">About SentraRisk Systems</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal md:text-5xl">
              Human-led risk intelligence for finance professionals.
            </h2>
          </div>
          <div>
            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                SentraRisk Systems is an Irish software company building human-led risk intelligence tools for finance professionals, accountants, bookkeepers, and growing businesses.
              </p>
              <p>
                Our platform helps teams identify payment-risk indicators, duplicate-looking transactions, supplier changes, staff payment-file anomalies, and unusual activity before they become larger financial control issues.
              </p>
              <p>
                We believe automation should support professional judgement, not replace it. SentraRisk highlights risk signals, explains why they matter, and gives finance teams the evidence they need to review, decide, and act with confidence.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Explainable", "Clear reasons behind each risk signal."],
                ["Human-led", "Final decisions stay with finance professionals."],
                ["Evidence-ready", "Structured notes, review trails, and reports."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-sm font-semibold text-cyan-300">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="who" className="fluid-section px-5 py-24 md:px-8">
        <div className="fluid-inner mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">Who it&apos;s for</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                Built for teams that need risk control without enterprise drag.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                SentraRisk gives lean teams a serious review layer for supplier payments, uploaded payment files, duplicate-looking transactions, unusual patterns, and evidence-ready reporting.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {audienceSegments.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="fluid-card rounded-[1.5rem] p-6">
                    <Icon className="h-6 w-6 text-cyan-700" aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">For accountants</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              A practical way to turn client data into a control review.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              SentraRisk is designed to help practices and finance teams spot payment-risk issues, explain what was reviewed, and give clients a useful output they can act on.
            </p>
            <Link
              href="/accountants"
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              See how it supports client reviews <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {accountantOutcomes.map((item) => (
              <article key={item.title} className="fluid-card rounded-[1.5rem] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Workflow</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              From transaction data to a defensible decision.
            </h2>
          </div>
          <div className="space-y-4">
            {workflow.map((item, index) => (
              <div key={item} className="fluid-card flex gap-4 rounded-[1.5rem] p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-base leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="fluid-section px-5 py-24 md:px-8">
        <div className="fluid-inner mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cyan-700">Use cases</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              High-value workflows for finance teams that need control.
            </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Use SentraRisk as a client review desk, Xero-backed payment-risk monitor, uploaded file review layer, reporting engine, or scoring layer depending on where your workflow starts.
              </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {useCases.map((item) => (
              <div key={item.title} className="fluid-card rounded-[1.5rem] p-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-500" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                    <Link href={item.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900">
                      Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cyan-700">Solutions</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Find SentraRisk by the problem you need to solve.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {seoLandingPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="fluid-card group rounded-[1.5rem] p-6 transition hover:-translate-y-1 hover:border-cyan-300"
              >
                <h3 className="text-lg font-semibold text-slate-950">{page.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{page.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 group-hover:text-cyan-900">
                  Open page <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="api" className="px-5 py-8 md:px-8">
        <div className="statement-band mx-auto grid max-w-7xl gap-12 rounded-[2rem] px-7 py-14 text-white lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">API access</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal md:text-5xl">
              Connect risk scoring directly to operational workflows.
            </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Use Xero-supported imports, secure API keys, or batch uploads to score transactions, then review the same risk outcomes inside the dashboard.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={APP_URL}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Developer Dashboard <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#demo"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Discuss Integration
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/45 p-5 font-mono text-sm shadow-2xl backdrop-blur">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <pre className="overflow-x-auto rounded-xl bg-slate-950/80 p-4 text-slate-300">
{`POST /score-transaction
Authorization: Bearer YOUR_API_KEY

{
  "amount": 12850,
  "origin": "Customer A",
  "account": "Beneficiary B"
}

{
  "risk_score": 87,
  "risk_level": "High",
  "recommended_action": "Review"
}`}
            </pre>
          </div>
        </div>
      </section>

      <section id="pilot" className="fluid-section px-5 py-24 md:px-8">
        <div className="fluid-inner mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Pilot programme</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Start with a focused 14-day payment-risk review.
            </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
              The SentraRisk pilot gives teams a practical way to test the workflow using sample data, anonymised transaction exports, uploaded payment files, or Xero supplier bills before moving into a live monthly review process.
            </p>
            <div className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50/90 p-4 text-sm leading-6 text-slate-700 shadow-[0_12px_32px_rgba(14,124,134,0.08)]">
              <strong className="text-slate-950">Pilot offer:</strong> review a small transaction set, assess the quality of alerts, and produce an example Client Control Pack your team can evaluate.
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/pilot-programme"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                View Pilot Programme <Rocket className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#demo"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-white/90 px-6 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Send Enquiry
              </a>
            </div>
          </div>
            <div className="editorial-panel rounded-[1.75rem] p-6">
            <div className="grid gap-4">
              {pilotSteps.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-700 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-sm font-semibold text-cyan-300">Typical pilot outcome</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                A clear view of where SentraRisk fits, which controls to activate first, and whether Xero import, dashboard review, file upload, API, or hybrid deployment is the right path.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="fluid-section px-5 py-24 md:px-8">
        <div className="fluid-inner mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">Pricing</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                Pricing by risk-control need.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Start with Xero-backed supplier risk review and uploaded file review, add Client Control Packs and board reporting, then scale into API access or a custom enterprise deployment.
              </p>
            </div>
            <div className="editorial-panel grid gap-3 rounded-[1.5rem] p-5 sm:grid-cols-3">
              {[
                ["14 days", "Trial access"],
                ["No lock-in", "Monthly plans"],
                ["Custom", "Enterprise setup"],
              ].map(([value, label]) => (
                <div key={value} className="border-l-2 border-cyan-500 pl-4">
                  <p className="text-lg font-semibold text-slate-950">{value}</p>
                  <p className="mt-1 text-sm text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[1.5rem] border p-6 shadow-sm transition hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-slate-950 bg-slate-950 text-white shadow-[0_30px_90px_rgba(15,23,42,0.24)]"
                    : "border-slate-200/80 bg-white/92 text-slate-950 backdrop-blur"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-semibold text-slate-950">
                      Recommended
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-end gap-1">
                  <p className="text-4xl font-semibold">{plan.price}</p>
                  <p className={`pb-1 text-sm ${plan.highlighted ? "text-slate-300" : "text-slate-500"}`}>
                    {plan.cadence}
                  </p>
                </div>
                <p className={`mt-4 min-h-14 text-sm leading-6 ${plan.highlighted ? "text-slate-300" : "text-slate-600"}`}>
                  {plan.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlighted ? "text-cyan-300" : "text-cyan-700"}`} aria-hidden="true" />
                      <span className={plan.highlighted ? "text-slate-200" : "text-slate-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  className={`mt-7 inline-flex h-12 w-full items-center justify-center rounded-xl px-6 text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-white text-slate-950 hover:bg-slate-100"
                      : "bg-slate-950 text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Prices shown exclude any applicable taxes. New trial workspaces include 14 days of access for feedback and evaluation before moving to a monthly plan.
          </p>
        </div>
      </section>

      <section id="security" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [Shield, "Business account structure", "Admin and user dashboards designed around organisational access."],
              [Cloud, "Xero and file-ready workflow", "Import supplier bills from Xero and review uploaded files alongside API-scored transactions."],
              [LockKeyhole, "Data control", "Designed for controlled environments, separated client workspaces, and accountable review processes."],
            ].map(([Icon, title, text]) => {
              const TypedIcon = Icon as typeof Shield;
              return (
                <div key={title as string} className="fluid-card rounded-[1.5rem] p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50">
                    <TypedIcon className="h-6 w-6 text-cyan-700" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{title as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="newsletter" className="fluid-section px-5 py-24 md:px-8">
        <div className="fluid-inner mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Monthly newsletter</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Useful fraud-risk notes for finance teams.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              A short monthly email covering practical fraud-risk controls, supplier payment warning signs, uploaded payment-file review, Xero-supported workflows, and SentraRisk product updates.
            </p>
            <div className="mt-8 grid gap-3 text-sm leading-6 text-slate-600 sm:grid-cols-2">
              {[
                "Payment-risk and duplicate-payment checks",
                "Supplier and beneficiary warning signs",
                "Accountant-friendly client control ideas",
                "Product updates without noisy sales emails",
              ].map((item) => (
                <div key={item} className="flex gap-2 rounded-2xl border border-slate-200/80 bg-white/80 p-3 font-medium shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <HubSpotNewsletterForm />
        </div>
      </section>

      <section id="faq" className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">FAQ</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Questions teams ask before starting.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              A short guide to setup, pilot scope, integrations, and review outputs.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.question} className="group rounded-[1.5rem] border border-slate-200/80 bg-white/88 p-5 shadow-sm backdrop-blur">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-950">
                  {item.question}
                  <span className="text-xl leading-none text-cyan-700 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="fluid-section px-5 py-24 md:px-8">
        <div className="fluid-inner mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Contact</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Bring real-time risk review into your business.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Speak with SentraRisk Systems about Xero-supported imports, uploaded file review, payment-risk controls, Client Control Packs, API scoring, and implementation for your organisation.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="fluid-card rounded-[1.5rem] p-5">
                <CheckLine text="Receive a focused product walkthrough" />
                <CheckLine text="Review Xero imports, supplier bill scoring, and uploaded payment files" />
                <CheckLine text="Discuss your transaction monitoring workflow" />
              </div>
              <div className="fluid-card rounded-[1.5rem] p-5">
                <p className="text-sm font-semibold text-slate-950">Prefer email?</p>
                <a className="mt-2 block text-sm font-medium text-cyan-700" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  We usually respond with the next step and any setup questions needed for your organisation.
                </p>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-950 transition hover:border-cyan-700 hover:text-cyan-800"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-[#0a66c2] text-[11px] font-bold leading-none text-white">
                    in
                  </span>
                  Follow on LinkedIn
                </a>
              </div>
            </div>
          </div>
          <DemoForm />
        </div>
      </section>

      <footer className="border-t border-slate-200/80 bg-white/70 px-5 py-8 backdrop-blur md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            <p>© 2026 SentraRisk Systems. All rights reserved.</p>
            <p className="mt-1">Fraud detection, payment-risk review, and client control reporting.</p>
          </div>
          <div className="flex flex-wrap gap-4 font-medium">
            <Link href="/xero-fraud-detection" className="hover:text-slate-950">Xero Fraud Detection</Link>
            <Link href="/supplier-fraud-detection" className="hover:text-slate-950">Supplier Fraud Detection</Link>
            <Link href="/accountants" className="hover:text-slate-950">Accountants</Link>
            <Link href="/pilot-programme" className="hover:text-slate-950">Pilot Programme</Link>
            <Link href="/privacy-policy" className="hover:text-slate-950">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-slate-950">Terms</Link>
            <Link href="/data-processing" className="hover:text-slate-950">Data Processing</Link>
            <Link href="/refund-policy" className="hover:text-slate-950">Refunds</Link>
            <Link href="/security-statement" className="hover:text-slate-950">Security</Link>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-950"
            >
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-[#0a66c2] text-[9px] font-bold leading-none text-white">
                in
              </span>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
